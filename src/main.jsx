import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './assets/global.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<QueryClientProvider client={queryClient}>
		<Router />
	</QueryClientProvider>
);
