import logo from './logo.svg';
import './App.css';
import LiveStreamComponent from './components/LiveStreamComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


function App() {
	return (
		<div className='App'>
			<HeaderComponent />
			<div className='min-h-[calc(100vh-97px)] bg-slate-200'>
				<LiveStreamComponent />
			</div>
			<FooterComponent />
		</div>
	);
}

export default App;
