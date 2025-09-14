import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import React from 'react';
import { routing } from '@/i18n/routing';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { Poppins, Inter } from 'next/font/google';
import { Metadata } from 'next';

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

const poppins = Poppins({
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
});
const inter = Inter({
    variable: '--font-inter',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
});
export const metadata: Metadata = {
    title: 'Airbnb Clone',
    description: 'Airbnb is the best website you need to follow for hotel, rooms for rent.',
    keywords: 'airbnb, vacation, rentals, cabins, beach houses, hotels, rooms for rent',
    openGraph: {
        title: 'Airbnb | Vacations rentals, cabins, beach houses & more',
        description: 'Airbnb is the best website you need to follow for hotel, rooms for rent.',
        images: ['/og-image.png'],
    },
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = await getMessages(locale);

    return (
        <html lang={locale}>
            <body className={`${poppins.variable} ${inter.variable} antialiased`}>
                <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
                    <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
                </GoogleOAuthProvider>
            </body>
        </html>
    );
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}
