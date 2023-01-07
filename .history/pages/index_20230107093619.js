export default function Home() {
	return (
		<div className=" w-full  pb-[5rem] rounded-b-[5rem]">
			<div className="pt-[10rem] pb-[10rem] h-full bg-[#1C58B1]">
				<div>
					<img
						className="w-[180px] h-auto mx-auto  rounded-full  "
						src="/shield.jpg"
					/>
				</div>
				<div className="flex items-center justify-center mx-auto mt-[7rem] h-[7rem] text-[2.4rem] w-[35rem] rounded-full bg-[#FF9E43] ">
					<button className="text-white font-semibold">
						Ấn để dọn rác và diệt virus
					</button>
				</div>
			</div>
		</div>
	);
}
