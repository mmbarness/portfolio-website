import React, { useReducer } from "react";
import PersonContext from "./person-context";
import PeopleReducer from "./person-reducer";
import { GET_PERSON, Person, SET_LOADING } from "../types";

const PersonState = ({ children }: { children: React.ReactNode }) => {
  const initialState = {
    dispatch: () => {},
    getPerson: async () => {},
    loading: false,
    person: {} as Person,
  };

  const [state, dispatch] = useReducer(PeopleReducer, initialState);

  const getPerson = async () => {
    if (state.person) return;
    dispatch({
      type: GET_PERSON,
      payload: {
        name: "Matthew Barnes",
        birthDate: "Apr 14, 1993",
        country: "United States",
        city: "Brooklyn",
        languages: "English",
        img: "/assets/img/I5q0uZFp8UQ.jpg",
        avatar: "/assets/img/user.png",
        position: "fullstack engineer",
        heroText:
          "I'm Matthew Barnes. Fullstack engineer with frontend leanings. Former bartender and server in New York hospitality, so I like going to restaurants almost as much as I like to code",
        cvLink: "/assets/img/cv.png",
        phone: "3152129076",
        email: "011mbarnes@gmail.com",
        resumeLink: "https://portfolio-yep.s3.amazonaws.com/resume.pdf",
        social: [
          {
            id: 1,
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/matthew-barnes-61162b64/",
          },
          {
            id: 2,
            title: "GitHub",
            link: "https://github.com/mmbarness/",
          },
        ],
        achievements: [null],
      },
    });
  };

  return (
    <PersonContext.Provider
      value={{
        person: state.person,
        loading: state.loading,
        getPerson,
      }}
    >
      {children}
    </PersonContext.Provider>
  );
};

export default PersonState;
