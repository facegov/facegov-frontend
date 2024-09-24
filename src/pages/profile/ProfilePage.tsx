import React, { useState, useEffect } from 'react';

import CountrySelector from './CountrySelector';
import { Country, countries } from '@/lib/countries';

const ProfilePage: React.FC = () => {
    // The showCountrySelector state is initially set to false. It will be set to true in the useEffect hook if no country is selected.
    const [showCountrySelector, setShowCountrySelector] = useState<boolean>(false);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    useEffect(() => {
        const countryCode = localStorage.getItem('selectedCountry');
        if (countryCode) {
            const country = countries.find(c => c.code === countryCode);
            if (country) {
                setSelectedCountry(country);
            } else {
                setShowCountrySelector(true);
            }
        } else {
            setShowCountrySelector(true);
        }

    }, []);

    const handleCountrySelect = (countryCode: string) => {
        const country = countries.find(c => c.code === countryCode);
        if (country) {
            localStorage.setItem('selectedCountry', countryCode);
            setSelectedCountry(country);
            setShowCountrySelector(false);
        }
    };

    const handleChangeCountry = () => {
        setShowCountrySelector(true);
    };

    return (
        <>
            <h1 className="text-4xl font-bold text-black-600 mb-4">Profile</h1>

            {showCountrySelector && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">
                            {selectedCountry ?
                                'Your current country is '.concat(selectedCountry.name).concat('.') : 'Welcome to FaceGov!'}
                        </h2>
                        <CountrySelector onSelect={handleCountrySelect}/>
                    </div>
                </div>
            )}

            {selectedCountry && (
                <div className="bg-blue-100 p-4 mb-4 flex justify-between items-center">
                    <div>
                        <p className="text-lg">
                            Selected Country: <strong>{selectedCountry.name}</strong> ({selectedCountry.continent})
                        </p>
                    </div>
                    <button
                        onClick={handleChangeCountry}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Change Country
                    </button>
                </div>
            )}
        </>
    );
}

export default ProfilePage;