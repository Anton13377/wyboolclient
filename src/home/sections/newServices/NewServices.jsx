import { useQuery } from '@tanstack/react-query';
import styles from './NewServices.module.css';
import servicesService from '../../../services/services.service';

const NewServices = () => {
	const { data, isLoading } = useQuery(
		['newService'],
		() => servicesService.getNewService(),
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
			<div className={styles.parentBlock}>
				<div className={styles.scroll} id='newServices'></div>
				<img
					className={styles.img}
					src={`http://localhost:3326/${data[0]?.imageUrl}`}
					alt='Новый сервис Вайбул'
				/>
				<div className={styles.infoBlock}>
					<h3 className={styles.cardTitle}>Наш новый сервис</h3>
					<h1 className={styles.serviceName}>{data[0]?.title}</h1>
					<h1 className={styles.serviceDesc}>{data[0]?.description}</h1>
					<h1 className={styles.titleUrl}>URL</h1>
					<a
						target='_blank'
						href={`https://${data[0]?.Url}`}
						className={styles.textUrl}
					>
						{data[0]?.Url}
					</a>
				</div>
			</div>
		</>
	);
};

export default NewServices;
