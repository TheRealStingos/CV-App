function InformationPreview({ information }) {
  const { fullName, email, phone } = information;

  return (
    <section className="information-preview">
      <h1>{fullName || "Your Name"}</h1>

      <div className="contact-info">
        {email && <span>{email}</span>}
        {phone && <span>{phone}</span>}
      </div>
    </section>
  );
}

export default InformationPreview;
