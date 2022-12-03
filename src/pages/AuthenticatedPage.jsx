import React , { useState } from "react";
import Header from "../components/Header";
import "../styles/AuthenticatedPage.scss";
import Button from "../components/Button";
import "../styles/Button.scss";
import { Link } from 'react-router-dom'
// import "../styles/ModalPop.scss"
import {Modal } from 'antd';

const AuthenticatedPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  }
  return (
    <div className="auth-container">
      <Header />
      <Modal  title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    
      </Modal>

      <div className="text-center flex justify-around items-center mt-20  flex-wrap">
        {/* <a onClick={showModal} href="#"> */}
          <div className="auth-box ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
              alt=""
              srcset=""
            />
            
             <Link to="/create-alert">
             <div className="btn-bottom">
             <Button
                customClass={"absolute text-center btn-border"}
                text={"Create Alert"}
              ></Button>
               </div>
             </Link>
           
          </div>
        {/* </a> */}
        <div className="auth-box ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
            alt=""
            srcset=""
          />
          <Link to="/alerts">
          <div className="btn-bottom">
            <Button
              customClass={"absolute text-center btn-border"}
              text={"Show Alerts"}
            ></Button>
          </div>
          </Link>
        </div>
        <Link to="/dashboard">
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
        </Link>
      </div>
    </div>
  );
};
export default AuthenticatedPage
