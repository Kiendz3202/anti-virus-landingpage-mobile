import React, { useEffect, useState } from 'react';
import ScanResult from '../component/ScanResult';
import { delay } from '../utils/delay';

function HomeView() {
	const [isCheckingInitial, setIsCheckingInitial] = useState(true);
	const [page1, setPage1] = useState(true);
	const [page2, setPage2] = useState(false);
	const [page3, setPage3] = useState(false);
	useEffect(() => {
		const intervalID = setTimeout(() => {
			setIsCheckingInitial((toggle) => !toggle);
		}, 2000);

		return () => clearInterval(intervalID);
	}, []);
	return (
		<div className=" w-full  ">
			<div className="pt-[10rem] pb-[6rem] h-full bg-[#1C58B1] ">
				<div>
					<img
						className="w-[150px] h-auto mx-auto  "
						src="/shield.jpg"
					/>
				</div>
				<div className="text-[2.4rem] text-white font-semibold text-center mt-[5rem]">
					{isCheckingInitial ? (
						<div>Đang kiểm tra virus và file rác...</div>
					) : (
						<div>Phát hiện máy có virus và nhiều tập tin rác</div>
					)}
				</div>
				<div className="flex items-center justify-center text-white font-semibold mx-auto mt-[7rem] h-[7rem] text-[2.4rem] w-[35rem] rounded-full bg-[#FF9E43] active:opacity-80">
					{/* <button className=""> */}
					Ấn để dọn rác và diệt virus
					{/* </button> */}
				</div>
			</div>
			{/* <ScanResult /> */}
		</div>
	);
}

export default HomeView;
