import React, { ReactNode } from 'react';
import Head from 'next/head';

type BasicLayoutProps = {
  children?: ReactNode;
  title?: string;
};

export function BasicLayout({
  children,
  title = 'This is the default title'
}: BasicLayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {children}
      <style jsx global>{`
        body {
          background: #153a2b;
        }
      `}</style>
    </div>
  );
}
