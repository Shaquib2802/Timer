
import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";

const Form1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const SubmitHandler = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      console.log("Email :", email);
      console.log("Password:", password);
      console.log("ConfirmPassword:", confirmPassword);

      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      console.error("Password is not same");
    }
  };

  const [lock, setLock] = useState(true);
  const [lockConfirm, setLockConfirm] = useState(true);

  const lockHandler = () => {
    setLock(!lock);
  };

  const lockConfirmHandler = () => {
    setLockConfirm(!lockConfirm);
  };

  return (
    <div className="bg-sky-300 w-[100vw] h-[100vh] py-5">
      <form onSubmit={SubmitHandler} className="h-[90vh] w-[40vw] bg-black bg-opacity-20 m-auto">
        <div className="text-center pt-5 font-bold text-2xl text-sky-600 font-mono ">
          . Registration Form .
        </div>
        <input
          type="text"
          placeholder="Name"
          className="border-b border-black mx-14 my-5 w-[30vw] mt-16 outline-none font-semibold font-mono text-x "
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border-b border-black mx-14 my-5 w-[30vw] outline-none font-semibold font-mono text-x placeholder:block "
        />
        <div className="relative">
          <input
            type={`${lock ? "password" : "text"}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border-b border-black mx-14 my-5 w-[30vw] outline-none font-semibold font-mono text-x placeholder: block"
          />
          <div className="absolute top-1.5 right-20">
            {lock ? <CiLock onClick={lockHandler} /> : <CiUnlock onClick={lockHandler} />}
          </div>
        </div>

        <div className="relative">
          <input
            type={`${lockConfirm ? "password" : "text"}`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="border-b border-black mx-14 my-5 w-[30vw] outline-none font-semibold font-mono text-x placeholder: block"
          />
          <div className="absolute top-1.5 right-20">
            {lockConfirm ? <CiLock onClick={lockConfirmHandler} /> : <CiUnlock onClick={lockConfirmHandler} />}
          </div>
        </div>

        <button type="submit" className="bg-[#192b4c] text-white px-5 items-center rounded-xl py-1 ml-12 mt-4">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form1;

