function EducationPreview({ education }) {
    const { school, start, end, major } = education;

    return (
        <section className="education-preview">
            <h1>{school || "School Name"}</h1>

        <div className="years-attended">
            {start && <span>{start}</span>}
            {end && <span>{end}</span>}
        </div>

        <div className="major">
            <h3>{major || "Major"}</h3>
        </div>
        </section>
    );
}

export default EducationPreview;