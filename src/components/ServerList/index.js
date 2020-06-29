import React from "react";

import ServerButton from "../ServerButton";
import { Container, Separator } from "./styles";

export default function ServerList({ isHome, hasNotification, mentions }) {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotification />
      <ServerButton mentions={3} />
      <ServerButton mentions={2} />
      <ServerButton hasNotification />
      <ServerButton />
      <ServerButton mentions={5} />
      <ServerButton />
      <ServerButton hasNotification />
      <ServerButton />
      <ServerButton hasNotification mentions={1} />
    </Container>
  );
};
