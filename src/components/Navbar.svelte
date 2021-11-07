<script>
  import { comingsoon } from "@/components/stores.js";
  import Modal from "./Modal.svelte";
  import SideNav from "./SideNav.svelte";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";

  let sidebar_show = false;

  let showMore = false;
  let showMobileMenu = false;

  let modalOpen = false;

  function openModal({
    title = "",
    description = "",
    pBtn = () => {},
    pBtnName = "",
    cBtn = () => closeModal(),
    cBtnName = "",
    animation = {},
  }) {
    modalOpen = true;
    modalInfo.title = title;
    modalInfo.description = description;
    modalInfo.pBtn = pBtn;
    modalInfo.pBtnName = pBtnName;
    modalInfo.cBtn = cBtn;
    modalInfo.cBtnName = cBtnName;
    modalInfo.animation = animation;
  }

  function closeModal() {
    modalOpen = false;
  }

  let modalInfo = {
    title: "Drop me an email!",
    description: "18039503@imail.sunway.edu.my",
    pBtn: () => {},
    pBtnName: "",
    cBtnName: "",
    animation: {
      src: "",
      width: 300,
    },
  };

  let navlinks = [
    {
      id: 2,
      type: "link",
      title: "Home",
      path: "/",
    },
    {
      id: 3,
      type: "modal",
      title: "Contact Me",
      path: "",
      onclick: () =>
        openModal({
          title: "Drop me an email!",
          description: "18039503@imail.sunway.edu.my",
          pBtn: () => {
            window.location = "18039503@imail.sunway.edu.my";
          },
          pBtnName: "Email Me",
          cBtnName: "",
          animation: {
            src: "/animations/email.json",
            width: 300,
          },
        }),
    },
    {
      id: 4,
      type: "modal",
      title: "About The Project",
      path: "/",
      onclick: () =>
        openModal({
          title: "Download A Copy Of My Report",
          description: "Capstone Project 1.pdf",
          pBtn: () => {
            window.open("/PD_18039503.pdf", "_blank");
          },
          pBtnName: "Download",
          cBtnName: "",
          animation: {
            src: "/animations/report.json",
            width: 300,
          },
        }),
    },
    {
      id: 5,
      type: "modal",
      title: "How It Works",
      path: "",
      onclick: () =>
        openModal({
          title: "Discover How The Image Classification System Works",
          description:
            "Low Light Enhancement and Face Masks Identification Model.pdf",
          pBtn: () => {
            window.open(
              "/Low Light Enhancement and Face Masks Identification Model.pdf",
              "_blank"
            );
          },
          pBtnName: "Download",
          cBtnName: "",
          animation: {
            src: "/animations/howitworks.json",
            width: 300,
          },
        }),
    },
  ];

  let menulinks = [
    {
      id: 2,
      type: "modal",
      title: "References",
      path: "#",
    },
    {
      id: 5,
      type: "link",
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
  class="container mx-auto px-2 sm:px-0 xl:px-10 2xl:px-40 z-50 min-w-max"
  id="navbar"
  use:onload
>
  <div class="my-5 pt-5">
    <div
      class="relative flex items-center justify-between md:justify-around lg:justify-between"
    >
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
              {#if navlink.type == "link"}
                <a
                  href={navlink.path}
                  class="text-facemask-gray-600 dark:text-facemask-gray-200 font-medium px-3 py-2 rounded-md text-sm"
                  >{navlink.title}</a
                >
              {:else if navlink.type == "modal"}
                <h1
                  class="text-facemask-gray-600 dark:text-facemask-gray-200 font-medium px-3 py-2 rounded-md text-sm cursor-pointer"
                  on:click={navlink.onclick}
                >
                  {navlink.title}
                </h1>
              {/if}
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
        class="absolute flex md:hidden lg:flex inset-y-0 right-0 items-center lg:static lg:inset-auto lg:ml-6 lg:pr-0"
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

<Modal bind:open={modalOpen} hideHeader hideFooter hideClose
  ><div
    slot="body"
    class="flex flex-col items-center"
    style="padding: 20px; padding-bottom: 30px; width: 650px"
  >
    <LottiePlayer
      src={modalInfo.animation.src}
      autoplay={true}
      renderer="svg"
      background="transparent"
      width={modalInfo.animation.width}
    />
    <p style="font-weight: 500; font-size: 20px; margin-bottom: 5px">
      {modalInfo.title}
    </p>
    <p style="text-align: center; padding: 0px 20px; margin-bottom: 30px">
      {modalInfo.description}
    </p>
    <div class="flex gap-2">
      <button
        class="bg-facemask-gray-400 hover:bg-facemask-gray-500 text-white font-bold py-2 px-4 rounded"
        on:click={modalInfo.cBtn}
      >
        {modalInfo.cBtnName || "Cancel"}
      </button>
      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        on:click={modalInfo.pBtn}
      >
        {modalInfo.pBtnName}
      </button>
    </div>
  </div>
</Modal>
