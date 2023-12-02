<script lang="ts">
import { defineComponent } from "vue";

// The active-tab class is applied to the router-link-active
// class in order for the active tab to work.

export default defineComponent({
	name: "NavBar",
});
</script>

<template>
	<div
		id="nav"
		class="tabs justify-center pb-6"
	>
		<RouterLink
			class="tab tab-bordered"
			to="/"
		>
			Home
		</RouterLink>
		<RouterLink
			class="tab tab-bordered"
			to="/other"
		>
			Other
		</RouterLink>
	</div>
</template>
