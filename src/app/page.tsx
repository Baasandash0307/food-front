'use client'

import { useState } from "react";
import Header from "./customer/homePage/Components/header";
import LoginPage from "./customer/loginPage/signup/components/page";
import Categories from "./customer/homePage/Components/categories"

export default function Home() {

  const [formValues, setFormValues] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    ConfirmPassword: "",
    date: "",
    image: ""
  });

  return (
    <div className="w-full h-screen">
      <div>
        <Header></Header>
      </div>

      <div>
        <Categories></Categories>
      </div>
    </div>
  );
}
