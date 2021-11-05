<script>
  import { comingsoon } from "@/components/stores.js";
  import SideNav from "./SideNav.svelte";

  let sidebar_show = false;

  let showMore = false;
  let showMobileMenu = false;

  let navlinks = [
    {
      id: 2,
      title: "Home",
      path: "/catalogue?page=1",
    },
    {
      id: 3,
      title: "Contact Me",
      path: "/cpos",
    },
    {
      id: 4,
      title: "About The Project",
      path: "/about-us",
    },
    {
      id: 5,
      title: "How It Works",
      path: "/locate-us",
    },
  ];

  let menulinks = [
    {
      id: 2,
      title: "References",
      path: "#",
    },
    {
      id: 5,
      title: "Gallery",
      path: "#",
    },
  ];

  function ignoredContent(event) {
    var ignoreClickOnMeElement = document.getElementById("navbar");
    var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
    if (!isClickInsideElement) {
      if (showMore) showMore = false;
      if (showMobileMenu) showMobileMenu = false;
    }
  }

  function onload() {
    document.addEventListener("click", ignoredContent);
  }
</script>

<nav
  class="container mx-auto px-2 sm:px-6 xl:px-10 2xl:px-40 z-50 min-w-max"
  id="navbar"
  use:onload
>
  <div class="my-5 pt-5">
    <div class="relative flex items-center justify-between">
      <a class="flex-shrink-0 flex items-center" href="/">
        <img
          class="block h-12 w-auto"
          src="/assets/icons/icon-with-motto.png"
          alt="Icon"
        />
      </a>
      <div class="flex items-center justify-center">
        <div class="hidden md:flex sm:ml-6 items-center justify-center">
          <div class="flex space-x-5">
            {#each navlinks as navlink}
              <a
                href={navlink.path}
                class="text-facemask-gray-600 dark:text-facemask-gray-200 font-medium px-3 py-2 rounded-md text-sm"
                >{navlink.title}</a
              >
            {/each}
            <div class="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  class="flex items-center px-3 py-2"
                  id="menu-button"
                  on:click={() => (showMore = !showMore)}
                >
                  <h1
                    class="bg-white text-sm font-medium text-facemask-gray-600 dark:text-facemask-gray-200 dark:bg-transparent"
                  >
                    More
                  </h1>
                  <i
                    class="bi bi-caret-down-fill text-md ml-2 dark:text-facemask-gray-200 leading-none"
                  />
                </button>
              </div>
              <div
                class="origin-top-right absolute right-0 mt-2 w-65 rounded-lg shadow-lg p-4 px-7 bg-facemask-cardBg z-10 ring-1 ring-black ring-opacity-5 focus:outline-none {showMore
                  ? ''
                  : 'hidden'}"
                tabindex="-1"
                id="dropdown-menu"
              >
                {#each menulinks as menulink, i}
                  <a
                    href={menulink.path}
                    on:click={() => {
                      if (menulink.path === "#") {
                        $comingsoon = true;
                      }
                    }}
                    class="text-white font-medium block text-sm hover:bg-facemask-gray-100 hover:bg-opacity-10 px-0 hover:px-3.5 p-2 rounded-md {i ===
                    menulinks.length - 1
                      ? 'mb-3 lg:mb-0'
                      : ''} {i ? ' mt-2' : ''}">{menulink.title}</a
                  >
                {/each}
                <div
                  class="border-t border-gray-400 block lg:hidden w-full"
                  role="none"
                >
                  <a
                    class="flex justify-center items-center text-md text-facemask-gray-600 font-medium rounded-lg p-3 mt-6 w-full bg-facemask-gray-100"
                    href="https://github.com/Dingnh/fyp-frontend"
                    target="_blank"
                  >
                    <i class="bi bi-github leading-none mr-2.5 text-xl" />
                    Github Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute md:hidden inset-y-0 right-0 flex items-center md:static md:inset-auto md:ml-6 md:pr-0"
      >
        <div>
          <a
            class="hidden lg:flex justify-center items-center text-md text-white font-medium rounded-lg p-3 px-6 bg-facemask-gray-500"
            href="https://github.com/Dingnh/fyp-frontend"
            target="_blank"
          >
            <i class="bi bi-github leading-none mr-2.5 text-xl" />
            Github Repo
          </a>
          <button
            type="button"
            class="inline-flex md:hidden items-center justify-center md:p-2 rounded-md text-facemask-gray-600 dark:text-facemask-gray-200 xsm:bg-facemask-grimary text-3xl"
            on:click={() => (sidebar_show = !sidebar_show)}
          >
            <i class="bi bi-list" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <SideNav bind:show={sidebar_show} />
</nav>
