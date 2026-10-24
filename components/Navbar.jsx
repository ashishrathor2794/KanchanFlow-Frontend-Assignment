'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [{ href: '/features', label: 'Features' }, { href: '/pricing', label: 'Pricing' }, { href: '/#industries', label: 'Industries' }, { href: '/#faq', label: 'Resources' }];
  return <header className="site-header"><nav className="nav-wrap container" aria-label="Main navigation">
    <Link href="/" className="brand" aria-label="KanchanFlow home"><span className="brand-mark">K<span>↗</span></span><span>Kanchan<span className="brand-light">Flow</span></span></Link>
    <div className={`nav-links ${open ? 'nav-open' : ''}`}>{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link className="mobile-cta" href="/pricing" onClick={() => setOpen(false)}>Book a walkthrough <ArrowUpRight size={16}/></Link></div>
    <Link className="button button-dark nav-cta" href="/pricing">Book a walkthrough <ArrowUpRight size={16}/></Link>
    <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
  </nav></header>;
}
