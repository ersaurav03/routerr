<template>
<div>
<h1>I am user 4</h1>
<p>Page load id is :{{id}}</p>
<button type="button" class="btn btn-warning" @click="navigateToHome">Home</button>
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