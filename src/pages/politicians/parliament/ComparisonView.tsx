import { Badge } from "@/components/ui/badge";
import { competencies } from './data';
import { GovernmentRole, Candidate } from './types';
import { CandidateCard } from './CandidateCard';

interface ComparisonViewProps {
    candidates: Array<{
        role: GovernmentRole;
        candidate: Candidate;
    }>;
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({ candidates }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {candidates.map(({ role, candidate }) => (
            <div key={candidate.id} className="border rounded-lg p-4">
                <CandidateCard
                    role={role}
                    candidate={candidate}
                    isCompact={true}
                    isExpanded={false}
                    isExperienceExpanded={false}
                    isSelected={true}
                    toggleCard={() => {}}
                    toggleExperience={() => {}}
                    toggleCompare={() => {}}
                />
                <div className="mt-4">
                    <h4 className="font-medium mb-2">Competenze Chiave:</h4>
                    <div className="flex flex-wrap gap-2">
                        {competencies.slice(0, 3).map(comp => (
                            <Badge key={comp} variant="secondary">{comp}</Badge>
                        ))}
                    </div>
                </div>
            </div>
        ))}
    </div>
);