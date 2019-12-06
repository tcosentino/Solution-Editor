import React, { Component } from "react";
import FlexBox from "./FlexBox";
import TabView from "./TabView";
import Tab from "./Tab";

class IDE extends Component {
  render() {
    return (
      <FlexBox>
        {/* Sidebar */}
        <TabView>
          <Tab title="Processes">List of processes</Tab>
          <Tab title="Vault Structures">List of structures</Tab>
        </TabView>
        {/* Main Editor */}
      </FlexBox>
    );
  }
}

export default IDE;
