import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSearchSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/browse");
      });
  };

  const handleGptSearch = () => {
    //Toggle my GPT search
    dispatch(toggleGptSearchView());
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
    <div className="absolute z-10 px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between items-center">
      {/* Logo */}

      <img className="w-40" src={LOGO} alt="logo" />

      {/* User Avatar and Dropdown */}
      {user && (
        <div className="relative flex items-center space-x-2">
          {showGptSearch && (
            <select
              className="bg-black opacity-50 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-4 py-2 m-2 text-sm text-white bg-purple-600 bg-opacity-25 hover:bg-purple-800 hover:bg-opacity-70 cursor-pointer rounded-lg"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <div
            className="flex items-center cursor-pointer space-x-2"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img
              className="w-8 h-8 rounded-full"
              src={USER_AVATAR}
              alt="User Avatar"
            />
            <span className="text-white">&#x25BC;</span> {/* Down Arrow */}
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-12 right-0 mt-2 w-28 bg-black border border-gray-700 rounded-md shadow-lg z-20">
              <ul className="py-2">
                <li
                  className="px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer"
                  onClick={handleSignOut}
                >
                  Sign Out
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
