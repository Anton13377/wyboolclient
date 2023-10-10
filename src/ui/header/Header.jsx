import styles from './Header.module.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as LinkTo } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		const html = document.getElementById('html');
		html.classList.toggle('active');
		setMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<header className={styles.container} id='Start'>
				<LinkTo to='/'>
					<img src='/logoBlack.png' alt='Вайбул' className={styles.imgLogo} />
				</LinkTo>

				<div className={styles.nav}>
					<Link
						className={styles.navText}
						to='Start'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						Главная
					</Link>
					<p className={styles.navGap}>/</p>
					<Link
						className={styles.navText}
						to='newServices'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						Новый сервис
					</Link>
					<p className={styles.navGap}>/</p>
					<Link
						className={styles.navText}
						to='mission'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						О компании
					</Link>
					<p className={styles.navGap}>/</p>
					<Link
						className={styles.navText}
						to='allServices'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						Сервисы
					</Link>
					<p className={styles.navGap}>/</p>
					<Link
						className={styles.navText}
						to='News'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						Новости
					</Link>
				</div>
				<div className={styles.burgerMenuButton} onClick={toggleMenu}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						x='0px'
						y='0px'
						viewBox='0 0 72 72'
					>
						<path d='M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z'></path>
					</svg>
				</div>

				{isMenuOpen && (
					<>
						<div className={styles.burgerMenuButtonClose} onClick={toggleMenu}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								viewBox='0 0 30 30'
							>
								<path d='M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z'></path>
							</svg>
						</div>
						<div className={styles.mobileMenu}>
							<Link
								className={styles.mobileMenuItem}
								to='Start'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={toggleMenu}
							>
								Главная
							</Link>
							<hr className={styles.line} />
							<Link
								className={styles.mobileMenuItem}
								to='newServices'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={toggleMenu}
							>
								Новый сервис
							</Link>
							<hr className={styles.line} />
							<Link
								className={styles.mobileMenuItem}
								to='mission'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={toggleMenu}
							>
								О компании
							</Link>
							<hr className={styles.line} />
							<Link
								className={styles.mobileMenuItem}
								to='allServices'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={toggleMenu}
							>
								Сервисы
							</Link>
							<hr className={styles.line} />
							<Link
								className={styles.mobileMenuItem}
								to='News'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={toggleMenu}
							>
								Новости
							</Link>
						</div>
					</>
				)}
			</header>
		</>
	);
};

export default Header;
