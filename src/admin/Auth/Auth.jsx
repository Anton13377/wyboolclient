import { useMutation } from '@tanstack/react-query';
import styles from './Auth.module.css';
import adminService from '../../services/admin.service';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie';

const Auth = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const mutation = useMutation(
		() => adminService.Auth({ username, password }),
		{
			onSuccess: response => {
				if (response.data.message === 'Success') {
					Cookies.set(
						'admin',
						'ADSfrndfkokwenrwfsd;ocgjertnefmgdpbfugworetmwdfjnwefiwen',
						{ sameSite: 'None', secure: true }
					);
					navigate('/admin/newservice');
				} else {
					setError(response.data.message);
				}
			},
		}
	);

	const handleLogin = e => {
		e.preventDefault();
		mutation.mutate();
	};

	return (
		<>
			<div className={styles.container}>
				<form className={styles.form}>
					<h1>Админ панель</h1>
					<input
						placeholder='Логин'
						type='text'
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
					<input
						placeholder='Пароль'
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<button onClick={e => handleLogin(e)}>Войти</button>
					<p className={styles.error}>{error}</p>
				</form>
			</div>
		</>
	);
};

export default Auth;
