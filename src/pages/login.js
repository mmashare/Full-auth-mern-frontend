import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../rtk/auth.rtk";
import { useDispatch, useSelector } from "react-redux";
import { userdata } from "../features/auth.data";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formvalue, setFormValue] = useState(initialState);
  const [loginUser, allhooks] = useLoginUserMutation();
  const { email, password } = formvalue;
  console.log(allhooks.data);
  const datashow = useSelector((state) => {
    return state.authdata;
  });
  console.log(datashow);

  const handleChange = async (e) => {
    e.preventDefault();
    if (email && password) {
      await loginUser(formvalue);
    }
  };
  useEffect(() => {
    if (allhooks.isSuccess) {
      dispatch(
        userdata({
          // only token apko alag se millege baki ki chije apko message:{} obj ke ander milegi , asa iss liye ho raha beacuse hamne backend par token ko alag se magaya hai
          name: allhooks?.data.message.name,
          email: allhooks?.data.message.email,
          token: allhooks?.data.token,
          password: allhooks?.data.message.password,
        })
      );
      navigate("/");
    }
  }, [allhooks.isSuccess]);

  return (
    // always know ki app apne parent container ko flex de kar rakhe , nhi to design me problem ayegi
    <div className="bg-blue-300 h-screen w-screen box-border flex m-0">
      <div className="bg-white/30 h-[290px] w-[470px] mt-[140px] ml-[390px] ">
        <h3 className="w-12 h-12 mt-[20px] ml-[209px]">Login</h3>
        <form onSubmit={handleChange}>
          <input
            type="email"
            className="bg-pink-200 w-[90%] mr-2 ml-6 mb-4 mt-[5px] h-8 outline-0 pl-2"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setFormValue({ ...formvalue, email: e.target.value });
            }}
            required
          />
          <br />
          <input
            type="text"
            className="bg-pink-200 w-[90%] mr-2 ml-6 mb-4 h-8 mt-[8px] outline-0 pl-2"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setFormValue({ ...formvalue, password: e.target.value });
            }}
            required
          />
          <br />
          <button className="bg-blue-400 w-20 h-10 ml-[188px]">Login</button>
        </form>
        <Link to="/signup">
          <h4 className="ml-[165px] mt-3">Go to signup page?</h4>
        </Link>
      </div>
    </div>
  );
};

export default Login;
