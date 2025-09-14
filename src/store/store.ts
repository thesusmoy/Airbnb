import { create } from 'zustand';

type State = {
    location: string;
    checkIn: Date | undefined;
    checkOut: Date | undefined;

    adults: number;
    children: number;
    infants: number;
    pets: number;
};

type Action = {
    updateLocation: (location: State['location']) => void;
    updateCheckIn: (checkIn: State['checkIn']) => void;
    updateCheckOut: (checkOut: State['checkOut']) => void;

    incrementAdults: (adults: State['adults']) => void;
    incrementChildren: (children: State['children']) => void;
    incrementInfants: (infants: State['infants']) => void;
    incrementPets: (pets: State['pets']) => void;

    decrementAdults: (adults: State['adults']) => void;
    decrementChildren: (children: State['children']) => void;
    decrementInfants: (infants: State['infants']) => void;
    decrementPets: (pets: State['pets']) => void;
};

export const useQuery = create<State & Action>((set) => ({
    location: '',
    checkIn: undefined,
    checkOut: undefined,
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
    updateLocation: (location) => set(() => ({ location: location })),
    updateCheckIn: (checkIn) => set(() => ({ checkIn: checkIn })),
    updateCheckOut: (checkOut) => set(() => ({ checkOut: checkOut })),
    incrementAdults: (adults) => set(() => ({ adults: adults + 1 })),
    incrementChildren: (children) => set(() => ({ children: children + 1 })),
    incrementInfants: (infants) => set(() => ({ infants: infants + 1 })),
    incrementPets: (pets) => set(() => ({ pets: pets + 1 })),

    decrementAdults: (adults) => set(() => ({ adults: Math.max(0, adults - 1) })),
    decrementChildren: (children) => set(() => ({ children: Math.max(0, children - 1) })),
    decrementInfants: (infants) => set(() => ({ infants: Math.max(0, infants - 1) })),
    decrementPets: (pets) => set(() => ({ pets: Math.max(0, pets - 1) })),
}));
