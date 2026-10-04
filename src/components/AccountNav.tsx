'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { href: '/dashboard', label: 'Overview' },
  { href: '/payments', label: 'Payments' },
];

export default function AccountNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Account">
      {tabs.map((t) => (
        <Link key={t.href} href={t.href} className="tab" aria-current={pathname === t.href ? 'page' : undefined}>
          {t.label}
        </Link>
      ))}
    </nav>
  );
}
