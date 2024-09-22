import React from 'react';
import {Link} from 'react-router-dom';

interface Crumb {
    text: string;
    href: string;
}

interface BreadcrumbsProps {
    crumbs: Crumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({crumbs}) => {
    return (
        <nav className="bg-gray-100 p-3 rounded-md">
            <ol className="list-none p-0 inline-flex">
                {crumbs.map((crumb, index) => {
                    const isLast = index === crumbs.length - 1;
                    return (
                        <li key={crumb.href} className="flex items-center">
                            <Link
                                to={crumb.href}
                                className={`text-blue-600 hover:text-blue-800 ${isLast ? 'font-semibold' : ''}`}
                            >
                                {crumb.text}
                            </Link>
                            {!isLast && <span className="mx-2 text-gray-500">/</span>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;

// Example usage:
//
// import Breadcrumbs from '@/components/Breadcrumbs';
//
// const breadcrumbs = [
//     { text: 'Home', href: '/' },
//     { text: 'Category', href: '/category' },
//     { text: 'Current Page', href: '/category/current-page' },
// ];
//
// <Breadcrumbs crumbs={breadcrumbs} />