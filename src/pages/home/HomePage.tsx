import React, { useState, useEffect } from 'react';
import GetInvolvedPage from "@/pages/getInvolved/GetInvolvedPage";
import { CloudWatchLogger } from '@/utils/CloudwatchLoggerUtil';
import { config } from "@/config";
import CountrySelector from './CountrySelector';  // Assume we've moved the CountrySelector to its own file

const log = new CloudWatchLogger(
    config.cloudWatchRegion,
    config.cloudWatchIdentityPoolId,
    'FacegovReactAppLogs',
    'HomePage'
);

const HomePage: React.FC = () => {
    const [showCountrySelector, setShowCountrySelector] = useState<boolean>(true);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

    useEffect(() => {
        const country = localStorage.getItem('selectedCountry');
        if (country) {
            setSelectedCountry(country);
            setShowCountrySelector(false);
        }
        log.info("Home Page Loaded");
    }, []);

    const handleCountrySelect = (countryCode: string) => {
        localStorage.setItem('selectedCountry', countryCode);
        setSelectedCountry(countryCode);
        setShowCountrySelector(false);
        log.info(`Country selected: ${countryCode}`);
    };

    if (showCountrySelector) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <CountrySelector onSelect={handleCountrySelect} />
                </div>
            </div>
        );
    }

    return (
        <>
            <GetInvolvedPage />
        </>
    );
}

export default HomePage;