import { FC, FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const ContactMe: FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [recaptchaKey, setRecaptchaKey] = useState<number>(1);
  const [capVal, setCapVal] = useState<string | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_e1qq1xo", "template_t5bf4a6", form.current, "xOF0Kvpc8eCMsSmns")
        .then(
          (result) => {
            console.log(result.text);
            form.current?.reset();
            setCapVal(null);
            setRecaptchaKey((prevKey) => prevKey + 1);
            alert("Message sent successfully!");
          },
          (error) => {
            alert(error.text);
          }
        );
    } else {
      console.error("Form referense is null");
    }
  };

  return (
    <section className="contact-me" id="contactme">
      <div className="contact">
        <h3 className="contact-header">{"<Contact me />"}</h3>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="contact-form-top">
            <div className="contact-form-top-container">
              <label>Your name</label>
              <input type="text" name="from_name" required />
            </div>
            <div>
              <label>Your email</label>
              <input type="email" name="from_email" required />
            </div>
          </div>
          <div className="contact-form-bottom">
            <label>Message</label>
            <textarea name="message" required />
          </div>
          <div className="contact-form-recaptcha">
            <ReCAPTCHA
              key={recaptchaKey}
              sitekey="6LeZ7mspAAAAAOt_y45pxGeA1igJF4i1dqKwld4I"
              onChange={(val) => setCapVal(val)}
            />
          </div>
          <input disabled={!capVal} type="submit" value="Send" className="contact-form-button" />
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
