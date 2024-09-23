import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div>
            <header>
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-600 tracking-tight">FaceGov
                    Mission Statement</h1>
            </header>

            <main>
                <article>
                    <p>In a world increasingly shaped by filtered information and political rhetoric, FaceGov stands as
                        a beacon
                        of transparency and accountability. Our mission is to cut through the noise of social media echo
                        chambers and
                        combat political hypocrisy,
                        empowering citizens with unfiltered, fact-based insights into the political landscape. We strive
                        to:</p>

                    <section>
                        <h3>Our Key Objectives</h3>
                        <div className="mission-point">1. Disrupt information bubbles by providing a comprehensive,
                            unbiased
                            platform that transcends the limitations of traditional social media algorithms.
                        </div>

                        <div className="mission-point">2. Illuminate the political spectrum by offering clear,
                            comparative
                            visualizations of politicians' stances, voting records, and actions across parties and
                            nations.
                        </div>

                        <div className="mission-point">3. Expose discrepancies between political rhetoric and action,
                            holding
                            leaders accountable for their promises and public statements.
                        </div>

                        <div className="mission-point">4. Cultivate a new generation of political engagement by offering
                            a
                            platform where aspiring politicians can showcase their programs and ideas, subject to the
                            same rigorous
                            fact-checking as established figures.
                        </div>

                        <div className="mission-point">5. Bridge the gap between citizens and their representatives by
                            facilitating direct interaction and feedback on political programs, free from the
                            distortions of media
                            intermediaries.
                        </div>

                        <div className="mission-point">6. Uphold the integrity of political discourse through rigorous,
                            fact-based
                            assessments of proposed policies, their potential impacts, and their alignment with
                            politicians' past
                            actions.
                        </div>

                        <div className="mission-point">7. Democratize access to political information, ensuring that
                            every citizen
                            has the tools to make educated choices in elections, unencumbered by misinformation or
                            selective
                            presentation.
                        </div>

                        <div className="mission-point">8. Promote a culture of political authenticity by rewarding
                            consistency and
                            honest communication, while highlighting instances of hypocrisy or misleading statements.
                        </div>

                        <div className="mission-point">9. Provide a historical record of political positions and
                            actions, allowing
                            citizens to track the evolution of politicians' stances over time and in different contexts.
                        </div>
                    </section>

                    <section>
                        <h3>Our Vision for Democracy</h3>
                        <p>By fulfilling this mission, FaceGov aims to restore trust in democratic institutions,
                            increase
                            political transparency, and nurture a more engaged, critically thinking citizenry. We
                            believe that by
                            presenting unfiltered facts and comprehensive comparisons, we can help create a political
                            environment
                            where authenticity is valued and informed decision-making thrives.</p>
                    </section>
                </article>
            </main>

            <div id="infoBox">
                <span id="closeInfo">&times;</span>
                <p id="infoContent"></p>
            </div>
            <script src="asset/js/facegov-mission-statement.js"></script>
        </div>
    );
};

export default AboutPage;
