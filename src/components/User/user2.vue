<template>
<div>
<h1>I am user 2</h1>
<p>Page load id is: {{id}}</p>
<!-- <button type="buttonn" class="btn btn-secondary" @click="navigateToHome">Home</button> -->
<!-- <router-link to="/" tag="button" class="btn btn-danger">Home</router-link> -->
<!-- marking it less code with more dynamic -->
<router-link :to="{name:'home', query: { locale: 'en', q:100} }" tag="button" class="btn btn-danger">Home</router-link>
<!-- added qur prametss -->
</div>
</template>
<script>
	export default{
		data(){
        return{
        	id:this.$route.params.id
        }
		},
		methods:{
			navigateToHome(){
				this.$router.push('/');
			}
		}
	}
</script>