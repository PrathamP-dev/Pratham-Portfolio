
import { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

interface TimelineItemProps {
  isLeft: boolean;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  isVisible: boolean;
}

const TimelineItem = ({ 
  isLeft, 
  title, 
  subtitle, 
  date, 
  description, 
  icon,
  isVisible
}: TimelineItemProps) => (
  <div className={`flex items-stretch w-full mb-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
    <div className="hidden md:block w-1/2"></div>
    
    <div className="mx-auto md:mx-0 w-px bg-gradient-to-b from-portfolio-accent1 to-portfolio-accent2 relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
        {icon}
      </div>
    </div>
    
    <div 
      className={`w-full md:w-1/2 px-4 py-3 transition-all duration-700 transform ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : `opacity-0 ${isLeft ? 'translate-x-10' : '-translate-x-10'}`
      }`}
    >
      <div className="p-6 rounded-lg glass-card hover:border-portfolio-accent1 transition-all duration-300">
        <span className="text-sm text-white/60 mb-1 block">{date}</span>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <h4 className="text-white/80 font-medium mb-3">{subtitle}</h4>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('experience');
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

  const workExperience = [
    {
      title: "Google Cloud Community India",
      subtitle: "Arcade Facilitator",
      date: "June 2024 - Present",
      description: "Organized events and workshops, boosting participation by 30%. Contributed to discussions and collaborated on Google Cloud solutions.",
      icon: <Briefcase size={20} className="text-white" />
    },
    {
      title: "Google",
      subtitle: "Associate Cloud Engineer",
      date: "September 2024 - November 2024",
      description: "Successfully completed Google Cloud Certified Associate Cloud Engineer program.",
      icon: <Briefcase size={20} className="text-white" />
    }
  ];

  const education = [
    {
      title: "Sharda University",
      subtitle: "B.Tech in Computer Science (AIML)",
      date: "2022 - 2026",
      description: "Specializing in Artificial Intelligence and Machine Learning.",
      icon: <GraduationCap size={20} className="text-white" />
    },
    {
      title: "HarvardX CS50",
      subtitle: "Computer Science",
      date: "2023",
      description: "Completed the comprehensive introduction to computer science principles and programming.",
      icon: <GraduationCap size={20} className="text-white" />
    },
    {
      title: "Central Board of Secondary Education",
      subtitle: "Senior Secondary School",
      date: "2020 - 2022",
      description: "Completed senior secondary education with focus on science and mathematics.",
      icon: <GraduationCap size={20} className="text-white" />
    },
    {
      title: "St. Peter's College",
      subtitle: "Elementary School",
      date: "2008 - 2020",
      description: "Completed elementary and junior secondary education.",
      icon: <GraduationCap size={20} className="text-white" />
    }
  ];

  const certifications = [
    {
      title: "Google Cloud",
      subtitle: "Generative AI Badge",
      date: "2024",
      description: "Certification for proficiency in Generative AI on Google Cloud.",
      icon: <Award size={20} className="text-white" />
    },
    {
      title: "Google",
      subtitle: "Introduction to Responsible AI",
      date: "2024",
      description: "Badge for understanding the principles of responsible AI development.",
      icon: <Award size={20} className="text-white" />
    },
    {
      title: "Microsoft",
      subtitle: "Fundamental AI Concepts",
      date: "2023",
      description: "Certification for understanding the foundational concepts in AI.",
      icon: <Award size={20} className="text-white" />
    },
    {
      title: "Google",
      subtitle: "Fundamentals of Machine Learning",
      date: "2023",
      description: "Certification for machine learning fundamentals and implementation.",
      icon: <Award size={20} className="text-white" />
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Experience & Education
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
            My professional journey, educational background, and certifications.
          </p>
        </div>
        
        {/* Work Experience */}
        <div className="mb-16">
          <h3 
            className={`text-2xl font-semibold mb-8 gradient-text inline-block transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Work Experience
          </h3>
          
          <div className="relative">
            {workExperience.map((item, index) => (
              <TimelineItem
                key={index}
                isLeft={index % 2 === 0}
                title={item.title}
                subtitle={item.subtitle}
                date={item.date}
                description={item.description}
                icon={item.icon}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
        
        {/* Education */}
        <div className="mb-16">
          <h3 
            className={`text-2xl font-semibold mb-8 gradient-text inline-block transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Education
          </h3>
          
          <div className="relative">
            {education.map((item, index) => (
              <TimelineItem
                key={index}
                isLeft={index % 2 === 0}
                title={item.title}
                subtitle={item.subtitle}
                date={item.date}
                description={item.description}
                icon={item.icon}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div>
          <h3 
            className={`text-2xl font-semibold mb-8 gradient-text inline-block transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Certifications
          </h3>
          
          <div className="relative">
            {certifications.map((item, index) => (
              <TimelineItem
                key={index}
                isLeft={index % 2 === 0}
                title={item.title}
                subtitle={item.subtitle}
                date={item.date}
                description={item.description}
                icon={item.icon}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
