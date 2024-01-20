import React from 'react';
import { useForm } from 'react-hook-form';
import "./contactForm.scss";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const form = useRef();

  const onSubmit = (data) => {
    // e.preventDefault();
  
    emailjs.sendForm('service_01wm84a', 'template_7brv0p5', form.current, 'Yps3HCIIQGynL_nDP')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Message</label>
        <textarea
          {...register('message', {
            required: 'Message is required',
          })}
        />
        {errors.message && <span>{errors.message.message}</span>}
      </div>

      <button type='submit'>Send</button>
    </form>
  );

}
export default ContactForm;
