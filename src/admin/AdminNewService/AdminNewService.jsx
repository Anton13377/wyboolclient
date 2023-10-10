import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './AdminNewService.module.css';
import Cookies from 'js-cookie';
import { useMutation } from '@tanstack/react-query';
import adminService from '../../services/admin.service';

const AdminNewService = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const adminCookie = Cookies.get('admin');

		if (
			!adminCookie ||
			adminCookie !== 'ADSfrndfkokwenrwfsd;ocgjertnefmgdpbfugworetmwdfjnwefiwen'
		) {
			navigate('/');
		}
	}, [navigate]);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [url, setUrl] = useState('');
	const [image, setImage] = useState(null);

	const handleLogin = e => {
		e.preventDefault();
		mutation.mutate();
	};

	const mutation = useMutation(
		() => adminService.NewService({ title, description, url, image }),
		{
			onSuccess: response => {
				if (response.data.message === 'Success') {
					alert('Успех!');
				} else {
					alert(response.data.message);
				}
			},
		}
	);

	return (
		<>
			<div className={styles.body}>
				<div className={styles.menu}>
					<Link to='/admin/newservice' className={styles.menuItemActive}>
						Новый сервис
					</Link>
					<Link to='/admin/services' className={styles.menuItem}>
						Все сервисы
					</Link>
					<Link to='/admin/news' className={styles.menuItem}>
						Новости
					</Link>
				</div>
				<div className={styles.mainBlock}>
					<input
						value={title}
						onChange={e => setTitle(e.target.value)}
						className={styles.input}
						placeholder='Title'
						type='text'
					/>
					<input
						value={description}
						onChange={e => setDescription(e.target.value)}
						className={styles.input}
						placeholder='Description'
						type='text'
					/>
					<input
						value={url}
						onChange={e => setUrl(e.target.value)}
						className={styles.input}
						placeholder='URL'
						type='text'
					/>
					<input
						onChange={e => setImage(e.target.files[0])}
						className={styles.inputFile}
						type='file'
					/>
					<button onClick={e => handleLogin(e)} className={styles.btn}>
						Изменить
					</button>
				</div>
			</div>
		</>
	);
};

export default AdminNewService;
