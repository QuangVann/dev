import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
       <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Hiep Hoa , Bac Giang</p>
              </div>

              <div class="email">
                <a href="mailto:ngovanquang4953@gmail.com">
                      <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>ngovanquang4953@gmail.com</p>
                </a>
            
              </div>

              <div class="phone">
                <a href="tel:0347917363">
                  <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>0347917363</p>
                </a>
                
              </div>

             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118928.6828333027!2d105.95987045!3d21.329922049999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31351a7b1b7b2ac1%3A0x7a90cb6a6f9a0bd3!2zSGnhu4dwIEjDsmEsIELhuq9jIEdpYW5n!5e0!3m2!1svi!2s!4v1678208482991!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>
      </div>
    </div>
  );
};

export default Contact;
