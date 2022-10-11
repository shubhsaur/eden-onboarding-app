import React from "react";

const Breadcrumb = ({ step1, step2, step3, step4 }) => {
	return (
		<div className="flex justify-center items-center  mb-16">
			<div
				className={
					step1
						? "bg-[#664DE5] text-[#f5f5f5] flex justify-center items-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[50%] border-[#664DE5] border-[2px] font-bold"
						: "flex justify-center items-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[50%] border-gray-300 border-[2px] text-gray-600 font-bold"
				}
			>
				1
			</div>
			<div className={step2 ? "h-[1.5px] bg-[#664DE5] w-[60px]" : "h-[1.5px] bg-gray-300 w-[60px]"}></div>
			<div
				className={
					step2
						? "bg-[#664DE5] text-[#f5f5f5] flex justify-center items-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[50%] border-[#664DE5] border-[2px] font-bold"
						: "flex justify-center items-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[50%] border-gray-300 border-[2px] text-gray-600 font-bold"
				}
			>
				2
			</div>
			<div className={step3 ? "h-[1.5px] bg-[#664DE5] w-[60px]" : "h-[1.5px] bg-gray-300 w-[60px]"}></div>
			<div
				className={
					step3
						? "bg-[#664DE5] text-[#f5f5f5] flex justify-center items-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[50%] border-[#664DE5] border-[2px] font-bold"
						: "flex justify-center items-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[50%] border-gray-300 border-[2px] text-gray-600 font-bold"
				}
			>
				3
			</div>
			<div className={step4 ? "h-[1.5px] bg-[#664DE5] w-[60px]" : "h-[1.5px] bg-gray-300 w-[60px]"}></div>
			<div
				className={
					step4
						? "bg-[#664DE5] text-[#f5f5f5] flex justify-center items-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[50%] border-[#664DE5] border-[2px] font-bold"
						: "flex justify-center items-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[50%] border-gray-300 border-[2px] text-gray-600 font-bold"
				}
			>
				4
			</div>
		</div>
	);
};

export default Breadcrumb;
