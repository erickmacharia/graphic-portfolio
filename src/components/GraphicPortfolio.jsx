import React, { useState, useEffect, useCallback, useRef } from 'react';

const GraphicPortfolio = () => {
  // Matatu Branding Images
  const matatuImages = [
    `${process.env.PUBLIC_URL}/images/matatu/matatu1.jpg`,
    `${process.env.PUBLIC_URL}/images/matatu/matatu2.jpg`,
    `${process.env.PUBLIC_URL}/images/matatu/matatu3.jpg`,
    "https://i.pinimg.com/736x/28/99/8b/28998b1d9e6e619c3ab79d3064c49191.jpg",
    "https://i.pinimg.com/736x/e0/fc/61/e0fc6164c007df67775951483e0f798c.jpg",
    "https://i.pinimg.com/736x/05/1e/8e/051e8ecfb304808c684d71257c669418.jpg",
    "https://i.pinimg.com/1200x/1d/22/06/1d220669b28b46aa5b1fc82ff605907d.jpg",
    "https://i.pinimg.com/1200x/98/b5/ab/98b5abdef9530d239f600c3dbd6f81b5.jpg",
    `${process.env.PUBLIC_URL}/images/matatu/matatu41.jpg`,
    `${process.env.PUBLIC_URL}/images/matatu/matatu20.jpg`,
    `${process.env.PUBLIC_URL}/images/matatu/matatu24.jpg`,
    "https://i.pinimg.com/736x/80/74/d4/8074d49c2661a302586ab47b6064636c.jpg",
    "https://i.pinimg.com/736x/8a/84/88/8a84881399af26a9823c87022b804f5b.jpg",
    "https://i.pinimg.com/1200x/bf/5e/c9/bf5ec992de241530999ddf48e8d9e32b.jpg",
    "https://i.pinimg.com/1200x/d8/c3/59/d8c359c1743a270017fc9222c4e1d385.jpg",
    "https://i.pinimg.com/1200x/df/8f/70/df8f70e8501efe713922b958bd05c978.jpg",
    "https://i.pinimg.com/1200x/c5/8a/1c/c58a1c9eefebd91c4ed88a671bd60af4.jpg",
    "https://i.pinimg.com/1200x/23/6f/1e/236f1e5994c67b54ddd8ebacfe37db9a.jpg",
    `${process.env.PUBLIC_URL}/images/matatu/interior1.jpg`,
    `${process.env.PUBLIC_URL}/images/matatu/interior6.jpg`,
    "https://i.pinimg.com/736x/d8/12/ae/d812ae22911a63d6e16cc2913a2e57d6.jpg",
    "https://i.pinimg.com/736x/03/15/bc/0315bcedde4cdf1cbeaac921754d87b8.jpg",
    "https://i.pinimg.com/1200x/e8/f2/dc/e8f2dce8c97c7748dac93c37a0e5ac0a.jpg",
    "https://i.pinimg.com/736x/40/f2/db/40f2db86892eb9c1263e605e35164c29.jpg",
    "https://i.pinimg.com/1200x/1c/3b/ac/1c3bac87cdb4bbc3c58864ef7edb4588.jpg",
    "https://i.pinimg.com/736x/6a/7b/00/6a7b000c32747b03e74759e943397393.jpg",
    "https://i.pinimg.com/736x/dc/74/c6/dc74c608386039c3e19e27f291b8fbba.jpg",
    
  ];

  // Digital Signage Images
  const signageImages = [
    "https://i.pinimg.com/736x/a0/3f/f6/a03ff62bca5fa57929a98facef7c0822.jpg",
    "https://i.pinimg.com/736x/cb/1b/bf/cb1bbf3a5cc3e87f177bf1b305882281.jpg",
    `${process.env.PUBLIC_URL}/images/signage/signage8.jpg`,
    `${process.env.PUBLIC_URL}/images/signage/signage2.jpg`,
    `${process.env.PUBLIC_URL}/images/signage/signage3.jpg`,
    `${process.env.PUBLIC_URL}/images/signage/signage1.jpg`,
    `${process.env.PUBLIC_URL}/images/signage/signage9.jpg`,
    "https://i.pinimg.com/1200x/b7/9d/4c/b79d4c910f5e9d601bc7f462216596bc.jpg",
    "https://i.pinimg.com/736x/9f/0d/52/9f0d52b0dc4599d20c7d649a791c03d1.jpg",
    "https://i.pinimg.com/1200x/78/63/f0/7863f07c90d88cd0e92de40d89340ad7.jpg",
    "https://i.pinimg.com/736x/9e/27/6b/9e276b88a9fb0e2213db95d88a8fc33a.jpg",
    "https://i.pinimg.com/1200x/7b/41/8e/7b418e1c14b69a305a400d1bf1337f53.jpg",
    "https://i.pinimg.com/736x/cc/ae/30/ccae300a031e450cc83390f39c1c0a95.jpg",
    "https://i.pinimg.com/736x/52/ea/03/52ea030ae0497400a98f5180ef2ed2a9.jpg",
    "https://i.pinimg.com/736x/b7/73/74/b77374ae0f931e7d98e967f175ea5a34.jpg",
    "https://i.pinimg.com/1200x/1d/4c/ff/1d4cffaaa83100f591cd472628bdb4f5.jpg",
    "https://i.pinimg.com/1200x/f8/39/c2/f839c223762fe8a66d32edfccf786604.jpg",
    "https://i.pinimg.com/736x/64/77/29/64772901a0b1222b9089cb3aec4acc6f.jpg",
    "https://i.pinimg.com/736x/66/57/a7/6657a743b52d8bf3c5f536706026d5d5.jpg",
    "https://i.pinimg.com/736x/f3/7f/e9/f37fe996fe806c5ba96ca3ea30dc5138.jpg",
  ];

  const usePlaceholders = false;
  
  const placeholderMatatuImages = [
    "https://images.unsplash.com/photo-1593941707882-a5bba53388fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1573452549556-51b6e7f10bf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ];

  const placeholderSignageImages = [
    "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ];

  const finalMatatuImages = usePlaceholders ? placeholderMatatuImages : matatuImages;
  const finalSignageImages = usePlaceholders ? placeholderSignageImages : signageImages;

  // State for carousel positions and animations
  const [matatuIndex, setMatatuIndex] = useState(0);
  const [signageIndex, setSignageIndex] = useState(0);
  const [isDigitalArtVisible, setIsDigitalArtVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [footerItemsAnimated, setFooterItemsAnimated] = useState(false);
  
  // Refs for intervals and elements
  const matatuIntervalRef = useRef(null);
  const signageIntervalRef = useRef(null);
  const digitalArtSectionRef = useRef(null);
  const footerRef = useRef(null);

  // Simplified carousel navigation functions (no fade animations)
  const nextMatatuSlide = useCallback(() => {
    setMatatuIndex((prevIndex) => 
      prevIndex === finalMatatuImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [finalMatatuImages.length]);

  const prevMatatuSlide = useCallback(() => {
    setMatatuIndex((prevIndex) => 
      prevIndex === 0 ? finalMatatuImages.length - 1 : prevIndex - 1
    );
  }, [finalMatatuImages.length]);

  const nextSignageSlide = useCallback(() => {
    setSignageIndex((prevIndex) => 
      prevIndex === finalSignageImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [finalSignageImages.length]);

  const prevSignageSlide = useCallback(() => {
    setSignageIndex((prevIndex) => 
      prevIndex === 0 ? finalSignageImages.length - 1 : prevIndex - 1
    );
  }, [finalSignageImages.length]);

  // Function to start/resume auto-slide
  const startMatatuAutoSlide = useCallback(() => {
    if (matatuIntervalRef.current) {
      clearInterval(matatuIntervalRef.current);
    }
    
    matatuIntervalRef.current = setInterval(nextMatatuSlide, 10000);
  }, [nextMatatuSlide]);

  const startSignageAutoSlide = useCallback(() => {
    if (signageIntervalRef.current) {
      clearInterval(signageIntervalRef.current);
    }
    
    signageIntervalRef.current = setInterval(nextSignageSlide, 10000);
  }, [nextSignageSlide]);

  // Function to pause auto-slide
  const pauseMatatuAutoSlide = useCallback(() => {
    if (matatuIntervalRef.current) {
      clearInterval(matatuIntervalRef.current);
      matatuIntervalRef.current = null;
    }
  }, []);

  const pauseSignageAutoSlide = useCallback(() => {
    if (signageIntervalRef.current) {
      clearInterval(signageIntervalRef.current);
      signageIntervalRef.current = null;
    }
  }, []);

  // Function to handle manual navigation
  const handleMatatuPrev = useCallback(() => {
    pauseMatatuAutoSlide();
    prevMatatuSlide();
    
    setTimeout(() => {
      startMatatuAutoSlide();
    }, 30000);
  }, [pauseMatatuAutoSlide, prevMatatuSlide, startMatatuAutoSlide]);

  const handleMatatuNext = useCallback(() => {
    pauseMatatuAutoSlide();
    nextMatatuSlide();
    
    setTimeout(() => {
      startMatatuAutoSlide();
    }, 30000);
  }, [pauseMatatuAutoSlide, nextMatatuSlide, startMatatuAutoSlide]);

  const handleSignagePrev = useCallback(() => {
    pauseSignageAutoSlide();
    prevSignageSlide();
    
    setTimeout(() => {
      startSignageAutoSlide();
    }, 30000);
  }, [pauseSignageAutoSlide, prevSignageSlide, startSignageAutoSlide]);

  const handleSignageNext = useCallback(() => {
    pauseSignageAutoSlide();
    nextSignageSlide();
    
    setTimeout(() => {
      startSignageAutoSlide();
    }, 30000);
  }, [pauseSignageAutoSlide, nextSignageSlide, startSignageAutoSlide]);

  // Scroll animation handler
  useEffect(() => {
    const handleScroll = () => {
      // Check if digital art section is in view
      if (digitalArtSectionRef.current) {
        const sectionPosition = digitalArtSectionRef.current.getBoundingClientRect();
        const isSectionVisible = (
          sectionPosition.top < window.innerHeight * 0.85 &&
          sectionPosition.bottom > window.innerHeight * 0.15
        );
        
        if (isSectionVisible && !isDigitalArtVisible) {
          setIsDigitalArtVisible(true);
        }
      }
      
      // Check if footer is in view
      if (footerRef.current) {
        const footerPosition = footerRef.current.getBoundingClientRect();
        const isFooterInView = footerPosition.top < window.innerHeight * 0.8;
        
        if (isFooterInView && !isFooterVisible) {
          setIsFooterVisible(true);
          
          // Animate footer items with delay
          setTimeout(() => {
            setFooterItemsAnimated(true);
          }, 300);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDigitalArtVisible, isFooterVisible]);

  // Auto slide every 10 seconds on component mount
  useEffect(() => {
    startMatatuAutoSlide();
    startSignageAutoSlide();
    
    return () => {
      pauseMatatuAutoSlide();
      pauseSignageAutoSlide();
    };
  }, [startMatatuAutoSlide, startSignageAutoSlide, pauseMatatuAutoSlide, pauseSignageAutoSlide]);

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="portfolio-header">
        <h1 className="animate-fade-in glow-text">
          Graphic Design Portfolio
        </h1>
        <p className="portfolio-subtitle animate-slide-up glow-subtle">
          Showcasing professional graphic design work with creativity and precision
        </p>
        <div className="header-decoration">
          <div className="blue-line"></div>
          <div className="blue-dot"></div>
          <div className="blue-line"></div>
        </div>
      </header>

      {/* Section 1: Matatu Branding with Smooth Transition */}
      <section className="portfolio-section animate-fade-in-delay">
        <h2 className="section-title">
          <span className="title-icon glow-icon">🚌</span>
          <span className="glow-text">Branding Package</span>
        </h2>
        <p className="section-description glow-subtle">
          Complete branding package for both private and public transport vehicles 
          including exterior & interior design.
        </p>
        
        <div className="carousel-wrapper">
          <button 
            className="carousel-nav-btn prev-btn" 
            onClick={handleMatatuPrev} 
            aria-label="Previous image"
            onMouseEnter={pauseMatatuAutoSlide}
            onMouseLeave={() => setTimeout(startMatatuAutoSlide, 1000)}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="carousel-container">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${matatuIndex * 100}%)` }}
            >
              {finalMatatuImages.map((image, index) => (
                <div 
                  key={index} 
                  className="carousel-slide"
                >
                  <img 
                    src={image} 
                    alt={`Matatu Design ${index + 1}`} 
                    className="carousel-image"
                    loading="lazy"
                  />
                  <div className="slide-overlay">
                    <div className="slide-content">
                      <h3 className="slide-title">Design {index + 1}</h3>
                      <p className="slide-desc">Professional Branding</p>
                    </div>

                    { /* removed it cause i think its taking much space  }
                    <div className="slide-counter">
                      <span className="slide-number">{index + 1} / {finalMatatuImages.length}</span>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="carousel-nav-btn next-btn" 
            onClick={handleMatatuNext} 
            aria-label="Next image"
            onMouseEnter={pauseMatatuAutoSlide}
            onMouseLeave={() => setTimeout(startMatatuAutoSlide, 1000)}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="carousel-indicators">
          {finalMatatuImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === matatuIndex ? 'active' : ''}`}
              onClick={() => {
                pauseMatatuAutoSlide();
                setMatatuIndex(index);
                setTimeout(() => startMatatuAutoSlide(), 30000);
              }}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="section-features">
          <div className="feature">
            <i className="fas fa-palette feature-icon"></i>
            <span>Logo Design</span>
          </div>
          <div className="feature">
            <i className="fas fa-car feature-icon"></i>
            <span>Vehicle Wrap</span>
          </div>
          <div className="feature">
            <i className="fas fa-print feature-icon"></i>
            <span>Print Design</span>
          </div>
          <div className="feature">
            <i className="fas fa-layer-group feature-icon"></i>
            <span>Brand Identity</span>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="section-spacer"></div>

      {/* Section 2: Digital Signage with Scroll Animation from Bottom */}
      <section 
        className={`portfolio-section ${isDigitalArtVisible ? 'animated slide-up-bottom' : 'animate-on-scroll slide-up-bottom'}`}
        ref={digitalArtSectionRef}
        style={{
          opacity: isDigitalArtVisible ? 1 : 0,
          transition: 'opacity 0.8s ease, transform 0.8s ease'
        }}
      >
        <h2 className={`section-title ${isDigitalArtVisible ? 'animated slide-up-bottom' : 'animate-on-scroll slide-up-bottom'}`}>
          <span className="title-icon glow-icon">🖼️</span>
          <span className={`${isDigitalArtVisible ? 'animate-glow' : ''}`}>Digital Art & Signage</span>
        </h2>
        <p className={`section-description ${isDigitalArtVisible ? 'animated slide-up-bottom delay-1' : 'animate-on-scroll slide-up-bottom'}`}>
          Professional banners, 3D signage, and digital art products for businesses and events
        </p>
        
        <div className={`carousel-wrapper ${isDigitalArtVisible ? 'animated slide-up-bottom delay-2' : 'animate-on-scroll slide-up-bottom'}`}>
          <button 
            className="carousel-nav-btn prev-btn" 
            onClick={handleSignagePrev} 
            aria-label="Previous image"
            onMouseEnter={pauseSignageAutoSlide}
            onMouseLeave={() => setTimeout(startSignageAutoSlide, 1000)}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="carousel-container">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${signageIndex * 100}%)` }}
            >
              {finalSignageImages.map((image, index) => (
                <div 
                  key={index} 
                  className="carousel-slide"
                >
                  <img 
                    src={image} 
                    alt={`Signage Design ${index + 1}`} 
                    className="carousel-image"
                    loading="lazy"
                  />
                  <div className="slide-overlay">
                    <div className="slide-content">
                      <h3 className="slide-title">Design {index + 1}</h3>
                      <p className="slide-desc">Professional Signage & Digital Art</p>
                    </div>
                    { /* removed it cause i think its taking much space 
                    <div className="slide-counter">
                      <span className="slide-number">{index + 1} / {finalSignageImages.length}</span>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="carousel-nav-btn next-btn" 
            onClick={handleSignageNext} 
            aria-label="Next image"
            onMouseEnter={pauseSignageAutoSlide}
            onMouseLeave={() => setTimeout(startSignageAutoSlide, 1000)}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className={`carousel-indicators ${isDigitalArtVisible ? 'animated slide-up-bottom delay-3' : 'animate-on-scroll slide-up-bottom'}`}>
          {finalSignageImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === signageIndex ? 'active' : ''}`}
              onClick={() => {
                pauseSignageAutoSlide();
                setSignageIndex(index);
                setTimeout(() => startSignageAutoSlide(), 30000);
              }}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
        
        <div className={`section-features ${isDigitalArtVisible ? 'animated slide-up-bottom delay-4' : 'animate-on-scroll slide-up-bottom'}`}>
          <div className="feature delay-1">
            <i className="fas fa-cube feature-icon"></i>
            <span>3D Signage</span>
          </div>
          <div className="feature delay-2">
            <i className="fas fa-flag feature-icon"></i>
            <span>Banner Design</span>
          </div>
          <div className="feature delay-3">
            <i className="fas fa-digital-tachograph feature-icon"></i>
            <span>Digital Art</span>
          </div>
          <div className="feature delay-4">
            <i className="fas fa-file-export feature-icon"></i>
            <span>Print Ready</span>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="section-spacer"><hr/></div>

      {/* Footer with Slide Up Animation */}
            <footer 
        className={`portfolio-footer ${isFooterVisible ? 'animated footer-slide-up' : 'footer-slide-up'}`}
        ref={footerRef}
      >
        <div className="footer-content">
          <div className="footer-contact">
            <h3 className="footer-title">Get In Touch</h3>
            <div className="contact-info">
              <div className={`contact-item ${footerItemsAnimated ? 'animated delay-1' : ''}`}>
                <i className="fas fa-envelope"></i>
                <div>
                  <span className="contact-label">Email</span>
                  <a href="mailto:ngutu64@gmail.com" className="contact-value">
                    ngutu64 @gmail.com
                  </a>
                </div>
              </div>
              <div className={`contact-item ${footerItemsAnimated ? 'animated delay-2' : ''}`}>
                <i className="fas fa-phone"></i>
                <div>
                  <span className="contact-label">Phone</span>
                  <a href="tel:+254715476304" className="contact-value">
                    +254 715 476 304
                  </a>
                </div>
              </div>
              <div className={`contact-item ${footerItemsAnimated ? 'animated delay-3' : ''}`}>
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">
                    <a 
                      href="https://maps.google.com/?q=Nairobi, Kenya" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      Nairobi, Kenya
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-copyright">
            <div className="copyright-text">
              <p>© {new Date().getFullYear()} Graphic Design Portfolio. All rights reserved.</p>
              <p className="copyright-sub">Professional Graphic Design Services</p>
            </div>
            <div className="footer-social">
              <a 
                href="https://wa.me/+254715476304" 
                className={`social-icon ${footerItemsAnimated ? 'animated delay-4' : ''}`} 
                aria-label="WhatsApp"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a 
                href="https://instagram.com/yourusername" 
                className={`social-icon ${footerItemsAnimated ? 'animated delay-5' : ''}`} 
                aria-label="Instagram"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                className={`social-icon ${footerItemsAnimated ? 'animated delay-6' : ''}`} 
                aria-label="Twitter"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                className={`social-icon ${footerItemsAnimated ? 'animated delay-7' : ''}`} 
                aria-label="LinkedIn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-decoration">
          <div className="wave"></div>
        </div>
      </footer>
    </div>
  );
};

export default GraphicPortfolio;