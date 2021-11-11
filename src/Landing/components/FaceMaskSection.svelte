<script>
  import FileUpload from "@/components/FileUpload.svelte";
  import models from "@/services/models";
  import Modal from "@/components/Modal.svelte";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import data from "./data";

  let files = {
    accepted: [],
    rejected: [],
  };

  let modalOpen = false;

  let output_image;

  function uploadImages(e) {
    modalOpen = true;
    models.uploadImages({ images: files.accepted }).then((resModels) => {
      console.log({ action: "Pushing Data" });
      if (resModels.response.ok) {
        output_image = resModels.data.output_image;
        console.log(output_image);
      } else {
        alert("error occured, " + resModels.response.body);
      }
      modalOpen = false;
    });
  }
</script>

<div
  class="w-full flex flex-col items-center justify-center py-20 pt-10 md:pt-15"
>
  <h1 class="text-3xl md:text-6xl lg:text-7xl">Detect Face Mask</h1>

  <div class="w-full flex justify-between py-10 md:py-20">
    <div class="w-6/12 self-start hidden md:flex">
      <img
        src="/assets/images/masked-person-with-text.png"
        alt="masked-person"
      />
    </div>
    <div
      class="w-full md:w-6/12 ml-0 md:ml-5 flex flex-col relative h-80 md:h-auto"
    >
      <button
        class="rounded-xl p-10 py-5 max-w-none md:max-w-xs border-facemask-gray-400 text-facemask-gray-400"
        style="border: 1px solid;"
        on:click={() => {
          console.log(document.getElementsByClassName("dropzone")[0].click());
        }}
      >
        Upload an image
      </button>
      <img
        class="hidden lg:flex absolute -top-16 right-0"
        src="assets/icons/arrow.png"
        alt="arrow"
      />
      <div class="flex flex-col justify-between mt-5 w-full h-full">
        <FileUpload
          bind:files
          bind:uploadedFiles={files.accepted}
          accept={[".png"]}
          on:buttonclick={uploadImages}
        />
      </div>
    </div>
  </div>
  {#if output_image}
    <div class="w-full flex flex-col">
      <h1 class="text-3xl">Uploaded Image Output</h1>
      <div class="flex gap-20 py-5">
        <img
          src="data:image/png;base64, {output_image}"
          alt="face-mask-detection"
        />
      </div>
    </div>
  {/if}
  <!-- <img src="data:image/png;base64, {data.data}" alt="face-mask-detection" /> -->
</div>

<Modal bind:open={modalOpen} hideHeader hideFooter hideClose closable={false}
  ><div
    slot="body"
    class="flex flex-col items-center"
    style="padding: 20px; padding-bottom: 30px; width: 650px"
  >
    <LottiePlayer
      src="/animations/loading.json"
      autoplay={true}
      loop={true}
      renderer="svg"
      background="transparent"
      width={300}
    />
    <p style="font-weight: 500; font-size: 20px; margin-bottom: 5px">
      Loading...
    </p>
    <p style="text-align: center; padding: 0px 20px; margin-bottom: 30px">
      Please do not close the website before the uploading completes
    </p>
  </div>
</Modal>
