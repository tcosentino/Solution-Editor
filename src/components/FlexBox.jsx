import React from "react";

export default ({ children, rows = false }) => {
  return (
    <div style={{ display: "flex", flexDirection: rows ? "column" : "row" }}>
      {children}
    </div>
  );
};
