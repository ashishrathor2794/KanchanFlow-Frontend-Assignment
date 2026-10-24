import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata = {
  title: { default: 'KanchanFlow — From quote to cash, without the chaos', template: '%s | KanchanFlow' },
  description: 'A manufacturing CRM that connects quotes, work orders, sales pipelines and shop-floor teams in one clear workflow.',
  openGraph: { title: 'KanchanFlow — Manufacturing, moving forward', description: 'Keep every quote, order and customer conversation moving.', type: 'website' }
};

export default function RootLayout({ children }) {
  return <html lang="en" className={`${geist.variable} ${geistMono.variable}`}><body><Navbar />{children}<Footer /></body></html>;
}
