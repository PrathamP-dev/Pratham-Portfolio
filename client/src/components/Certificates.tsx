import { useState, useEffect } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import awsCloudFoundationsImg from '@assets/AWS_Academy_Graduate_-_Cloud_Foundations_1765732441555.png';
import awsCloudEssentialsImg from '@assets/aws-knowledge-cloud-essentials-training-badge_1765732441558.png';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  link?: string;
  delay: number;
  type: 'image' | 'pdf';
}

const CertificateCard = ({ title, issuer, date, image, link, delay, type }: CertificateCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`bg-white/5 border border-white/10 rounded-lg p-4 transition-all duration-700 transform hover:border-portfolio-accent1/50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex flex-col h-full">
        {type === 'image' && image && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-40 object-cover" />
          </div>
        )}
        {type === 'pdf' && (
          <div className="mb-4 h-40 bg-gradient-to-br from-portfolio-accent1/20 to-portfolio-accent2/20 rounded-lg flex items-center justify-center">
            <Award size={48} className="text-portfolio-accent1" />
          </div>
        )}
        <h4 className="text-lg font-medium mb-2">{title}</h4>
        <p className="text-white/70 text-sm mb-1">{issuer}</p>
        <p className="text-white/60 text-xs mb-4">{date}</p>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-auto flex items-center gap-1 text-portfolio-accent1 text-sm hover:underline"
          >
            View Certificate <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
};

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('certificates');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const certificates = [
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "AWS Academy",
      date: "November 24, 2025",
      image: awsCloudFoundationsImg,
      link: "https://www.credly.com/go/aFun1hpT",
      type: 'image' as const
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS Training & Certification",
      date: "December 23, 2024",
      type: 'pdf' as const
    },
    {
      title: "AWS Solutions Architect - Fundamentals of Architecting on AWS",
      issuer: "AWS Training & Certification",
      date: "December 14, 2025",
      type: 'pdf' as const
    },
    {
      title: "AWS Knowledge: Cloud Essentials",
      issuer: "AWS Training & Certification",
      date: "2024",
      image: awsCloudEssentialsImg,
      type: 'image' as const
    },
  ];

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Certifications
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
            Professional certifications and training credentials in cloud computing and AWS services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard 
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              image={cert.image}
              link={cert.link}
              type={cert.type}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
