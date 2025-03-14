import { Button } from '@/components/ui/button';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'الصفحة الرئيسية',
  description: 'البوابة الرسمية',  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm" dir="rtl">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-[400px]">
                <img
                  src="https://services.paci.gov.kw/assets/images/pacilogo.png"
                  alt="Public Authority for Civil Information"
                  width={300}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </header>
        {children}
        <footer className="mt-auto bg-blue-900 text-white p-4">
          <div className="container mx-auto">
            <div className="h-8"></div>
          </div>
        </footer>
        <div className="fixed bottom-6 right-6">
          <Button className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
          </Button>
        </div>
      </body>
    </html>
  );
}
