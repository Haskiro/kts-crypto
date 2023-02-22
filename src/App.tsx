import { FC } from "react";

import Market from "@pages/Market";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: FC = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Market />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
