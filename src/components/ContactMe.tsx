import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

// Define the Zod schema for form validation
const schema = z.object({
  from_name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name must be less than 50 characters" }),
  from_email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email format" }),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(500, { message: "Message must be less than 500 characters" }),
});

// Define the form values type
type FormValues = z.infer<typeof schema>;

const ContactMe: FC = () => {
  const [recaptchaKey, setRecaptchaKey] = useState<number>(1);
  const [capVal, setCapVal] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema), // Apply Zod resolver here
  });

  const sendEmail: SubmitHandler<FormValues> = (data) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.from_name,
          from_email: data.from_email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          reset();
          setCapVal(null);
          setRecaptchaKey((prevKey) => prevKey + 1);
          alert("Message sent successfully!");
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <section className="contact-me" id="contactme">
      <div className="contact">
        <h3 className="contact-header">{"<Contact me />"}</h3>
        <form className="contact-form" onSubmit={handleSubmit(sendEmail)}>
          <div className="contact-form-top">
            <div className="contact-form-top-container">
              <label>Your name</label>
              <input type="text" {...register("from_name")} />
              {errors.from_name && <p>{errors.from_name.message}</p>}
            </div>
            <div>
              <label>Your email</label>
              <input type="email" {...register("from_email")} />
              {errors.from_email && <p>{errors.from_email.message}</p>}
            </div>
          </div>

          <div className="contact-form-bottom">
            <label>Message</label>
            <textarea {...register("message")} />
            {errors.message && <p>{errors.message.message}</p>}
          </div>

          <div className="contact-form-recaptcha">
            <ReCAPTCHA
              key={recaptchaKey}
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={(val) => setCapVal(val)}
            />
          </div>

          <input
            disabled={!capVal}
            type="submit"
            value="Send"
            className="contact-form-button"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
