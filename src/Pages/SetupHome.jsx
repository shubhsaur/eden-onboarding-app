import React from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { motion } from "framer-motion";

const SetupHome = () => {
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
			<Breadcrumb step1 step2 />
			<div className="flex flex-col items-center gap-4">
				<h2 className="text-xl md:text-3xl font-[700]">Let's set up a home for all your work</h2>
				<p className="text-gray-400 font-[500] text-[0.8em] md:text-lg text-center">
					You can always create another workspace later.
				</p>
			</div>
			<form className="flex flex-col gap-4 mt-16" action="#">
				<div className="flex flex-col gap-2">
					<label className="text-sm font-bold" htmlFor="wname">
						Workspace Name
					</label>
					<input
						className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#664DE5] focus:border-[#664DE5] block w-full p-2.5"
						type="text"
						name="wname"
						id="wname"
						placeholder="Eden"
						required
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label className="text-sm font-bold" htmlFor="wurl">
						Workspace URL <span className="text-gray-400 text-sm">(optional)</span>
					</label>
					<div className="flex">
						<span className="bg-gray-300 text-sm text-gray-700 font-bold p-3 rounded-tl-lg rounded-bl-lg">
							www.eden.com/
						</span>
						<input
							className="border border-gray-300 text-gray-900 text-sm rounded-tr-lg rounded-br-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							type="text"
							name="wurl"
							id="wurl"
							placeholder="Example"
							required
						/>
					</div>
				</div>
				<button
					onClick={() => navigate("/select-team")}
					className="bg-[#664DE5] p-3 rounded-lg text-[#f5f5f5]"
					type="button"
				>
					Create Workspace
				</button>
			</form>
		</motion.div>
	);
};

export default SetupHome;
