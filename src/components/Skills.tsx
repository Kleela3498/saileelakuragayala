import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Languages & Core",
      color: "cyan",
      skills: ["Python", "R", "C++", "JavaScript", "SQL", "TypeScript", "CUDA"]
    },
    {
      title: "ML/DL Frameworks", 
      color: "magenta",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Hugging Face", "Keras"]
    },
    {
      title: "Computer Vision",
      color: "green", 
      skills: ["OpenCV", "YOLO", "MediaPipe", "Image Segmentation", "Object Detection"]
    },
    {
      title: "Cloud",
      color: "orange",
      skills: ["SageMaker", "GCP Vertex AI", "Docker", "Kubernetes", "Terraform", "MLflow"]
    },
    {
      title: "NLP & LLMs",
      color: "purple",
      skills: ["LangChain", "spaCy", "NLTK", "RAG/CAG/KAG", "Transformers", "GPT", "BERT"]
    },
    {
      title: "Web Development", 
      color: "yellow",
      skills: ["React", "Node.js", "FastAPI", "Flask", "REST APIs", "GraphQL", "MongoDB"]
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
