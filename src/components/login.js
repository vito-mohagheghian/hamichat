import React, { useEffect } from "react";

import Input from "./Input";

import logo from "../assists/hamichat-logo.png";

import "../styles/login.css";

const Login = () => {
  const date = new Date().toLocaleDateString("fa-IR");

  var character = 0;
  var text = `کارشناسان ما در ارتباط باشید.`;
  var speed = 75;

  function typeWriter() {
    if (character < text.length) {
      document.getElementById("description").innerHTML +=
        text.charAt(character);
      character++;
      setTimeout(typeWriter, speed);
    }
  }

  const formHandler = (e) => {
    e.preventDefault();

    const user = {
      ID: e.target[0].value,
      tel: e.target[1].value,
    };

    console.log(user);
  };

  useEffect(() => {
    typeWriter();
  }, []);

  return (
    <div className="form-container">
      <form className="form" onSubmit={formHandler}>
        <img src={logo} alt="hami chat logo" />

        <h4 className="service-description" id="description">
          شما می‌توانید <b>7روز هفته و 24 ساعته</b> به صورت چت تصویری و متن با
        </h4>

        <Input
          type={"number"}
          header={"کدملی"}
          id={"nationalID"}
          name={"nationl ID"}
          pattern={"[0-9]{10}"}
          placeholder={"برای مثال (۱۲۷۶۵۹۸۳۲۱)"}
        />
        <Input
          type={"tel"}
          header={"شماره تلفن همراه"}
          id={"tel"}
          name={"telephone number"}
          pattern={"09[0-9]{9}"}
          placeholder={"برای مثال (۰۹۱۳۶۲۴۲۸۴۶)"}
        />

        <div className="rules-container">
          <ul className="rules-slider">
            <li>قوانین و مقررات حامی چت</li>
            <li>
              به جهت افزایش رضایت و پاسخگویی بهتر به شما عزیزان کلیه مکالمات
              .تصویری و متنی با کارشناسان ما ضبط می گردد
            </li>
            <li>
              رعایت کلیه شئونات اسلامی در هنگام برقراری ارتباط با کارشناسان ما
              الزامی می باشد.
            </li>
            <li>
              جهت استفاده بهتر از این سرویس می بایست از یک بستر اینترنت پایدار و
              پرسرعت استفاده نمائید.
            </li>
          </ul>
        </div>

        <div className="rules-acception">
          <input type="checkbox" className="checkbox" required />
          <label htmlFor="rules-acception">
            <a
              href="https://hamichat.pep.co.ir/client/terms"
              target={"_blank"}
              rel="noreferrer"
            >
              قوانین و مقررات
            </a>{" "}
            تماس تصویری را مطالعه کردم و با آن موافق هستم.
          </label>
        </div>

        <button type="submit" className="login-submit-button">
          ورود به حامی
        </button>
        <h6 className="login-copyright">
          © توسعه داده شده توسط گروه رابین {date.slice(0, 4)}
        </h6>
      </form>
    </div>
  );
};

export default Login;
