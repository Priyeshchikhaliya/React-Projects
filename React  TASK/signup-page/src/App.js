import React from "react";
import Fan from "./Components/Fan_Signup";
import Talent from "./Components/Talent_Signup";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function App() {
  const [alignment, setAlignment] = React.useState("Fan Signup");
  const [fan, setFan] = React.useState(true);
  const [talent, setTalent] = React.useState(false);

  const handleChange = (event, newAlignment) => {
    // console.log(event.target.value);
    if (event.target.value === "Fan Signup") {
      setFan(true);
      setTalent(false);
    } else if (event.target.value === "Talent Signup") {
      setFan(false);
      setTalent(true);
    }

    setAlignment(newAlignment);
  };

  return (
    <div className="container">
      <div className="toggle">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="Fan Signup">FAN SIGNUP</ToggleButton>
          <ToggleButton value="Talent Signup">TALENT SIGNUP</ToggleButton>
        </ToggleButtonGroup>
      </div>
      {fan && <Fan />}
      {talent && <Talent />}
    </div>
  );
}
