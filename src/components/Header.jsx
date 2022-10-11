import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
	return (
		<div className="flex items-center gap-2 mb-16">
			<img className="w-[30%]" src={logo} alt="eden logo" />
			<h2 className="text-2xl font-bold">Eden</h2>
		</div>
	);
};

export default Header;
