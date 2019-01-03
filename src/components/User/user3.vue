<template>
<div>
<h1>I am user 3</h1>
<p>page load id is: {{id}}</p>
<button type="button" class="btn btn-danger" @click="naviagteToHome">Home</button>
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
			naviagteToHome(){
				this.$router.push('/');
			}
		}
	}
</script>