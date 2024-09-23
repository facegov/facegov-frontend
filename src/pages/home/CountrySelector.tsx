import React, { useState, useMemo } from 'react';

type Country = {
  code: string;
  name: string;
  continent: string;
};

const countries: Country[] = [
  { code: 'AF', name: 'Afghanistan', continent: 'Asia' },
  { code: 'AL', name: 'Albania', continent: 'Europe' },
  { code: 'DZ', name: 'Algeria', continent: 'Africa' },
  { code: 'AD', name: 'Andorra', continent: 'Europe' },
  { code: 'AO', name: 'Angola', continent: 'Africa' },
  { code: 'AG', name: 'Antigua and Barbuda', continent: 'North America' },
  { code: 'AR', name: 'Argentina', continent: 'South America' },
  { code: 'AM', name: 'Armenia', continent: 'Asia' },
  { code: 'AU', name: 'Australia', continent: 'Oceania' },
  { code: 'AT', name: 'Austria', continent: 'Europe' },
  { code: 'AZ', name: 'Azerbaijan', continent: 'Asia' },
  { code: 'BS', name: 'Bahamas', continent: 'North America' },
  { code: 'BH', name: 'Bahrain', continent: 'Asia' },
  { code: 'BD', name: 'Bangladesh', continent: 'Asia' },
  { code: 'BB', name: 'Barbados', continent: 'North America' },
  { code: 'BY', name: 'Belarus', continent: 'Europe' },
  { code: 'BE', name: 'Belgium', continent: 'Europe' },
  { code: 'BZ', name: 'Belize', continent: 'North America' },
  { code: 'BJ', name: 'Benin', continent: 'Africa' },
  { code: 'BT', name: 'Bhutan', continent: 'Asia' },
  { code: 'BO', name: 'Bolivia', continent: 'South America' },
  { code: 'BA', name: 'Bosnia and Herzegovina', continent: 'Europe' },
  { code: 'BW', name: 'Botswana', continent: 'Africa' },
  { code: 'BR', name: 'Brazil', continent: 'South America' },
  { code: 'BN', name: 'Brunei', continent: 'Asia' },
  { code: 'BG', name: 'Bulgaria', continent: 'Europe' },
  { code: 'BF', name: 'Burkina Faso', continent: 'Africa' },
  { code: 'BI', name: 'Burundi', continent: 'Africa' },
  { code: 'KH', name: 'Cambodia', continent: 'Asia' },
  { code: 'CM', name: 'Cameroon', continent: 'Africa' },
  { code: 'CA', name: 'Canada', continent: 'North America' },
  { code: 'CV', name: 'Cape Verde', continent: 'Africa' },
  { code: 'CF', name: 'Central African Republic', continent: 'Africa' },
  { code: 'TD', name: 'Chad', continent: 'Africa' },
  { code: 'CL', name: 'Chile', continent: 'South America' },
  { code: 'CN', name: 'China', continent: 'Asia' },
  { code: 'CO', name: 'Colombia', continent: 'South America' },
  { code: 'KM', name: 'Comoros', continent: 'Africa' },
  { code: 'CG', name: 'Congo', continent: 'Africa' },
  { code: 'CD', name: 'Congo, Democratic Republic of the', continent: 'Africa' },
  { code: 'CR', name: 'Costa Rica', continent: 'North America' },
  { code: 'CI', name: "Côte d'Ivoire", continent: 'Africa' },
  { code: 'HR', name: 'Croatia', continent: 'Europe' },
  { code: 'CU', name: 'Cuba', continent: 'North America' },
  { code: 'CY', name: 'Cyprus', continent: 'Europe' },
  { code: 'CZ', name: 'Czech Republic', continent: 'Europe' },
  { code: 'DK', name: 'Denmark', continent: 'Europe' },
  { code: 'DJ', name: 'Djibouti', continent: 'Africa' },
  { code: 'DM', name: 'Dominica', continent: 'North America' },
  { code: 'DO', name: 'Dominican Republic', continent: 'North America' },
  { code: 'EC', name: 'Ecuador', continent: 'South America' },
  { code: 'EG', name: 'Egypt', continent: 'Africa' },
  { code: 'SV', name: 'El Salvador', continent: 'North America' },
  { code: 'GQ', name: 'Equatorial Guinea', continent: 'Africa' },
  { code: 'ER', name: 'Eritrea', continent: 'Africa' },
  { code: 'EE', name: 'Estonia', continent: 'Europe' },
  { code: 'SZ', name: 'Eswatini', continent: 'Africa' },
  { code: 'ET', name: 'Ethiopia', continent: 'Africa' },
  { code: 'FJ', name: 'Fiji', continent: 'Oceania' },
  { code: 'FI', name: 'Finland', continent: 'Europe' },
  { code: 'FR', name: 'France', continent: 'Europe' },
  { code: 'GA', name: 'Gabon', continent: 'Africa' },
  { code: 'GM', name: 'Gambia', continent: 'Africa' },
  { code: 'GE', name: 'Georgia', continent: 'Asia' },
  { code: 'DE', name: 'Germany', continent: 'Europe' },
  { code: 'GH', name: 'Ghana', continent: 'Africa' },
  { code: 'GR', name: 'Greece', continent: 'Europe' },
  { code: 'GD', name: 'Grenada', continent: 'North America' },
  { code: 'GT', name: 'Guatemala', continent: 'North America' },
  { code: 'GN', name: 'Guinea', continent: 'Africa' },
  { code: 'GW', name: 'Guinea-Bissau', continent: 'Africa' },
  { code: 'GY', name: 'Guyana', continent: 'South America' },
  { code: 'HT', name: 'Haiti', continent: 'North America' },
  { code: 'HN', name: 'Honduras', continent: 'North America' },
  { code: 'HU', name: 'Hungary', continent: 'Europe' },
  { code: 'IS', name: 'Iceland', continent: 'Europe' },
  { code: 'IN', name: 'India', continent: 'Asia' },
  { code: 'ID', name: 'Indonesia', continent: 'Asia' },
  { code: 'IR', name: 'Iran', continent: 'Asia' },
  { code: 'IQ', name: 'Iraq', continent: 'Asia' },
  { code: 'IE', name: 'Ireland', continent: 'Europe' },
  { code: 'IL', name: 'Israel', continent: 'Asia' },
  { code: 'IT', name: 'Italy', continent: 'Europe' },
  { code: 'JM', name: 'Jamaica', continent: 'North America' },
  { code: 'JP', name: 'Japan', continent: 'Asia' },
  { code: 'JO', name: 'Jordan', continent: 'Asia' },
  { code: 'KZ', name: 'Kazakhstan', continent: 'Asia' },
  { code: 'KE', name: 'Kenya', continent: 'Africa' },
  { code: 'KI', name: 'Kiribati', continent: 'Oceania' },
  { code: 'KP', name: 'Korea, North', continent: 'Asia' },
  { code: 'KR', name: 'Korea, South', continent: 'Asia' },
  { code: 'KW', name: 'Kuwait', continent: 'Asia' },
  { code: 'KG', name: 'Kyrgyzstan', continent: 'Asia' },
  { code: 'LA', name: 'Laos', continent: 'Asia' },
  { code: 'LV', name: 'Latvia', continent: 'Europe' },
  { code: 'LB', name: 'Lebanon', continent: 'Asia' },
  { code: 'LS', name: 'Lesotho', continent: 'Africa' },
  { code: 'LR', name: 'Liberia', continent: 'Africa' },
  { code: 'LY', name: 'Libya', continent: 'Africa' },
  { code: 'LI', name: 'Liechtenstein', continent: 'Europe' },
  { code: 'LT', name: 'Lithuania', continent: 'Europe' },
  { code: 'LU', name: 'Luxembourg', continent: 'Europe' },
  { code: 'MG', name: 'Madagascar', continent: 'Africa' },
  { code: 'MW', name: 'Malawi', continent: 'Africa' },
  { code: 'MY', name: 'Malaysia', continent: 'Asia' },
  { code: 'MV', name: 'Maldives', continent: 'Asia' },
  { code: 'ML', name: 'Mali', continent: 'Africa' },
  { code: 'MT', name: 'Malta', continent: 'Europe' },
  { code: 'MH', name: 'Marshall Islands', continent: 'Oceania' },
  { code: 'MR', name: 'Mauritania', continent: 'Africa' },
  { code: 'MU', name: 'Mauritius', continent: 'Africa' },
  { code: 'MX', name: 'Mexico', continent: 'North America' },
  { code: 'FM', name: 'Micronesia', continent: 'Oceania' },
  { code: 'MD', name: 'Moldova', continent: 'Europe' },
  { code: 'MC', name: 'Monaco', continent: 'Europe' },
  { code: 'MN', name: 'Mongolia', continent: 'Asia' },
  { code: 'ME', name: 'Montenegro', continent: 'Europe' },
  { code: 'MA', name: 'Morocco', continent: 'Africa' },
  { code: 'MZ', name: 'Mozambique', continent: 'Africa' },
  { code: 'MM', name: 'Myanmar', continent: 'Asia' },
  { code: 'NA', name: 'Namibia', continent: 'Africa' },
  { code: 'NR', name: 'Nauru', continent: 'Oceania' },
  { code: 'NP', name: 'Nepal', continent: 'Asia' },
  { code: 'NL', name: 'Netherlands', continent: 'Europe' },
  { code: 'NZ', name: 'New Zealand', continent: 'Oceania' },
  { code: 'NI', name: 'Nicaragua', continent: 'North America' },
  { code: 'NE', name: 'Niger', continent: 'Africa' },
  { code: 'NG', name: 'Nigeria', continent: 'Africa' },
  { code: 'MK', name: 'North Macedonia', continent: 'Europe' },
  { code: 'NO', name: 'Norway', continent: 'Europe' },
  { code: 'OM', name: 'Oman', continent: 'Asia' },
  { code: 'PK', name: 'Pakistan', continent: 'Asia' },
  { code: 'PW', name: 'Palau', continent: 'Oceania' },
  { code: 'PA', name: 'Panama', continent: 'North America' },
  { code: 'PG', name: 'Papua New Guinea', continent: 'Oceania' },
  { code: 'PY', name: 'Paraguay', continent: 'South America' },
  { code: 'PE', name: 'Peru', continent: 'South America' },
  { code: 'PH', name: 'Philippines', continent: 'Asia' },
  { code: 'PL', name: 'Poland', continent: 'Europe' },
  { code: 'PT', name: 'Portugal', continent: 'Europe' },
  { code: 'QA', name: 'Qatar', continent: 'Asia' },
  { code: 'RO', name: 'Romania', continent: 'Europe' },
  { code: 'RU', name: 'Russia', continent: 'Europe' },
  { code: 'RW', name: 'Rwanda', continent: 'Africa' },
  { code: 'KN', name: 'Saint Kitts and Nevis', continent: 'North America' },
  { code: 'LC', name: 'Saint Lucia', continent: 'North America' },
  { code: 'VC', name: 'Saint Vincent and the Grenadines', continent: 'North America' },
  { code: 'WS', name: 'Samoa', continent: 'Oceania' },
  { code: 'SM', name: 'San Marino', continent: 'Europe' },
  { code: 'ST', name: 'Sao Tome and Principe', continent: 'Africa' },
  { code: 'SA', name: 'Saudi Arabia', continent: 'Asia' },
  { code: 'SN', name: 'Senegal', continent: 'Africa' },
  { code: 'RS', name: 'Serbia', continent: 'Europe' },
  { code: 'SC', name: 'Seychelles', continent: 'Africa' },
  { code: 'SL', name: 'Sierra Leone', continent: 'Africa' },
  { code: 'SG', name: 'Singapore', continent: 'Asia' },
  { code: 'SK', name: 'Slovakia', continent: 'Europe' },
  { code: 'SI', name: 'Slovenia', continent: 'Europe' },
  { code: 'SB', name: 'Solomon Islands', continent: 'Oceania' },
  { code: 'SO', name: 'Somalia', continent: 'Africa' },
  { code: 'ZA', name: 'South Africa', continent: 'Africa' },
  { code: 'SS', name: 'South Sudan', continent: 'Africa' },
  { code: 'ES', name: 'Spain', continent: 'Europe' },
  { code: 'LK', name: 'Sri Lanka', continent: 'Asia' },
  { code: 'SD', name: 'Sudan', continent: 'Africa' },
  { code: 'SR', name: 'Suriname', continent: 'South America' },
  { code: 'SE', name: 'Sweden', continent: 'Europe' },
  { code: 'CH', name: 'Switzerland', continent: 'Europe' },
  { code: 'SY', name: 'Syria', continent: 'Asia' },
  { code: 'TW', name: 'Taiwan', continent: 'Asia' },
  { code: 'TJ', name: 'Tajikistan', continent: 'Asia' },
  { code: 'TZ', name: 'Tanzania', continent: 'Africa' },
  { code: 'TH', name: 'Thailand', continent: 'Asia' },
  { code: 'TL', name: 'Timor-Leste', continent: 'Asia' },
  { code: 'TG', name: 'Togo', continent: 'Africa' },
  { code: 'TO', name: 'Tonga', continent: 'Oceania' },
  { code: 'TT', name: 'Trinidad and Tobago', continent: 'North America' },
  { code: 'TN', name: 'Tunisia', continent: 'Africa' },
  { code: 'TR', name: 'Turkey', continent: 'Asia' },
  { code: 'TM', name: 'Turkmenistan', continent: 'Asia' },
  { code: 'TV', name: 'Tuvalu', continent: 'Oceania' },
  { code: 'UG', name: 'Uganda', continent: 'Africa' },
  { code: 'UA', name: 'Ukraine', continent: 'Europe' },
  { code: 'AE', name: 'United Arab Emirates', continent: 'Asia' },
  { code: 'GB', name: 'United Kingdom', continent: 'Europe' },
  { code: 'US', name: 'United States', continent: 'North America' },
  { code: 'UY', name: 'Uruguay', continent: 'South America' },
  { code: 'UZ', name: 'Uzbekistan', continent: 'Asia' },
  { code: 'VU', name: 'Vanuatu', continent: 'Oceania' },
  { code: 'VA', name: 'Vatican City', continent: 'Europe' },
  { code: 'VE', name: 'Venezuela', continent: 'South America' },
  { code: 'VN', name: 'Vietnam', continent: 'Asia' },
  { code: 'YE', name: 'Yemen', continent: 'Asia' },
  { code: 'ZM', name: 'Zambia', continent: 'Africa' },
  { code: 'ZW', name: 'Zimbabwe', continent: 'Africa' }
];

interface CountrySelectorProps {
  onSelect: (countryCode: string) => void;
}
const CountrySelector: React.FC<CountrySelectorProps> = ({ onSelect }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
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
        <h2 className="text-2xl font-bold mb-4">Welcome to FaceGov!</h2>
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