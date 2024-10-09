import type { Metadata } from 'next';
import './globals.css';
import { FilterProvider } from './context/FilterContext';
import { LanguageProvider } from './context/LanguageContext';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='h-screen w-screen overflow-auto relative m-0'>
        <LanguageProvider>
          <FilterProvider> {children} </FilterProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
