import React, { useState } from "react";
import "../styles/ContactMe.css";

interface ContactInputProps {
  isArea: boolean;
  name: string;
  type: string;
  errorMsg: string;
  value: string;
  onChange: any;
  placeholder: string;
  charCount?: number
  // value: string;
  // setFormValues: React.Dispatch<React.SetStateAction<object>>;
  // setName: React.Dispatch<React.SetStateAction<string>>;
}

const ContactInput: React.FC<ContactInputProps> = ({
  isArea,
  name,
  type,
  errorMsg,
  value,
  onChange,
  placeholder,
  charCount
}) => {
  const [hasTried, setHasTried] = useState<boolean>(false);
  // const [charCount, setCharCount] = useState<number>(
  //   400 - value.length
  // );

  const InputComponent = isArea ? "textarea" : "input"; // changes the html component to a textarea or input

  const handleLeaveField = (e: any) => {
    setHasTried(true);
    console.log("you left");
  };

  return (
    <div id="contact-inp">
      {/* InputComponent is not in a separate file; it just changes from an <input> to a <textarea> on demand */}
      <InputComponent
        name={name}
        rows={5}
        type={type}
        value={value}
        placeholder={placeholder}
        className={`contact-item contact-textarea`}
        required
        onChange={(e) => {
          onChange(e);
        }}
        // if you enter this field and leave it without entering valid information,
        // allow the error msg to show (so it doesn't show up before they even have a chance to try)
        onBlur={handleLeaveField}
      />
      {hasTried && <span className="contact-form-error">{errorMsg}</span>}
      {isArea && charCount && (
        <div className="char-count">
          <span
            // if there's more than 400 characters, make the character counter red
            className={`char-count ${charCount < 0 && "invalid-char-count"}`}
          >
            {/* todo: right align the character count. */}
            {charCount}{" "}
            {charCount < 0 ? (
              <>(Oops! Character limit exceeded.)</>
            ) : (
              <>Characters left</>
            )}
          </span>
        </div>
      )}
    </div>
  );
};

export default ContactInput;
