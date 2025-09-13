import React from "react";
import { signInWithGoogle } from "../services/Auth/firebaseAuth"; 

export default function AuthButton() {
  return (
    <div className="flex justify-center items-center h-full">
      <button className="bg-blue-500 text-white p-2 rounded" onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}


