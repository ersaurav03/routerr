<template>
	<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
		<a href="#" class="navbar-brand">JSMPJ</a>
		<button class="navbar-toggler" data-toggle="collapse" data-target="#id1">
		<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="id1">
			<ul class="navbar-nav">
				<li v-for="nav1 in navv" class="nav-item"> 
					<router-link :to="nav1.linkk"  class="nav-link " >  {{nav1.Name}}</router-link>
				</li>

			</ul>
		</div>
	</nav>
</template>

<script>
	export default{
		data:function(){
			return{
				navv:[
				{Name:'User1', linkk:'/user1/10'},
				{Name:'User2', linkk:'/user2/20'},
				{Name:'User3', linkk:'/user3/30'},
				{Name:'User4', linkk:'/user4/40'},
				{Name:'Home', linkk:'/Home'},
				{Name:'About', linkk:'/About'}
				]
			}
		}
	}
</script>