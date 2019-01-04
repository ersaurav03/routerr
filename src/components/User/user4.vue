<template>
<div>
<h1>I am user 4</h1>
<p>Page load id is :{{id}}</p>
<!-- <button type="button" class="btn btn-warning" @click="navigateToHome">Home</button> -->
<router-link :to="{name:'home', query: { locale: 'en', q:100} }" tag="button" class="btn btn-danger">Home</router-link>
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