import HomeView from '../views';
import React, { useEffect, useState } from 'react';

export default function Home() {
	const [loadingScan, setLoadingScan] = useState(false);
	const [showResult, setShowResult] = useState(false);

	const scanHandle = async () => {
		// setIsCheckingInitial(false);
		setLoadingScan(true);
		await delay(2000);
		setLoadingScan(false);
		setShowResult(true);
	};
	return <HomeView />;
}
