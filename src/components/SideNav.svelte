<script>
  import { comingsoon } from "@/components/stores.js";
  import { whatsappLink } from "@/config/static_data";
  import { fly } from "svelte/transition";
  export let show = true;
  export let roundedCorner = true;
  export let dismissModal = () => {
    show = false;
  };

  let navlinks = [
    {
      id: 2,
      title: "Buy Car",
      path: "/catalogue?page=1",
    },
    {
      id: 3,
      title: "C-POS",
      path: "/cpos",
    },
    {
      id: 4,
      title: "About Us",
      path: "/about-us",
    },
    {
      id: 5,
      title: "Locate Us",
      path: "/locate-us",
    },
    {
      id: 6,
      title: "Auction",
      path: "#",
    },
    {
      id: 7,
      title: "Contact Us",
      path: "/contact-us",
    },
    {
      id: 8,
      title: "News & Reviews",
      path: "#",
    },
    {
      id: 9,
      title: "Gallery",
      path: "#",
    },
  ];
</script>

<div
  class="{show ? 'fixed' : 'hidden'} inset-0 overflow-hidden"
  style="z-index: 100;"
  aria-labelledby="modal-title"
  role="dialog"
  aria-modal="true"
>
  <div
    class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  >
    <div
      class="fixed inset-0 bg-facemask-gray-500 bg-opacity-75 transition-opacity backdrop-filter backdrop-blur"
      aria-hidden="true"
      on:click={dismissModal}
    />
    <span
      class="hidden sm:inline-block sm:align-middle sm:h-screen"
      aria-hidden="true">&#8203;</span
    >
    <div
      class="inline-block align-middle bg-white {roundedCorner
        ? 'rounded-lg'
        : ''} text-left overflow-hidden shadow-xl transform transition-all sm:my-8"
    >
      <!-- content -->
      <div class="bg-white">
        <div class="sm:flex sm:items-start" />
      </div>
    </div>
  </div>
</div>
{#if show}
  <nav
    transition:fly={{ x: 250, opacity: 1 }}
    style="z-index: 1000;"
    class="fixed top-0 right-0 h-full py-8 px-6 bg-facemask-cardBg w-80 {window.innerHeight <=
    800
      ? ' overflow-y-scroll'
      : ''}"
  >
    <div class="flex justify-between items-center">
      <img class="block h-16" src="/icon.png" alt="Icon" />

      <i
        class="bi bi-x-lg text-xl text-gray-400 cursor-pointer"
        on:click={dismissModal}
      />
    </div>
    <div class="mt-9">
      {#each navlinks as navlink, i}
        <a
          href={navlink.path}
          on:click={() => {
            if (navlink.path === "#") {
              $comingsoon = true;
            }
          }}
          class="text-white font-medium block text-sm hover:bg-facemask-gray-100 hover:bg-opacity-10 px-0 hover:px-3.5 p-3.5 mt-5 rounded-md"
          >{navlink.title}</a
        >
      {/each}
      <div class="border-t border-gray-400 w-full mt-9" role="none">
        <a
          class="flex justify-center items-center text-md text-white font-medium rounded-lg p-3 mt-6 w-full bg-facemask-whatsapp"
          href={`${whatsappLink}&text=Hi,%20I%20found%20you%20on%20your%20website,%20I%20am%20interested%20in%20what%20you%20do`}
          target="_blank"
        >
          <img class="h-6 w-6 mr-2.5" src="/assets/whatsapp-logo.png" alt="" />
          24hr Helpline
        </a>
      </div>
    </div>
  </nav>
{/if}
