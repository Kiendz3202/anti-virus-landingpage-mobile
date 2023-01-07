import HomeView from '../views';
import React, { useEffect, useState } from 'react';

export default function Home() {
	const [loadingScan, setLoadingScan] = useState(false);
	const [showResult, setShowResult] = useState(false);

	const scanHandle = async () => {
		// setIsCheckingInitial(false);
		setLoadingScan(true);
		await delay(2000);
		setLoadingScan(false);
		setShowResult(true);
	};
	return (
		<div
		// className={`${
		// 	showResult ? 'h-full' : 'h-screen'
		// } transition-all ease-in-out duration-300`}
		>
			<div
				className={`pt-[10rem] pb-[6rem] w-full  bg-[#1C58B1] ${
					showResult ? 'rounded-b-[5rem] h-[400px]' : 'h-[800px]'
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
					className="flex items-center justify-center text-white font-semibold mx-auto mt-[7rem] h-[7rem] text-[2.4rem] w-[35rem] rounded-full bg-[#FF9E43] active:opacity-80"
				>
					{loadingScan ? (
						<span>Đạng kiểm tra...</span>
					) : (
						<span> Ấn để kiểm tra rác và virus</span>
					)}
				</div>
			</div>
			{/* {showResult ? <ScanResult /> : ''} */}
		</div>
	);
}
