function ExperiencePreview({ experience }) {
    const { employer, dateEmployed, jobTitle, jobDesc } = experience;

    return (
        <section className="experience-preview">
            <h1 className="section-header">Experience</h1>
            <div className="section-row">
                <h2>{employer || "Employer"}</h2>

                <h3>{dateEmployed || "Date Employed"}</h3>
            </div>

            <div className="job-section">
                <h3>{jobTitle || "Job Title"}</h3>
                <p className="job-desc">
                    {jobDesc || "Job Description"}
                </p>
            </div>
        </section>
    )
}

export default ExperiencePreview;