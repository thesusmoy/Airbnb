'use client';
import React, { useState } from 'react';
import Container from '../common/container';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Inspiration() {
    const [isActive, setIsActive] = useState('travel');
    const t = useTranslations('Inspiration');
    return (
        <Container className="py-10 ">
            <h4 className="font-semibold text-xl">{t('title')}</h4>

            <div className="mt-4">
                <div className="flex items-center justify-between sm:justify-start gap-x-6 border-b">
                    <motion.div
                        whileTap={{
                            scale: 0.95,
                            transition: { duration: 0.1, ease: 'easeIn' },
                        }}
                        onClick={() => setIsActive('travel')}
                        className={cn(
                            ' pb-4 border-b cursor-pointer font-medium text-sm sm:text-base',
                            isActive === 'travel'
                                ? 'font-semibold border-b-2 border-gray-600'
                                : ' text-gray-500'
                        )}
                    >
                        {t('travel-tips-tab')}
                    </motion.div>
                    <motion.div
                        whileTap={{
                            scale: 0.95,
                            transition: { duration: 0.1, ease: 'easeIn' },
                        }}
                        onClick={() => setIsActive('apartments')}
                        className={cn(
                            'pb-4 border-b cursor-pointer font-medium text-sm sm:text-base',
                            isActive === 'apartments'
                                ? 'font-semibold border-b-2 border-gray-600'
                                : ' text-gray-500'
                        )}
                    >
                        {t('airbnb-friendly-tab')}
                    </motion.div>
                </div>

                <div className="py-5">
                    {isActive === 'travel' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
                            <Item
                                title={t('family-travel-hub-title')}
                                subTitle={t('family-travel-hub-subtitle')}
                            />
                            <Item
                                title={t('family-budget-travel-title')}
                                subTitle={t('family-budget-travel-subtitle')}
                            />
                            <Item
                                title={t('vacation-ideas-title')}
                                subTitle={t('vacation-ideas-subtitle')}
                            />
                            <Item
                                title={t('travel-europe-title')}
                                subTitle={t('travel-europe-subtitle')}
                            />
                            <Item
                                title={t('outdoor-adventure-title')}
                                subTitle={t('outdoor-adventure-subtitle')}
                            />
                            <Item
                                title={t('bucket-list-parks-title')}
                                subTitle={t('bucket-list-parks-subtitle')}
                            />
                            <Item
                                title={t('kid-friendly-parks-title')}
                                subTitle={t('kid-friendly-parks-subtitle')}
                            />
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                            <Item title={t('albuquerque-title')} subTitle={t('albuquerque-subtitle')} />
                            <Item title={t('atlanta-metro-title')} subTitle={t('atlanta-metro-subtitle')} />
                            <Item title={t('augusta-title')} subTitle={t('augusta-subtitle')} />
                            <Item title={t('austin-metro-title')} subTitle={t('austin-metro-subtitle')} />
                            <Item title={t('baton-rouge-title')} subTitle={t('baton-rouge-subtitle')} />
                            <Item title={t('bentonville-title')} subTitle={t('bentonville-subtitle')} />
                            <Item title={t('birmingham-title')} subTitle={t('birmingham-subtitle')} />
                            <Item title={t('augusta-title')} subTitle={t('augusta-subtitle')} />
                            <Item title={t('austin-metro-title')} subTitle={t('austin-metro-subtitle')} />
                            <Item title={t('albuquerque-title')} subTitle={t('albuquerque-subtitle')} />
                            <Item title={t('atlanta-metro-title')} subTitle={t('atlanta-metro-subtitle')} />
                            <Item title={t('augusta-title')} subTitle={t('augusta-subtitle')} />
                            <Item title={t('austin-metro-title')} subTitle={t('austin-metro-subtitle')} />
                            <Item title={t('baton-rouge-title')} subTitle={t('baton-rouge-subtitle')} />
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
}

type ItemProps = {
    title: string;
    subTitle: string;
};
function Item({ title, subTitle }: ItemProps) {
    return (
        <div className="group hover:cursor-pointer">
            <h6 className="font-semibold">{title} </h6>
            <p className="text-gray-500 group-hover:text-gray-800 duration-150">
                {subTitle}
            </p>
        </div>
    );
}