// Navbar.js
"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { logout } from "@/modules/auth/authSlice";
import Logo from "../logo/logo";

const Navbar = () => {
  const loginData = useSelector((state: any) => state?.root?.auth?.loginValues);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    router.push("/");
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
  };

  return (
    <div className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <Logo/>
        <div className="mr-4">Welcome</div>
        <div className="flex items-center">
          <Button variant={"destructive"} onClick={handleLogOut}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
