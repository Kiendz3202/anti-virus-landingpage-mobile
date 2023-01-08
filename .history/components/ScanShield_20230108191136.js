import React from 'react';

function ScanShield() {
	return (
		<div>
			<div
				className={`bg-[#08043D] h-[40rem] w-[40rem] mx-auto rounded-full flex items-center justify-center `}
			>
				<div className=" bg-[#070446] h-[32rem] w-[32rem] rounded-full flex items-center justify-center relative">
					<div className="bg-gradient-to-r from-[#0F2171] to-[#075DAF] h-[28rem] w-[28rem] rounded-full flex items-center justify-center animate-spin"></div>
					<div className=" bg-gradient-to-r from-[#1CE5F8] to-[#0092FF] h-[24rem] w-[24rem] rounded-full flex items-center justify-center absolute top-[4rem]">
						<div className=" bg-gradient-to-r from-[#08042E] to-[#060075] h-[23rem] w-[23rem] rounded-full flex items-center justify-center ">
							<span className="text-white text-[6rem] font-semibold">
								Quét
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ScanShield;
