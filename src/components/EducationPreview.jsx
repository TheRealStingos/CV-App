function EducationPreview({ education }) {
    const { school, start, end, major } = education;

    return (
        <section className="education-preview">
            <div className="section-row">
                <h1 className="section-header">Education</h1>
                <div className="years-attended">
                    {start && <span>{start}</span>}
                    {start && end && <span className="date-separator"> - </span>}
                    {end && <span>{end}</span>}
                </div>
            </div>

            <div className="education-header">
                <h2>
                    {school || "School Name"}
                    {major && <span className="separator"> | </span>}
                    {major || "Major"}
                </h2>
                </div>
        </section>
    );
}

export default EducationPreview;