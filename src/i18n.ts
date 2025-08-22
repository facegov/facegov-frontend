import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "gi-t": "Make Your Vote Count Beyond Election Day!",
                    "gi-st": "Join FaceGov Open Source Project Below!",
                }
            },
            es: {
                translation: {
                    "gi-t": "¡Haz que tu voto cuente más allá del día de las elecciones!",
                    "gi-st": "¡Únete al proyecto de Open Source abajo!",
                }
            },
            it: {
                translation: {
                    "gi-t": "Fai contare il tuo voto oltre il giorno delle elezioni!",
                    "gi-st": "Unisciti al progetto Open Source qui sotto",
                }
            }
        },
        lng: 'en', // Set default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;