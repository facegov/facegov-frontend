import React from 'react';
import GetInvolvedForm from "@/pages/getInvolved/components/GetInvolvedForm";
import {useTranslation} from 'react-i18next';
import RightSidebar from "@/components/RightSidebar";


const GetInvolvedPage: React.FC = () => {
    const {t} = useTranslation();
    return (
        <div>
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">{t("gi-t")}</h1>
                <p className="text-xl text-gray-700">{t("gi-st")}</p>
            </header>
            <div className="container mx-auto mt-6 px-4 md:px-0 flex flex-col md:flex-row">

                <main>
                    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <p className="text-lg mb-4">
                            FaceGov is where everyday citizens become the political leaders of tomorrow.
                        </p>
                        <p className="text-lg font-semibold mb-4">
                            Our mission? Empowering you to discover authentic representatives from your community,
                            validate the information you receive, and ensure your voice shapes the future of democracy.
                        </p>
                    </section>

                    <section className="bg-blue-100 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-blue-800">Transform Democracy From the Ground Up:</h2>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><span className="font-semibold">🌟 Discover Tomorrow's Leaders:</span> Find authentic representatives from your own community—neighbors, teachers, local business owners who understand your daily struggles and share your values.
                            </li>
                            <li><span className="font-semibold">🔍 Cut Through the Noise:</span> Validate political claims with our fact-checking community. Get verified information from trusted local sources you can count on.
                            </li>
                            <li><span className="font-semibold">📢 Amplify Your Voice:</span> Share your solutions, debate policies, and ensure your concerns reach the people making decisions. Every voice counts.
                            </li>
                            <li><span className="font-semibold">🏛️ Build a Better Political Class:</span> Support grassroots candidates who represent real change. Connect with emerging leaders before they become household names.
                            </li>
                        </ul>
                    </section>

                    <section className="bg-green-100 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-green-800">Connect & Organize for Real Impact:</h2>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><span className="font-semibold">Private Conversations:</span> Have meaningful one-on-one discussions with fellow citizens and emerging leaders who share your vision</li>
                            <li><span className="font-semibold">Public Forums:</span> Join open discussions about policies, candidates, and issues that matter to your community</li>
                            <li><span className="font-semibold">Trending Topics:</span> Stay updated on the most discussed political issues and emerging conversations that are shaping the future</li>
                            <li><span className="font-semibold">Grassroots Movements:</span> Organize and support local initiatives that create lasting change from the community level up</li>
                        </ul>
                    </section>

                    <section className="text-center bg-yellow-100 rounded-lg p-6 mb-8">
                        <p className="text-xl mb-4 font-semibold">
                            Ready to Make Democracy Work for Everyone?
                        </p>
                        <p className="text-lg mb-4">
                            Join thousands of citizens who are already reshaping politics from the ground up.
                            Whether you're ready to run for local office, support emerging leaders, or simply want
                            your voice heard on the issues that matter most—there's a place for you here.
                        </p>
                        <p className="text-lg italic text-gray-700">
                            Because the best representatives aren't born in boardrooms—they're raised in communities like yours.
                        </p>
                    </section>
                    <GetInvolvedForm/>
                </main>
                <RightSidebar/>

            </div>
        </div>
    );
};

export default GetInvolvedPage;