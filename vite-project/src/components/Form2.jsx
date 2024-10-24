import React from 'react';

const Form2 = ({ FormData, setFormData, nextStep, prevStep }) => {
  const onSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    nextStep();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type='text'
          value={FormData.firstName}
          onChange={(e) => setFormData({ ...FormData, firstName: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type='text'
          value={FormData.lastName}
          onChange={(e) => setFormData({ ...FormData, lastName: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <input
          type='text'
          value={FormData.address}
          onChange={(e) => setFormData({ ...FormData, address: e.target.value })}
        />
      </div>
      <button type='button' onClick={prevStep}>Back</button>
      <button type='submit'>Save and continue</button>
    </form>
  );
};

export default Form2;
