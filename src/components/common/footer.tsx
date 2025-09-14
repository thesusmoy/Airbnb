import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { getTranslations } from 'next-intl/server';

type FooterLink = {
    map(arg0: (section: FooterLink, index: number) => React.JSX.Element): React.ReactNode;
    title: string;
    links: string[];
};

export default async function Footer() {
    const t = await getTranslations();
    const footerLinks = t.raw('FooterLinks') as FooterLink;
    return (
        <footer className="px-5 lg:px-12 text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10">
                {footerLinks.map((section, index) => (
                    <div key={index} className="space-y-4">
                        <h6 className="font-semibold">{section.title}</h6>
                        <ul className="space-y-2">
                            {section.links.map((link: string, i: number) => (
                                <li key={i}>
                                    <Link href="#" className="hover:underline">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="hidden xl:flex items-center justify-between py-3 ">
                <div className="flex items-center gap-x-6">
                    <span>&copy; 2025 Airbnb, Inc</span>
                    <ul className="list-disc flex gap-x-8 items-center ">
                        <li>
                            <Link href="/terms">Terms</Link>
                        </li>
                        <li>
                            <Link href="/sitemap">Sitemap</Link>
                        </li>
                        <li>
                            <Link href="/privacy">Privacy</Link>
                        </li>
                        <li className="text-gray-600 flex items-center">
                            <Link href="/privacy-choices" className="flex items-center">
                                Your Privacy Choices{' '}
                                <svg width="26" height="12" fill="none" className="ml-2">
                                    <rect x="0.5" y="0.5" width="25" height="11" rx="5.5" fill="#fff"></rect>
                                    <path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path>
                                    <path
                                        d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
                                        stroke="#06F"
                                        strokeLinecap="round"
                                    ></path>
                                    <path
                                        d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
                                        stroke="#fff"
                                        strokeLinecap="round"
                                    ></path>
                                    <rect x="0.5" y="0.5" width="25" height="11" rx="5.5" stroke="#06F"></rect>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center ">
                    <Button
                        variant={'link'}
                        className="hover:no-underline text-secondary-foreground cursor-pointer flex items-center p-0"
                    >
                        <Globe className="mt-0.5" />
                        <span>English (US)</span>
                    </Button>
                    <Button
                        variant={'link'}
                        className="hover:no-underline text-secondary-foreground cursor-pointer flex items-center "
                    >
                        <span>$</span>
                        <span>USD</span>
                    </Button>
                    <div className="flex gap-x-3">
                        <Button className="bg-transparent hover:bg-accent text-gray-800 size-8 rounded-full p-1">
                            <Facebook />
                        </Button>
                        <Button className="bg-transparent hover:bg-accent text-gray-800 size-8 rounded-full p-1">
                            <Twitter />
                        </Button>
                        <Button className="bg-transparent hover:bg-accent text-gray-800 size-8 rounded-full p-1">
                            <Instagram />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
