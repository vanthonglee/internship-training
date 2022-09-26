import * as Switch from "@radix-ui/react-switch";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";
import { useState, useEffect } from "react";

const SwitchRoot = styled(Switch.Root, {
  all: "unset",
  width: 42,
  height: 25,
  backgroundColor: blackA.blackA9,
  borderRadius: "9999px",
  position: "relative",
  top: 15,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  "&:focus": { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: "black" },
});

const SwitchThumb = styled(Switch.Thumb, {
  display: "block",
  width: 21,
  height: 21,
  backgroundColor: "white",
  borderRadius: "9999px",
  boxShadow: `0 2px 2px ${blackA.blackA7}`,
  transition: "transform 100ms",
  transform: "translateX(2px)",
  willChange: "transform",
  '&[data-state="checked"]': { transform: "translateX(19px)" },
});

const SwitchMode = () => {
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    document
      .getElementsByTagName("HTMl")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, []);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(false);
    }
  };

  return (
    <form>
      <SwitchRoot checked={checked} onCheckedChange={() => toggleThemeChange()}>
        <SwitchThumb />
      </SwitchRoot>
    </form>
  );
};

export default SwitchMode;
