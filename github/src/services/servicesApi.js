import Api from '@/services/Api'
const params = new URLSearchParams();

export default {
	users (user) {
		if (user = {} ){
	return Api().get(`users/1?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`)					
		} else {
		return Api().get(`users/${user.users}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`)					
		}
	}
}

