import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { EdenState } from "../context";
import { motion } from "framer-motion";

const FinalMessage = () => {
	const { displayName } = EdenState();
	return (
		<motion.div initial="pageInitial" animate="pageAnimate" variants={{
			pageInitial: {
			  opacity: 0
			},
			pageAnimate: {
			  opacity: 1
			},
		  }}>
			<Breadcrumb step1 step2 step3 step4 />
			<div className="flex flex-col items-center gap-4">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {
							scale: 1,
							opacity: 0,
						},
						visible: {
							scale: 1.4,
							opacity: 1,
							transition: {
								delay: 0.7,
							},
						},
					}}
					className="text-[#f5f5f5] text-2xl font-bold w-[60px] h-[60px] bg-[#664DE5] flex justify-center items-center rounded-[50%] mb-12"
				>
					{"\u2713"}
				</motion.div>
				<h2 className="text-2xl md:text-3xl font-[700]">Congratulations, {displayName}!</h2>
				<p className="text-gray-400 font-[500] text-[0.8em] md:text-lg text-center">
					You have completed onboarding, you can start using the Eden!
				</p>
			</div>
			<div className="flex flex-col justify-center items-center gap-4 mt-16">
				<button className="bg-[#664DE5] p-3 rounded-lg text-[#f5f5f5] w-[80%]" type="button">
					Launch Eden
				</button>
			</div>
		</motion.div>
	);
};

export default FinalMessage;
