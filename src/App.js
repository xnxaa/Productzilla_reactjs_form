import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormProvider } from './components/FormContext';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Result from './components/Result';

function App() {
  return (
    <Router>
      <FormProvider>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </FormProvider>
    </Router>
  );
}

export default App;
