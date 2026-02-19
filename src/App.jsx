import { useState } from "react";
import InformationForm from "./components/InformationForm";
import InformationPreview from "./components/InformationPreview";
import EducationForm from "./components/EducationForm";
import EducationPreview from "./components/EducationPreview";
import ExperienceForm from "./components/ExperienceForm";
import ExperiencePreview from "./components/ExperiencePreview";
import "./App.css";

function App() {
  const [cv, setCV] = useState({
    information: {
      fullName: "",
      email: "",
      phone: "",
    },
    education: [],
    experience: [],
  });

  function updateInformation(updatedInformation) {
    setCV(prev => ({
      ...prev,
      information: updatedInformation,
    }));
  }

  function updateEducation(updatedEducation) {
    setCV(prev => ({
      ...prev,
      education: updatedEducation,
    }));
  }

  function updateExperience(updatedExperience) {
    setCV(prev => ({
      ...prev,
      experience: updatedExperience,
    }));
  }

  return (
    <main className="app">
      <section className="editor">
        <InformationForm
          information={cv.information}
          setInformation={updateInformation}
        />

        <EducationForm
          education={cv.education}
          setEducation={updateEducation}
        />

        <ExperienceForm
          experience={cv.experience}
          setExperience={updateExperience}
        />
      </section>

      <section className="preview">
        <div>
          <InformationPreview information={cv.information} />
          <EducationPreview education={cv.education} />
          <ExperiencePreview experience={cv.experience} />
        </div>
      </section>
    </main>
  );
}

export default App;
