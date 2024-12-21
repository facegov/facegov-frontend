import { Badge } from "@/components/ui/badge";
import { competencies } from '../data';

interface CompetencyFiltersProps {
    selectedCompetencies: Set<string>;
    toggleCompetency: (competency: string) => void;
}

export const CompetencyFilters: React.FC<CompetencyFiltersProps> = ({
                                                                        selectedCompetencies,
                                                                        toggleCompetency
                                                                    }) => (
    <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Filtro per Competenze</h3>
        <div className="flex flex-wrap gap-2">
            {competencies.map(competency => (
                <Badge
                    key={competency}
                    variant={selectedCompetencies.has(competency) ? "default" : "secondary"}
                    className="cursor-pointer"
                    onClick={() => toggleCompetency(competency)}
                >
                    {competency}
                </Badge>
            ))}
        </div>
    </div>
);