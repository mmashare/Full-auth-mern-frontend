import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutdata } from "../features/auth.data";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Myname = useSelector((state) => {
    return state.authdata;
  });
  console.log("THIS IS FROM REDUX", Myname);

  const { name } = JSON.parse(localStorage?.getItem("user") || "{}");

  useEffect(() => {
    const { name, token } = JSON.parse(localStorage?.getItem("user") || "{}");
    if (name === undefined && token === undefined) {
      navigate("/signup");
    } else {
      console.log("This is local StorGE DATA", name, token);
    }
  }, []);
  return (
    <div>
      <h1>Heyyyyyyyyyyyyyyyy {name} you are on dashboard page</h1>
      <button
        onClick={(e) => {
          dispatch(logOutdata());
          navigate("/signup");
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default Dashboard;
