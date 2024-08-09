import React, { useEffect } from "react";
import Hero from "./hero/hero";
import BigImage from "./big-image/big-image";
import { usePersonContext } from "../../../context/person/person-context";
import "./home.scss";
import Experience from "./experience/experience";
import ExperienceState from "../../../context/experience/experience-state";
import TrustState from "../../../context/trust/trust-state";
import Education from "./education/education";
import Skills from "./skills/skills";

const Home = () => {
  const personContext = usePersonContext();

  useEffect(() => {
    personContext.getPerson();
  }, [personContext]);

  const { person } = personContext;

  return (
    <>
      {person && (
        <>
          <Hero person={person} />
          <BigImage />
        </>
      )}
      <ExperienceState>
        <Experience />
      </ExperienceState>

      <TrustState>
        {/* <Trust/> */}
        <div id="modal-screen" />
        <div className="container pb-5 pb-lg-6">
          <div className="row">
            <div className="col-lg-6">
              <Education />
            </div>
            <div className="col-lg-5 ml-auto">
              <Skills />
            </div>
          </div>
        </div>
      </TrustState>
    </>
  );
};

export default Home;
