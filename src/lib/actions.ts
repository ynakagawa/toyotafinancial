'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { SESSION_COOKIE, encodeSession } from './session';

export type FormState = { error?: string } | undefined;

// Demo only: any non-empty username/password is accepted.
export async function login(_state: FormState, formData: FormData): Promise<FormState> {
  const username = String(formData.get('username') || '').trim();
  const password = String(formData.get('password') || '');
  if (!username || !password) return { error: 'Please enter your username and password.' };

  (await cookies()).set(SESSION_COOKIE, encodeSession({ username }), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: formData.get('remember') ? 60 * 60 * 24 * 30 : undefined,
  });
  const next = String(formData.get('next') || '');
  redirect(next.startsWith('/') && !next.startsWith('//') ? next : '/dashboard');
}

export async function logout() {
  (await cookies()).delete(SESSION_COOKIE);
  redirect('/login');
}

export async function makePayment(_state: FormState, formData: FormData): Promise<FormState> {
  const amount = Number(formData.get('amount'));
  if (!Number.isFinite(amount) || amount <= 0) return { error: 'Enter a valid payment amount.' };
  const confirmation = `TFS${Date.now().toString().slice(-8)}`;
  redirect(`/payments?confirmed=${amount.toFixed(2)}&confirmation=${confirmation}`);
}
