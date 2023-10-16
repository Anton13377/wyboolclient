import { useQuery } from '@tanstack/react-query';
import styles from './News.module.css';
import { Link } from 'react-router-dom';
import servicesService from '../../../services/services.service';

const News = () => {
	const { data, isLoading } = useQuery(
		['LastNews'],
		() => servicesService.getLastNews(),
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
			<div className={styles.container} id='News'>
				<h1 className={styles.title}>Новости</h1>
				<div className={styles.newsContainer}>
					{data.map((newsItem, index) => (
						<div
							className={
								index % 2 === 0 ? styles.newsBlock1 : styles.newsBlock2
							}
							key={index}
						>
							<img
								src={`https://server.wybool.ru/${newsItem.imageUrl}`}
								alt={`Новость от Вайбул ${index + 1}`}
							/>
							<div
								className={
									index % 2 === 0 ? styles.newsInfo1 : styles.newsInfo2
								}
							>
								<p>{newsItem.tags}</p>
								<hr />
								<Link
									className={styles.linkNew}
									to={`/newsview/${newsItem._id}`}
								>
									{newsItem.title}
								</Link>
								<div
									className={
										index % 2 === 0 ? styles.newsDesc1 : styles.newsDesc2
									}
								>
									<p>by Wybool News</p>
									<p>{newsItem.date}</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className={styles.btnContainer}>
					<Link to='/news' className={styles.moreBtn}>
						Больше новостей
					</Link>
				</div>
			</div>
		</>
	);
};

export default News;
