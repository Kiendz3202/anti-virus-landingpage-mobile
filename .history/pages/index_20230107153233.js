import HomeView from '../views';

export default function Home() {
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
			await delay(2000);
			setLoadingScan(false);
			setShowResult(true);
		}
	};
	return (
		<div className=" text-yellow-300">
			sdfnds
			<HomeView />
		</div>
	);
}
