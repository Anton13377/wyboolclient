import styles from './Footer.module.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as LinkTo } from 'react-router-dom';

const Footer = () => {
	return (
		<>
			<div className={styles.container}>
				<a href='https://wybool.ru' target='_blank' className={styles.imgBlock}>
					<img
						src='/logoWhite.png'
						alt='Логотип Вайбул'
						className={styles.img}
					/>
				</a>
				<div className={styles.infoBlock}>
					<a
						href='mailto:info@wybool.ru'
						target='_blank'
						className={styles.mail}
					>
						info@wybool.ru
					</a>
					<div className={styles.social}>
						{/* <a href='#' className={styles.linkSoc}>
							<p className={styles.youtube}></p>
						</a> */}
						<a href='https://vk.com/wybool' target="_blank" className={styles.linkSoc}>
							<p className={styles.vk}></p>
						</a>
						<a href='https://t.me/wybool' target="_blank" className={styles.linkSoc}>
							<p className={styles.tg}></p>
						</a>
					</div>
				</div>
				<div className={styles.linksContainer}>
					<div className={styles.linksBlock}>
						<h1>Сервисы Вайбул</h1>
						<LinkTo
							className={styles.linkTo}
							target='_blank'
							to='https://dev.wybool.ru'
						>
							Wybool Dev
						</LinkTo>
					</div>
					<div className={styles.linksBlock}>
						<h1>Навигация</h1>
						<Link
							className={styles.linkTo}
							to='Start'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Главная
						</Link>
						<Link
							className={styles.linkTo}
							to='newServices'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Новый сервис
						</Link>
						<Link
							className={styles.linkTo}
							to='mission'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							О компании
						</Link>
						<Link
							className={styles.linkTo}
							to='allServices'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Сервисы
						</Link>
						<Link
							className={styles.linkTo}
							to='News'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Новости
						</Link>
					</div>
					{/* <div className={styles.linksBlock}>
						<h1>Информация</h1>
						<LinkTo className={styles.linkTo} target='_blank' to='#'>
							Пользовательское соглашение
						</LinkTo>
						<LinkTo className={styles.linkTo} target='_blank' to='#'>
							Команда
						</LinkTo>
					</div> */}
				       {/* <div className={styles.linksBlock}>
						<h1>Работа в Вайбул</h1>
						<LinkTo className={styles.linkTo} target='_blank' to='#'>
							Стажировка
						</LinkTo>
						<LinkTo className={styles.linkTo} target='_blank' to='#'>
							Для специалистов
						</LinkTo>
						<LinkTo className={styles.linkTo} target='_blank' to='#'>
							Для студентов
						</LinkTo>
					</div> */}
				</div>
				<a
					href='https://wybool.ru'
					target='_blank'
					className={styles.copyright}
				>
					© 2023 Wybool. Все права защищены.
				</a>
				<Link
					className={styles.topArrow}
					to='Start'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				></Link>
			</div>
		</>
	);
};

export default Footer;
