function ExperiencePreview({ experience }) {
    const { jobName, dateEmployed, jobDesc } = experience;

    return (
        <section className="experience-preview">
            <h1>{jobName || "Employer"}</h1>

            <h3>{dateEmployed || "Date Employed"}</h3>

            <div>
                <p className="job-desc">
                    {jobDesc || "Job Description"}
                </p>
            </div>
        </section>
    )
}

export default ExperiencePreview;