import { useQuery } from '@tanstack/react-query';
import styles from './MainServices.module.css';
import servicesService from '../../../services/services.service';

const MainServices = () => {
	const { data, isLoading } = useQuery(
		['Service'],
		() => servicesService.getServices(),
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
			<div className={styles.container} id='allServices'>
				<h1 className={styles.title}>Наши сервисы</h1>
				<div className={styles.services}>
					{data?.length ? (
						data.map(service => (
							<a
								key={service._id}
								href={`https://${service.Url}`}
								target='_blank'
								className={styles.service}
							>
								<h3 className={styles.serviceTitle}>{service.name}</h3>
								<img
									src={`https://server.wybool.ru/${service.logoUrl}`}
									alt='Логотип сервиса'
									className={styles.logoService}
								/>
							</a>
						))
					) : (
						<div>Ошибка</div>
					)}
					<img
						src='/services.png'
						alt='Сервисы Вайбул'
						className={styles.img}
					/>
				</div>
			</div>
		</>
	);
};

export default MainServices;
