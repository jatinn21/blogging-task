import React from "react";
import { useState } from "react";
import "../login.css";

// to navigate to pages
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  //  making a variable for navigator
  const navigate = useNavigate();
  // Step 1 : Creating a State for New Users
  const [signupInputs, setSignUpInputs] = useState({
    signupName: "",
    signupEmail: "",
    signupPassword: "",
  });

  const [allUser, setAllUser] = useState([]);

  const [onlineUser, setOnlineUser] = useState([]);

  const clearFields = () => {
    setSignUpInputs({ signupName: "", signupEmail: "", signupPassword: "" });
    document.querySelector(".content.p1").style.transform = "translateX(0%)";
    document.querySelector(".content.p2").style.transform = "translateX(0%)";

    document.querySelector(".footerP2").style.display = "none";
    document.querySelector(".footerP1").style.transform = "translateX(0%)";
    document.querySelector(".footerP1").style.display = "flex";
    navigate("/login");

    // setTimeout(() => {
    //   alert("Account Created Successfully!");
    // }, 500);
  };

  // Step 2 : to store value to localStorage when user clicks the Signup Button
  const signUpSubmit = (e) => {
    e.preventDefault();
    allUser.push(signupInputs);

    //storing all the account in the localStorage
    localStorage.setItem("user", JSON.stringify(allUser));
    clearFields();
  };

  // Step 3 : Creating a State for loggin User
  const [loginInputs, setLoginInputs] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  // Step 4 : now check whether the user has mentioned right credentials to login or not?
  const loginSubmit = (e) => {
    e.preventDefault();
    const mailPresented = JSON.parse(localStorage.user);

    if (loginInputs.loginEmail !== "") {
      // searching for mail && if found store the details in mailFound
      const mailFound = mailPresented.filter((acc) => {
        return (
          loginInputs.loginEmail === acc.signupEmail &&
          loginInputs.loginPassword === acc.signupPassword
        );
      });

      if (mailFound.length == 0) {
        alert("Email/Password is wrong!!");
      } else {
        const activeUser = [];
        for (const credentials of Object.values(...mailFound)) {
          activeUser.push(credentials);
        }
        setOnlineUser(
          onlineUser.push({
            activeUserName: activeUser[0],
            activeUserEmail: activeUser[1],
            activeUserPassword: activeUser[2],
          })
        );

        console.log(mailFound);
        console.log(activeUser);
        console.log(onlineUser);

        localStorage.setItem("LoggedIn", JSON.stringify(onlineUser));
        navigate("/home");
      }
    }
  };

  return (
    <body className="center">
      <div className="LoginPage__Container">
        <section className="login_part1">
          <span className="Login_logo">BlogExpress </span>
          <span className="Login_middle center">
            <div>
              <h1>Welcome Readers</h1>
              <p>The faster you fill up, the faster you can read our blogs</p>
            </div>
            <div className="main">
              <div className="content p1">
                <form className="loginForm" onSubmit={loginSubmit}>
                  <input
                    className="login__username loginInput"
                    type="email"
                    name="loginEmail"
                    value={loginInputs.loginEmail}
                    onChange={(e) =>
                      setLoginInputs({
                        ...loginInputs,
                        [e.target.name]: e.target.value,
                      })
                    }
                    placeholder="Enter Email"
                    autoComplete="off"
                  />
                  <input
                    className="login__password loginInput"
                    type="password"
                    name="loginPassword"
                    value={loginInputs.loginPassword}
                    onChange={(e) =>
                      setLoginInputs({
                        ...loginInputs,
                        [e.target.name]: e.target.value,
                      })
                    }
                    placeholder="Enter Password"
                    autoComplete="off"
                  />
                  <input
                    type="submit"
                    className="loginSubmitBtn"
                    value="Login"
                  />
                </form>
              </div>
              <div className="content p2">
                <form
                  className="signupForm"
                  method="GET"
                  onSubmit={signUpSubmit}
                >
                  <input
                    className="signup__name signupInput"
                    type="text"
                    placeholder="Enter Name"
                    name="signupName"
                    required
                    value={signupInputs.signupName}
                    onChange={(e) =>
                      setSignUpInputs({
                        ...signupInputs,
                        [e.target.name]: e.target.value,
                      })
                    }
                    autoComplete="off"
                  />
                  <input
                    className="signup__username signupInput"
                    type="email"
                    placeholder="Enter Email"
                    name="signupEmail"
                    required
                    value={signupInputs.signupEmail}
                    onChange={(e) =>
                      setSignUpInputs({
                        ...signupInputs,
                        [e.target.name]: e.target.value,
                      })
                    }
                    autoComplete="off"
                  />
                  <input
                    className="signup__password signupInput"
                    type="password"
                    placeholder="Enter Password"
                    name="signupPassword"
                    required
                    value={signupInputs.signupPassword}
                    onChange={(e) =>
                      setSignUpInputs({
                        ...signupInputs,
                        [e.target.name]: e.target.value,
                      })
                    }
                    autoComplete="off"
                  />
                  <input
                    type="submit"
                    className="signupSubmitBtn"
                    value="Signup"
                  />
                </form>
              </div>
            </div>
          </span>
          <span className="Dont_have_account">
            <p className="footerP1 accountfooter center">
              Don't have an account? &nbsp;
              <a
                className="signupbutton"
                onClick={() => {
                  document.querySelector(".content.p1").style.transform =
                    "translateX(-100%)";
                  document.querySelector(".content.p2").style.transform =
                    "translateX(-100%)";

                  document.querySelector(".footerP1").style.display = "none";
                  document.querySelector(".footerP2").style.transform =
                    "translateX(0%)";
                  document.querySelector(".footerP2").style.display = "flex";
                  navigate("/signup");
                }}
              >
                Signup
              </a>
            </p>
            <p className="footerP2 accountfooter center">
              Already have an account? &nbsp;
              <a
                className="signupbutton"
                onClick={() => {
                  document.querySelector(".content.p1").style.transform =
                    "translateX(0%)";
                  document.querySelector(".content.p2").style.transform =
                    "translateX(0%)";

                  document.querySelector(".footerP2").style.display = "none";
                  document.querySelector(".footerP1").style.transform =
                    "translateX(0%)";
                  document.querySelector(".footerP1").style.display = "flex";
                  navigate("/login");
                }}
              >
                Login
              </a>
            </p>
          </span>
        </section>
        <section className="login_part2"></section>
      </div>
    </body>
  );
};

export default Loginpage;
