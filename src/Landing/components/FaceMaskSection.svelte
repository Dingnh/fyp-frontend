<script>
  import FileUpload from "@/components/FileUpload.svelte";
  import { children } from "svelte/internal";

  let files = {
    accepted: [],
    rejected: [],
  };
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
      <div class="mt-5 w-full h-full">
        <FileUpload
          bind:files
          bind:uploadedFiles={files.accepted}
          accept={[".png"]}
        />
      </div>
    </div>
  </div>
</div>
