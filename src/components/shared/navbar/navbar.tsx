import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { NavLink, useLocation } from "react-router-dom";
import PersonContext from "../../../context/person/person-context";
import { downloadResource } from "../../../utils/fetches";
import "./navbar.scss";

const Navbar = () => {
  const location = useLocation();
  const scrollPos = useRef(0);
  const [navActive, setNavActive] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isBgTransparent, setIsBgTransparent] = useState(false);
  const personContext = useContext(PersonContext);
  const {
    person: { cvLink, resumeLink },
    loading,
  } = personContext;
  const [pdfDownloadLink, setPdfDownloadLink] = useState(null);

  const handleScroll = useCallback(() => {
    setIsHide(
      scrollPos.current < window.pageYOffset && window.pageYOffset > 50
    );
    scrollPos.current = window.pageYOffset;
  }, []);

  const setPdfLink = useCallback(async () => {
    const link = await downloadResource(resumeLink);
    setPdfDownloadLink(link);
  }, [resumeLink]);

  useEffect(() => {
    personContext.getPerson();
    window.addEventListener("scroll", handleScroll);
    setPdfLink();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setPdfLink, handleScroll, personContext]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsHome(location.pathname === "/");
    setIsBgTransparent(location.pathname === "/contact");
    setNavActive(false);
  }, [location.pathname]);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <React.Fragment>
      <div
        className={`navigation
                           ${isBgTransparent ? "" : "bg-white"}
                           ${isHide ? "hide" : ""}
                         `}
        id="top-nav-div"
      >
        <div className="container py-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center ml-auto">
              <div className={`mr-5 ${isHome ? "d-none" : ""}`}>
                {cvLink && (
                  <a
                    id="resume-dl-link"
                    href={pdfDownloadLink}
                    download="Matthew Barnes - Resume.pdf"
                    style={{ textDecoration: "None" }}
                    className={`link-styled ${isBgTransparent ? "alt" : ""}`}
                  >
                    <span className="d-none d-md-inline">Download</span> CV
                  </a>
                )}
              </div>
              <div className="nav-toggle" />
            </div>
          </div>
        </div>
      </div>

      <div className={`side-nav ${navActive ? "active" : ""}`}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="close" onClick={() => setNavActive(false)} />
      </div>
    </React.Fragment>
  );
};

export default Navbar;
