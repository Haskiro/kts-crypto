import { FC } from "react";

import Market from "@pages/Market";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App: FC = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Market />} />
					<Route path="/coin/:id" element={<>Coin page</>} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
