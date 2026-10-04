'use client';

import { useActionState } from 'react';
import { makePayment } from '@/lib/actions';

export default function PaymentForm({ amountDue }: { amountDue: number }) {
  const [state, action, pending] = useActionState(makePayment, undefined);
  return (
    <form action={action}>
      {state?.error && <p className="error" role="alert">{state.error}</p>}
      <div className="field">
        <label htmlFor="amount">Payment amount</label>
        <input id="amount" name="amount" type="number" step="0.01" min="1" defaultValue={amountDue.toFixed(2)} required />
      </div>
      <div className="field">
        <label htmlFor="method">Pay from</label>
        <select id="method" name="method" defaultValue="checking">
          <option value="checking">Checking ••7731</option>
          <option value="debit">Debit card ••0042</option>
        </select>
      </div>
      <button className="button block" type="submit" disabled={pending}>
        {pending ? 'Submitting…' : 'Submit Payment'}
      </button>
    </form>
  );
}
