
function About() {
    return (
        <main className="about-page">
            <section className="about-hero">
                <p className="about-label">ABOUT ROAMLY</p>

                <h2>Travel planning, made simple.</h2>

                <p>
                    Roamly helps you discover destinations, explore real-time weather,
                    and get inspired for your next adventure, all in one place.
                </p>
            </section>

            <section className="about-features">
                <article>
                    <h3><span>01</span> Discover</h3>
                    <p>
                        Search for destinations around the world and explore new places
                        to add to your travel list.
                    </p>
                </article>

                <article>
                    <h3><span>02</span> Plan</h3>
                    <p>
                        Get useful destination information and current weather conditions
                        to help you plan your trip.
                    </p>
                </article>

                <article>
                    <h3><span>03</span> Explore</h3>
                    <p>
                        Find beautiful destination imagery and turn your travel ideas
                        into your next adventure.
                    </p>
                </article>
            </section>

            <section className="about-tech">
                <h3>Built with modern web technologies</h3>

                <p>
                    Roamly is built with React, TypeScript, APIs, and modern web
                    development practices, with a focus on accessibility, performance,
                    and a smooth user experience.
                </p>
                <div className="tech-tags">
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>APIs</span>
                    <span>Accessibility</span>
                    <span>Performance</span>
                    <span>Testing</span>
                </div>
            </section>
        </main>
    );
}

export default About;

