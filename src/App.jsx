import { useState } from "react";
import InformationForm from "./components/InformationForm";
import InformationPreview from "./components/InformationPreview";
import EducationForm from "./components/EducationForm";
import EducationPreview from "./components/EducationPreview";

function App() {
  const [information, setInformation] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  return (
    <main className="app">
      <section className="editor">
        <InformationForm
          information={information}
          setInformation={setInformation}
        />
      </section>

      <section className="preview">
        <InformationPreview information={information} />
      </section>
    </main>
  );
}

export default App;
