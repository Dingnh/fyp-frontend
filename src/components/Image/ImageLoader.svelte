<script>
	export let src;
	export let alt;
	export let containerClass;
	export let onclick = () => {};

	import IntersectionObserver from "./IntersectionObserver.svelte";
	import Image from "./Image.svelte";

	import { onMount } from "svelte";

	let nativeLoading = false;
	// Determine whether to bypass our intersecting check
	onMount(() => {
		if ("loading" in HTMLImageElement.prototype) {
			nativeLoading = true;
		}
	});
</script>

<IntersectionObserver once={true} let:intersecting {containerClass}>
	{#if intersecting || nativeLoading}
		<Image {...$$restProps} {alt} {src} {onclick} />
	{/if}
</IntersectionObserver>
