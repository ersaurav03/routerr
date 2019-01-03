<template>
	<div>
	<h1>I Am user 1</h1>
	<p>Page lode id :{{id}}</p>
	<!-- <button type="button" class="btn btn-primary" @click="navigateToHome">Home</button> -->
	<router-link tag="button" to="/" class="btn btn-primary">Home</router-link>
	<hr>
	<router-view></router-view>
</div>
</template>
<script>
	export default{
		data(){
			return{
				id: this.$route.params.id
			}
		},
		methods:{
			navigateToHome(){
				this.$router.push('/');
			}
		}
	}
</script>