import React, { useEffect, useState } from 'react';

function ScanShield({ showResult }) {
	const [stopAnimation, setStopAnimation] = useState(false);
	useEffect(() => {}, []);
	return (
		<div>
			<div
				className={` bg-gradient-to-r from-[#2483EA] to-[#1A58FD] h-[40rem] w-[40rem] mx-auto rounded-full flex items-center justify-center`}
			>
				<div className=" bg-[#070446] h-[39.5rem] w-[39.5rem] rounded-full flex items-center justify-center ">
					<div
						className={` bg-gradient-to-r from-[#2483EA] to-[#1A58FD] h-[35rem] w-[35rem] mx-auto rounded-full flex items-center justify-center `}
					>
						<div className=" bg-[#070446] h-[34.5rem] w-[34.5rem] rounded-full flex items-center justify-center ">
							<div className="  bg-gradient-to-r from-[#2483EA] to-[#1A58FD] h-[30rem] w-[30rem] rounded-full flex items-center justify-center ">
								<div className='className=" bg-[#070446] h-[28rem] w-[28rem] rounded-full flex items-center justify-center "'>
									<img
										src="/shield.png"
										className={`${
											isScanning ? 'animate-ping' : ''
										}`}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ScanShield;
