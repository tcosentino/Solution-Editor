import React from "react";
import Input from "./components/Input";
import FlexBox from "./components/FlexBox";
import FlexBoxFill from "./components/FlexBoxFill";
import InputRowTextSection from "./components/InputRowTextSection";

export default ({ index = 1 }) => {
  return (
    <FlexBox>
      <InputRowTextSection text={index} />
      <FlexBoxFill>
        <Input name="name" display="Name" />
      </FlexBoxFill>
      <FlexBoxFill>
        <Input name="type" display="Type" />
      </FlexBoxFill>
      <InputRowTextSection text={"Show Description →"} />
      <InputRowTextSection text={"Show Conditions →"} />
      <InputRowTextSection text={"Show Step Options →"} />
      <InputRowTextSection text={"Show Collaboration Options →"} />
    </FlexBox>
  );
};
