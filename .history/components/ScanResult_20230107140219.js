import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import BugReportIcon from '@mui/icons-material/BugReport';
import RocketIcon from '@mui/icons-material/Rocket';
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function ScanResult() {
	return (
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
				<div className=" mr-auto ml-[4rem]">Các file lớn</div>
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
			{/* Các file rác   */}
			<div className="flex justify-between  h-[10rem] items-center text-[2.4rem] font-medium">
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
				<div className="pr-[2rem]">349MB</div>
			</div>
			{/* Tai ung dung   */}
			<div className="flex justify-between  h-[10rem] items-center text-[2.4rem] font-medium mt-[4rem] pb-[3rem]">
				<div className=" mr-auto ml-[4rem] break-words w-[15rem]">
					Tải ứng dụng để diệt tận gốc
				</div>
				<div className="pr-[2rem] bg-[#FF9E43] text-white rounded-full ">
					<span>Tải xuống</span>
					<FileDownloadIcon
						sx={{
							// color: 'white',
							fontSize: '4rem',
							marginLeft: '1.5rem',
							marginTop: '1.2rem',
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default ScanResult;
