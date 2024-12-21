import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
    LinkIcon, Youtube, Twitter, CheckCircle2, Building2,
    ChevronDown, ChevronUp
} from 'lucide-react';
import type { GovernmentRole, Candidate } from './types';

interface CandidateCardProps {
    role: GovernmentRole;
    candidate: Candidate;
    isCompact?: boolean;
    isExpanded: boolean;
    isExperienceExpanded: boolean;
    isSelected: boolean;
    toggleCard: (id: string) => void;
    toggleExperience: (id: string) => void;
    toggleCompare: (id: string) => void;
}

export const CandidateCard = ({
                           role,
                           candidate,
                           isCompact = false,
                           isExpanded,
                           isExperienceExpanded,
                           isSelected,
                           toggleCard,
                           toggleExperience,
                           toggleCompare
                       }: CandidateCardProps) => {
    return (
        <Card className={`
      ${isCompact ? 'w-full md:w-64' : 'w-full'} 
      hover:shadow-lg transition-shadow duration-200
      ${isSelected ? 'ring-2 ring-blue-500' : ''}
    `}>
            <div onClick={() => toggleCard(candidate.id)} className="cursor-pointer">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img
                            src={candidate.image}
                            alt={candidate.name}
                            className={`rounded-full ${isCompact ? 'w-10 h-10' : 'w-12 h-12'}`}
                        />
                        <div>
                            <CardTitle className={`flex items-center gap-2 ${isCompact ? 'text-base' : 'text-lg'}`}>
                                {candidate.name}
                                {candidate.verified && (
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                )}
                            </CardTitle>
                            <p className="text-sm text-gray-500">{role.title}</p>
                        </div>
                    </div>
                    {!isCompact && (
                        isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                        )
                    )}
                </CardHeader>

                {!isExpanded && !isCompact && (
                    <CardContent>
                        <p className="text-sm text-gray-600 line-clamp-2">{candidate.summary}</p>
                    </CardContent>
                )}
            </div>

            {isExpanded && !isCompact && (
                <CardContent>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-4">
                            <a
                                href={candidate.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <LinkIcon className="w-5 h-5 text-blue-600" />
                            </a>
                            <a
                                href={candidate.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-red-100 hover:bg-red-200 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Youtube className="w-5 h-5 text-red-600" />
                            </a>
                            <a
                                href={candidate.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-sky-100 hover:bg-sky-200 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Twitter className="w-5 h-5 text-sky-600" />
                            </a>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleCompare(candidate.id);
                            }}
                            className={`px-3 py-1 rounded transition-colors ${
                                isSelected ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                        >
                            {isSelected ? 'Selezionato' : 'Confronta'}
                        </button>
                    </div>

                    <div className="mt-4">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleExperience(candidate.id);
                            }}
                            className="flex items-center justify-between w-full p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <span className="font-medium">Esperienza Politica</span>
                            {isExperienceExpanded ? (
                                <ChevronUp className="w-4 h-4" />
                            ) : (
                                <ChevronDown className="w-4 h-4" />
                            )}
                        </button>

                        {isExperienceExpanded && (
                            <div className="mt-4 pl-2">
                                {candidate.experience.map((exp, index) => (
                                    <div key={index} className="mb-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Building2 className="w-4 h-4" />
                                            <span className="font-medium">{exp.role}</span>
                                            <Badge variant="secondary">{exp.period}</Badge>
                                        </div>
                                        <ul className="list-disc list-inside pl-4">
                                            {exp.achievements.map((achievement, idx) => (
                                                <li key={idx} className="text-sm text-gray-600 mb-1">
                                                    <div className="flex items-center gap-2">
                                                        {achievement.title}
                                                        {achievement.verified && (
                                                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                                                        )}
                                                    </div>
                                                    <p className="text-xs text-gray-500 ml-5">
                                                        {achievement.description}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </CardContent>
            )}
        </Card>
    );
};