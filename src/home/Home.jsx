import Footer from '../ui/footer/Footer';
import Header from '../ui/header/Header';
import Info from './sections/info/Info';
import Main from './sections/main/Main';
import MainServices from './sections/mainServices/MainServices';
import Mission from './sections/missionSection/Mission';
import NewServices from './sections/newServices/NewServices';
import News from './sections/news/News';

const Home = () => {
	return (
		<>
			<Header />
			<Main />
			<NewServices />
			<Mission />
			<Info />
			<MainServices />
			<News />
			<Footer />
		</>
	);
};

export default Home;
