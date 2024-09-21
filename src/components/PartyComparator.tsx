import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Select } from './ui/Select';
import { Button } from './ui/button';

// Updated type definitions
type Continent = 'Europe' | 'North America';
type Nation = 'France' | 'Germany' | 'USA' | 'Canada';
type Party = 'En Marche' | 'Les Republicains' | 'CDU' | 'SPD' | 'Democratic' | 'Republican' | 'Liberal' | 'Conservative';

interface DataStructure {
  continents: Continent[];
  nations: {
    [key in Continent]: Nation[];
  };
  parties: {
    [key in Nation]: Party[];
  };
  mps: {
    [key in Party]: string[];
  };
}

// Updated mock data with type annotation
const data: DataStructure = {
  continents: ['Europe', 'North America'],
  nations: {
    'Europe': ['France', 'Germany'],
    'North America': ['USA', 'Canada']
  },
  parties: {
    'France': ['En Marche', 'Les Republicains'],
    'Germany': ['CDU', 'SPD'],
    'USA': ['Democratic', 'Republican'],
    'Canada': ['Liberal', 'Conservative']
  },
  mps: {
    'En Marche': ['Emmanuel Macron', 'Edouard Philippe'],
    'Les Republicains': ['Christian Jacob', 'Francois Baroin'],
    'CDU': ['Angela Merkel', 'Annegret Kramp-Karrenbauer'],
    'SPD': ['Olaf Scholz', 'Saskia Esken'],
    'Democratic': ['Joe Biden', 'Kamala Harris'],
    'Republican': ['Donald Trump', 'Mike Pence'],
    'Liberal': ['Justin Trudeau', 'Chrystia Freeland'],
    'Conservative': ['Erin O\'Toole', 'Candice Bergen']
  }
};

// Type guard functions
function isContinent(value: string): value is Continent {
  return data.continents.includes(value as Continent);
}

function isNation(value: string): value is Nation {
  return Object.values(data.nations).some(nations => nations.includes(value as Nation));
}

function isParty(value: string): value is Party {
  return Object.values(data.parties).some(parties => parties.includes(value as Party));
}

interface Entity {
  continent: Continent | '';
  nation: Nation | '';
  party: Party | '';
  mp: string;
}

interface PoliticalEntitySelectorProps {
  id: string;
  onChange: (id: string, data: Entity) => void;
}

const PoliticalEntitySelector: React.FC<PoliticalEntitySelectorProps> = ({ id, onChange }) => {
  const [continent, setContinent] = useState<Continent | ''>('');
  const [nation, setNation] = useState<Nation | ''>('');
  const [party, setParty] = useState<Party | ''>('');
  const [mp, setMp] = useState('');

  const handleChange = (level: keyof Entity, value: string) => {
    switch (level) {
      case 'continent':
        if (isContinent(value)) {
          setContinent(value);
          setNation('');
          setParty('');
          setMp('');
        }
        break;
      case 'nation':
        if (isNation(value)) {
          setNation(value);
          setParty('');
          setMp('');
        }
        break;
      case 'party':
        if (isParty(value)) {
          setParty(value);
          setMp('');
        }
        break;
      case 'mp':
        setMp(value);
        break;
    }
    onChange(id, { continent, nation, party, mp });
  };

  return (
      <div className="space-y-4">
        <Select
            value={continent}
            onValueChange={(value: string) => handleChange('continent', value)}
            placeholder="Select Continent"
            options={data.continents.map(cont => ({ value: cont, label: cont }))}
        />

        {continent && (
            <Select
                value={nation}
                onValueChange={(value: string) => handleChange('nation', value)}
                placeholder="Select Nation"
                options={data.nations[continent].map(nat => ({ value: nat, label: nat }))}
            />
        )}

        {nation && (
            <Select
                value={party}
                onValueChange={(value: string) => handleChange('party', value)}
                placeholder="Select Political Party"
                options={data.parties[nation].map(par => ({ value: par, label: par }))}
            />
        )}

        {party && (
            <Select
                value={mp}
                onValueChange={(value: string) => handleChange('mp', value)}
                placeholder="Select MP"
                options={data.mps[party].map(member => ({ value: member, label: member }))}
            />
        )}

        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <ChevronRight className="h-4 w-4" />
          <span>{continent}</span>
          {nation && (
              <>
                <ChevronRight className="h-4 w-4" />
                <span>{nation}</span>
              </>
          )}
          {party && (
              <>
                <ChevronRight className="h-4 w-4" />
                <span>{party}</span>
              </>
          )}
          {mp && (
              <>
                <ChevronRight className="h-4 w-4" />
                <span>{mp}</span>
              </>
          )}
        </div>
      </div>
  );
};

const PartyComparator: React.FC = () => {
  const [entity1, setEntity1] = useState<Entity>({ continent: '', nation: '', party: '', mp: '' });
  const [entity2, setEntity2] = useState<Entity>({ continent: '', nation: '', party: '', mp: '' });
  const [comparisonResult, setComparisonResult] = useState('');

  const handleEntityChange = (id: string, data: Entity) => {
    if (id === 'entity1') {
      setEntity1(data);
    } else {
      setEntity2(data);
    }
  };

  const handleCompare = () => {
    const result = `Comparing:
    Your party: ${entity1.continent} > ${entity1.nation} > ${entity1.party} > ${entity1.mp}
    Party to compare against: ${entity2.continent} > ${entity2.nation} > ${entity2.party} > ${entity2.mp}`;
    setComparisonResult(result);
  };

  return (
      <div className="p-4 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Asses a Party</h2>
        <div className="flex space-x-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Party:</h3>
            <PoliticalEntitySelector id="entity1" onChange={handleEntityChange} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Compare against:</h3>
            <PoliticalEntitySelector id="entity2" onChange={handleEntityChange} />
          </div>
        </div>
        <Button
            onClick={handleCompare}
            className="mt-6 w-full"
        >
          Compare Political Entities
        </Button>
        {comparisonResult && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Comparison Result:</h3>
              <pre className="whitespace-pre-wrap">{comparisonResult}</pre>
            </div>
        )}
      </div>
  );
};

export default PartyComparator;