<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";

  export let CardToSwipe;
  export let name;
  export let pagination;
  export let swipeCount;
  export let spaceBetween;
  export let slidesPerView;
  export let breakpoints;
  export let minWidth;
  export let data;
  export let extraData;

  let swiper;
  let current_slide = 1;

  function slideNext() {
    for (let step = 0; step < swipeCount; step++) {
      swiper.slideNext();
    }
    if (current_slide < pagination) {
      current_slide += 1;
    }
  }
  function slidePrev() {
    for (let step = 0; step < swipeCount; step++) {
      swiper.slidePrev();
    }
    if (current_slide > 1) {
      current_slide -= 1;
    }
  }

  function promotionsClass({ s_index }) {
    if (name === "Promotions") {
      if (s_index % 3 === 1) {
        return "md:flex md:justify-center";
      }
      if (s_index % 3 === 2) {
        return "md:flex md:justify-end";
      }
    }
    return "";
  }
</script>

<div>
  <div class="flex justify-between pb-10">
    <h1 class="dark:text-white text-3xl font-bold">{name}</h1>
    <div class="hidden lg:flex justify-center items-center">
      <h1 class="text-facemask-gray-300 mr-4">
        {current_slide + "/" + pagination}
      </h1>
      <button
        on:click={() => slidePrev()}
        class="h-12 rounded-xl z-30 bg-facemask-gray-100 hover:bg-facemask-gray-200 mr-2"
        style="min-width: 3em;"
      >
        <i
          class="bi bi-arrow-left-short text-facemask-gray-400"
          style="font-size: 25px;"
        />
      </button>
      <button
        on:click={() => slideNext()}
        class="h-12 rounded-xl z-30 bg-facemask-gray-100 hover:bg-facemask-gray-200"
        style="min-width: 3em;"
      >
        <i
          class="bi bi-arrow-right-short text-facemask-gray-400"
          style="font-size: 25px;"
        />
      </button>
    </div>
  </div>
  <Swiper
    {spaceBetween}
    {slidesPerView}
    {breakpoints}
    on:touchStart={() => {
      if (swiper.allowTouchMove)
        swiper.$el[0].classList.toggle("swipergrabbing");
    }}
    on:touchEnd={() => {
      if (swiper.allowTouchMove)
        swiper.$el[0].classList.remove("swipergrabbing");
    }}
    on:swiper={(s) => (swiper = s.detail[0])}
  >
    {#each data as item, i}
      <SwiperSlide
        class="max-w-0 md:max-w-xs lg:max-w-full {promotionsClass({
          s_index: i,
        })}"
        style={minWidth}
      >
        <svelte:component
          this={CardToSwipe}
          car={item}
          brand={item}
          {extraData}
        />
      </SwiperSlide>
    {/each}
  </Swiper>
</div>
