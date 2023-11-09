import profile from "../IMG_9413.JPG";
const IntroPage = () => {
  return (
    <div className="page-wrapper">
      <h1 className="page-header">Introduction</h1>
      <div className="page-intro">
        <img className="page-intro-profile" src={profile} alt="profile" />
        <div className="page-intro-content">
          <div>
            My name is Tserenpuntsag Zorigt (Jimmy). Im a fullstack developer
            with 2 years  of experience focusing on Back-end implementation. I
            enjoy experimenting with all layers of the stack.
          </div>
        </div>
      </div>
      <div className="page-content">
        <h2>Skillset</h2>
        <div>Programming languages</div>
        <p className="skill-items">
          <span className="skill-item">Golang</span>
          <span className="skill-item">Ruby</span>
          <span className="skill-item">JavaScript</span>
          <span className="skill-item">Java</span>
          <span className="skill-item">Python</span>
        </p>
        <div>Frameworks</div>
        <p className="skill-items">
          <span className="skill-item">GoFiber</span>
          <span className="skill-item">Ruby on Rails</span>
          <span className="skill-item">Spring Boot</span>
          <span className="skill-item">Flask</span>
        </p>
        <div>Libraries</div>
        <p className="skill-items">
          <span className="skill-item">React</span>
          <span className="skill-item">React Native</span>
        </p>
        <div>Database</div>
        <p className="skill-items">
          <span className="skill-item">SQL</span>
          <span className="skill-item">Postgresql</span>
          <span className="skill-item">MySQL</span>
          <span className="skill-item">NoSQL</span>
          <span className="skill-item">MongoDB</span>
        </p>
        <div>What Can I offer</div>
        <p>
          I can offer a strong problem solving skill, good communication,
          ability to work within a team, flexible skill set in both front end
          and back end technologies
        </p>
      </div>
    </div>
  );
};
export default IntroPage;
