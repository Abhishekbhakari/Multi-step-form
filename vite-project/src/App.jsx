import React, { useState } from 'react';
import './App.css';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Posts from './components/Posts';

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [FormData, setFormData] = useState({
    emailId: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    countryCode: '',
    phoneNumber: '',
    acceptTermsAndConditions: false,
  });

  const navigate = useNavigate(); // Correct capitalization
  const submitData = async (data) => {
    try {
      const { acceptTermsAndConditions, ...submissionData } = data;
      const res = await fetch('https://codebuddy.review/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await res.json();
      console.log(result);

      if (result.message === 'success') {
        navigate('/posts'); // Correct capitalization
      }
    } catch (error) {
      console.error('Error in submitting data', error);
    }
  };

  return (
    <div className='App'>
      <Routes>
        <Route
          path="/"
          element={
            <Form1
              FormData={FormData}
              setFormData={setFormData}
              nextStep={() => navigate('/form2')}
            />
          }
        />
        <Route
          path="/form2"
          element={
            <Form2
              FormData={FormData}
              setFormData={setFormData}
              nextStep={() => navigate('/form3')}
              prevStep={() => navigate('/')}
            />
          }
        />
        <Route
          path="/form3"
          element={
            <Form3
              FormData={FormData}
              setFormData={setFormData}
              submitData={submitData}
              prevStep={() => navigate('/form2')}
            />
          }
        />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
