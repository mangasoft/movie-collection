import React, { PropTypes } from 'react';

const LoginForm = ({state, updateField, submitForm}) => {
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="email" />
      <input type="email" name="email" value={state.email} onChange={updateField} placeholder="Email" required />

      <label htmlFor="password" />
      <input type="password" name="password" value={state.password} onChange={updateField} placeholder="Password" required />

      <button type="submit">Submit</button>
    </form>
  );
};

LoginForm.propTypes = {
  state: PropTypes.object.isRequired,
  updateField: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired
};

export default LoginForm;
