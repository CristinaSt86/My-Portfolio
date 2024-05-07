import React, { useEffect, useState } from 'react';
import css from './PageTransition.module.css'; // Import the CSS module

const PageTransition = ({ children, duration = 500 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // console.log('Component mounting, starting timeout...');
    const timer = setTimeout(() => {
      setIsVisible(true);
      // console.log('Setting visible to true');
    }, 300); // A slight delay to ensure smooth transition

    return () => {
      console.log('Clearing timeout');
      clearTimeout(timer);
    };
  }, []);

  // Update the transition duration dynamically
  const containerStyle = {
    transitionDuration: `${duration}ms`
  };

  return (
    <div 
      className={`${css.transitionContainer} ${isVisible ? css.visible : ''}`}
      style={containerStyle} // Only set the transition duration dynamically
    >
      {children}
    </div>
  );
};

export default PageTransition;
