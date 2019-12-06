import React from "react";
import Input from "./components/Input";
import FlexBox from "./components/FlexBox";
import FlexBoxFill from "./components/FlexBoxFill";

export default () => {
  return (
    <FlexBox>
      <FlexBoxFill>
        <Input name="name" display="Name" />
      </FlexBoxFill>
      <FlexBoxFill>
        <Input name="category" display="Category" />
      </FlexBoxFill>
      <FlexBoxFill>
        <Input name="sub-category" display="Sub-Category" />
      </FlexBoxFill>
    </FlexBox>
  );
};
