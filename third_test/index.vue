var vm = new Vue({
	el:'#app',
	data:{
	votes:0,
	state:null
	},
	methods: {
		increase: function () {
			if (this.state == "Carlifornia") {
				this.votes += 3;
			}
			else {
				this.votes ++;
			}
		},
		decrease: function () {
			if (this.state == "Carlifornia") {
				this.votes -= 3;
			}
			else {
				this.votes --;
			}
		} 
	}
});
