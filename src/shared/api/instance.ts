import axios from 'axios'

import { SERVER_URL } from '@/shared/config'

export const axiosInstance = axios.create({
	baseURL: `${SERVER_URL}/api`,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})
