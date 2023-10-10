import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './FormAdd.module.css';
import { Link } from 'react-router-dom';
import adminService from '../../../services/admin.service';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';

const ServiceForm = () => {
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
	const [url, setUrl] = useState('');
	const [image, setImage] = useState(null);

	const handleLogin = e => {
		e.preventDefault();
		mutation.mutate();
	};

	const mutation = useMutation(
		() => adminService.NewServiceAdd({ title, url, image }),
		{
			onSuccess: response => {
				if (response.data.message === 'Success') {
					alert('Успех!');
					navigate('/admin/services');
				} else {
					alert(response.data.message);
				}
			},
		}
	);

	return (
		<div className={styles.body}>
			<div className={styles.divForm}>
				<h2 className={styles.h2}>Какой сервис создадим сегодня?</h2>
				<label>
					<input
						className={styles.input}
						placeholder='Title'
						type='text'
						name='Title'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
				</label>
				<br />
				<label>
					<input
						className={styles.input}
						placeholder='URL'
						type='text'
						name='url'
						value={url}
						onChange={e => setUrl(e.target.value)}
					/>
				</label>
				<br />
				<label>
					<input
						className={styles.inputFile}
						type='file'
						name='logoUrl'
						onChange={e => setImage(e.target.files[0])}
					/>
				</label>
				<br />
				<button onClick={e => handleLogin(e)} className={styles.btnAdd}>
					Создать
				</button>
				<br />
				<Link to='/admin/services' className={styles.btnBack}>
					Назад
				</Link>
			</div>
		</div>
	);
};

export default ServiceForm;
