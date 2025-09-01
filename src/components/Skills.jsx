const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-cards">
        <div className="card">
          <h3>Frontend</h3>
          <ul>
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>

        <div className="card">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="card">
          <h3>Tools</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Postman</li>
            <li>Nodemailer</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;




