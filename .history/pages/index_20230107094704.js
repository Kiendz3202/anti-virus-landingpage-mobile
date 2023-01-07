import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

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
						Ấn để dọn rác và diệt virus
					</button>
				</div>
			</div>
			<div>
				<div className="flex justify-between bg-slate-400 h-[5rem] items-center text-[2rem] font-medium">
					<div>
						<InsertDriveFileIcon sx={{ fontSize: '3rem' }} />
					</div>
					<div>Các file rác</div>
					<div>1.24GB</div>
				</div>
			</div>
		</div>
	);
}
