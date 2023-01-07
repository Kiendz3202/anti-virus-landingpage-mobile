import React, { useEffect, useState } from 'react';
import ScanResult from '../component/ScanResult';
import { delay } from '../utils/delay';

function HomeView() {
	const [isCheckingInitial, setIsCheckingInitial] = useState(true);
	const [loadingScan, setLoadingScan] = useState(false);
	const [showResult, setShowResult] = useState(false);
	// useEffect(() => {
	// 	const intervalID = setTimeout(() => {
	// 		setIsCheckingInitial((toggle) => !toggle);
	// 	}, 2000);

	// 	return () => clearInterval(intervalID);
	// }, []);

	const scanHandle = async () => {
		setIsCheckingInitial(false);
		setLoadingScan(true);
		await delay(5000);
		setLoadingScan(false);
		setShowResult(true);
	};
	return (
		<div
			className={` w-full ${
				showResult ? 'h-screen' : 'h-full'
			} transform transition duration-300`}
		>
			<div
				className={`pt-[10rem] pb-[6rem] h-full bg-[#1C58B1] ${
					showResult ? 'rounded-b-[5rem]' : ''
				} `}
			>
				<div>
					<img
						className="w-[150px] h-auto mx-auto  "
						src="/shield.jpg"
					/>
				</div>
				<div
					id="textCheckingInitial"
					className="text-[2.4rem] text-white font-semibold text-center mt-[5rem]"
				>
					{isCheckingInitial ? (
						<div>Phát hiện máy có virus và nhiều tập tin rác</div>
					) : (
						''
					)}
				</div>
				<div
					onClick={scanHandle}
					className="flex items-center justify-center text-white font-semibold mx-auto mt-[7rem] h-[7rem] text-[2.4rem] w-[35rem] rounded-full bg-[#FF9E43] active:opacity-80"
				>
					Ấn để dọn rác và diệt virus
				</div>
			</div>
			{/* <ScanResult /> */}
		</div>
	);
}

export default HomeView;
