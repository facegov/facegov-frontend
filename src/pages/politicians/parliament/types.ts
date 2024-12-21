// types.ts
export type GovernmentRole = {
    id: string;
    title: string;
    description: string;
    responsibilities: string[];
    requiredExperience: string[];
};

export type Achievement = {
    title: string;
    date: string;
    description: string;
    verified: boolean;
};

export type PoliticalExperience = {
    role: string;
    organization: string;
    period: string;
    achievements: Achievement[];
};

export type Candidate = {
    id: string;
    name: string;
    image: string;
    currentRole: string;
    roleId: string;
    party: string;
    linkedin: string;
    youtube: string;
    twitter: string;
    verified: boolean;
    summary: string;
    experience: PoliticalExperience[];
};