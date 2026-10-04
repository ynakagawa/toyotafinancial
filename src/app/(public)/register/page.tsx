import Link from 'next/link';

export const metadata = { title: 'Register | Toyota Financial Services' };

export default function RegisterPage() {
  return (
    <div className="container narrow">
      <h1>Register</h1>
      <p className="subtitle">Create an online account to manage your vehicle financing.</p>
      <form action="/login" className="card">
        <div className="field">
          <label htmlFor="account">Account number</label>
          <input id="account" name="account" inputMode="numeric" required />
        </div>
        <div className="field">
          <label htmlFor="ssn">Last 4 of SSN</label>
          <input id="ssn" name="ssn" inputMode="numeric" maxLength={4} required />
        </div>
        <div className="field">
          <label htmlFor="zip">ZIP code</label>
          <input id="zip" name="zip" inputMode="numeric" maxLength={5} required />
        </div>
        <button className="button block" type="submit">Continue</button>
        <div className="links"><Link href="/login">Already registered? Log in</Link></div>
      </form>
    </div>
  );
}
