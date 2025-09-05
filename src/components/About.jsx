const About = () => {
    const sectionClass = "section about";
    const name = "Yewon Choi";
    const subtitle = "CGT ";

    return (
        <section className={sectionClass}>
            <h2>About</h2>
            <p><strong>{name}</strong> — {subtitle}</p>
        </section>
    );
    };

    export default About;
