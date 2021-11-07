<script>
  import Dropzone from "svelte-file-dropzone";
  let hover = false;
  // export let files;

  export let files = {
    accepted: [],
    rejected: [],
  };
  export let accept;
  export let uploadedFiles = [];
  export let reupload = false;
  export let removeUpload = () => {
    uploadedFiles = [];
  };

  export let handleFilesSelect = (e) => {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = fileRejections;
    console.log(files.accepted);
    if (files.rejected.length) {
      alert("File rejected, only " + accept + " are files accepted");
    }
  };
  $: textcolor = hover ? "text-white" : "text-facemask-gray-400";
</script>

<!-- {#if submission_field?.files?.length}
	<div style="margin-left: -32px;" class="my-2">
		New files (Save to upload the following files)
	</div>
{/if} -->

{#if uploadedFiles.length && !reupload}
  <ul class="mb-5">
    {#each uploadedFiles as file}
      <li class="pr-2">
        <div
          class="pr-2 mb-1"
          style="display:flex; justify-content: space-between;"
        >
          <p class="text-facemask-gray-500" style="margin-bottom: 0px;">
            {file.name}
          </p>
          <i
            class="bi bi-x"
            style="cursor: pointer;"
            on:click={() => {
              let fileIndex = uploadedFiles.findIndex(
                (f) => f.name === file.name
              );
              uploadedFiles.splice(fileIndex, 1);
              uploadedFiles = uploadedFiles;
            }}
          />
        </div>
      </li>
    {/each}
  </ul>
{/if}
{#if !uploadedFiles.length || reupload}
  <Dropzone
    on:drop={(e) => {
      handleFilesSelect(e);
      reupload = false;
      hover = false;
    }}
    {accept}
    containerStyles="\
	display: flex; justify-content: center; transition: 0.5s; border-color: rgb(206, 212, 218); height: inherit; border-radius: 20px; cursor: pointer; 
	{hover
      ? 'border-color: #C8CCD4; background-color: #C8CCD4;'
      : 'border-color: #9A9EA7; background-color: white;'}"
    {$$restProps}
    on:dragover={() => (hover = true)}
    on:dragleave={() => (hover = false)}
  >
    <i
      class="{textcolor} bi bi-cloud-arrow-up text-6xl"
      style="transition: 0.5s"
    />
    <h4 class={textcolor} style="transition: 0.5s; text-align: center;">
      or drop single/multiple files here
    </h4>
  </Dropzone>
{:else}
  <div class="flex flex-col flex-wrap">
    <div />
    <div class="flex">
      <div
        style="cursor: pointer; color: #1C93ED"
        on:click={() => {
          // if (!submission_field?.files?.length) {
          // 	uploadedFiles = [];
          // }
          removeUpload();
        }}
      >
        Cancel
      </div>
      <div
        class="ml-2"
        style="cursor: pointer; color: #1C93ED;"
        on:click={() => {
          reupload = true;
        }}
      >
        Add another file(s)
      </div>
    </div>
  </div>
{/if}
