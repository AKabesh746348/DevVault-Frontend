import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import NotesPreview from "./components/NotesPreview";

export class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<NotesPreview />} />
        </Routes>
      </Router>
    );
  }
}

export default App;