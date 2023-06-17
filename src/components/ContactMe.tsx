import React, { useState, useEffect } from "react";
import ContactInput from "./ContactInput";
import "../styles/ContactMe.css";
import Plx from "react-plx";

interface FormValues {
  username: string;
  email: string;
  message: string;
}

type PLXItem = {
  start: string | number;
  end?: string | number;
  duration?: string | number;
  properties: {
    startValue: number;
    endValue: number;
    property: string;
  }[];
};

// loosely following https://www.youtube.com/watch?v=tIdNeoHniEY
const ContactMe: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    username: "",
    email: "",
    message: "",
  });
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setHasSubmitted(true);
    console.log(
      "submitted:",
      formValues["username"],
      formValues["email"],
      formValues["message"]
    );
  };

  const onChange = (e: any) => {
    // spreads out the form values, & for each value look up the targeted name and assign it to the targeted val
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // TITLE PLX (starts left and moves right)
  const contactmeTitlePLX: PLXItem[] = [
    {
      // start moving when I am at [start], reach end position when I'm at [end]
      start: "#contactme",
      duration: "50vh",
      properties: [
        //   starts 200px to the right of its normal placement and at 0% opacity
        { startValue: -100, endValue: 0, property: "translateX" },
        { startValue: 0, endValue: 1, property: "opacity" },
      ],
    },
  ];

  // FORM PLX (starts down and moves up)
  const contactFormPLX: PLXItem[] = [
    {
      // start moving when I am at [start], reach end position when I'm at [end]
      start: "#contactme",
      duration: "80vh",
      properties: [
        //   starts below normal placement and at 0% opacity
        { startValue: 300, endValue: 0, property: "translateY" },
        { startValue: 0, endValue: 1, property: "opacity" },
      ],
    },
  ];

  return (
    <>
      <div id="contactme">
        <Plx parallaxData={contactmeTitlePLX}>
          <h1 className="subsections-hero-text contact-hero-text">
            Contact Me
          </h1>
          <div className="contact-subtitle">
            If you're looking for a versatile, passionate team member, let's
            connect! Together we can bring your ideas to life.
          </div>
          <h2 className="resume-p">
            <a
              className="resume-link emphasis"
              href={require("../images/Maria Panagos Resume.pdf")}
              target="_blank"
              title="Opens a new tab"
            >
              View my resume&nbsp;
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
          </h2>
        </Plx>
        <div className="contact-form-flex">
          <div className="empty-col" />
          <Plx parallaxData={contactFormPLX}>
            {hasSubmitted ? (
              <div className="contact-form">
                <h1 className="contact-form-thank-you">
                  Thank you, {`${formValues["username"]}`}!
                  <p>
                    Your message has been submitted. <br />I usually respond
                    within 1-2 business days.
                  </p>
                </h1>
              </div>
            ) : (
              <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
                <h1 className="contact-form-title">Drop a message!</h1>
                {/* breaking inputs into ContactInput components */}
                <ContactInput
                  isArea={false}
                  name="username"
                  type="text"
                  errorMsg="Please provide your name."
                  placeholder="* Name"
                  value={formValues["username"]}
                  // value={username}
                  onChange={onChange}
                />
                <ContactInput
                  isArea={false}
                  name="email"
                  type="email"
                  errorMsg="Please provide a valid email address."
                  placeholder="* Email"
                  value={formValues["email"]}
                  // value={email}
                  onChange={onChange}
                />
                <ContactInput
                  isArea={true}
                  name="message"
                  type="textarea"
                  errorMsg="Please enter your message."
                  placeholder="* Message"
                  value={formValues["message"]}
                  // value={message}
                  onChange={onChange}
                />
                <button className="contact-item contact-submit-btn">
                  Submit
                </button>
              </form>
            )}
          </Plx>
          <div className="empty-col" />
        </div>
      </div>
    </>
  );
};

export default ContactMe;
