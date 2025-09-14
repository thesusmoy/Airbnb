import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '../../ui/calendar';
import { CounterSection } from './counter-section';
import { Separator } from '../../ui/separator';
import { Button } from '../../ui/button';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useQuery } from '@/store/store';
import { getToday } from '@/lib/date-helper';
import { useTranslations } from 'next-intl';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';

type PopoverKey = 'where' | 'checkIn' | 'checkOut' | 'guests' | null;

export default function SecondRow() {
    const t = useTranslations('SecondRow');
    const router = useRouter();
    const {
        location,
        checkIn,
        checkOut,
        updateCheckIn,
        updateCheckOut,
        updateLocation,
        adults,
        pets,
        infants,
        children,
        incrementAdults,
        incrementChildren,
        incrementInfants,
        incrementPets,
        decrementAdults,
        decrementChildren,
        decrementInfants,
        decrementPets,
    } = useQuery((state) => state);

    const [openPopover, setOpenPopover] = useState<PopoverKey>(null);

    const handleOpenChange = (key: PopoverKey, isOpen: boolean) => {
        setOpenPopover(isOpen ? key : null);
    };

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (location) {
            params.set('location', location);
        }
        if (checkIn) {
            params.set('from', format(checkIn, 'yyyy-MM-dd'));
        }
        if (checkOut) {
            params.set('to', format(checkOut, 'yyyy-MM-dd'));
        }
        if (adults > 0) {
            params.set('adults', adults.toString());
        }
        if (children > 0) {
            params.set('children', children.toString());
        }
        if (infants > 0) {
            params.set('infants', infants.toString());
        }
        if (pets > 0) {
            params.set('pets', pets.toString());
        }

        router.push(`/search?${params.toString()}`);
    };
    return (
        <div
            className={cn(
                'h-16 rounded-full shadow-sm relative overflow-hidden',
                openPopover ? 'bg-accent' : 'bg-white'
            )}
        >
            <div className="flex items-center justify-between text-sm font-medium h-full relative">
                <Popover open={openPopover === 'where'} onOpenChange={(isOpen) => handleOpenChange('where', isOpen)}>
                    <PopoverTrigger
                        className={cn(
                            'text-left h-full px-5 lg:px-10 rounded-full transition-colors ',
                            openPopover === 'where' ? 'bg-white shadow' : 'hover:bg-accent'
                        )}
                    >
                        <p className="text-sm font-medium">{t('where')}</p>
                        <input
                            type="text"
                            placeholder={t('placeholder')}
                            className="outline-0 border-0 py-1 w-[130px] lg:w-auto placeholder:font-light text-sm "
                            value={location}
                            onChange={(e) => updateLocation(e.target.value)}
                        />
                    </PopoverTrigger>
                    <PopoverContent className="w-md bg-white rounded-2xl p-4" align="start">
                        <div className="space-y-2">
                            <p className="font-semibold">Popular locations</p>
                            <div className="grid grid-cols-3 gap-4">
                                {['Kuala Lumpur', 'Bangkok', 'London', 'Tokyo', 'Toronto', 'Seoul', 'Busan'].map(
                                    (location) => (
                                        <Button
                                            key={location}
                                            variant="outline"
                                            className="w-full justify-start"
                                            onClick={() => {
                                                updateLocation(location);
                                                setOpenPopover(null);
                                            }}
                                        >
                                            {location}
                                        </Button>
                                    )
                                )}
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>

                {/** Check in */}
                <Popover
                    open={openPopover === 'checkIn'}
                    onOpenChange={(isOpen) => handleOpenChange('checkIn', isOpen)}
                >
                    <PopoverTrigger
                        className={cn(
                            'text-left h-full px-10 rounded-full transition-colors',
                            openPopover === 'checkIn' ? 'bg-white shadow' : 'hover:bg-accent'
                        )}
                    >
                        <p className="text-sm font-medium">{t('checkIn')}</p>
                        <span className="text-gray-500 font-light text-sm">
                            {checkIn ? format(checkIn, 'LLL dd, y') : t('checkInOutDescription')}
                        </span>
                    </PopoverTrigger>
                    <PopoverContent className="bg-white p-10 rounded-2xl sm:w-lg md:w-xl " align="center">
                        <Tabs defaultValue="dates" className="w-full">
                            <TabsList className="w-fit mx-auto">
                                <TabsTrigger value="dates">Dates</TabsTrigger>
                                <TabsTrigger value="months">Months</TabsTrigger>
                                <TabsTrigger value="flexible">Flexible</TabsTrigger>
                            </TabsList>

                            <TabsContent value="dates">
                                <Calendar
                                    mode="single"
                                    disabled={{ before: getToday() }}
                                    selected={checkIn}
                                    onSelect={updateCheckIn}
                                    numberOfMonths={2}
                                />
                            </TabsContent>
                            <TabsContent value="months">loading...</TabsContent>
                            <TabsContent value="flexible">loading...</TabsContent>
                        </Tabs>
                    </PopoverContent>
                </Popover>

                {/** Check out */}
                <Popover
                    open={openPopover === 'checkOut'}
                    onOpenChange={(isOpen) => handleOpenChange('checkOut', isOpen)}
                >
                    <PopoverTrigger
                        className={cn(
                            'text-left h-full px-10 rounded-full transition-colors',
                            openPopover === 'checkOut' ? 'bg-white shadow' : 'hover:bg-accent'
                        )}
                    >
                        <p className="text-sm font-medium">{t('checkOut')}</p>
                        <span className="text-gray-500 font-light text-sm">
                            {checkOut ? format(checkOut, 'LLL dd, y') : t('checkInOutDescription')}
                        </span>
                    </PopoverTrigger>
                    <PopoverContent className="bg-white p-10 rounded-2xl sm:w-lg md:w-xl " align="center">
                        <Tabs defaultValue="dates" className="w-full">
                            <TabsList className="w-fit mx-auto">
                                <TabsTrigger value="dates">Dates</TabsTrigger>
                                <TabsTrigger value="months">Months</TabsTrigger>
                                <TabsTrigger value="flexible">Flexible</TabsTrigger>
                            </TabsList>

                            <TabsContent value="dates">
                                <Calendar
                                    mode="single"
                                    disabled={{ before: checkIn || getToday() }}
                                    selected={checkOut}
                                    onSelect={updateCheckOut}
                                    numberOfMonths={2}
                                />
                            </TabsContent>
                            <TabsContent value="months">loading...</TabsContent>
                            <TabsContent value="flexible">loading...</TabsContent>
                        </Tabs>
                    </PopoverContent>
                </Popover>

                {/** Guests */}

                <Popover open={openPopover === 'guests'} onOpenChange={(isOpen) => handleOpenChange('guests', isOpen)}>
                    <PopoverTrigger
                        className={cn(
                            'text-left h-full px-5 rounded-full transition-colors',
                            openPopover === 'guests' ? 'bg-white shadow' : 'hover:bg-accent'
                        )}
                    >
                        <div className="flex items-center gap-x-4">
                            <div>
                                <p className="text-sm font-medium">{t('who')}</p>
                                <span className="text-gray-500 font-light text-sm">
                                    {adults + children + infants + pets > 0
                                        ? `${adults + children + infants + pets} guests`
                                        : t('guest')}
                                </span>
                            </div>
                            <Button
                                asChild
                                className={cn(
                                    'duration-300 ',
                                    openPopover ? 'flex-1 h-12 rounded-full' : 'size-12 rounded-full'
                                )}
                                onClick={handleSearch}
                            >
                                <span className="inline-flex items-center">
                                    <Search />
                                    {openPopover ? 'Search' : <span className="sr-only">Search</span>}
                                </span>
                            </Button>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-md bg-white rounded-2xl p-10 shadow" align="end">
                        <div className="space-y-5 ">
                            <CounterSection
                                title="Adults"
                                subtitle="Ages 13 or above"
                                value={adults}
                                onIncrement={() => incrementAdults(adults)}
                                onDecrement={() => decrementAdults(adults)}
                            />
                            <Separator />
                            <CounterSection
                                title="Children"
                                subtitle="Ages 2 - 12"
                                value={children}
                                onIncrement={() => incrementChildren(children)}
                                onDecrement={() => decrementChildren(children)}
                            />
                            <Separator />
                            <CounterSection
                                title="Infants"
                                subtitle="Under 2"
                                value={infants}
                                onIncrement={() => incrementInfants(infants)}
                                onDecrement={() => decrementInfants(infants)}
                            />
                            <Separator />
                            <CounterSection
                                title="Pets"
                                subtitle="Bringing a service animal?"
                                value={pets}
                                onIncrement={() => incrementPets(pets)}
                                onDecrement={() => decrementPets(pets)}
                            />
                            <Separator />
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}
