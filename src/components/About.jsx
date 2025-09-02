const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Left: Profile Photo */}
        <div className="about-photo">
          <img src="/new-one.jpg" alt="Merin K" />
        </div>

        {/* Right: About Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi 👋 I’m <strong>Merin K</strong>, a MERN Full Stack Developer with expertise in 
            React.js, Node.js, Express.js, and MongoDB. I love building scalable web 
            applications, solving real-world problems, and continuously learning new 
            technologies.
          </p>
          <p>
            Currently, I’m focusing on mastering full-stack development and 
            building projects like <em>Concert Booking App</em>,<em>Portfolio Website</em> 
            .
          </p>

          {/* Resume Download Button */}
          <div className="resume-container">
            <a href="/MerinkResume (1)[1].pdf" download="Merin_K_Resume.pdf" className="resume-btn">
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
