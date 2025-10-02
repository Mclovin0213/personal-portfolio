import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Your Name. All rights reserved.</p>
      <div className="hidden-links" style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '10px' }}>
        {/* Hidden links for the Gather app - these are not prominently displayed but accessible */}
        <a href="/app/gather/privacy-policy" style={{ color: '#666', fontSize: '12px', textDecoration: 'none' }}>Privacy Policy</a>
        <a href="/app/gather/terms-and-conditions" style={{ color: '#666', fontSize: '12px', textDecoration: 'none' }}>Terms & Conditions</a>
        <a href="/app/gather/request-account-deletion" style={{ color: '#666', fontSize: '12px', textDecoration: 'none' }}>Delete Account</a>
      </div>
    </footer>
  );
};

export default Footer;
