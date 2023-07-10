import React, { useState, useEffect } from "react";
import ContactInput from "./ContactInput";
import LeafBorder from "./LeafBorder";
import "../styles/ContactMe.css";
import Plx from "react-plx";
import ResumeBtn from "./ResumeBtn";
import PLXItem from "src/types/plx-item";
import FormValues from "src/types/form-values";

// loosely following https://www.youtube.com/watch?v=tIdNeoHniEY
const ContactMe: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    username: "",
    email: "",
    message: "",
  });
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [charCount, setCharCount] = useState<number>(
    400 - formValues.message.length
  );

  const sendEmail = () => {
    const postData = {
      userName: formValues["username"],
      userEmail: formValues["email"],
      userMessage: formValues["message"],
    };

    // UPDATE WHEN I HOST THE SITE
    const baseURL = "https://maria-panagos.netlify.app";

    fetch(`${baseURL}/api/user/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setValidEmail(true);
        // Handle the response data here
      })
      .catch((error) => {
        console.error(error);
        setValidEmail(false);
        // Handle any errors that occurred during the request
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (charCount >= 0) {
      setHasSubmitted(true);
      console.log(
        "submitted:",
        formValues["username"],
        formValues["email"],
        formValues["message"]
      );

      sendEmail();
    } else {
      setHasSubmitted(false);
    }
  };

  useEffect(() => {
    setCharCount(400 - formValues.message.length);
  }, [formValues]);

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
      duration: "50vh",
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
        {/* ========== First row: Leaf Border ========== */}
        <LeafBorder />
        {/* ========== Second Row: Words & Form ========== */}
        <div className="contact-columns">
          <Plx parallaxData={contactmeTitlePLX}>
            {/* ----- Col 1: Words ----- */}
            <div className="contact-col-1">
              {/* Col 1 Row 1: title */}
              <h1 id="contact-hero-text" className="subsections-hero-text">
                Contact Me
              </h1>

              {/* Col 1 Row 2: subtitle */}
              <div className="contact-subtitle">
                If you're looking for a versatile, passionate team member, let's
                connect! Together we can bring your ideas to life.
              </div>

              {/* Col 1 Row 3: Resume Button */}
              <ResumeBtn />
            </div>
          </Plx>
          {/* ----- Col 2: Form (or thank you message) ----- */}
          <div className="contact-form-flex">
            <Plx parallaxData={contactFormPLX}>
              {hasSubmitted ? (
                // if you've submitted a message, show the thank you message
                <div className="contact-form">
                  {validEmail ? (
                    <h1 className="contact-form-thank-you">
                      Thank you, {`${formValues["username"]}`}!
                      <p>
                        Your message has been submitted.
                        <br />
                        <br />
                        I usually respond within 1-2 business days!
                        <br />
                        <br />
                        <span style={{ color: "var(--teal)" }}>
                          An automated email with a copy of your message has
                          been sent to {formValues["email"]}.
                        </span>
                      </p>
                    </h1>
                  ) : (
                    <h1 className="contact-form-thank-you">
                      There was an error sending your message.
                      <br />
                      <p>If this error persists, you can try emailing me at
                      maria.pan0330@gmail.com instead.</p>
                    </h1>
                  )}
                </div>
              ) : (
                // if you haven't submitted a message yet (this render anyway), show the form
                <form
                  className="contact-form"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  {/* Form Row 1: title */}
                  <h1 className="contact-form-title">Drop a message!</h1>
                  <p className="contact-form-subtitle">
                    This message will be emailed to me.
                  </p>

                  {/* Form Row 2: Name input */}
                  {/* breaking inputs into ContactInput components */}
                  <ContactInput
                    isArea={false}
                    name="username"
                    type="text"
                    errorMsg="Please provide your name."
                    placeholder="* Name"
                    value={formValues["username"]}
                    onChange={onChange}
                  />

                  {/* Form Row 3: Email input */}
                  <ContactInput
                    isArea={false}
                    name="email"
                    type="email"
                    errorMsg="Please provide a valid email address (abc@xyz)."
                    placeholder="* Email"
                    value={formValues["email"]}
                    onChange={onChange}
                  />

                  {/* Form Row 4: Message input (textarea) */}
                  <ContactInput
                    isArea={true}
                    name="message"
                    type="textarea"
                    errorMsg="Please enter your message."
                    placeholder="* Message"
                    value={formValues["message"]}
                    onChange={onChange}
                    charCount={charCount}
                  />
                  {/* Form Row 5: Submit Button */}
                  <div className="submit-btn-container">
                    <button className="contact-item contact-submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </Plx>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
