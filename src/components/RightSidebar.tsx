import React from 'react';
import Card from './Card';
import { CardContent } from "@/components/ui/card";
import Resources from "@/Resources";

const RightSidebar: React.FC = () => (
    <aside className="w-full md:w-2/3 md:pl-4 mt-6 md:mt-0">
        <Card>
            <CardContent className="p-4">
                <Resources/>
            </CardContent>
        </Card>
    </aside>
);

export default RightSidebar;
