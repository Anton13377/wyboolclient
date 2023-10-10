import React from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import styles from './AdminService.module.css';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import servicesService from '../../services/services.service';

const AdminServices = () => {
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
		['Service'],
		() => servicesService.getServices(),
		{
			select: ({ data }) => data,
		}
	);

	const deleteServiceMutation = useMutation(
		serviceId => servicesService.deleteService(serviceId),
		{
			onSuccess: () => {
				refetch();
			},
		}
	);

	const handleDelete = async serviceId => {
		try {
			await servicesService.deleteServices(serviceId);
			refetch(); // После успешного удаления обновляем данные
		} catch (error) {
			console.error('Failed to delete service:', error);
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
					<Link to='/admin/services' className={styles.menuItemActive}>
						Все сервисы
					</Link>
					<Link to='/admin/news' className={styles.menuItem}>
						Новости
					</Link>
				</div>
				<div className={styles.mainBlock}>
					<table className={styles.table}>
						<thead>
							<tr>
								<th className={styles.ourSer}>Наши сервисы</th>
								<th></th>
								<th className={styles.servBtnAdd}>
									<Link to='/admin/addservice' className={styles.btnAdd}>
										Создать
									</Link>
								</th>
							</tr>
						</thead>
						<tbody>
							{data.map((service, index) => (
								<tr key={index}>
									<td className={styles.servName}>{service.name}</td>
									<td className={styles.servBtnDel}>
										<button
											onClick={() => handleDelete(service._id)}
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

export default AdminServices;
