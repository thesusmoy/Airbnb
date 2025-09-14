import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { imageHelper } from '@/assets/images/images';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 220,
            damping: 22,
            staggerChildren: 0.1,
        },
    },
    exit: { opacity: 0, y: -100 },
};

const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
};

export default function MiddlePart() {
    const t = useTranslations('Navbar');
    const pathname = usePathname();
    const getLinkClass = (path: string) => {
        const isActive = pathname.includes(path);
        return `inline-flex items-center gap-x-1 text-icon-wrapper ${isActive ? 'border-b-2 border-primary' : ''}`;
    };

    return (
        <motion.div
            key="middleNav"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex gap-x-6 lg:pl-7 xl:pl-20"
        >
            <motion.div variants={itemVariants}>
                <Link href={'/'} className={getLinkClass('/homes')}>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Image src={imageHelper.home} height={40} width={40} alt="home" />
                    </motion.div>
                    <span>{t('home')}</span>
                </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Link href={'/'} className={getLinkClass('/experiences')}>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Image src={imageHelper.experience} height={40} width={40} alt="experience" />
                    </motion.div>
                    <span>{t('experience')}</span>
                </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Link href={'/'} className={getLinkClass('/services')}>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Image src={imageHelper.service} height={40} width={40} alt="service" />
                    </motion.div>
                    <span>{t('service')}</span>
                </Link>
            </motion.div>
        </motion.div>
    );
}
