import React from "react";
import Header from "../components/Header";
import "../styles/AuthenticatedPage.scss";
import Button from "../components/Button";
import "../styles/Button.scss";

const AuthenticatedPage = () => {
  return (
    <div className="auth-container">
      <Header />
      <div className="text-center flex justify-around items-center mt-20  flex-wrap">
        <div className="auth-box ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
            alt=""
            srcset=""
          />
          <div className="btn-bottom">
            <Button
              customClass={"absolute text-center btn-border"}
              text={"Create Alert"}
            ></Button>
          </div>
        </div>
        <div className="auth-box ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
            alt=""
            srcset=""
          />
          <div className="btn-bottom">
            <Button
              customClass={"absolute text-center btn-border"}
              text={"Show Alerts"}
            ></Button>
          </div>
        </div>
        <div className="auth-box ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
            alt=""
            srcset=""
          />
          <div className="btn-bottom">
            <Button
              customClass={"absolute text-center btn-border"}
              text={"Dashboard"}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthenticatedPage;
