
import { useState, useEffect } from 'react';

interface SkillCardProps {
  name: string;
  icon: string;
  delay: number;
}

const SkillCard = ({ name, icon, delay }: SkillCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`skill-card transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <img src={icon} alt={name} className="w-12 h-12 object-contain mb-3" />
      <p>{name}</p>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: "/icons/java.svg" },
        { name: "Python", icon: "/icons/python.svg" },
        { name: "HTML", icon: "/icons/html.svg" },
        { name: "CSS", icon: "/icons/css.svg" },
      ]
    },
    {
      title: "Technologies",
      skills: [
        { name: "Data Structures", icon: "/icons/data-structure.svg" },
        { name: "Algorithms", icon: "/icons/algorithm.svg" },
        { name: "GCP", icon: "/icons/gcp.svg" },
        { name: "AWS", icon: "/icons/aws.svg" },
        { name: "Virtual Machines", icon: "/icons/vm.svg" },
      ]
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git", icon: "/icons/git.svg" },
        { name: "GitHub", icon: "/icons/github.svg" },
        { name: "Firebase", icon: "/icons/firebase.svg" },
        { name: "DevOps", icon: "/icons/devops.svg" },
        { name: "VS Code", icon: "/icons/vscode.svg" },
        { name: "IntelliJ IDEA", icon: "/icons/intellij.svg" },
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "Large Language Models", icon: "/icons/llm.svg" },
      ]
    },
    {
      title: "Operating Systems",
      skills: [
        { name: "Windows", icon: "/icons/windows.svg" },
        { name: "Ubuntu Linux", icon: "/icons/ubuntu.svg" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            My Skills
          </h2>
          <div 
            className={`w-20 h-1 gradient-bg mx-auto mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          ></div>
          <p 
            className={`text-white/80 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Here are the technical skills I've developed throughout my journey in computer science and AI/ML.
          </p>
        </div>
        
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-6 gradient-text inline-block">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skillIndex}
                    name={skill.name}
                    icon={skill.icon}
                    delay={(categoryIndex * 150) + (skillIndex * 100)}
                  />
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
