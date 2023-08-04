import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ExampleComponent from "./components/ExampleComponent";
import HomePage from "./pages/HomePage";

class App extends Component {
	render() {
		return (
			<div>
				<ExampleComponent />
				<div>
					<Routes>
						<Route path="/" element={<HomePage />} />
					</Routes>
				</div>
			</div>
		);
	}
}

export default App;
