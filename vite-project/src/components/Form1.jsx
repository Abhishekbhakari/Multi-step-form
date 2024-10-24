import React from 'react';

const Form1 = ({ FormData, setFormData, nextStep }) => {
  const onSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    nextStep();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type='email'
          value={FormData.emailId}
          onChange={(e) => setFormData({ ...FormData, emailId: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type='password'
          value={FormData.password}
          onChange={(e) => setFormData({ ...FormData, password: e.target.value })}
        />
      </div>
      <button type='submit'>Save and continue</button>
    </form>
  );
};

export default Form1;
