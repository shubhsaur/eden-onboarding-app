import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaUsers } from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb";
import { motion } from "framer-motion";

const SelectTeam = () => {
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
			<Breadcrumb step1 step2 step3 />
			<div className="flex flex-col items-center gap-4">
				<h2 className="text-xl md:text-3xl font-[700]">How are you planning to use Eden?</h2>
				<p className="text-gray-400 font-[500] text-[0.8em] md:text-lg text-center">
					We'll streamline your setup experience accordingly.
				</p>
			</div>
			<form className="flex flex-col gap-4 mt-16" action="#">
				<div className="flex justify-center gap-4">
					<input id="user" type="radio" name="shape" value="user" defaultChecked required />
					<label className="w-[150px] md:w-[200px] border-[2px] border-gray-400 rounded-md p-[2em]" htmlFor="user">
						<FaUserAlt />
						<h6 className="text-[0.7em] md:text-[1.2em] text-[#22223b] font-bold py-2">For myself</h6>
						<p className="text-[0.6em] md:text-[0.8em] text-[#8a817c]">
							Write better. Think more clearly. Stay organized.
						</p>
					</label>

					<input id="teams" type="radio" name="shape" value="teams" required />
					<label className="w-[150px] md:w-[200px] border-[2px] border-gray-400 rounded-md p-[2em]" htmlFor="teams">
						<FaUsers className="scale-150" />
						<h6 className="text-[0.7em] md:text-[1.2em] text-[#22223b] font-bold py-2">With my team</h6>
						<p className="text-[0.6em] md:text-[0.8em] text-[#8a817c]">
							Wikis, docs, tasks & projects, all in one place.
						</p>
					</label>
				</div>
				<button onClick={() => navigate("/final")} className="bg-[#664DE5] p-3 rounded-lg text-[#f5f5f5]" type="button">
					Create Workspace
				</button>
			</form>
		</motion.div>
	);
};

export default SelectTeam;
