function InformationPreview({ information }) {
  const { fullName, email, phone } = information;

  return (
    <section className="information-preview">
      <h1>{fullName || "Your Name"}</h1>
      <div className="contact-info">
        {<span>{email ? email : "email@example.com"}</span>}
        {<span>{phone ? phone : "123-555-5555"}</span>}
      </div>
    </section>
  );
}

export default InformationPreview;
