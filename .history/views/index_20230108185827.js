import React, { useEffect, useState } from 'react';
import ScanResult from '../components/ScanResult';
import { delay } from '../utils/delay';

function HomeView() {
	// const [isCheckingInitial, setIsCheckingInitial] = useState(true);
	const [loadingScan, setLoadingScan] = useState(false);
	const [showResult, setShowResult] = useState(false);
	// useEffect(() => {
	// 	const intervalID = setTimeout(() => {
	// 		setIsCheckingInitial((toggle) => !toggle);
	// 	}, 2000);

	// 	return () => clearInterval(intervalID);
	// }, []);

	const scanHandle = async () => {
		if (!showResult) {
			// setIsCheckingInitial(false);
			setLoadingScan(true);
			// await delay(4000);
			setLoadingScan(false);
			setShowResult(true);
		}
	};
	return (
		<div className="h-screen bg-[#080533]">
			<div
				className={` w-full   transition-all ease-in-out duration-[1500ms] ${
					showResult ? ' h-[0px]' : 'h-screen'
				}`}
			>
				<div className={`${showResult ? 'hidden' : ''}`}>
					<img
						className="w-[15rem] h-auto mx-auto pt-[7rem] rounded-full"
						src="/shield.jpg"
					/>
				</div>
				<div className="bg-[#08043D] h-[40rem] w-[40rem] mx-auto rounded-full flex items-center justify-center">
					<div className=" bg-[#070446] h-[32rem] w-[32rem] rounded-full flex items-center justify-center relative">
						<div className="bg-gradient-to-r from-[#0F2171] to-[#075DAF] h-[28rem] w-[28rem] rounded-full flex items-center justify-center animate-spin"></div>
					</div>
				</div>
			</div>
			{showResult ? <ScanResult /> : ''}
		</div>
	);
}

export default HomeView;
