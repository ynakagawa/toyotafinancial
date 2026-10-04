export const account = {
  number: '••••••4821',
  type: 'Retail Finance',
  vehicle: { year: 2023, make: 'Toyota', model: 'RAV4 Hybrid XLE', vin: '••••••••••••12345', color: 'Lunar Rock' },
  nextPayment: { amount: 512.37, due: '2026-08-15' },
  balance: 18432.9,
  payoff: 18611.42,
  remainingPayments: 37,
  apr: 4.9,
  autopay: false,
  paperless: true,
};

export const payments = [
  { date: '2026-07-15', amount: 512.37, method: 'Checking ••7731', status: 'Posted' },
  { date: '2026-06-15', amount: 512.37, method: 'Checking ••7731', status: 'Posted' },
  { date: '2026-05-15', amount: 600.0, method: 'Checking ••7731', status: 'Posted' },
  { date: '2026-04-15', amount: 512.37, method: 'Debit ••0042', status: 'Posted' },
  { date: '2026-03-15', amount: 512.37, method: 'Checking ••7731', status: 'Posted' },
];

export const currency = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
export const date = (iso: string) => new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
