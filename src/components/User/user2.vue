<template>
<div>
<h1>I am user 2</h1>
<p>Page load id is: {{id}}</p>
<button type="buttonn" class="btn btn-secondary" @click="navigateToHome">Home</button>
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