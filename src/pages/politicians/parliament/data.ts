// data.ts
import { GovernmentRole, PoliticalExperience } from './types';

export const governmentRoles: GovernmentRole[] = [
    {
        id: "premier",
        title: "Presidente del Consiglio",
        description: "Capo del governo, coordina l'azione di governo e mantiene l'unità di indirizzo politico",
        responsibilities: [
            "Dirigere la politica generale del Governo",
            "Coordinare l'attività dei ministri",
            "Rappresentare il Governo nelle relazioni internazionali"
        ],
        requiredExperience: [
            "Esperienza in leadership politica",
            "Competenze in economia e diritto costituzionale",
            "Capacità di gestione delle crisi"
        ]
    },
    {
        id: "economy",
        title: "Ministro dell'Economia",
        description: "Responsabile della politica economica e finanziaria",
        responsibilities: [
            "Gestione del bilancio dello Stato",
            "Politica fiscale e tributaria",
            "Coordinamento della finanza pubblica"
        ],
        requiredExperience: [
            "Esperienza in economia e finanza",
            "Background in politiche fiscali",
            "Gestione di grandi organizzazioni"
        ]
    },
    {
        id: "foreign",
        title: "Ministro degli Esteri",
        description: "Responsabile della politica estera e delle relazioni internazionali",
        responsibilities: [
            "Gestione delle relazioni diplomatiche",
            "Coordinamento politica europea",
            "Promozione interessi nazionali all'estero"
        ],
        requiredExperience: [
            "Esperienza diplomatica",
            "Conoscenza delle relazioni internazionali",
            "Competenze linguistiche"
        ]
    }
];

export const competencies = [
    "Leadership",
    "Economia",
    "Diplomazia",
    "Diritto",
    "Gestione Crisi",
    "Relazioni Internazionali"
];

export const sampleExperience: PoliticalExperience = {
    role: "Ministro",
    organization: "Governo Italiano",
    period: "2018-2022",
    achievements: [{
        title: "Riforma Economica 2020",
        date: "2020",
        description: "Implementazione di nuove politiche fiscali",
        verified: true
    }]
};

export const createCandidateData = (partyId: string, roleId: string, roleTitle: string) => ({
    id: `${partyId}-${roleId}`,
    name: "Mario Rossi",
    image: "/api/placeholder/150/150",
    currentRole: roleTitle,
    roleId: roleId,
    party: partyId,
    linkedin: "https://linkedin.com/in/mariorossi",
    youtube: "https://youtube.com/@mariorossi",
    twitter: "https://twitter.com/mariorossi",
    verified: true,
    summary: "Esperto in economia con 15 anni di esperienza.",
    experience: [sampleExperience]
});