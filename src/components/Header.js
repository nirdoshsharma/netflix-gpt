import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constant";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/browse");
      });
  };

  useEffect(() => {
    const unsbuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties

        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsbuscribe when component will unmount
    return () => unsbuscribe();
  }, []);
  return (
    <div className="absolute z-10 px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between">
      <img className="  w-60" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-4">
          <img
            className="w-8 h-8 m-4"
            src={USER_AVATAR}
            class="header-profile-avatar"
            alt=""
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer m-3"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
