import { useState } from "react";
import InformationForm from "./components/InformationForm";
import InformationPreview from "./components/InformationPreview";
import EducationForm from "./components/EducationForm";
import EducationPreview from "./components/EducationPreview";
import ExperienceForm from "./components/ExperienceForm";
import ExperiencePreview from "./components/ExperiencePreview";

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
