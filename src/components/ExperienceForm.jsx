function ExperienceForm({ experience, setExperience }) {
    function handleChange(e) {
        const { name, value } = e.target;

        setExperience({
            ...experience,
            [name]: value
        });
    }

    return (
        <section className="form">
            <h2>Work Experience</h2>

            <label>
                Job Name
                <input
                type="text"
                name="jobName"
                value={experience.jobName}
                onChange={handleChange}
                />
            </label>

            <label>
                Date Employed
                <input
                type="date"
                name="dateEmployed"
                value={experience.dateEmployed}
                onChange={handleChange}
                />
            </label>

            <label>
                Job Description
                <input
                type="text"
                name="jobDesc"
                value={experience.jobDesc}
                onChange={handleChange}
                />
            /</label>
        </section>
    )
}

export default ExperienceForm;