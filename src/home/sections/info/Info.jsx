import { useQuery } from '@tanstack/react-query';
import styles from './Info.module.css';
import servicesService from '../../../services/services.service';

const Info = () => {
	const { data } = useQuery(
		['countService'],
		() => servicesService.getcountServices(),
		{
			select: ({ data }) => data,
		}
	);

	if (!data) {
		return null;
	}
	return (
		<>
			<div className={styles.container}>
				<div className={styles.block}>
					<h1 className={styles.mainInfo}>[5+]</h1>
					<p className={styles.description}>Лет в IT индустрии</p>
				</div>
				<div className={styles.block}>
					<h1 className={styles.mainInfo}>[{data?.count}]</h1>
					<p className={styles.description}>Сервис</p>
				</div>
			</div>
			<hr />
		</>
	);
};

export default Info;
