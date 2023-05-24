import React, {useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';
import '../App.css';

function Step1() {
  const navigate = useNavigate();
  const { updateFormData } = useContext(FormContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bootcamp: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData(formData);
    navigate('/step2');
  };

  return (
    <div className="step-container">
      <h2>Step 1</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          Nama:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Nomor:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <br />
        <label>
          Bootcamp:
          <br />
          <label>
            <input
              type="radio"
              name="bootcamp"
              value="UI/UX"
              checked={formData.bootcamp === 'UI/UX'}
              onChange={handleChange}
            />
            UI/UX
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="bootcamp"
              value="Backend Engineer"
              checked={formData.bootcamp === 'Backend Engineer'}
              onChange={handleChange}
            />
            Backend Engineer
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="bootcamp"
              value="Frontend Engineer"
              checked={formData.bootcamp === 'Frontend Engineer'}
              onChange={handleChange}
            />
            Frontend Engineer
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="bootcamp"
              value="Digital Marketing"
              checked={formData.bootcamp === 'Digital Marketing'}
              onChange={handleChange}
            />
            Digital Marketing
          </label>
        </label>
        <br />
        <button type="submit" className="next-button">Next</button>
      </form>
    </div>
  );
}

export default Step1;
