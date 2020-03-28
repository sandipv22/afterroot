import React, { Component } from "react"

export default ({ children, styles }) => (
  <div id="container" className="container" style={styles}>
    {children}
  </div>
)
