import React from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import styles from './AdminNews.module.css';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import servicesService from '../../services/services.service';

const AdminNews = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const adminCookie = Cookies.get('admin');

		if (
			!adminCookie ||
			adminCookie !== 'ADSfrndfkokwenrwfsd;ocgjertnefmgdpbfugworetmwdfjnwefiwen'
		) {
			navigate('/');
			return;
		}
	}, [navigate]);

	const { data, isLoading, refetch } = useQuery(
		['News'],
		() => servicesService.getAllNews(),
		{
			select: ({ data }) => data,
		}
	);

	const handleDelete = async newsId => {
		try {
			await servicesService.deleteNews(newsId);
			refetch(); // После успешного удаления обновляем данные
		} catch (error) {
			console.error('Failed to delete news:', error);
		}
	};

	if (isLoading) {
		return <div>Загрузка...</div>;
	}

	if (!data) {
		return null;
	}

	return (
		<>
			<div className={styles.body}>
				<div className={styles.menu}>
					<Link to='/admin/newservice' className={styles.menuItem}>
						Новый сервис
					</Link>
					<Link to='/admin/services' className={styles.menuItem}>
						Все сервисы
					</Link>
					<Link to='/admin/news' className={styles.menuItemActive}>
						Новости
					</Link>
				</div>
				<div className={styles.mainBlock}>
					<table className={styles.table}>
						<thead>
							<tr>
								<th className={styles.ourSer}>Новости</th>
								<th></th>
								<th className={styles.servBtnAdd}>
									<Link to='/admin/addnews' className={styles.btnAdd}>
										Создать
									</Link>
								</th>
							</tr>
						</thead>
						<tbody>
							{data.map((news, index) => (
								<tr key={index}>
									<td className={styles.servName}>{news.title}</td>
									<td className={styles.servBtnDel}>
										<button
											onClick={() => handleDelete(news._id)}
											className={styles.btnDel}
										>
											Удалить
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default AdminNews;
