<script>
	export let src;
	export let alt;
	export let onclick = () => {};

	import { onMount } from "svelte";

	let loaded = false;
	let thisImage;

	onMount(() => {
		thisImage.onload = () => {
			loaded = true;
		};
	});
</script>

<img
	{...$$restProps}
	{src}
	{alt}
	bind:this={thisImage}
	on:click={onclick}
	loading="lazy"
	style="{loaded
		? 'opacity: 1;'
		: 'opacity: 0;'} transition: opacity 1200ms ease-out;"
/>
