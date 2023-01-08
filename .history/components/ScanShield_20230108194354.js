import React, { useEffect, useState } from 'react';
import { delay } from '../utils/delay';

function ScanShield({ showResult }) {
	const [stopAnimation, setStopAnimation] = useState(false);
	const [display, setDisplay] = useState(true);
	useEffect(() => {
		const stopAnimationHandle = async () => {
			await delay(6000);
			setStopAnimation(true);
			setDisplay(false);
		};
		stopAnimationHandle();
	}, []);
	return (
		<div
			className={`transition-all ease-in-out duration-[1500ms] ${
				display ? '' : 'hidden opacity-0'
			}`}
		>
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
											stopAnimation ? '' : 'animate-ping'
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
