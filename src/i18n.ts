import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "gi-t": "Engaging in politics made easy!",
                    "gi-st": "Join FaceGov Open Source Project Below!",
                }
            },
            es: {
                translation: {
                    "gi-t": "¡Participar en política hecho fácil!",
                    "gi-st": "¡Únete al proyecto de Open Source abajo!",
                }
            },
            it: {
                translation: {
                    "gi-t": "Semplifichiamo il modo di partecipare in politica!",
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