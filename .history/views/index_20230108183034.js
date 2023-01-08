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
				<div>
					<div
						onClick={scanHandle}
						className={`flex items-center justify-center  text-black bg-white font-semibold mx-auto mt-[20rem] h-[12rem] text-[2.8rem] w-[40rem] rounded-full  shadow-xl active:opacity-80 cursor-pointer animate-bounce ${
							showResult ? 'hidden' : ''
						}`}
					>
						{loadingScan ? (
							<span>Đạng kiểm tra...</span>
						) : showResult ? (
							''
						) : (
							<span> Ấn để kiểm tra rác và virus</span>
						)}
						{showResult && <span>Máy bạn cần tăng tốc ngay!</span>}
					</div>
				</div>
			</div>
			{showResult ? <ScanResult /> : ''}
		</div>
	);
}

export default HomeView;
