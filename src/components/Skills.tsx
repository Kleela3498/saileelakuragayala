import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages & Core",
      color: "cyan",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "GO", "SQL"]
    },
    {
      title: "Web Development & Frameworks",
      color: "yellow",
      skills: ["React.js", "Angular", "Node.js", "Flask", "Django", "FastAPI", "GraphQL", "REST APIs", "Tailwind CSS", "SEO"]
    },
    {
      title: "Databases & Data Management",
      color: "green",
      skills: ["PostgreSQL", "MongoDB", "SQLite", "Redis", "PyMongo", "Database Management", "Tableau", "Scalable Architecture"]
    },
    {
      title: "Cloud & DevOps",
      color: "orange",
      skills: ["AWS (Lambda, CloudWatch, SageMaker, QuickSight)", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "MLflow", "CI/CD Pipelines", "Serverless Computing"]
    },
    {
      title: "Machine Learning, DL & Computer Vision",
      color: "magenta",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "PyTorch", "Keras", "Hugging Face"]
    },
    {
      title: "NLP, LLMs & Data Analytics",
      color: "purple",
      skills: ["LangChain", "spaCy", "NLTK", "GPT", "BERT", "Pandas", "NumPy"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className={`skills-grid ${isVisible ? 'animate-in' : ''}`}>
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`skill-category ${category.color} ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className={`category-header ${category.color}`}>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
