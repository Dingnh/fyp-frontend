<script>
  export let src = "/assets/step-1.png";
  export let step = "1";
  export let title = "Call Us";
  export let description =
    "Browse our carefully curated and professionally inspected cars online.";
</script>

<div
  class="w-64 h-80 flex flex-col justify-start items-start bg-white border border-facemask-gray-200 rounded-xl gap-2 dark:bg-facemask-cardBg dark:border-0 dark:border-transparent"
>
  <img {src} alt="warranty" class="w-full bg-cover rounded-t-xl" />
  <div class="p-6 pt-5 relative">
    <p
      class="h-9 w-9 text-sm text-white absolute left-8 -top-6 grid place-items-center bg-facemask-primary rounded-full border-3 border-white"
    >
      {step}
    </p>
    <h1 class="text-lg font-bold mb-1.5 dark:text-white">{title}</h1>
    <p class="text-sm text-facemask-gray-400 dark:text-white">
      {description}
    </p>
  </div>
</div>
