import React from 'react';

const Form3 = ({ FormData, setFormData, prevStep, submitData }) => {
  const onSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    submitData(FormData);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="country">Country Code:</label>
        <select
          id="country"
          value={FormData.countryCode}
          onChange={(e) => setFormData({ ...FormData, countryCode: e.target.value })}
        >
          <option value="+91">India</option>
          <option value="+1">USA</option>
        </select>
      </div>

      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type='number'
          value={FormData.phoneNumber}
          onChange={(e) => setFormData({ ...FormData, phoneNumber: e.target.value })}
        />
      </div>
      <div>
        <input
          type="checkbox"
          checked={FormData.acceptTermsAndConditions}
          onChange={(e) => setFormData({ ...FormData, acceptTermsAndConditions: e.target.checked })}
        />
        <label htmlFor="acceptTermsAndConditions">I accept terms and conditions</label>
      </div>

      <button type='button' onClick={prevStep}>Back</button>
      <button type='submit'>Save</button>
    </form>
  );
};

export default Form3;
