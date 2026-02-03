function EducationPreview({ education }) {
    const { school, years, major } = education;

    return (
        <section className="education-preview">
            <h1>{school || "School Name"}</h1>

        <div className="contact-info">
            {years && <span>{years}</span>}
            {major && <span>{major}</span>}
        </div>
        </section>
    );
}

export default EducationPreview;