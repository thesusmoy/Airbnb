import { Button } from '@/components/ui/button';

import { Minus, Plus } from 'lucide-react';

type CounterSectionProps = {
    title: string;
    subtitle?: string;
    value: number;
    onIncrement: () => void;
    onDecrement: () => void;
};

export const CounterSection: React.FC<CounterSectionProps> = ({ title, subtitle, value, onIncrement, onDecrement }) => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h6 className="font-semibold">{title}</h6>
                {subtitle && <p className="text-gray-500 font-[13px]">{subtitle}</p>}
            </div>

            <div className="flex gap-x-4 items-center">
                <Button
                    variant="outline"
                    className="size-10 rounded-full cursor-pointer"
                    onClick={onDecrement}
                    disabled={value === 0}
                >
                    <Minus />
                </Button>

                {value}

                <Button variant="outline" className="size-10 rounded-full cursor-pointer" onClick={onIncrement}>
                    <Plus />
                </Button>
            </div>
        </div>
    );
};
