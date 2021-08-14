import React, { Component } from 'react'
import './notes.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    )
  }
}

export default Footer;