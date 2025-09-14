import Footer from '@/components/common/footer';
import Hotels from '@/components/landing/hotels';
import Inspiration from '@/components/landing/inspiration';
import Navbar from '@/components/navbar/navbar';
import { useTranslations } from 'next-intl';
import React from 'react';
import hotelsData from '@/data/hotels.json';

export default function Home() {
    const t = useTranslations('HotelTitles');
    return (
        <React.Fragment>
            <Navbar />
            <Hotels title={t('popular-homes-in-kuala-lumpur')} hotels={hotelsData} />
            <Hotels title={t('available-next-month-is-bangkok')} hotels={hotelsData} />
            <Hotels title={t('stay-in-london')} hotels={hotelsData} />
            <Hotels title={t('homes-in-tokyo')} hotels={hotelsData} />
            <Hotels title={t('available-next-month-in-toronto')} hotels={hotelsData} />
            <Hotels title={t('homes-in-seoul')} hotels={hotelsData} />
            <Hotels title={t('popular-homes-in-busan')} hotels={hotelsData} />
            <Inspiration />
            <Footer />
        </React.Fragment>
    );
}
