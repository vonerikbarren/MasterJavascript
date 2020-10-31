import React from 'react';
import './HomePage.css';


export default function HomePage() {
  return (
    <div className="HomePage">
      <h1 className="TopTitle">Master React Home Page</h1>
      <h3>Building a Library</h3>

      <h2>Table of Contents</h2>
      <hr />

      <h3>Section A: Basic Pages</h3>
      <a
        className="links"
        href="/BasicLanding1"
        target="_blank"

      > __A1.Basic Landing 1</a> <br />

      <a
        className="links"
        href="/BasicLanding1"
        target="_blank"

      > __A2.Basic Landing 2</a>


    </div>
  );
}