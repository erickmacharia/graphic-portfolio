import React, { useState, useEffect, useRef } from 'react';


const Hero = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [heroContentAnimated, setHeroContentAnimated] = useState(false);
  const heroSectionRef = useRef(null);

  // Words to animate
  const heroWords = ["An", "Amazing", "Creative", "Graphic", "Designer"];

  // Scroll animation handler
  useEffect(() => {
    const handleScroll = () => {
      if (heroSectionRef.current) {
        const heroPosition = heroSectionRef.current.getBoundingClientRect();
        const isHeroInView = heroPosition.top < window.innerHeight * 0.8;
        
        if (isHeroInView && !isHeroVisible) {
          setIsHeroVisible(true);
          
          // Animate everything with delay
          setTimeout(() => {
            setHeroContentAnimated(true);
          }, 300);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHeroVisible]);

  // Function to scroll to footer
  const scrollToFooter = () => {
    const footer = document.querySelector('.portfolio-footer');
    if (footer) {
      footer.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      ref={heroSectionRef}
      className={`hero-section ${isHeroVisible ? 'animated' : ''}`}
      id="hero"
    >
      {/* Floating elements */}
      <div className="hero-floating-element"></div>
      <div className="hero-floating-element"></div>
      <div className="hero-floating-element"></div>
      
      {/* Left side - Content */}
      <div className={`hero-content ${heroContentAnimated ? 'animated' : ''}`}>
        <h1 className="hero-title">
          {heroWords.map((word, index) => (
            <span 
              key={index} 
              className="hero-word"
              style={{ 
                display: 'inline-block',
                marginRight: '20px',
                marginBottom: '15px'
              }}
            >
              {word}
            </span>
          ))}
        </h1>
        
        <p className="hero-subtitle">
          Transforming visions into stunning visual realities. 
          Expert in branding, digital design, and creative solutions.
        </p>
        
        <div className="hero-cta">
          <button 
            onClick={scrollToFooter}
            className="hero-button"
            aria-label="Contact Us"
          >
            <span>Contact Us</span>
            <i className="fas fa-arrow-down"></i>
          </button>
        </div>
      </div>
      
      {/* Right side - Photo */}
      <div className={`hero-image-container ${heroContentAnimated ? 'animated' : ''}`}>
        <img 
          src={`${process.env.PUBLIC_URL}/images/passport.png`} 
          alt="Professional Graphic Designer"
          className="hero-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
          }}
        />
      </div>
    </section>
  );
};

export default Hero;