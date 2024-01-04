"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import  axios  from "axios";
import { toast } from "react-hot-toast";

const SignupPage = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (
      user.email?.length > 0 &&
      user.username?.length > 0 &&
      user.password?.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log(response.data);
      router.push("/login")
    } catch (error) {
      console.log("Sign Up Failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen py-2">
      <h1 className="mb-4">{loading ? "Processing" : "Sign Up"}</h1>
      <hr />
      <label>Username</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      ></input>
      <label>Email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      ></input>
      <label>Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      ></input>
      <button
        onClick={onSignUp}
        className="bg-slate-600 p-2 m-2 rounded-lg text-white"
      >
        {buttonDisabled ? "No Sign Up" : "Sign Up"}
      </button>
      <Link href="/login">Visit Login Page</Link>
    </div>
  );
};

export default SignupPage;
