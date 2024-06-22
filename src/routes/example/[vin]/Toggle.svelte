<script lang="ts">
	export let toggle: boolean;
</script>

<div class="flex items-center my-4 ml-2">
	<button
		type="button"
		on:click={() => (toggle = !toggle)}
		class:bg-gray-200={!toggle}
		class:bg-emerald-600={toggle}
		class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
		role="switch"
		aria-checked="false"
		aria-labelledby="annual-billing-label"
	>
		<span
			aria-hidden="true"
			class:translate-x-0={!toggle}
			class:translate-x-5={toggle}
			class="transform transition ease-in-out duration-200 inline-block h-5 w-5 rounded-full bg-white shadow ring-0"
		></span>
	</button>
	<slot />
</div>
