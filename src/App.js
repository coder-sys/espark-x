import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Information from './pages/Information';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import HomePage from './pages/HomePage';
function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/information" exact component={Information} />
				<Route path="/signup" exact component={SignUp} />
				<Route path='/login' exact component={LogIn} />
				<Route path='/homepage' exact component={HomePage} />

			</Switch>
			<Footer />
		</Router>
	);
}

export default App;

   