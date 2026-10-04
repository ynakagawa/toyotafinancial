import { redirect } from 'next/navigation';
import LoginForm from '@/components/LoginForm';
import { getSession } from '@/lib/session';

export const metadata = { title: 'Log In | Toyota Financial Services' };

export default async function LoginPage({ searchParams }: PageProps<'/login'>) {
  if (await getSession()) redirect('/dashboard');
  const { next } = await searchParams;
  return (
    <div className="container narrow">
      <h1>Log In</h1>
      <p className="subtitle">Manage your Toyota Financial Services account.</p>
      <LoginForm next={typeof next === 'string' ? next : undefined} />
      <p className="demo-note">Demo site: any username and password will log you in.</p>
    </div>
  );
}
