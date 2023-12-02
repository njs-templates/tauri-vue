<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);

// TODO: Delete this boilerplate
</script>

<template>
	<div class="grid grid-cols-1 justify-items-center space-y-5">
		<h1>{{ msg }}</h1>
		<button
			class="btn btn-primary font-bold"
			type="button"
			@click="count++"
		>
			count is {{ count }}
		</button>
		<p>
			This page works with any Daisy UI theme! Try it out and change
			<code>daisyui.themes</code> in <code>tailwind.config.cjs</code>.
		</p>

		<p>
			Check out
			<a
				class="link"
				href="https://github.com/njs-templates"
				target="_blank"
			>
				NJS Templates
			</a>
			and
			<a
				class="link"
				href="https://github.com/vitejs/awesome-vite#templates"
				target="_blank"
			>
				Awesome Vite
			</a>
			for more templates.
		</p>
		<p>
			If you can both pages, everything should be working, so open the
			README in the root of the directory for your next steps and get
			coding.
		</p>
		<p class="read-the-docs">Click on the logos to learn more</p>
	</div>
</template>

<style scoped>
code {
	@apply bg-base-300;
}

.read-the-docs {
	@apply text-accent;
}
</style>
