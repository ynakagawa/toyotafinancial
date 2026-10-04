import { redirect } from 'next/navigation';
import AccountNav from '@/components/AccountNav';
import { logout } from '@/lib/actions';
import { account } from '@/lib/mock-data';
import { getSession } from '@/lib/session';

export default async function AccountLayout({ children }: LayoutProps<'/'>) {
  const session = await getSession();
  if (!session) redirect('/login');
  return (
    <div className="container">
      <div className="account-bar">
        <div>
          <p className="muted">Welcome back, {session.username}</p>
          <h1>{account.vehicle.year} {account.vehicle.make} {account.vehicle.model}</h1>
          <p className="muted">{account.type} · Account {account.number}</p>
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <AccountNav />
          <form action={logout}><button className="button link" type="submit">Log out</button></form>
        </div>
      </div>
      {children}
    </div>
  );
}
