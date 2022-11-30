import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CryptoTracker from './containers/CryptoTracker'

const Index = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/crypto-tracker" element={<CryptoTracker />} />
				<Route path="*" element={<Navigate to="/crypto-tracker" />} />
			</Routes>
		</Router>
	)
}

export default Index