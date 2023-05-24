import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';
import '../App.css';

function Step2() {
  const navigate = useNavigate();
  const { updateFormData } = useContext(FormContext);
  const [formData, setFormData] = useState({
    birthDate: '',
    birthPlace: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData(formData);
    navigate('/step3');
  };

  return (
    <div className="step-container">
      <h2>Step 2</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          Tanggal Lahir:
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
        </label>
        <br />
        <label>
          Tempat Lahir:
          <input type="text" name="birthPlace" value={formData.birthPlace} onChange={handleChange} />
        </label>
        <br />
        <label>
          Alamat:
          <textarea name="address" value={formData.address} onChange={handleChange} />
        </label>
        <br />
        <button type="submit" className="next-button">Next</button>
      </form>
    </div>
  );
}

export default Step2;
