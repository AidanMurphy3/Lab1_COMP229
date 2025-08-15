import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/ReactPortfolioLogo2.png';

export default function Layout() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', 
      textAlign: 'center' 
    }}>
      <header style={{ 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  gap: '1rem', 
  marginBottom: '1rem' 
}}>
  <img src={logo} alt="Logo" style={{ height: '400px', width: 'auto' }} />
  <h1>My Portfolio</h1>
</header>

      <nav style={{ 
        display: 'flex', 
        gap: '1rem', 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        marginBottom: '1rem' 
      }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/project">Project</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <hr style={{ width: '100%', maxWidth: '600px' }} />

      <Outlet />

    </div>
  );
}
