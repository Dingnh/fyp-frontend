<script>
  export let brand = {
    id: 1,
    title: "BENTLEY",
    img: "/assets/brand-1.png",
    vehicles: "16,840",
  };
  export let extraData;

  $: if (extraData) {
    brand.vehicles = extraData.filter(
      (car) => car.brand.Name == brand.title
    ).length;
  }
</script>

<div
  class="w-48 md:w-52 h-48 flex flex-col justify-between items-center p-26px gap-2 dark:bg-opacity-10"
>
  <div class="h-24 w-44 flex justify-center items-center">
    <img src={brand.img} alt="promotion-1" class="max-h-24 max-w-44" />
  </div>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-facemask-gray-600 text-sm font-bold dark:text-white">
      {brand.title}
    </h1>
    <button
      class="mt-4 px-4 bg-facemask-gray-100 hover:bg-facemask-gray-200 text-facemask-gray-400 font-bold h-10 rounded-lg min-w-min whitespace-nowrap text-xs"
      >{brand.vehicles + " vehicles"}</button
    >
  </div>
</div>
