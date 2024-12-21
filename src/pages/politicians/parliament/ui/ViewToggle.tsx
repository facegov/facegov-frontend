// components/ui/ViewToggle.tsx
import React from 'react';
import { Grid, List, Users } from 'lucide-react';

type ViewMode = 'list' | 'grid' | 'compare';

interface ViewToggleProps {
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ viewMode, setViewMode }) => (
    <div className="flex gap-2 mb-4">
        <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100' : 'bg-gray-100'}`}
        >
            <List className="w-5 h-5" />
        </button>
        <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100' : 'bg-gray-100'}`}
        >
            <Grid className="w-5 h-5" />
        </button>
        <button
            onClick={() => setViewMode('compare')}
            className={`p-2 rounded ${viewMode === 'compare' ? 'bg-blue-100' : 'bg-gray-100'}`}
        >
            <Users className="w-5 h-5" />
        </button>
    </div>
);

