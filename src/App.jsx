import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PasswordList from "./pages/Logins/PasswordList";
import PasswordDetail from "./pages/Logins/PasswordDetail";
import NoMatchPage from "./NoMatchPage";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Sidebar handleClose={handleClose} handleShow={handleShow} show={show} />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PasswordList
                handleClose={handleClose}
                handleShow={handleShow}
                show={show}
                buttonText={true}
              />
            }
          />
          <Route
            exact
            path="/add"
            element={
              <PasswordDetail
                handleClose={handleClose}
                handleShow={handleShow}
                show={show}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={
              <PasswordDetail
                handleClose={handleClose}
                handleShow={handleShow}
                show={show}
              />
            }
          />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
