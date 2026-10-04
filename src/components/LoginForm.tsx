'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { login } from '@/lib/actions';

export default function LoginForm({ next }: { next?: string }) {
  const [state, action, pending] = useActionState(login, undefined);
  return (
    <form action={action} className="card">
      {state?.error && <p className="error" role="alert">{state.error}</p>}
      <input type="hidden" name="next" value={next || ''} />
      <div className="field">
        <label htmlFor="username">Username</label>
        <input id="username" name="username" autoComplete="username" required />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required />
      </div>
      <label className="checkbox">
        <input type="checkbox" name="remember" /> Remember me
      </label>
      <button className="button block" type="submit" disabled={pending}>
        {pending ? 'Logging in…' : 'Log In'}
      </button>
      <div className="links">
        <Link href="/login">Forgot username?</Link>
        <Link href="/login">Forgot password?</Link>
      </div>
      <hr className="divider" />
      <p className="muted">Don&apos;t have an account?</p>
      <Link className="button secondary block" href="/register">Register</Link>
    </form>
  );
}
