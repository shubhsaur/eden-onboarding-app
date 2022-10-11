import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Welcome from "./Pages/Welcome";
import SetupHome from "./Pages/SetupHome";
import SelectTeam from "./Pages/SelectTeam";
import FinalMessage from "./Pages/FinalMessage";

function App() {
	return (
		<Router>
      <div className="flex justify-center items-center">
			<div className="flex flex-col justify-center items-center h-screen">
				<Header />
				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="/home-setup" element={<SetupHome />} />
					<Route path="/select-team" element={<SelectTeam />} />
					<Route path="/final" element={<FinalMessage />} />
				</Routes>
			</div>
      </div>
		</Router>
	);
}

export default App;
