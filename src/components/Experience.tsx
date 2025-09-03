import React, { useEffect } from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.experience-item');
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          item.classList.add('visible');
        } else {
          item.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: "Software Engineer",
      company: "S & S Fashions Inc.",
      period: "Aug 2025 - Present",
      duration: "1 month",
      employmentType: "Full-Time",
      description: [
        "Designed and maintained scalable web applications with focus on performance, reliability, and security for wholesale apparel operations.",
        "Collaborated with the AI team to integrate AI-driven solutions into workflows, enhancing automation and operational efficiency.",
        "Contributed to the digital transformation of e-commerce systems, aligning software with real-world business needs.",
        "Gained hands-on experience with Python, cloud technologies, and DevOps practices including version control, testing, and CI/CD pipelines.",
        "Participated in code reviews, debugging, and deployment processes under senior mentorship to reinforce industry best practices."
      ]
    },
    {
      title: "Software Development Engineer",
      company: "DBS Bank Ltd.",
      companyLogo: "/assets/DBSlogo.jpg",
      period: "Aug 2022 - Nov 2023",
      duration: "1 year 4 months",
      employmentType: "Full-Time",
      description: [
        "Designed and built a scalable feature for a multi-tiered test automation platform that orchestrated 50,000+ distributed workflows with real-time monitoring, aligning with cloud integration standards to enhance customer onboarding and system reliability using Python.",
        "Engineered distributed indexing and traceability systems to improve search result accuracy and enable real-time diagnostics, reducing debugging latency by 35% and reinforcing mission-critical data integrity.",
        "Implemented a scalable Redis caching layer that lowered database query loads by 60%, bolstering performance for real-time customer-facing analytics in high traffic cloud environments.",
        "Guided junior engineers in agile methodologies and Scrum practices, standardizing user story creation which reduced inconsistencies by 30% and supported cross-team collaboration."
      ]
    },
    {
      title: "Software Development Engineer",
      company: "Ericsson Inc.",
      period: "Mar 2022 - Aug 2022",
      duration: "6 months",
      employmentType: "Full-Time",
      description: [
        "Revamped internal dashboards using React and JavaScript, Tailwind CSS, enhancing mobile responsiveness, usability, and accessibility to drive improved customer engagement and smooth integration in cloud interfaces.",
        "Refactored legacy monoliths into modular, scalable microservices to streamline feature development cycles by 20%, demonstrating strong distributed systems design and system integration capabilities.",
        "Integrated Jest and Cypress within CI/CD pipelines, elevating automated test coverage by 40% and mitigating pre-deployment regression bugs, ensuring reliable production deployments."
      ]
    },
    {
      title: "Software Engineering",
      company: "Creatik Solutions.",
      period: "Nov 2018 - May 2019",
      duration: "7 months",
      employmentType: "Full-Time",
      description: [
        "Developed modular and testable UI components according to stakeholder requirements to enhance customer experience while ensuring system consistency in multi-cloud contexts.",
        "Optimized frontend architecture through techniques such as lazy loading and code minification, achieving a 22% reduction in bounce rate and improved mobile page speed—a contribution towards scalable system performance.",
        "Integrated feature toggles and analytics into dashboards to facilitate data-driven enhancements and A/B testing, supporting iterative product improvements in a cloud-native development environment."
      ]
    }
  ];

  return (
    <>
      <head>
        <title>Sai Leela Kuragayala | Software Engineer NYC</title>
        <meta name="description" content="Sai Leela Kuragayala - Experienced Software Engineer specializing in scalable systems, cloud-native architectures, and modern web development. Available for hire in NYC." />
        <meta name="keywords" content="Sai Leela Kuragayala, Sai Leela, Leela, Software Engineers NYC, Software Engineers for Hire, Software Engineer NYC, Hire Software Engineers" />
        <meta name="author" content="Sai Leela Kuragayala" />
      </head>
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="experience-content">
                  <div className="experience-header">
                    <h3 className="experience-title">{exp.title}</h3>
                    {index % 2 !== 0 && (
                      <div className="experience-additional-info">
                        <div className="employment-type">{exp.employmentType}</div>
                        <div className="employment-duration">{exp.duration}</div>
                      </div>
                    )}
                  </div>
                  {exp.companyLogo ? (
                    <div className="experience-company-logo">
                      <img src={exp.companyLogo} alt={exp.company} />
                    </div>
                  ) : (
                    <h4 className="experience-company">{exp.company}</h4>
                  )}
                  <span className="experience-period">{exp.period}</span>
                  <ul className="experience-description">
                    {exp.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="experience-marker"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
