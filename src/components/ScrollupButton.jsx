import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollupButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-8 right-8 z-40 animate-fade-in-up">
      <StyledWrapper>
        <button 
          className="button bg-gray-900 dark:bg-white shadow-lg" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          {/* Icon Color: White in Light Mode, Black in Dark Mode */}
          <svg className="svgIcon fill-white dark:fill-gray-900" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </button>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    /* Using box-shadow for a subtle glow */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); 
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
  }

  .svgIcon {
    width: 12px;
    transition-duration: 0.3s;
  }

  /* Hover Effects */
  .button:hover {
    width: 140px;
    border-radius: 50px;
    transition-duration: 0.3s;
    align-items: center;
  }

  /* Dark/Light mode hover colors handling via React/Tailwind is tricky inside styled-components 
     so we use a neutral accent or primary color for hover background */
  .button:hover {
    background-color: #6366f1; /* Primary Indigo Color */
  }

  .button:hover .svgIcon {
    transition-duration: 0.3s;
    transform: translateY(-200%);
  }

  .button::before {
    position: absolute;
    bottom: -20px;
    content: "Back to Top";
    color: white;
    font-size: 0px;
  }

  .button:hover::before {
    font-size: 13px;
    opacity: 1;
    bottom: unset;
    transition-duration: 0.3s;
  }
`;

export default ScrollupButton;