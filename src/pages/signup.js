import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSignUpUserMutation } from "../rtk/auth.rtk";
import { userdata } from "../features/auth.data";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [myform, setMyform] = useState(initialState);
  const { firstName, lastName, email, password } = myform;
  const navigate = useNavigate();
  const [signup, datahooks] = useSignUpUserMutation();
  console.log(datahooks.data);

  const reduxdata = useSelector((state) => {
    return state.authdata;
  });
  console.log(reduxdata);

  const dispatch = useDispatch();

  const datasend = async () => {
    if ((firstName, lastName, email, password)) {
      await signup(myform);
    }
  };
  useEffect(() => {
    if (datahooks.isSuccess) {
      dispatch(
        userdata({
          name: datahooks.data.result.name,
          token: datahooks.data.token,
          email: datahooks.data.result.email,
          password: datahooks.data.result.password,
        })
      );
      navigate("/");
    }
  }, [datahooks.isSuccess]);

  return (
    <div>
      <input
        type="text"
        className="bg-blue-300 mb-3 text-blue-900 pl-3"
        placeholder="firstName"
        value={firstName}
        onChange={(e) => {
          setMyform({ ...myform, firstName: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        className="bg-blue-300 mb-3 text-blue-900 pl-3"
        placeholder="lastName"
        value={lastName}
        onChange={(e) => {
          setMyform({ ...myform, lastName: e.target.value });
        }}
      />
      <br />
      <input
        type="email"
        className="bg-blue-300 mb-3 text-blue-900 pl-3"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setMyform({ ...myform, email: e.target.value });
        }}
      />
      <br />
      <input
        type="password"
        className="bg-blue-300 mb-3 text-blue-900 pl-3"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setMyform({ ...myform, password: e.target.value });
        }}
      />
      <br />
      <button
        onClick={datasend}
        className="bg-black rounded-sm h-[30px] text-white w-[60px] ml-4"
      >
        sumbit
      </button>
    </div>
  );
};

export default Signup;
