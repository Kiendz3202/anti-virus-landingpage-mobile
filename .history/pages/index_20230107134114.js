import HomeView from '../views';
import React, { useEffect, useState } from 'react';

export default function Home() {
	const [loadingScan, setLoadingScan] = useState(false);
	const [showResult, setShowResult] = useState(false);
	return <HomeView />;
}
