import { cookies } from 'next/headers';

export const SESSION_COOKIE = 'dss_session';

export type Session = { username: string };

export async function getSession(): Promise<Session | null> {
  const value = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!value) return null;
  try {
    return JSON.parse(Buffer.from(value, 'base64url').toString()) as Session;
  } catch {
    return null;
  }
}

export function encodeSession(session: Session): string {
  return Buffer.from(JSON.stringify(session)).toString('base64url');
}
