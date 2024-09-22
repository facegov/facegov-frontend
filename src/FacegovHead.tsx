import React from 'react';
import {Helmet} from 'react-helmet';

const FaceGovHead: React.FC = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "FaceGov",
        "url": "https://www.facegov.com",
        "logo": "https://www.facegov.com/logo.png",
        "description": "FaceGov is a platform providing transparent, fact-based political information to combat social media echo chambers and political hypocrisy."
    };

    return (
        <Helmet>
            <title>FaceGov Mission Statement: Transparent Political Information Platform</title>
            <meta name="description"
                  content="FaceGov's mission is to provide transparent, fact-based political information, combating social media echo chambers and political hypocrisy. Learn about our goals for informed democracy."/>
            <meta name="keywords"
                  content="FaceGov, political transparency, fact-checking, democracy, informed voting, political accountability"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <link rel="canonical" href="https://www.facegov.com/mission-statement"/>
            <link rel="stylesheet" href="asset/css/styles.css"/>

            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default FaceGovHead;