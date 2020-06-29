import React from "react";

import Logo from "../../assets/images/Logo.svg";

import { Button } from "./styles";

export default function ServerButton({
  selected,
  isHome,
  hasNotification,
  mentions,
}) {
  return (
    <Button
      isHome={isHome}
      hasNotification={hasNotification}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome && <img src={Logo} alt="Ghost" />}
    </Button>
  );
};
