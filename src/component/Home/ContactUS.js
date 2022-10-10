import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactUsIMG from '../../Images/original.jpg'

const ContactUS = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zq16i4i', 'template_qj16j7z', form.current, 'VcX9Whez8jsir01oT')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        toast.success('send seccessfully Email')
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div>
      <div
        style={{
          background: `url(${ContactUsIMG})`

        }}

        class="hero min-h-screen bg-base-200 ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Contact US</h1>
            <p class="py-6">However, if you have other request or question, don’t hesitate to use the form.</p>
          </div>
          <div data-aos="flip-left" data-aos-duration="1000" class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black">
            <div class="card-body">
              <form ref={form} onSubmit={sendEmail}>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-white">Name</span>
                  </label>
                  <input type="text" name='user_name' placeholder="Name" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-white">Email</span>
                  </label>
                  <input type="email" name='user_email' placeholder="email" class="input input-bordered" required />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-white ">Massage</span>
                  </label>
                  <textarea name='message' class="textarea textarea-bordered" placeholder="Type"></textarea>

                </div>
                <button className='btn bg-primary mt-5 w-full text-2xl font-bold'>
                  <input type="submit" value="Send" />
                </button>



              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default ContactUS;