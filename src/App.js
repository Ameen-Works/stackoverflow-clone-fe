import React, { useEffect } from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header/Header";
import StackOverflow from "./components/StackOverflow/StackOverflow";
import { Route, Routes, Navigate } from "react-router-dom";
import Question from "./components/AddQuestion/Question";
import ViewQuestion from "./components/ViewQuestion/ViewQuestion";
import Auth from "./components/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./Firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
      // console.log(authUser);
    });
  }, [dispatch]);

  const PrivateRoute = ({ element }) => {
    if (user) {
      return element;
    } else {
      return <Navigate to="/auth" />;
    }
  };
  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="auth" element={<Auth />} />
        <Route
          path="/"
          element={<PrivateRoute element={<StackOverflow />} />}
        />
        <Route
          path="/add-question"
          element={<PrivateRoute element={<Question />} />}
        />
        <Route
          path="/question/:id"
          element={<PrivateRoute element={<ViewQuestion />} />}
        />
        <Route index element={<Navigate to="/auth" />} />
      </Routes>
    </div>
  );
}

export default App;
