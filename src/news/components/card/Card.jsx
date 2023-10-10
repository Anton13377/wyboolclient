import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ newsItem }) => {
	return (
		<>
			<div className={styles.newsCard}>
				<hr className={styles.topLine} />
				<img
					src={`http://localhost:3326/${newsItem.imageUrl}`}
					alt={`Новость от Вайбул "${newsItem.title}"`}
				/>
				<div className={styles.cardNewsInfo}>
					<p>{newsItem.tags}</p>
					<hr />
					<Link className={styles.linkNew} to={`/newsview/${newsItem._id}`}>
						{newsItem.title}
					</Link>
					<div className={styles.cardNewsDesc}>
						<p>by Wybool News</p>
						<p>{newsItem.date}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
