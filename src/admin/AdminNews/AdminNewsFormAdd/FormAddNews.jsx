import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './FormAddNews.module.css';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import adminService from '../../../services/admin.service';

const FormAddNews = () => {
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
	const [tags, setTags] = useState('');
	const [date, setDate] = useState('');
	const [image, setImage] = useState(null);

	const handleLogin = e => {
		e.preventDefault();
		mutation.mutate();
	};

	const mutation = useMutation(
		() => adminService.NewNewsAdd({ title, description, tags, date, image }),
		{
			onSuccess: response => {
				if (response.data.message === 'Success') {
					alert('Успех!');
					navigate('/admin/news');
				} else {
					alert(response.data.message);
				}
			},
		}
	);

	return (
		<div className={styles.body}>
			<div className={styles.divForm}>
				<h2 className={styles.h2}>Какую новость придумаем сегодня?</h2>
				<label>
					<input
						className={styles.input}
						placeholder='Title'
						type='text'
						name='title'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
				</label>
				<br />
				<label>
					<textarea
						className={styles.Desc}
						placeholder='Description'
						type='text'
						name='description'
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
				</label>
				<br />
				<label>
					<input
						className={styles.input}
						placeholder='Tags'
						type='text'
						name='tags'
						value={tags}
						onChange={e => setTags(e.target.value)}
					/>
				</label>
				<br />
				<label>
					<input
						className={styles.input}
						placeholder='Date'
						type='text'
						name='date'
						value={date}
						onChange={e => setDate(e.target.value)}
					/>
				</label>
				<br />
				<label>
					<input
						className={styles.inputFile}
						type='file'
						name='image'
						onChange={e => setImage(e.target.files[0])}
					/>
				</label>
				<br />
				<button onClick={e => handleLogin(e)} className={styles.btnAdd}>
					Создать
				</button>
				<br />
				<Link to='/admin/news' className={styles.btnBack}>
					Назад
				</Link>
			</div>
		</div>
	);
};

export default FormAddNews;
