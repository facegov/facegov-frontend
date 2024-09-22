import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ChevronDown} from 'lucide-react';

const languages = [
    {code: 'en', name: 'English'},
    {code: 'es', name: 'Español'},
    {code: 'it', name: 'Italiano'},
];

const LanguageSwitcher: React.FC = () => {
    const {i18n} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const getCurrentLanguage = () => {
        return languages.find(lang => lang.code === i18n.language) || languages[0];
    };

    const changeLanguage = (langCode: string) => {
        i18n.changeLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                >
                    {getCurrentLanguage().name}
                    <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true"/>
                </button>
            </div>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                                onClick={() => changeLanguage(lang.code)}
                            >
                                {lang.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;