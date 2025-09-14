import React from 'react';
import hotelsData from '@/data/hotels.json';
import HotelCard from '@/components/landing/hotel-card';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/common/footer';

type SearchParams = {
    location?: string;
    from?: string;
    to?: string;
    adults?: string;
    children?: string;
    infants?: string;
    pets?: string;
};

export default function SearchPage({ searchParams }: { searchParams: SearchParams }) {
    const { location, adults } = searchParams;

    const filteredHotels = hotelsData.filter((hotel) => {
        let matches = true;

        if (location && !hotel.location.toLowerCase().includes(location.toLowerCase())) {
            matches = false;
        }

        if (adults && hotel.guests < parseInt(adults)) {
            matches = false;
        }

        return matches;
    });

    return (
        <React.Fragment>
            <Navbar />
            <main className="container py-10">
                <h1 className="text-2xl font-bold mb-5">Search Results for "{location}"</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {filteredHotels.length > 0 ? (
                        filteredHotels.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)
                    ) : (
                        <p>No hotels found for your search criteria.</p>
                    )}
                </div>
            </main>
            <Footer />
        </React.Fragment>
    );
}
