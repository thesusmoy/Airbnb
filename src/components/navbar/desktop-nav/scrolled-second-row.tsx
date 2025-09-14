import { imageHelper } from '@/assets/images/images';
import Image from 'next/image';
import React from 'react';
import { Button } from '../../ui/button';
import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ScrolledSecondRow() {
    const t = useTranslations('SecondScrolledRow');
    return (
        <div className=" shadow-md rounded-full border-1 px-4 py-2 flex items-center justify-between bg-white text-sm font-semibold w-sm cursor-pointer">
            <div className="flex items-center gap-x-2">
                <Image src={imageHelper.home} height={30} width={30} alt="home-icon" />
                <span className="">{t('anywhere')}</span>
            </div>
            <span className="px-4 border-x-2"> {t('anytime')}</span>
            <div className="flex items-center gap-x-2">
                <span>{t('add-guests')}</span>
                <Button className="size-7 rounded-full">
                    <Search />
                </Button>
            </div>
        </div>
    );
}
