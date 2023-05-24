import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';
import '../App.css';

function Step3() {
  const navigate = useNavigate();
  const { formData, updateFormData } = useContext(FormContext);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({ password, confirmPassword });
    navigate('/result');
  };

  return (
    <div className="step-container">
      <h2>Step 3</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChangePassword} />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChangeConfirmPassword}
          />
        </label>
        <br />
        <button type="submit" className="next-button">Submit</button>
      </form>
    </div>
  );
}

export default Step3;
