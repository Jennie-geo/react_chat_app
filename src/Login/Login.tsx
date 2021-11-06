import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import login from "../features/useSlice";
import "./Login.css";

interface userProp {}
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profilePix, setProfilePix] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please, enter full name!");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          ?.updateProfile({
            displayName: name,
            photoURL: profilePix,
          })
          // creating user and pushing to the data store
          .then(() => {
            dispatch(
              login(
                {
                  email: userAuth.user?.email as string,
                  uid: userAuth.user?.uid!,
                  displayName: name,
                  photoUrl: profilePix,
                  user: null,
                },
                { type: "login" }
              )
            );
          });
      })
      .catch((error) => alert(error));
  };
  const loginToApp = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full name(required if registering)"
        />
        <input
          value={profilePix}
          onChange={(e) => setProfilePix(e.target.value)}
          type="text"
          placeholder="Profile pic Url (optional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <button className="login_btn">Sign in</button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
