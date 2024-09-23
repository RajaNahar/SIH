import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        alert('You are signed out successfully.');
        setAuthUser(null);
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        alert('Error signing out: ' + error.message);
      });
  };

  return (
    <a href="/"></a>
  );
};

export default AuthDetails;

