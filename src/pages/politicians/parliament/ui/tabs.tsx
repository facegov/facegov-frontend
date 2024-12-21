// @/components/ui/tabs.tsx
import * as React from "react";

interface TabsProps {
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    children: React.ReactNode;
}

interface TabsListProps {
    children: React.ReactNode;
    className?: string;
}

interface TabsTriggerProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}

interface TabsContentProps {
    value: string;
    children: React.ReactNode;
}

const TabsContext = React.createContext<{
    value?: string;
    onValueChange?: (value: string) => void;
}>({});

export const Tabs = ({ defaultValue, onValueChange, children }: TabsProps) => {
    const [value, setValue] = React.useState(defaultValue);

    const handleValueChange = (newValue: string) => {
        setValue(newValue);
        onValueChange?.(newValue);
    };

    return (
        <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
            <div className="w-full">{children}</div>
        </TabsContext.Provider>
    );
};

export const TabsList = ({ className, children }: TabsListProps) => {
    return (
        <div
            role="tablist"
            className={`inline-flex items-center justify-center rounded-lg bg-gray-100 p-1 ${className}`}
        >
            {children}
        </div>
    );
};

export const TabsTrigger = ({ value, className, children }: TabsTriggerProps) => {
    const { value: selectedValue, onValueChange } = React.useContext(TabsContext);
    const isSelected = value === selectedValue;

    return (
        <button
            role="tab"
            aria-selected={isSelected}
            data-state={isSelected ? "active" : "inactive"}
            onClick={() => onValueChange?.(value)}
            className={`
        inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
        ${isSelected
                ? "bg-white text-gray-950 shadow-sm"
                : "text-gray-500 hover:text-gray-900"}
        ${className}
      `}
        >
            {children}
        </button>
    );
};

export const TabsContent = ({ value, children }: TabsContentProps) => {
    const { value: selectedValue } = React.useContext(TabsContext);
    const isSelected = value === selectedValue;

    if (!isSelected) return null;

    return (
        <div
            role="tabpanel"
            data-state={isSelected ? "active" : "inactive"}
            className="mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
        >
            {children}
        </div>
    );
};