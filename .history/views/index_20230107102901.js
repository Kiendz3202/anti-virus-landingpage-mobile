import React, { useState } from 'react';
import ScanResult from '../component/ScanResult';
import { delay } from '../utils/delay';

function HomeView() {
	const [isCheckingInitial, setIsCheckingInitial] = useState(true);
	return (
		<div className=" w-full h-screen ">
			<div className="pt-[10rem] pb-[6rem] h-full bg-[#1C58B1] ">
				<div>
					<img
						className="w-[150px] h-auto mx-auto  "
						src="/shield.jpg"
					/>
				</div>
				<div className="text-[2.4rem] text-white font-semibold text-center mt-[5rem]">
					<div>Đang kiểm tra virus và file rác...</div>
				</div>
				<div className="flex items-center justify-center mx-auto mt-[7rem] h-[7rem] text-[2.4rem] w-[35rem] rounded-full bg-[#FF9E43] active:opacity-80">
					<button className="text-white font-semibold">
						Ấn để dọn rác và diệt virus
					</button>
				</div>
			</div>
			{/* <ScanResult /> */}
		</div>
	);
}

export default HomeView;
