'use client';

import dynamic from 'next/dynamic';

const KreadoaiHeader = dynamic(
  () => import('./kreado/header').then(mod => mod.KreadoaiHeader),
  { ssr: false }
);

const KreadoaiFooter = dynamic(
  () => import('./kreado/footer').then(mod => mod.KreadoaiFooter),
  { ssr: false }
);

export function ClientWrapper({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <KreadoaiHeader theme="light" />
      {children}
      <KreadoaiFooter />
    </div>
  );
}
