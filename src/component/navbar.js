import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

const NavBar = ({ jumptoIndex }) => {
  return (
    <div className="navbar">
      <div className="navbar-socials">
        <a className="navbar-connect" href="https://gmail.com">
          <MailIcon color="#c5c3c3" fontSize="large" />
        </a>
        <a className="navbar-connect" href="https://github.com/SonnyJimm">
          <GitHubIcon color="#c5c3c3" fontSize="large" />
        </a>
        <a
          className="navbar-connect"
          href="https://www.linkedin.com/in/tserenpuntsagzorigt/"
        >
          <LinkedInIcon color="#c5c3c3" fontSize="large" />
        </a>
      </div>
      <div className="navbar-items">
        <div
          className="navbar-item"
          data-color="#4d39a6"
          onClick={() => jumptoIndex(1)}
        >
          Introduction
        </div>
        <div
          className="navbar-item"
          data-color="#0f1a5b"
          onClick={() => jumptoIndex(2)}
        >
          Experience
        </div>
        <div
          className="navbar-item"
          data-color="#6e0353"
          onClick={() => jumptoIndex(3)}
        >
          About Me
        </div>
        <div
          className="navbar-item"
          data-color="#2a0636"
          onClick={() => jumptoIndex(4)}
        >
          Contact & Resume
        </div>
      </div>
    </div>
  );
};
export default NavBar;
