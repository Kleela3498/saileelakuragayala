import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  // Combined array of all projects with active projects marked
  const allProjects = [
    {
      title: "Tableau Next Hackathon",
      description: "Currently participating in Tableau's hackathon, developing innovative data visualization solutions and analytics dashboards. Focus on creating impactful data storytelling experiences using Tableau's advanced features.",
      technologies: ["Tableau", "Data Visualization", "Analytics", "Dashboard Design"],
      image: "/assets/Tableau Next.png",
      liveLink: "https://tableau.devpost.com/?ref_feature=challenge&ref_medium=your-open-hackathons&ref_content=Submissions+open",
      githubLink: "#",
      type: "active"
    },
    {
      title: "OpenAI Hackathon",
      description: "Actively participating in OpenAI's hackathon, leveraging cutting-edge AI technologies to build innovative solutions. Exploring the potential of GPT models and AI integration in real-world applications.",
      technologies: ["OpenAI API", "GPT Models", "Python", "AI Integration", "Machine Learning"],
      image: "/assets/OpenAI_Logo.png",
      liveLink: "https://openai.devpost.com/?ref_feature=challenge&ref_medium=homepage-recommended-hackathons",
      githubLink: "#",
      type: "active"
    },
    {
      title: "NJIT Highlander Bot - Campus Assistant",
      description: "An intelligent campus assistant bot designed to help NJIT students navigate campus life, access information, and connect with university resources. Built during a hackathon to improve student experience and campus engagement.",
      technologies: ["Python", "NLP", "APIs", "Bot Framework", "Machine Learning"],
      image: "/assets/NJIT Highlander.jpg", // Corrected image reference
      liveLink: "https://devpost.com/software/njit-highlander-bot?ref_content=my-projects-tab&ref_feature=my_projects",
      githubLink: "#",
      type: "completed"
    },
    {
      title: "StockSentiment - AI-powered Stock Analysis",
      description: "Designed and deployed a full-stack application to extract, process, and visualize financial data from real-time and historic sources to help users analyze stock trends based on market sentiment. Developed sentiment analysis pipelines using NLP on 50,000+ news articles to generate directional stock forecasts with 60% accuracy.",
      technologies: ["Django", "Python", "NLP", "React", "PostgreSQL"],
      image: "/assets/StockSentiment.png",
      liveLink: "#",
      githubLink: "https://github.com/Kleela3498/stockprice",
      type: "completed"
    },
    {
      title: "Fuel 4 Fleet - Comprehensive Fuel Management Platform",
      description: "A full-suite fuel management solution for businesses and individuals. Features real-time gas price tracking, POS integration, loyalty programs, fleet management, analytics & reports, and B2B support. Positioned to compete with industry giants like WEX, Comdata, and Chevron by addressing key pain points in fuel management.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Real-time APIs", "Analytics"],
      image: "/assets/Fuel4Fleet.png",
      liveLink: "#",
      githubLink: "https://github.com/Kleela3498/fuel4fleet",
      type: "completed"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {allProjects.map((project, index) => {
                        // Assign unique neon colors cyclically to each project
            const colorThemes = ['purple', 'orange', 'red', 'cyan', 'kelly green'];
            const colorTheme = colorThemes[index % colorThemes.length];
            
            return (
            <div key={index} className={`project-card ${project.type === 'active' ? 'active' : ''} ${colorTheme}`}>
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`project-img ${project.title.includes('OpenAI') ? 'openai-logo' : ''}`} 
                />
              </div>
              <div className="project-content">
                <div className="project-title-container">
                  <h3 className="project-title">
                    {project.title}
                    {project.type === 'active' && (
                      <span className="active-indicator">
                        <span className="active-dot"></span>
                        Active
                      </span>
                    )}
                  </h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`tech-tag ${project.type === 'active' ? 'active' : ''} ${colorTheme}`}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveLink !== "#" && (
                    <a href={project.liveLink} className={`project-link live ${project.type === 'active' ? 'active' : ''} ${colorTheme}`} target="_blank" rel="noopener noreferrer">
                      {project.type === 'active' ? 'View Challenge' : 'Live Demo'}
                    </a>
                  )}
                  {project.githubLink !== "#" && (
                    <a href={project.githubLink} className={`project-link github ${project.type === 'active' ? 'active' : ''} ${colorTheme}`} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
