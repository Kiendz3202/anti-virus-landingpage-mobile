import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import BugReportIcon from '@mui/icons-material/BugReport';
import RocketIcon from '@mui/icons-material/Rocket';

export default function Home() {
	return (
		<div className=" w-full  pb-[5rem] rounded-b-[5rem]">
			<div className="pt-[10rem] pb-[6rem] h-full bg-[#1C58B1] rounded-b-[5rem]">
				<div>
					<img
						className="w-[150px] h-auto mx-auto  "
						src="/shield.jpg"
					/>
				</div>
				<div className="flex items-center justify-center mx-auto mt-[7rem] h-[7rem] text-[2.4rem] w-[35rem] rounded-full bg-[#FF9E43] active:opacity-80">
					<button className="text-white font-semibold">
						Đang quét...
					</button>
				</div>
			</div>
			<div className="bg-[#F6F6FA]">
				{/* big file  */}
				<div className="flex justify-between  h-[10rem] items-center text-[2.4rem] font-medium">
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
					<div className=" mr-auto ml-[4rem]">Các file rác</div>
					<div className="pr-[2rem]">1.24GB</div>
				</div>
				{/* diet virus  */}
				<div className="flex justify-between  h-[10rem] items-center text-[2.4rem] font-medium">
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
					<div className="pr-[2rem]">357</div>
				</div>
				{/* tang toc  */}
				<div className="flex justify-between  h-[10rem] items-center text-[2.4rem] font-medium">
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
					<div className="pr-[2rem]">38%</div>
				</div>
			</div>
		</div>
	);
}
