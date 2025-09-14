import { Search, X } from 'lucide-react';
import React, { useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { imageHelper } from '@/assets/images/images';
import AnimatedNavLink from '../../ui/animated-navlink';
import { Button } from '../../ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar } from '../../ui/calendar';

export default function MobileNavbarModal() {
    const [open, setOpen] = useState(true);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div
                    className="shadow-xl p-4 bg-white rounded-full flex items-center gap-x-3 justify-center"
                    onClick={() => setOpen(true)}
                >
                    <Search size={16} />
                    <span className="font-medium">Start your search</span>
                </div>
            </DialogTrigger>
            <DialogContent className="min-w-full h-screen rounded-none [&>button[data-slot=dialog-close]]:hidden px-4 bg-background">
                <DialogHeader className="sr-only">
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account and remove your data
                        from our servers.
                    </DialogDescription>
                </DialogHeader>

                <div className="h-auto overflow-y-auto relative">
                    <div className="sticky top-0 flex items-center justify-center gap-x-12 py-4 bg-background z-50 ">
                        <div className="absolute top-5 right-1 ">
                            <Button
                                className="size-10 rounded-full shadow-2xl bg-white"
                                variant={'outline'}
                                onClick={() => setOpen(false)}
                            >
                                <X />
                            </Button>
                        </div>
                        <AnimatedNavLink path="/" img={imageHelper.home} label="Home" />
                        <AnimatedNavLink path="/experience" img={imageHelper.experience} label="Experience" />
                        <AnimatedNavLink path="/service" img={imageHelper.service} label="Service" />
                    </div>
                    <div className=" w-full rounded-2xl space-y-5">
                        <Accordion
                            type="single"
                            collapsible
                            defaultValue="item-1"
                            className="p-4 bg-white rounded-2xl shadow-md"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-2xl font-semibold ">Where?</AccordionTrigger>
                                <AccordionContent className="p-1">
                                    <div className="flex items-center gap-x-2 text-gray-600 ring ring-gray-400 px-2 rounded-md">
                                        <Search />
                                        <input
                                            type="text"
                                            className="w-full outline-0 border-none py-4  rounded-md"
                                            placeholder="Search here..."
                                        />
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" collapsible className="p-4 bg-white rounded-2xl shadow-md">
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-2xl font-semibold ">When</AccordionTrigger>
                                <AccordionContent>
                                    <Calendar className="min-w-full rounded-md bg-white" />
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" collapsible className="p-4 bg-white rounded-2xl shadow-md">
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-2xl font-semibold ">Who</AccordionTrigger>
                                <AccordionContent className=""></AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
