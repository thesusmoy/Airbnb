'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../common/logo';
import SecondRow from './second-row';
import ScrolledSecondRow from './scrolled-second-row';
import MiddlePart from './middle-part';
import RightSide from './right-side';

export default function DesktopNavbar() {
    const headerRef = useRef<HTMLHeadElement>(null);
    const SCROLL_THRESHOLD = 80;
    const [isScrolled, setIsScrolled] = useState(false);
    const [forceExpanded, setForceExpanded] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setIsScrolled(y > SCROLL_THRESHOLD);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const movedUp = isScrolled && !forceExpanded;

    useEffect(() => {
        if (!forceExpanded) return;

        function handleClickOutside(e: MouseEvent) {
            if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
                setForceExpanded(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [forceExpanded]);

    return (
        <header className="sticky top-0 z-50 bg-[#fbfbfb] px-5 lg:px-12" ref={headerRef}>
            {/* Part 1 */}
            <div className="flex items-center justify-between h-24">
                <Logo />

                {/* Center container */}
                <div className="relative flex-1 flex justify-center items-center">
                    <AnimatePresence initial={false} mode="wait">
                        {!movedUp && (
                            <motion.div
                                key="middleNav"
                                initial={{ opacity: 0, y: -40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 220,
                                    damping: 22,
                                }}
                                className="absolute"
                            >
                                <MiddlePart />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Scrolled version */}
                    <AnimatePresence initial={false}>
                        {movedUp && (
                            <motion.div
                                layoutId="SECOND_ROW"
                                key="second-row-top"
                                initial={{ opacity: 0, scale: 0.7 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.7 }}
                                transition={{
                                    duration: 0.22,
                                    ease: 'easeInOut',
                                }}
                                className="absolute w-full flex justify-center"
                                onClick={() => setForceExpanded(true)}
                            >
                                <ScrolledSecondRow />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <RightSide />
            </div>

            {/* Part 2 (bottom row) */}
            <motion.div layout className="overflow-hidden">
                <AnimatePresence initial={false}>
                    {!movedUp && (
                        <motion.div
                            layoutId="SECOND_ROW"
                            key="second-row-bottom"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                            }}
                            onClick={() => setForceExpanded(true)}
                            className="flex items-center justify-center pb-5"
                        >
                            <SecondRow />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </header>
    );
}
