import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-card">
            <div className="about-text">
              <p>
                I'm a <span className="highlight-purple">Software Engineer</span> with <span className="highlight-green">2+ years</span> of experience building <span className="highlight-cyan">distributed, cloud-native systems</span> and <span className="highlight-orange">scalable architectures</span>. I hold an <span className="highlight-magenta">MS in Information Systems</span> (May 2025, NJIT, <span className="highlight-green">GPA 3.65</span>) and have delivered mission-critical platforms that support <span className="highlight-yellow">50K+ automated workflows</span>, reduce debugging latency by <span className="highlight-green">35%</span>, and cut database load by <span className="highlight-green">60%</span> with <span className="highlight-cyan">Redis caching</span>.
              </p>
              <p>
                My background spans <span className="highlight-purple">Python</span>, <span className="highlight-orange">Java</span>, <span className="highlight-yellow">JavaScript</span>, <span className="highlight-cyan">React</span>, <span className="highlight-magenta">Django</span>, <span className="highlight-green">Flask</span>, <span className="highlight-purple">PostgreSQL</span>, <span className="highlight-orange">MongoDB</span>, <span className="highlight-cyan">AWS</span>, and <span className="highlight-yellow">Kubernetes</span>, enabling me to design end-to-end solutions that merge backend reliability with modern frontends. I've contributed to <span className="highlight-cyan">real-time monitoring at DBS Bank</span>, <span className="highlight-purple">cloud dashboards at Ericsson</span>, and now, as a <span className="highlight-orange">Software Engineering Intern at S & S Fashions Inc.</span>, I'm applying <span className="highlight-magenta">AI and cloud integration</span> to e-commerce systems.
              </p>
              <p>
                Recognized with <span className="highlight-yellow">1st Place at the DBS Hackathon</span> and the <span className="highlight-green">Super Techie Award</span>, I continue to push boundaries through active participation in the <span className="highlight-purple">OpenAI Hackathon</span> and <span className="highlight-cyan">Tableau Next Hackathon</span>, where I focus on building impactful, AI-driven solutions.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>50K+</h3>
                <p>Automated Workflows</p>
              </div>
              <div className="stat">
                <h3>60%</h3>
                <p>DB Load Reduced</p>
              </div>
              <div className="stat">
                <h3>1st</h3>
                <p>Place DBS Hackathon</p>
              </div>
              <div className="stat">
                <h3>Super</h3>
                <p>Techie Award</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              {/* Add your professional photo here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
