import logo from "./logo.svg";
import "./App.css";
import { AuthProvider } from "./Context/AuthContext";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* <PrivateRoute path="/" element={<Feed />} /> */}
          <Route
            path="/profile/:id"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Feed />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
