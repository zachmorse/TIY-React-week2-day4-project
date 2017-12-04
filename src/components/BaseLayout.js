import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class BaseLayout extends Component {
  render() {
    let style = {
      footerStyle: {
        position: "fixed",
        bottom: 0,
        backgroundColor: "black",
        color: "#ff073a",
        textShadow: "0em 0em 0.5em #d3002b",
        width: "100%",
        textAlign: "center"
      },
      headerStyle: {
        textAlign: "center",
        textDecoration: "none",
        margin: "auto",
        background: "black",
        width: "100%"
      },
      headerPositioning: {
        marginTop: "-2rem",
        position: "fixed",
        zIndex: 2,
        width: "100%"
      },
      navStyle: {
        textAlign: "center",
        textDecoration: "none",
        fontSize: 30,
        padding: "1rem",
        backgroundColor: "black"
      },
      activeLink: {
        color: "#ff073a",
        textShadow: "0em 0em 0.5em #d3002b"
      }
    };

    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <header style={style.headerPositioning}>
            <Link to="/home" style={style.headerStyle}>
              <div style={style.headerStyle}>
                <h1 className="headerText">Portfolio: Reloaded</h1>
                <h3 className="headerSubText">aestethics edition</h3>
              </div>
            </Link>
            <div className="navText" style={style.navStyle}>
              <NavLink to="/home" activeStyle={style.activeLink}>
                Home
              </NavLink>
              <span> | </span>
              <NavLink to="/about" activeStyle={style.activeLink}>
                About
              </NavLink>
              <span> | </span>
              <NavLink to="/portfolio" activeStyle={style.activeLink}>
                Portfolio
              </NavLink>
              <span> | </span>
              <NavLink to="/references" activeStyle={style.activeLink}>
                References
              </NavLink>
              <span> | </span>
              <NavLink to="/contact" activeStyle={style.activeLink}>
                Contact
              </NavLink>
            </div>
          </header>
        </div>
        <div
          style={{
            backgroundColor: "black",
            height: 230,
            width: "auto",
            zIndex: 2
          }}
        />
        <div className="parallaxOne" />
        <div className="textBlock">
          {this.props.children}
        </div>

        <div className="parallaxTwo" />

        <footer style={style.footerStyle}>
          <h5>copyright 2017, projectivist ltd.</h5>
        </footer>
      </div>
    );
  }
}
