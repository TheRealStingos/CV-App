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
            Years Attended
            <input
                type="date"
                name="years"
                value={education.years}
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

