<script setup lang="ts">
import HelloWorld from "../components/HelloWorld.vue";

// TODO: Delete this boilerplate
</script>

<template>
	<div class="main-content">
		<a
			href="https://vitejs.dev"
			target="_blank"
		>
			<img
				src="/vite.svg"
				class="logo"
				alt="Vite logo"
			/>
		</a>
		<a
			href="https://vuejs.org/"
			target="_blank"
		>
			<img
				src="/vue.svg"
				class="logo vue"
				alt="Vue logo"
			/>
		</a>
		<a
			href="https://www.typescriptlang.org/"
			target="_blank"
			rel="noreferrer"
		>
			<img
				src="/typescript.svg"
				class="logo ts"
				alt="TypeScript logo"
			/>
		</a>
	</div>
	<HelloWorld msg="Vite + Vue + TypeScript" />
</template>

<style scoped>
.main-content {
	@apply flex place-content-center;
	margin: 0 auto;
}

.logo {
	height: 10em;
	padding: 1.5em;
	will-change: filter;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
