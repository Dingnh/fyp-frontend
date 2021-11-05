<script>
	import { Swiper, SwiperSlide } from "swiper/svelte";
	import HowItWorksCard from "./HowItWorksCard.svelte";

	export let howItWork = [];
	export let innerWidth;

	let howItWorks = howItWork.map((item) => ({
		...item,
		src: item.image.url,
	}));

	howItWorks.sort((a, b) => a.step - b.step);

	let howItWorksSwipers = null;

	let customWrapper = false;

	function updateHowItWorksSwipers(innerWidth) {
		if (innerWidth >= 1280) {
			return true;
		} else {
			return false;
		}
	}

	$: customWrapper = updateHowItWorksSwipers(innerWidth);
</script>

<div class="my-16">
	<img
		src="/assets/howItWorksSectionBackground.png"
		alt="background"
		class="absolute left-0 -z-10 transform -translate-y-14 hidden md:block"
		style="width: 50vw; height: 520px"
	/>
	<div class="flex flex-col items-center">
		<div class="w-full overflow-hidden">
			<p class="text-3xl font-bold pb-10 dark:text-white">How it works</p>

			<Swiper
				spaceBetween={0}
				slidesPerView={3}
				on:touchStart={() => {
					if (howItWorksSwipers.allowTouchMove)
						howItWorksSwipers.$el[0].classList.toggle("swipergrabbing");
				}}
				on:touchEnd={() => {
					if (howItWorksSwipers.allowTouchMove)
						howItWorksSwipers.$el[0].classList.remove("swipergrabbing");
				}}
				on:swiper={(s) => {
					howItWorksSwipers = s.detail[0];
					updateHowItWorksSwipers(innerWidth);
				}}
				breakpoints={{
					0: {
						slidesPerView: "auto",
						spaceBetween: 20,
						allowTouchMove: true,
					},
					1280: {
						slidesPerView: 4,
						spaceBetween: 0,
						allowTouchMove: false,
					},
				}}
				style="width: 100%; height: 100%;"
			>
				{#if customWrapper}
					<div class="custom-swiper-wrapper">
						{#each howItWorks as item, i}
							<SwiperSlide class="max-w-min" style="min-width:260px;">
								<HowItWorksCard {...item} />
							</SwiperSlide>
						{/each}
					</div>
				{:else}
					{#each howItWorks as item, i}
						<SwiperSlide class="max-w-min" style="min-width:260px;">
							<HowItWorksCard {...item} />
						</SwiperSlide>
					{/each}
				{/if}
			</Swiper>
		</div>
	</div>
</div>
