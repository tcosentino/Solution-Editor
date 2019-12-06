import isArray from "lodash/isArray";
import React, { useState } from "react";
import FlexBox from "./FlexBox";
import FlexBoxFill from "./FlexBoxFill";
import Tab from "./Tab";

export default ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  console.log({ children });
  const titles = [];
  const content = [];
  const childList = isArray(children) ? children : [children];

  childList
    .filter(c => c.type === Tab)
    .forEach((child, index) => {
      titles.push(
        <div
          key={child.props.title}
          style={{
            float: "left",
            marginRight: "5px"
          }}
          onClick={() => {
            setActiveTab(index);
          }}
        >
          {child.props.title}
        </div>
      );

      content.push(child.props.children);
    });

  return (
    <FlexBox rows>
      {/* Tabs */}
      <div>{titles}</div>

      {/* Content */}
      <FlexBoxFill>{content[activeTab]}</FlexBoxFill>
    </FlexBox>
  );
};
