import React from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { EdenState } from "../context";
import { motion } from "framer-motion";

const Welcome = () => {
	const { displayName, setDisplayName } = EdenState();
	const navigate = useNavigate();
	return (
		<motion.div
			initial="pageInitial"
			animate="pageAnimate"
			variants={{
				pageInitial: {
					opacity: 0,
				},
				pageAnimate: {
					opacity: 1,
				},
			}}
		>
			<Breadcrumb step1 />
			<div className="flex flex-col items-center gap-4">
				<h2 className="text-xl md:text-3xl font-[700]">Welcome! First thing first...</h2>
				<p className="text-gray-400 font-[500] text-[0.8em] md:text-lg text-center">
					You can always change them later.
				</p>
			</div>
			<form className="flex flex-col gap-4 mt-16" action="#">
				<div className="flex flex-col gap-2">
					<label className="text-sm font-bold" htmlFor="fname">
						Full Name
					</label>
					<input
						className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#664DE5] focus:border-[#664DE5] block w-full p-2.5"
						type="text"
						name="fname"
						id="fname"
						placeholder="Steve Jobs"
						required
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label className="text-sm font-bold" htmlFor="dname">
						Display Name
					</label>
					<input
						className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						type="text"
						name="dname"
						id="dname"
						placeholder="Steve"
						value={displayName}
						onChange={(e) => setDisplayName(e.target.value)}
						required
					/>
				</div>
				<button
					onClick={() => navigate("/home-setup")}
					className="bg-[#664DE5] p-3 rounded-lg text-[#f5f5f5]"
					type="button"
				>
					Create Workspace
				</button>
			</form>
		</motion.div>
	);
};

export default Welcome;
