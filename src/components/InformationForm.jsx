function InformationForm({ information, setInformation }) {
  function handleChange(e) {
    const { name, value } = e.target;

    setInformation({
      ...information,
      [name]: value,
    });
  }

  return (
    <section>
      <label>
        Full Name
        <input
          name="fullName"
          value={information.fullName}
          onChange={handleChange}
        />
      </label>

      <label>
        Email
        <input
          name="email"
          value={information.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Phone
        <input
          name="phone"
          value={information.phone}
          onChange={handleChange}
        />
      </label>
    </section>
  );
}

export default InformationForm;
