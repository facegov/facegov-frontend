import React, { useState, useMemo } from 'react';
import { Country, countries } from '@/lib/countries';

interface CountrySelectorProps {
  onSelect: (countryCode: string) => void;
  currentCountry?: string;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({ onSelect, currentCountry }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>(currentCountry || '');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const groupedCountries = useMemo(() => {
    return countries.reduce((acc, country) => {
      if (!acc[country.continent]) {
        acc[country.continent] = [];
      }
      acc[country.continent].push(country);
      return acc;
    }, {} as Record<string, Country[]>);
  }, []);

  const filteredCountries = useMemo(() => {
    if (!searchTerm) return groupedCountries;

    const filtered: Record<string, Country[]> = {};
    Object.entries(groupedCountries).forEach(([continent, continentCountries]) => {
      const matchingCountries = continentCountries.filter(country =>
          country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (matchingCountries.length > 0) {
        filtered[continent] = matchingCountries;
      }
    });
    return filtered;
  }, [groupedCountries, searchTerm]);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);
    onSelect(countryCode);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
      <div className="flex flex-col items-center p-4">
        <h1 className="text-1xl font-bold mb-4">Please, Select Your Country:</h1>
        <div className="w-64 mb-4">
          <input
              type="text"
              placeholder="Search countries..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div className="w-64">
          <select
              value={selectedCountry}
              onChange={handleCountryChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="">-- Select a country --</option>
            {Object.entries(filteredCountries).map(([continent, continentCountries]) => (
                <optgroup key={continent} label={continent}>
                  {continentCountries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                  ))}
                </optgroup>
            ))}
          </select>
        </div>
        {selectedCountry && (
            <p className="mt-4 text-lg">
              You selected: {countries.find(c => c.code === selectedCountry)?.name}
            </p>
        )}
      </div>
  );
};

export default CountrySelector;