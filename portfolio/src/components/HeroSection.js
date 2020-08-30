import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Anthony Simone</h1>
      <p>Full Stack Web Developer well-versed in improving and strengthening websites just for you.</p>
    </div>
  );
}

export default HeroSection;
