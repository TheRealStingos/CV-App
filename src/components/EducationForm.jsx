function EducationForm({education, setEducation}) {
    function handleChange(e) {
        const { name, value } = e.target;
        
        setEducation (prev => ({
            ...prev,
            [name]: value,
        }));
    }
    return (
    <section>
        <h2>Education</h2>
        <label>
            School Name
            <input
                type="text"
                name="school"
                value={education.school}
                onChange={handleChange}
            />
        </label>
        <label>
            Start Date
            <input
                type="month"
                name="start"
                value={education.start}
                onChange={handleChange}
            />
        </label>
         <label>
            Graduation Date
            <input
                type="month"
                name="end"
                value={education.end}
                onChange={handleChange}
            />
        </label>
        <label>
            Major
            <input
                type="text"
                name="major"
                value={education.major}
                onChange={handleChange}
            />
        </label>
    </section>
    );
}

export default EducationForm;

