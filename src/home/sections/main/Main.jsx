import styles from './Main.module.css';

const Main = () => {
	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.title}>
					Упрощай жизнь
					<br />
					вместе с Вайбул
				</h1>
				<p className={styles.description}>
					Добро пожаловать в мир Вайбул - вашего надежного помощника в сфере IT
				</p>
			</div>
		</>
	);
};

export default Main;
