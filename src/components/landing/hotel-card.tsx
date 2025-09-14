import React from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { THotel } from '@/types/hotel';
import { useTranslations } from 'next-intl';
import StarIcon from '../icons/star-icon';

export default function HotelCard({ hotel }: { hotel: THotel }) {
    const t = useTranslations('Hotels');
    return (
        <div className="ring-0 shadow-none border-0 space-y-0">
            <div className="relative rounded-2xl overflow-hidden ">
                <Link href={`/`}>
                    <Image
                        src={hotel.image}
                        height={250}
                        width={250}
                        alt="hotel-image"
                        className="opacity-80 rounded-2xl h-[215px] w-[250px]"
                        loading="lazy"
                    />
                </Link>
                <div className="absolute top-3 left-0 right-0">
                    <div className="flex items-center justify-between w-full px-3">
                        <span className="bg-[#F0F0EE] text-[#393939] px-3 py-1 text-xs rounded-full font-medium">
                            {t('guests-favorite')}
                        </span>
                        <Heart className="text-[#F0F0EE] hover:scale-105 duration-200" fill="#393939" />
                    </div>
                </div>
            </div>

            <div className="mt-1">
                <p className="leading-none text-sm font-medium">{t(hotel.name)}</p>
                <small className="text-gray-500 flex items-center">
                    <span>${hotel.price} for 2 nights · </span>
                    <span className="flex items-center ml-1">
                        <StarIcon />
                        <span className="ml-1">{hotel.rating}</span>
                    </span>
                </small>
            </div>
        </div>
    );
}
