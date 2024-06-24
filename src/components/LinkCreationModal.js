import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/LinkCreationModal.css';
import LogoImage from "../assets/logo_simple.png";

function LinkCreationModal({ onClose }) {
  const [taskName, setTaskName] = useState('');
  const [accessStartTime, setAccessStartTime] = useState(null);
  const [accessEndTime, setAccessEndTime] = useState(null);
  const [link, setLink] = useState('');

  const handleCreateLink = () => {
    const newLink = generateLink(); // Generate link when creating task
    setLink(newLink);
  };

  const generateLink = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const handleAccessStartTimeChange = (date) => {
    setAccessStartTime(date);
  };

  const handleAccessEndTimeChange = (date) => {
    setAccessEndTime(date);
  };

  const getCurrentDateTime = () => {
    const currentDateTime = new Date().toISOString().slice(0, 16).replace('T', ' '); // Format: 'YYYY-MM-DD HH:mm'
    return currentDateTime;
  };

  return (
    <div className="modal">
      <div className="modal-content2">
        <img alt="LogoImage" src={LogoImage} />
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Create Link</h2>

        {link ? ( // Render the link creation info if link is generated
          <div>
            <div className="alert">
              <div>Link Created: </div>
              <h3 className="alert-info">{link}</h3>
            </div>
            <button className="btn-secondary" onClick={() => navigator.clipboard.writeText(link)}> Copy to Clipboard </button>
          </div>
        ) : ( // Render the form to create a new link if link is not generated
          <form>
            <header>1. Setting a task name</header>
            <div className="form-group-first">
              <input
                type="text"
                className="form-control"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
              />
            </div>
            <header>2. Setting accessible times</header>
            <div className='form-biggroup'>
              <div className="form-group-second">
                <label>Start Time: </label>
                <DatePicker
                  selected={accessStartTime}
                  onChange={handleAccessStartTimeChange}
                  showTimeSelect
                  dateFormat="yyyy-MM-dd HH:mm"
                  className="form-control"
                  placeholderText="Select Start Time"
                  required
                />
              </div>
              <div className="form-group-second">
                <label>End Time: </label>
                <DatePicker
                  selected={accessEndTime}
                  onChange={handleAccessEndTimeChange}
                  showTimeSelect
                  dateFormat="yyyy-MM-dd HH:mm"
                  className="form-control"
                  placeholderText="Select End Time"
                  required
                />
              </div>
            </div>
            <button type="button" className="btn btn-primary rounded-btn" onClick={handleCreateLink}>Create Link</button>
          </form>
        )}

        <div className="created-time-info">
          <p>Task Created at - {getCurrentDateTime()}</p>
        </div>
      </div>
    </div>
  );
}

export default LinkCreationModal;
