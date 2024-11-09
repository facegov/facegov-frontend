import React from 'react';

const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="bg-gray-50 p-8 rounded-lg text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const CandidatesPage = () => {
  const features = [
    {
      icon: "👤",
      title: "Candidate Profiles",
      description: "Access comprehensive profiles of all candidates, including their policy positions, video presentations, and public statements."
    },
    {
      icon: "📈",
      title: "Track Evolution",
      description: "See how candidates' positions have evolved over time with our historical tracking system backed by verified facts."
    },
    {
      icon: "🎯",
      title: "Policy Comparison",
      description: "Compare candidates' stances on key issues side by side to make informed decisions about your representation."
    },
    {
      icon: "🎥",
      title: "Video Platform",
      description: "Watch candidate presentations, debates, and policy explanations directly on our platform."
    },
    {
      icon: "📊",
      title: "Data-Driven Insights",
      description: "Access voting records, attendance rates, and other key metrics to evaluate candidate performance."
    },
    {
      icon: "🤝",
      title: "Community Engagement",
      description: "Participate in discussions and submit questions directly to candidates through our moderated platform."
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-gray-800 to-blue-600 text-white py-16 px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Transparency Builds Democracy
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          FaceGov: Your gateway to informed voting. Get to know every candidate's vision, track record, and evolution of ideas through time.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200">
          Join the Movement
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CandidatesPage;
