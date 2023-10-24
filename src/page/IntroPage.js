import profile from "../IMG_9413.JPG";
const IntroPage = () => {
  return (
    <div>
      <h1 className="card-header">Introduction</h1>
      <div className="card-cs">
        <img className="pic" src={profile} alt="profile" />
        <div className="card-intro">
          <div>
            My name is Tserenpuntsag Zorigt (Jimmy). Im a fullstack developer
            with 2 years of experience focusing on Back-end implementation. I
            enjoy experimenting with all layers of the stack.
          </div>
        </div>
      </div>
      <div className="card-contentb">
        <h2>Skillset</h2>
        <div>Programming languages</div>
        <p className="skill-items">
          <div className="skill-item">Golang</div>
          <div className="skill-item">Ruby</div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">Java</div>
          <div className="skill-item">Python</div>
        </p>
        <div>Frameworks</div>
        <p className="skill-items">
          <div className="skill-item">GoFiber</div>
          <div className="skill-item">Ruby on Rails</div>
          <div className="skill-item">Spring Boot</div>
          <div className="skill-item">Flask</div>
        </p>
        <div>Libraries</div>
        <p className="skill-items">
          <div className="skill-item">React</div>
          <div className="skill-item">React Native</div>
        </p>
        <div>Database</div>
        <p className="skill-items">
          <div className="skill-item">SQL</div>
          <div className="skill-item">Postgresql</div>
          <div className="skill-item">MySQL</div>
          <div className="skill-item">NoSQL</div>
          <div className="skill-item">MongoDB</div>
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
