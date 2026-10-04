import Link from 'next/link';
import { account, currency, date, payments } from '@/lib/mock-data';

export const metadata = { title: 'Account Overview | Toyota Financial Services' };

export default function DashboardPage() {
  const last = payments[0];
  return (
    <>
      <div className="grid">
        <section className="card">
          <p className="stat-label">Next payment due {date(account.nextPayment.due)}</p>
          <p className="stat-value accent">{currency(account.nextPayment.amount)}</p>
          <div className="actions">
            <Link className="button" href="/payments">Make a Payment</Link>
            <Link className="button secondary" href="/payments">Set Up AutoPay</Link>
          </div>
        </section>
        <section className="card">
          <p className="stat-label">Remaining balance</p>
          <p className="stat-value">{currency(account.balance)}</p>
          <p className="muted">{account.remainingPayments} payments remaining · {account.apr}% APR</p>
        </section>
      </div>
      <div className="grid">
        <section className="card">
          <h2>Account details</h2>
          <dl className="details">
            <dt>Payoff amount</dt><dd>{currency(account.payoff)}</dd>
            <dt>Last payment</dt><dd>{currency(last.amount)} on {date(last.date)}</dd>
            <dt>AutoPay</dt><dd>{account.autopay ? 'On' : 'Off'}</dd>
            <dt>Paperless statements</dt><dd>{account.paperless ? 'On' : 'Off'}</dd>
          </dl>
        </section>
        <section className="card">
          <h2>Vehicle</h2>
          <dl className="details">
            <dt>Model</dt><dd>{account.vehicle.year} {account.vehicle.model}</dd>
            <dt>Color</dt><dd>{account.vehicle.color}</dd>
            <dt>VIN</dt><dd>{account.vehicle.vin}</dd>
          </dl>
        </section>
      </div>
    </>
  );
}
