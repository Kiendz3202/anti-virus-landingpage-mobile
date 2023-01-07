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
			await delay(2000);
			setLoadingScan(false);
			setShowResult(true);
		}
	};
	return (
		<div className="h-screen bg-[#F2F3F7]">
			<div
				className={`pt-[10rem] pb-[6rem] w-full  bg-[#1C58B1] transition-all ease-in-out duration-1000 ${
					showResult ? 'rounded-b-[5rem] h-[400px]' : 'h-screen'
				}`}
			>
				<div>
					<img
						className="w-[150px] h-auto mx-auto  "
						src="/shield.jpg"
					/>
				</div>
				<div
					onClick={scanHandle}
					className={`flex items-center justify-center animate-bounce text-white font-semibold mx-auto mt-[7rem] h-[7rem] text-[2.4rem] w-[35rem] rounded-full bg-[#FF9E43] active:opacity-80 cursor-pointer hover:animate-spin`}
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
			{showResult ? <ScanResult /> : ''}
		</div>
	);
}

export default HomeView;
