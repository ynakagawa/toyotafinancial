import PaymentForm from '@/components/PaymentForm';
import { account, currency, date, payments } from '@/lib/mock-data';

export const metadata = { title: 'Payments | Toyota Financial Services' };

export default async function PaymentsPage({ searchParams }: PageProps<'/payments'>) {
  const { confirmed, confirmation } = await searchParams;
  return (
    <>
      {typeof confirmed === 'string' && (
        <p className="success" role="status">
          Thank you! Your payment of {currency(Number(confirmed))} has been scheduled. Confirmation #{confirmation}
        </p>
      )}
      <div className="grid">
        <section className="card">
          <h2>Make a payment</h2>
          <p className="muted">Amount due {date(account.nextPayment.due)}: {currency(account.nextPayment.amount)}</p>
          <PaymentForm amountDue={account.nextPayment.amount} />
        </section>
        <section className="card">
          <h2>Payment history</h2>
          <table>
            <thead><tr><th>Date</th><th>Method</th><th className="num">Amount</th><th>Status</th></tr></thead>
            <tbody>
              {payments.map((p) => (
                <tr key={p.date}>
                  <td>{date(p.date)}</td><td>{p.method}</td><td className="num">{currency(p.amount)}</td>
                  <td><span className="badge">{p.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
