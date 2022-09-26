import * as Avatar from "@radix-ui/react-avatar";
import React from "react";
import { styled } from "@stitches/react";
import { violet, blackA, blue } from "@radix-ui/colors";

const AvatarRoot = styled(Avatar.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: 200,
  height: 200,
  borderRadius: "100%",
  backgroundColor: blackA.blackA3,
});

const AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

const AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: blue.blue7,
  color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

const AvatarDemo = (props) => {
  return (
    <AvatarRoot>
      <AvatarImage src={props.src} alt={props.alt} />
      <AvatarFallback delayMs={600}>{props.alt}</AvatarFallback>
    </AvatarRoot>
  );
};

export default AvatarDemo;
