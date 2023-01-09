import React, { useEffect, useState } from 'react';
import ScanResult from '../components/ScanResult';
import ScanShield from '../components/ScanShield';
import { delay } from '../utils/delay';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

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
		<div className="min-h-screen h-full bg-[#080533]">
			<div
				className={` w-full   transition-all ease-in-out duration-[1500ms]  ${
					showResult ? ' h-[0px]' : 'h-screen pt-[20rem]'
				}`}
			>
				<div
					className={`bg-[#08043D] h-[40rem] w-[40rem] mx-auto rounded-full flex items-center justify-center ${
						showResult ? 'hidden' : ''
					}`}
				>
					<div className=" bg-[#070446] h-[32rem] w-[32rem] rounded-full flex items-center justify-center relative">
						<div className="bg-gradient-to-r from-[#0F2171] to-[#075DAF] h-[28rem] w-[28rem] rounded-full flex items-center justify-center animate-spin"></div>
						<div
							onClick={scanHandle}
							className=" bg-gradient-to-r from-[#1CE5F8] to-[#0092FF] h-[24rem] w-[24rem] rounded-full flex items-center justify-center absolute top-[4rem]"
						>
							<div className=" bg-gradient-to-r from-[#08042E] to-[#060075] h-[23rem] w-[23rem] rounded-full flex items-center justify-center ">
								<span className="text-white text-[6rem] font-semibold">
									Quét
								</span>
							</div>
						</div>
					</div>
				</div>
				<div
					className={`text-white text-center mt-[5rem] text-[2.8rem] px-[1rem] font-semibold flex flex-col ${
						showResult ? 'hidden' : ''
					}`}
				>
					<div className=" animate-bounce">
						<ArrowUpwardIcon
							sx={{
								fontSize: '9rem',
								// marginLeft: '1.5rem',
								marginBottom: '1.2rem',
							}}
						/>
					</div>
					<div>Ấn quét để kiểm tra virus và tăng tốc máy bạn !</div>
				</div>
			</div>
			{showResult ? (
				<div className="text-white pt-[5rem]">
					<ScanShield showResult={showResult} />
					<ScanResult />
				</div>
			) : (
				''
			)}
		</div>
	);
}

export default HomeView;
