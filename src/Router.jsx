import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import News from './news/News';
import NewsView from './newsView/NewsView';
import Auth from './admin/Auth/Auth';
import AdminNewService from './admin/AdminNewService/AdminNewService';
import AdminServices from './admin/AdminServices/AdminServices';
import AdminNews from './admin/AdminNews/AdminNews';
import FormAdd from './admin/AdminServices/AdminServicesFormAdd/FormAdd';
import FormAddNews from './admin/AdminNews/AdminNewsFormAdd/FormAddNews';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/news' element={<News />} />
				<Route path='/newsview/:id' element={<NewsView />} />
				<Route path='/admin' element={<Auth />} />
				<Route path='/admin/newservice' element={<AdminNewService />} />
				<Route path='/admin/services' element={<AdminServices />} />
				<Route path='/admin/news' element={<AdminNews />} />
				<Route path='/admin/addservice' element={<FormAdd />} />
				<Route path='/admin/addnews' element={<FormAddNews />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
