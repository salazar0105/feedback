import React, { useState } from 'react';
import './App.css'; // Make sure to create a CSS file for styling

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    feedbackType: '',
    subject: '',
    detailedFeedback: '',
    satisfaction: 0,
    recommend: '',
    files: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, files: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission
  };

  return (
    <div className="app-container">
      <h1>Lalo Dev Feedback</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <form onSubmit={handleSubmit}>
  {/* Other input fields */}
  
  <div className="dropdowns-container">
       <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="">Role</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
        <select name="feedbackType" value={formData.feedbackType} onChange={handleChange} required>
          <option value="">Feedback Type</option>
          <option value="Bug Report">Bug Report</option>
          <option value="Feature Request">Feature Request</option>
          <option value="General Feedback">General Feedback</option>
        </select>
  </div>

  {/* Other input fields continue */}
</form>
        <input
          type="text"
          name="subject"
          placeholder="Subject/Topic"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="detailedFeedback"
          placeholder="Provide Detailed Feedback"
          value={formData.detailedFeedback}
          onChange={handleChange}
          required
        ></textarea>
        <div>
          <label>Overall Satisfaction:</label>
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num}>
              <input
                type="radio"
                name="satisfaction"
                value={num}
                checked={formData.satisfaction === num}
                onChange={handleChange}
              />
              {num}
            </label>
          ))}
        </div>
        <div>
          <label>Would you recommend us?</label>
          <label>
            <input
              type="radio"
              name="recommend"
              value="yes"
              checked={formData.recommend === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="recommend"
              value="no"
              checked={formData.recommend === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
        <input type="file" onChange={handleFileChange} multiple />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}


export default App;
