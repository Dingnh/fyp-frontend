<script>
	import Tailwind from "./components/Tailwind.svelte";
	import { onDestroy } from "svelte";
	import {
		Route,
		params,
		state,
		pathname,
		hideNav,
		hideFooter,
	} from "@/components/stores.js";
	import router from "@/rootRoutes";
	import Footer from "@/components/Footer.svelte";
	import Navbar from "@/components/Navbar.svelte";
	import ScrollToTop from "@/components/ScrollToTop.svelte";
	import ComingSoonModal from "@/components/ComingSoonModal.svelte";
	let uri = location.pathname;

	function track(obj) {
		uri = obj.state || obj.uri || location.pathname;
		state.update((s) => obj.uri);
		pathname.update((n) => location.pathname);
		if (window.ga) ga.send("pageview", { dp: uri });
	}

	addEventListener("replacestate", track);
	addEventListener("pushstate", track);
	addEventListener("popstate", track);

	router.listen();

	onDestroy(router.unlisten);
	pathname.update((n) => window.location.pathname);
</script>

<Tailwind />
{#if !$hideNav}
	<Navbar />
{/if}
<main class="container mx-auto px-2 sm:px-6 md:px-0 xl:px-10 2xl:px-40 ">
	<svelte:component this={$Route} {$params} />
</main>
<ScrollToTop />
{#if !$hideFooter}
	<Footer />
{/if}
<ComingSoonModal />
