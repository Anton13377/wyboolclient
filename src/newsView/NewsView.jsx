import { useEffect } from 'react';
import Footer from '../ui/footer/Footer';
import styles from './NewsView.module.css';
import { Link as LinkTo, useLocation, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import servicesService from '../services/services.service';

const NewsView = () => {
	const { id } = useParams();

	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const { data, isLoading } = useQuery(
		['NewsItem'],
		() => servicesService.getNews(id),
		{
			select: ({ data }) => data,
		},
		[id]
	);

	if (isLoading) {
		return <div>Загрузка...</div>;
	}

	if (!data) {
		return null;
	}

        const htmlContent = { __html: data.description };

	return (
		<>
			<header className={styles.header} id='Start'>
				<LinkTo to='/'>
					<img src='/logoBlack.png' alt='Вайбул' className={styles.imgLogo} />
				</LinkTo>
				<div className={styles.nav}>
					<LinkTo className={styles.navText} to='/news'>
						Назад
					</LinkTo>
				</div>
			</header>
			<div className={styles.container}>
				<h1 className={styles.newsTitle}>{data.title}</h1>
				<div className={styles.newsContainer}>
					<img
						src={`https://server.wybool.ru/${data.imageUrl}`}
						alt='Изображение новости'
						className={styles.newsImg}
					/>
					<p className={styles.paragraph} dangerouslySetInnerHTML={htmlContent}></p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default NewsView;
