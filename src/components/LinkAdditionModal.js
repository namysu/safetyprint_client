import React, { useState } from 'react';
import '../styles/LinkAdditionModal.css';
import LogoImage from "../assets/logo_simple.png";

function LinkAdditionModal({ onClose }) {
  const [link, setLink] = useState('');
  const [uploadMethod, setUploadMethod] = useState('');

  const handleAddLink = () => {
    if (uploadMethod === 'upload') {
      // Handle file upload
    } else if (uploadMethod === 'epson') {
      // Handle Epson cloud
    }
  };

  return (
    <div className="modal">
      <div className="modal-content2">
        <img alt="LogoImage" src={LogoImage} />
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add Link</h2>
        <form>
          <header>1. Enter a task link</header>
          <div className="form-group-first">
            <input
              type="text"
              className="form-control"
              placeholder="Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
            />
          </div>
          <button type="button" className="btn2 btn-primary" onClick={handleAddLink}>Add Link</button>
        </form>
      </div>
    </div>
  );
}

export default LinkAdditionModal;
