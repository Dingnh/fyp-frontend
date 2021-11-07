<script>
  import { comingsoon } from "@/components/stores.js";
  import Modal from "./Modal.svelte";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
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
    cBtn: () => {
      closeModal();
    },
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
    {
      id: 6,
      type: "modal",
      title: "References",
      path: "#",
    },
    {
      id: 7,
      type: "modal",
      title: "Gallery",
      path: "#",
    },
  ];
</script>

<div class="bg-facemask-gray-100">
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
      {#each navlinks as navlink}
        {#if navlink.type == "link"}
          <a
            href={navlink.path}
            on:click={() => {
              if (navlink.path === "#") {
                $comingsoon = true;
              }
            }}
          >
            <p class="text-sm text-facemask-gray-500 mb-4">{navlink.title}</p>
          </a>
        {:else if navlink.type == "modal"}
          <h1
            on:click={() => {
              if (navlink.path === "#") {
                $comingsoon = true;
              } else {
                navlink.onclick();
              }
            }}
          >
            <p class="text-sm text-facemask-gray-500 mb-4 cursor-pointer">
              {navlink.title}
            </p>
          </h1>
        {/if}
      {/each}
    </div>
    <div
      class="flex flex-col items-center lg:items-start lg:mr-32 xl:mr-40 mb-8 lg:mb-0"
    >
      <p class="text-sm text-facemask-gray-600 font-semibold mb-7">Project</p>
      <a href="https://university.sunway.edu.my/profiles/set/Dr-Matthew-Teow">
        <p class="text-sm text-facemask-gray-500 mb-4">Supervisor Profile</p>
      </a>
      <a
        href="#"
        on:click={() => {
          $comingsoon = true;
        }}
      >
        <p class="text-sm text-facemask-gray-500 mb-4">Jupyter Notebooks</p>
      </a>
      <a
        href="#"
        on:click={() => {
          $comingsoon = true;
        }}
      >
        <p class="text-sm text-facemask-gray-500 mb-4">Models</p>
      </a>
    </div>
    <div class="flex flex-col items-center lg:items-start">
      <p class="text-sm text-facemask-gray-600 font-semibold mb-7">
        Follow Me On
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
