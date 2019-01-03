<template>
	<div>
		<h1>I am nested child</h1>
		<hr>
		<div>
		<ul class="list-group">		
	
		<router-link  style="cursor: pointer" class="list-group-item" tag="li" to="/user1/id">User1</router-link>
		<router-link style="cursor:pointer" class="list-group-item" tag="li" to="/user2">User2</router-link>
		<router-link style="cursor:pointer" class="list-group-item" tag="li" to="/user3">User3</router-link>
	     <router-link style="cursor:pointer" class="list-group-item" tag="li" to="/user4">User4</router-link>
			
		</ul>
	</div>
<!-- 		<ul class="list-group">
        <router-link tag="li" class="list-group-item" style="cursor: pointer">User1</router-link>
        <router-link tag="li" class="list-group-item" style="cursor: pointer">User2</router-link>
        <router-link tag="li" class="list-group-item" style="cursor: pointer">User3</router-link>
        <router-link tag="li" class="list-group-item" style="cursor: pointer">User4</router-link> -->
		</ul>
	</div>
</template>