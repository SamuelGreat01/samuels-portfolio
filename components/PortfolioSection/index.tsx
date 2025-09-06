import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PROJECTS_DATA from '../AppData/projects';

const PortfolioSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust speed as needed

    const animate = () => {
      scrollPosition += scrollSpeed;
      scrollContainer.scrollLeft = scrollPosition;
      
      // Reset scroll position when it reaches the end to create infinite effect
      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <PortfolioContainer>
      <ScrollContainer ref={scrollRef}>
        <PortfolioGrid>
          {/* Duplicate the projects array to create seamless infinite scroll */}
          {[...PROJECTS_DATA, ...PROJECTS_DATA].map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`}>
              <ProjectImage>
                <img src={project.imageUrl} alt={project.title} />
                <ProjectOverlay>
                 
                   
                    <ProjectTechnologies>
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <TechTag key={techIndex}>{tech}</TechTag>
                      ))}
                    </ProjectTechnologies>
                    
               
                </ProjectOverlay>
              </ProjectImage>
            </ProjectCard>
          ))}
        </PortfolioGrid>
      </ScrollContainer>
    </PortfolioContainer>
  );
};

const PortfolioContainer = styled.section`
  background: var(--bg-primary);
  overflow: hidden;
`;



const ScrollContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const PortfolioGrid = styled.div`
  display: flex;
  width: max-content;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const ProjectCard = styled.div`
  flex: 0 0 200px;
  height: 150px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    flex: 0 0 180px;
    height: 130px;
  }
  
  @media (max-width: 480px) {
    flex: 0 0 160px;
    height: 120px;
  }
`;

const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.9) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectInfo = styled.div`
  text-align: center;
  color: white;
  padding: 1rem;
  max-width: 180px;
`;



const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  justify-content: center;
  margin-bottom: 0.8rem;
`;

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 15px;
  font-size: 0.6rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

const ProjectLink = styled.a`
  background: var(--button-index);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.7rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  
  &:hover {
    background: #fff;
    color: var(--text-primary);
    transform: translateY(-1px);
  }
`;

export default PortfolioSection;
