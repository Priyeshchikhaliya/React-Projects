import React from "react";

export default function App() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsletter: true,
  });
  const arrInput = [1, 2, 3, 4];

  // for (let i = 0; i < 4; i++) {
  //   arrInput.push(
  //     <input
  //       type="email"
  //       placeholder="Email address"
  //       className="form--input"
  //       name={`email${i}`}
  //       onChange={handleChange}
  //       value={formData.email}
  //     />
  //   );
  // }
  const inputElement = React.useRef(arrInput.map(() => React.createRef()));

  React.useEffect(() => {
    inputElement.current[0].current.focus();
  }, []);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.passwordConfirm) {
      alert("Successfully signed up");
    } else {
      alert("Passwords do not match");
    }

    if (
      formData.joinedNewsletter &&
      formData.password === formData.passwordConfirm
    ) {
      alert("Thanks for signing up for our newsletter!");
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        {arrInput.map((el, i) => (
          <p key={i}>
            <input ref={inputElement[i]} value={el} onChange={() => {}} />
          </p>
        ))}

        {/* <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="passwordConfirm"
          onChange={handleChange}
          value={formData.passwordConfirm}
        /> */}

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="joinedNewsletter"
            onChange={handleChange}
            checked={formData.joinedNewsletter}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
