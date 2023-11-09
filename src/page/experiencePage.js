const ExperiencePage = () => {
  return (
    <div className="page-wrapper">
      <h1 className="page-header">Professional Experience</h1>
      <div className="page-content">
        <div>Zamdaa LLC 2021-2022 Backend developer</div>
        <p>
          An online platform connecting car renters with car rental businesses
        </p>
        <ul className="page-experience-list-items">
          <li>
            Normalized previous database overhauled the relations of the tables,
            indexing search fields resulting 20% faster query time and
            eliminated the fields with overlapping responsibility on
            SQL(PostgreSQL).
          </li>
          <li>
            Engineered a RESTful API while implementing intricate business
            logics within backend. Integrated additional functionalities,
            including a robust mailing service powered by SendGrid, and
            seamlessly incorporated a third-party payment system, QPAY.
          </li>
          <li>
            Configured Nginx, containerized back end and front end using docker,
            deploying front end and back end to the production servers on AWS.
          </li>
          <li>
            Wrote Unit test for the business logics and API end points
            successfully prevented multiple bugs to reaching production
            environment.
          </li>
          <li>
            Implementing security features for the sensitive information’s to
            protect users privacy by generating short lived JWT token to
            retrieve the users detail. (Information’s such as users driver’s
            license cars, insurance details previously it was just an URL for
            providing picture it had no security measures).
          </li>
        </ul>
        <p className="skill-items">
          <span className="skill-item">Postgresql</span>
          <span className="skill-item">Golang</span>
          <span className="skill-item">GoFiber</span>
          <span className="skill-item">AWS</span>
          <span className="skill-item">Docker</span>
          <span className="skill-item">Rest API</span>
        </p>
        <div>Unimedia Solutions 2021 – 2021 Backend developer Intern</div>
        <p>
          Provides web marketing, web system development, and smartphone
          application development services.
        </p>
        <ul className="page-experience-list-items">
          <li>
            Spearheaded the development of a dynamic blog post platform during
            the internship, enabling users to submit multimedia content,
            including images and audio. Assumed ownership of the back-end
            service, excelling in the implementation of audio and image
            compression techniques, optimizing data storage efficiency and
            enhancing overall site performance.
          </li>
        </ul>
        <p className="skill-items">
          <span className="skill-item">Postgresql</span>
          <span className="skill-item">Ruby</span>
          <span className="skill-item">Ruby on rails</span>
          <span className="skill-item">AWS</span>
          <span className="skill-item">Docker</span>
          <span className="skill-item">Graphql</span>
        </p>
        <div>Odo EcoSystem 2020 – 2021 Software Developer Intern</div>
        <p>
          Provides web marketing, web system development, and smartphone
          application development services.
        </p>
        <ul className="page-experience-list-items">
          <li>
            Contributed in the development of a streamlined POS system enhancing
            cashier efficiency and customer service through collaborative
            contributions.
          </li>
          <li>
            Successfully implemented an image compression feature for user
            uploads significantly reducing data transfer times and enhancing the
            overall user experience.
          </li>
          <li>
            Contributed to the development of a robust API for the POS systems
            enabling seamless retrieval of data and efficient processing of
            sales taxes thereby ensuring accurate financial transaction
            compliance.
          </li>
        </ul>
        <p className="skill-items">
          <span className="skill-item">React</span>
          <span className="skill-item">React Native</span>
          <span className="skill-item">Python</span>
          <span className="skill-item">Flask</span>
        </p>
      </div>
    </div>
  );
};
export default ExperiencePage;
