import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import BugReportIcon from '@mui/icons-material/BugReport';
import RocketIcon from '@mui/icons-material/Rocket';
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useState } from 'react';

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function ScanResult() {
	const [bigFile, setBigFile] = useState(
		getRandomArbitrary(0.3, 2).toString().slice(0, 3)
	);
	const [virus, setVirus] = useState(
		getRandomArbitrary(108, 352).toString().split('.')[0]
	);
	const [speedPercent, setSpeedPercent] = useState(
		getRandomArbitrary(30, 80).toString().split('.')[0]
	);
	const [trashFile, setTrashFile] = useState(
		getRandomArbitrary(0.2, 3).toString().slice(0, 3)
	);

	// const bigFile = getRandomArbitrary(0.3, 2).toString().slice(0, 3);
	// const virus = getRandomArbitrary(108, 352).toString().split('.')[0];
	// const speedPercent = getRandomArbitrary(30, 80).toString().split('.')[0];
	// const trashFile = getRandomArbitrary(0.2, 3).toString().slice(0, 3);
	// console.log(trashFile);
	return (
		<div className="bg-[#F2F3F7]">
			{/* big file  */}
			<div className="flex justify-between  h-[12rem] items-center text-[2.8rem] font-medium ">
				<div>
					<div className="bg-[#2A81E3] text-white rounded-full w-[7rem] h-[7rem] ml-[2rem]">
						<InsertDriveFileIcon
							sx={{
								fontSize: '4rem',
								marginLeft: '1.5rem',
								marginTop: '1.2rem',
							}}
						/>
					</div>
				</div>
				<div className=" mr-auto ml-[4rem]">Các file lớn</div>
				<div className="flex">
					<div role="status">
						<svg
							aria-hidden="true"
							class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/>
						</svg>
						<span class="sr-only">Loading...</span>
					</div>
					<div className="pr-[2rem]">{bigFile}GB</div>
				</div>
			</div>
			{/* diet virus  */}
			<div className="flex justify-between  h-[12rem] items-center text-[2.8rem] font-medium">
				<div>
					<div className="bg-[#2A81E3] text-white rounded-full w-[7rem] h-[7rem] ml-[2rem]">
						<BugReportIcon
							sx={{
								fontSize: '4rem',
								marginLeft: '1.5rem',
								marginTop: '1.2rem',
							}}
						/>
					</div>
				</div>
				<div className=" mr-auto ml-[4rem]">Quét virus</div>
				<div className="pr-[2rem]">{virus}</div>
			</div>
			{/* tang toc  */}
			<div className="flex justify-between  h-[12rem] items-center text-[2.8rem] font-medium">
				<div>
					<div className="bg-[#2A81E3] text-white rounded-full w-[7rem] h-[7rem] ml-[2rem]">
						<RocketIcon
							sx={{
								fontSize: '4rem',
								marginLeft: '1.5rem',
								marginTop: '1.2rem',
							}}
						/>
					</div>
				</div>
				<div className=" mr-auto ml-[4rem]">Tăng tốc máy</div>
				<div className="pr-[2rem]">{speedPercent}%</div>
			</div>
			{/* Các file rác   */}
			<div className="flex justify-between  h-[12rem] items-center text-[2.8rem] font-medium">
				<div>
					<div className="bg-[#2A81E3] text-white rounded-full w-[7rem] h-[7rem] ml-[2rem]">
						<DeleteIcon
							sx={{
								fontSize: '4rem',
								marginLeft: '1.5rem',
								marginTop: '1.2rem',
							}}
						/>
					</div>
				</div>
				<div className=" mr-auto ml-[4rem]">Các file rác</div>
				<div className="pr-[2rem]">{trashFile}GB</div>
			</div>
			{/* Tai ung dung   */}
			<div className="flex flex-col   items-center text-[3.2rem] font-medium mt-[4rem] pb-[3rem]">
				<div className="flex items-center justify-center bg-[#FF9E43] text-white rounded-full w-[30rem] h-[8rem] active:opacity-60 cursor-pointer animate-bounce">
					<div>Tải xuống</div>
					<div>
						<FileDownloadIcon
							sx={{
								fontSize: '4rem',
								marginLeft: '1.5rem',
								marginTop: '1.2rem',
							}}
						/>
					</div>
				</div>
				<div className="mt-[3rem] text-[2.4rem] font-normal">
					Tải ứng dụng để diệt tận gốc
				</div>
			</div>
		</div>
	);
}

export default ScanResult;
