import Footer from '../ui/footer/Footer';
import styles from './News.module.css';
import { Link as LinkTo, useLocation } from 'react-router-dom';
import Card from './components/card/Card';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import servicesService from '../services/services.service';

const News = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const { data, isLoading } = useQuery(
		['AllNews'],
		() => servicesService.getAllNews(),
		{
			select: ({ data }) => data,
		}
	);

	if (isLoading) {
		return <div>Загрузка...</div>;
	}

	if (!data) {
		return null;
	}

	return (
		<>
			<header className={styles.header} id='Start'>
				<LinkTo to='/'>
					<img src='/logoBlack.png' alt='Вайбул' className={styles.imgLogo} />
				</LinkTo>
				<div className={styles.nav}>
					<LinkTo className={styles.navText} to='/'>
						Главная
					</LinkTo>
				</div>
			</header>
			<div className={styles.container}>
				<h1 className={styles.newsText}>Новости</h1>
				<div className={styles.newsContainer}>
					{data.map((newsItem, index) => (
						<Card newsItem={newsItem} key={index} />
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default News;
