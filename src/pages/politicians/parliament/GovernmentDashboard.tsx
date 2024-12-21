// GovernmentDashboard.tsx
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ViewToggle } from './ui/ViewToggle';
import { CompetencyFilters } from './ui/CompetencyFilters';
import { CandidateCard } from './CandidateCard';
import { ComparisonView } from './ComparisonView';
import { governmentRoles, createCandidateData } from './data';

const GovernmentDashboard = () => {
    const [selectedParty, setSelectedParty] = useState("partitoA");
    const [expandedCards, setExpandedCards] = useState(new Set<string>());
    const [expandedExperiences, setExpandedExperiences] = useState(new Set<string>());
    const [viewMode, setViewMode] = useState<'list' | 'grid' | 'compare'>('list');
    const [selectedCompetencies, setSelectedCompetencies] = useState(new Set<string>());
    const [compareList, setCompareList] = useState(new Set<string>());

    const toggleCard = (cardId: string) => {
        setExpandedCards(prev => {
            const next = new Set(prev);
            if (next.has(cardId)) {
                next.delete(cardId);
            } else {
                next.add(cardId);
            }
            return next;
        });
    };

    const toggleExperience = (candidateId: string) => {
        setExpandedExperiences(prev => {
            const next = new Set(prev);
            if (next.has(candidateId)) {
                next.delete(candidateId);
            } else {
                next.add(candidateId);
            }
            return next;
        });
    };

    const toggleCompetency = (competency: string) => {
        setSelectedCompetencies(prev => {
            const next = new Set(prev);
            if (next.has(competency)) {
                next.delete(competency);
            } else {
                next.add(competency);
            }
            return next;
        });
    };

    const toggleCompare = (candidateId: string) => {
        setCompareList(prev => {
            const next = new Set(prev);
            if (next.has(candidateId)) {
                next.delete(candidateId);
            } else {
                if (next.size < 3) {
                    next.add(candidateId);
                }
            }
            return next;
        });
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">Composizione del Governo</h1>

            <div className="flex justify-between items-center mb-6">
                <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
                <div className="text-sm text-gray-500">
                    {compareList.size > 0 && `${compareList.size} candidati selezionati per il confronto`}
                </div>
            </div>

            {viewMode !== 'compare' && (
                <CompetencyFilters
                    selectedCompetencies={selectedCompetencies}
                    toggleCompetency={toggleCompetency}
                />
            )}

            <Tabs defaultValue={selectedParty} onValueChange={setSelectedParty}>
                <TabsList className="w-full justify-start mb-6 overflow-x-auto">
                    {["Partito A", "Partito B"].map((party) => (
                        <TabsTrigger key={party} value={party.toLowerCase().replace(" ", "")} className="px-4 py-2">
                            {party}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {["partitoA", "partitoB"].map((partyId) => (
                    <TabsContent key={partyId} value={partyId}>
                        {viewMode === 'compare' && compareList.size > 0 ? (
                            <ComparisonView
                                candidates={Array.from(compareList).map(id => ({
                                    role: governmentRoles[0],
                                    candidate: createCandidateData(partyId, "role-1", "Ministro")
                                }))}
                            />
                        ) : (
                            <div className={viewMode === 'grid'
                                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                : "space-y-8"
                            }>
                                {governmentRoles.map((role) => (
                                    <div key={role.id}>
                                        <h2 className="text-2xl font-semibold mb-4">{role.title}</h2>
                                        <p className="text-gray-600 mb-4">{role.description}</p>
                                        <CandidateCard
                                            role={role}
                                            candidate={createCandidateData(partyId, role.id, role.title)}
                                            isExpanded={expandedCards.has(`${partyId}-${role.id}`)}
                                            isExperienceExpanded={expandedExperiences.has(`${partyId}-${role.id}`)}
                                            isSelected={compareList.has(`${partyId}-${role.id}`)}
                                            toggleCard={toggleCard}
                                            toggleExperience={toggleExperience}
                                            toggleCompare={toggleCompare}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};

export default GovernmentDashboard;