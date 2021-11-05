<script>
  let socMed = [
    {
      id: 2,
      class: "bi bi-github",
      href: "https://github.com/Dingnh",
    },
    {
      id: 3,
      class: "bi bi-instagram",
      href: "https://www.instagram.com/dingnick/",
    },
    {
      id: 4,
      class: "bi bi-linkedin",
      href: "https://www.linkedin.com/in/18039503/",
    },
  ];
</script>

<div class="bg-facemask-gray-100 shadow-facemask-inverted-sm">
  <div
    class="lg:flex w-full pt-12 md:pt-24 container mx-auto px-2 sm:px-6 md:px-0 xl:px-10 2xl:px-40 "
  >
    <div class="flex flex-col items-center lg:mr-32 xl:mr-40 mb-8 lg:mb-0">
      <img src="/icon.png" alt="masked-logo" class=" w-48 mb-5" />
    </div>
    <div
      class="flex flex-col items-center lg:items-start lg:mr-32 xl:mr-40 mb-8 lg:mb-0"
    >
      <p class="text-sm text-facemask-gray-600 font-semibold mb-7">
        Quick Links
      </p>
      <a href="/catalogue?page=1">
        <p class="text-sm text-facemask-gray-500 mb-4">Home</p>
      </a>
      <a href="/">
        <p class="text-sm text-facemask-gray-500 mb-4">Contact Me</p>
      </a>
      <a href="/">
        <p class="text-sm text-facemask-gray-500 mb-4">Github Repo</p>
      </a>
      <a href="/">
        <p class="text-sm text-facemask-gray-500 mb-4">Capstone Project 1</p>
      </a>
      <a href="/">
        <p class="text-sm text-facemask-gray-500 mb-4">References</p>
      </a>
      <a href="/">
        <p class="text-sm text-facemask-gray-500 mb-4">Gallery</p>
      </a>
    </div>
    <div
      class="flex flex-col items-center lg:items-start lg:mr-32 xl:mr-40 mb-8 lg:mb-0"
    >
      <p class="text-sm text-facemask-gray-600 font-semibold mb-7">Project</p>
      <a href="/locate-us">
        <p class="text-sm text-facemask-gray-500 mb-4">The Supervisor</p>
      </a>
      <a href="/contact-us">
        <p class="text-sm text-facemask-gray-500 mb-4">Jupyter Notebooks</p>
      </a>
      <a href="/">
        <p class="text-sm text-facemask-gray-500 mb-4">Models</p>
      </a>
    </div>
    <div class="flex flex-col items-center lg:items-start">
      <p class="text-sm text-facemask-gray-600 font-semibold mb-7">
        Follow Us On
      </p>
      <div class="flex justify-center">
        {#each socMed as social_media}
          <a href={social_media.href} target="_blank">
            <i class="{social_media.class} mx-2 lg:ml-0 lg:mr-3" />
          </a>
        {/each}
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-center w-full py-20 pt-13">
    <div class="flex flex-col md:flex-row justify-center w-full">
      <p
        class="text-base text-facemask-gray-600 text-center font-semibold md:pr-1"
      >
        Brought to you by
      </p>
      <p class="text-base text-facemask-gray-600 text-center font-semibold">
        Ding Nick Hong
      </p>
    </div>
    <p
      class="text-base text-facemask-gray-600 text-center font-semibold md:pr-1"
    >
      18039503
    </p>
  </div>
</div>
