import React from 'react';
import GetInvolvedForm from "@/pages/getInvolved/GetInvolvedForm";
import { useTranslation } from 'react-i18next';




const GetInvolvedPage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-blue-600 mb-4">{t("gi-t")}</h1>
                    <p className="text-xl text-gray-700">{t("gi-st")}</p>
                </header>

                <main>
                    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <p className="text-lg mb-4">
                            FaceGov is your launchpad for political activism and transparency across the globe.
                        </p>
                        <p className="text-lg font-semibold mb-4">
                            The mission? Empowering everyday people to become informed, connected, and influential advocates, while fostering political accountability."
                        </p>
                    </section>

                    <section className="bg-blue-100 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-blue-800">Here's how FaceGov can help change the game:</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><span className="font-semibold">Decoding Politics:</span> We break down complex
                                legislation into bite-sized, actionable intel.
                            </li>
                            <li><span className="font-semibold">Debate Arena:</span> Engage in high-octane policy
                                discussions that actually make a difference.
                            </li>
                            <li><span className="font-semibold">Power Tracker:</span> Keep tabs on your representatives'
                                every move and vote.
                            </li>
                            <li><span className="font-semibold">Direct Democracy:</span> Blast through bureaucratic
                                barriers and speak directly to decision-makers.
                            </li>
                        </ul>
                    </section>

                    <section className="bg-green-100 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-green-800">FaceGov is your ultimate toolkit
                            for:</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Organizing grassroots movements that shake the foundations of power</li>
                            <li>Connecting with like-minded activists to amplify your impact</li>
                            <li>Accessing strategies and resources to turn your political passion into real-world
                                change
                            </li>
                        </ul>
                    </section>

                    <section className="text-center bg-yellow-100 rounded-lg p-6 mb-8">
                        <p className="text-xl mb-4">
                            Democracy is a team sport, and FaceGov is building a global league of political superstars.
                            Whether you're a seasoned activist or a newcomer ready to make waves, there's a place for
                            you in this worldwide revolution.
                        </p>
                    </section>
                </main>
            </div>
            <GetInvolvedForm/>
        </div>
    );
};

export default GetInvolvedPage;