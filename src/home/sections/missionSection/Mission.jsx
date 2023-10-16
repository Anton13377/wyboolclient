import styles from './Mission.module.css';

const Mission = () => {
	return (
		<>
			<div className={styles.container} id='mission'>
				<h1 className={styles.title}>
					Предназначение
					<br />
					Вайбул
				</h1>
				<div className={styles.infoBlock}>
					<img
						src='/missionImg.png'
						alt='Предназначения компании'
						className={styles.img}
					/>
					<div className={styles.infoBlock2}>
						<h2 className={styles.subTitle}>
							Какое же
							<br />
							предназначение у<br />
							нашей компании?
						</h2>
						<p className={styles.description}>
							Создавать сервисы, тем самым
							<br />
							упрощая жизнь людей в совершенно
							<br />
							разных аспектах. Вайбул заботится о<br />
							том, чтобы сервисы были крайне
							<br />
							удобны и интутивно понятны в<br />
							использовании, а любые
							<br />
							информационные технологии
							<br />
							воспринимались как творческая
							<br />
							единица.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Mission;
