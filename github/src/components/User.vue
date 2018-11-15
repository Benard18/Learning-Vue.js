<template>
	<div>
	<input 
	type="users" 
	name="users"
	v-model="users">
	<button 
	type=""
	@click="User"
	>Try</button>
</div>
</template>
<script>
import Service from '@/services/servicesApi.js'
export default {
	data() {
		return {
			users:''
		}
	},
	methods: {
		async User() {
			try{
				const response = await Service.users({users:this.users})
			console.log(response.data)				
			
		} catch (error){
			 console.log(error.response.data)
			
		}
		}
	}
};
</script>
<style scoped>
	
</style>