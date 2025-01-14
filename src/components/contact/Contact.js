import React from 'react';
import './Contact.css';

function Contact({isDarkMode}) {
  return (
    <div id="contact-container" className="flex-both-center" data-theme = {isDarkMode ? "dark" : "light"}>
      <div id="contact-container2" className="fade-border flex-space-around">
        <div id="message-container" className="flex-both-center">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            id="message-container2"
          >
            <input
              type="hidden"
              name="access_key"
              value="62a45fcd-6b51-4052-8a4f-1a22cfe59fc1"
            />
            <div id="name" className="message-input">
              <h4 className="red">Full Name</h4>
              <input
                type="text"
                name="Name"
                className="input-style"
                required
                placeholder="eg. Shiv Gupta"
              />
            </div>
            <div id="email" className="message-input">
              <h4 className="red">Email</h4>
              <input
                type="email"
                name="Email"
                className="input-style"
                required
                placeholder="example@gmail.com"
              />
            </div>
            <div id="contact" className="message-input">
              <h4 className="red">Contact</h4>
              <input
                type="tel"
                name="Contact"
                className="input-style"
                pattern="[0-9]{10}"
                required
                placeholder="eg. 321564789"
              />
            </div>
            <div id="message" className="message-input">
              <h4 className="red">Message</h4>
              <textarea
                name="text"
                className="input-style"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div id="submit-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div id="contact-data">
          <h1>
            Contact <span className="red">Me!!</span>
          </h1>
          <h4>
            You can use this message form to send me mail. <br />
            Thank You, have a nice day to you.
          </h4>
          <a
            href="javascript:void(0)"
            className="text-deco-none"
          >
            <i className="bx bxl-instagram-alt"></i>
            <span>Instagram</span>
          </a>
          <br />
          <a
            href="https://linkedin.com/in/26shivgupta/"
            className="text-deco-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin-square"></i>
            <span>LinkedIn</span>
          </a>
          <br />
          <a
            href="https://github.com/26-Shiv-Gupta"
            className="text-deco-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
            <span>GitHub</span>
          </a>
          <br />
          <a
            href="javascript:void(0)"
            className="text-deco-none"
          >
            <i className="bx bxl-gmail"></i>
            <span>gedashiv9977@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
