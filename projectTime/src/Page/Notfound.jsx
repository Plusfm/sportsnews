import React, { useState, useEffect } from 'react';

const Notfound = () => {
 
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  const getStyles = () => {
    if (screenWidth <= 600) {
      return {
        title: {
          fontSize: '40px',
          marginTop: '20px',
          marginBottom: '20px',
        },
        button: {
          fontSize: '14px',
          padding: '0 10px',
          height: '25px',
        },
      };
    } else if (screenWidth <= 1024) {
      return {
        title: {
          fontSize: '55px',
          marginTop: '30px',
          marginBottom: '30px',
        },
        button: {
          fontSize: '15px',
          padding: '0 12px',
          height: '28px',
        },
      };
    } else {
      return {
        title: {
          fontSize: '70px',
          marginTop: '40px',
          marginBottom: '40px',
        },
        button: {
          fontSize: '16px',
          padding: '0 15px',
          height: '30px',
        },
      };
    }
  };

  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

   
    window.addEventListener('resize', handleResize);

    // Clean up 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  const styles = getStyles();

  const HandleBacktoHome = () => {
    window.location.href = '/';
  };

  return (
    <div style={{ height: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ ...styles.title, textAlign: 'center', fontWeight: '800' }}>404 Not Found</h1>
      <button style={{ ...styles.button, backgroundColor: '#17181e', color: '#fff', borderRadius: '4px' }} onClick={HandleBacktoHome}>
        GO BACK
      </button>
    </div>
  );
};

export default Notfound;
