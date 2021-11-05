<script>
	import { onMount } from "svelte";
	import BrandCard from "./BrandCard.svelte";
	import CustomSwiper from "./CustomSwiper.svelte";
	import Car from "@/services/car";

	export let brands;

	let brandData = [];
	let carsData = [];
	onMount(() => {
		fetchData();
	});

	async function fetchData() {
		let res = await Car.getCars({ params: "" });
		carsData = res.data;
	}
	brandData = brands?.map((brand) => {
		if (brand.Name !== "Candour Motors") {
			return {
				id: brand.id,
				title: brand.Name,
				img: brand.Logo?.formats?.thumbnail?.url,
				vehicles: "browse",
			};
		}
	});

	brandData = brandData.filter((r) => r);
</script>

{#if carsData.length && brandData}
	<div class="overflow-hidden">
		<CustomSwiper
			CardToSwipe={BrandCard}
			name="Shop car by brands"
			pagination={Math.floor(brandData.length / 3)}
			data={brandData}
			extraData={carsData}
			swipeCount={3}
			spaceBetween={40}
			slidesPerView={3}
			breakpoints={{
				0: {
					slidesPerView: "auto",
					spaceBetween: 10,
					allowTouchMove: true,
				},
				770: {
					slidesPerView: 3.7,
					spaceBetween: 10,
					allowTouchMove: true,
				},
				1024: {
					// slidesPerView: 4,
					slidesPerView: 4.5,
					spaceBetween: 20,
					allowTouchMove: false,
				},
				1536: {
					// slidesPerView: 5,
					slidesPerView: 5.5,
					spaceBetween: 0,
					allowTouchMove: false,
				},
			}}
			minWidth="min-width: 200px"
		/>
	</div>
{/if}
