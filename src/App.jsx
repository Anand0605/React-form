import React from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  // Initialize the useForm hook
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log('Form Data Submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Name:
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            {...register('email', { required: 'Email is required', pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address'
            } })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
