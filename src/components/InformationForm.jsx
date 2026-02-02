function InformationForm({ general, setInformation }) {
  function handleChange(e) {
    const { name, value } = e.target;

    setInformation(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <section>
      <h2>General Information</h2>

      <label>
        Full Name
        <input
          type="text"
          name="fullName"
          value={general.fullName}
          onChange={handleChange}
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={general.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Phone
        <input
          type="tel"
          name="phone"
          value={general.phone}
          onChange={handleChange}
        />
      </label>
    </section>
  );
}

export default InformationForm;
