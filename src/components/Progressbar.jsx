import React from "react";
import { ProgressBar } from "react-bootstrap";

const Progressbar = ({ passStrength, display }) => {
  if (display)
    return (
      <ProgressBar className="my-2">
        <ProgressBar
          variant="danger"
          label="Weak"
          now={passStrength.weak}
          key={1}
        />
        <ProgressBar
          variant="warning"
          label="Medium"
          now={passStrength.medium}
          key={2}
        />
        <ProgressBar
          variant="success"
          label="Strong"
          now={passStrength.strong}
          key={3}
        />
      </ProgressBar>
    );
};

export default Progressbar;
