function InformationForm({ information, setInformation }) {
  function formatPhone(value) {
  const digits = value.replace(/\D/g, "");

  const trimmed = digits.slice(0, 10);

  if (trimmed.length <= 3) return trimmed;
  if (trimmed.length <= 6)
    return `${trimmed.slice(0, 3)}-${trimmed.slice(3)}`;

  return `${trimmed.slice(0, 3)}-${trimmed.slice(3, 6)}-${trimmed.slice(6)}`;
}

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "phone") {
      setInformation({
        ...information,
        phone: formatPhone(value),
      });
      return;
    }

    setInformation({
      ...information,
      [name]: value,
    });
  }

  return (
    <section className="form">
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
