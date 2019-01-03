<template>
  <div>
    <h1>This is an about page</h1>
    <button type="button" class="btn btn-mute" @click="navigateToHome">Home</button>
  </div>
</template>

<script>
	export default{
		methods:{
			navigateToHome(){
				this.$router.push('/');
			}
		}
	}
</script>
