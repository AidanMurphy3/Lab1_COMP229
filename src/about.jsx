//import React from 'react';


export default function About() {
  return (
    <>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}></div>
      <p>About Me</p> 
      
      <img
        src="me.jpg"  // Replace this with the path to your image
        alt="A picture of me"
        style={{ width: '200px', height: 'auto', borderRadius: '50%' }}
      />

       <p>Hi, I'm Aidan Murphy. I am a Health Informatics student passionate about creating dynamic, user-friendly applications. With a strong background in web development, app design, problem-solving, I enjoy bringing ideas to life with technology. Currently, I'm working on expanding my expertise in React, and always eager to learn more!</p>
      
      {/* Link to download your resume */}
      <a 
  href="/resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ display: 'block', marginBottom: '3rem' }}
>
  Download Resume
</a>
    </>
  );
}

