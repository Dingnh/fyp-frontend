<script>
	import Dropzone from "svelte-file-dropzone";
	import { Icon, Button } from "sveltestrap";
	let hover = false;
	// export let files;

	export let files = {
		accepted: [],
		rejected: [],
	};
	export let accept;
	export let height;
	export let uploadedFiles = [];
	export let reupload = false;
	export let removeUpload = () => {};

	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = fileRejections;
		console.log(files.accepted);
		if (files.rejected.length) {
			alert("File rejected");
		}
	}
	$: textcolor = hover ? "text-white" : "text-secondary";
</script>

<!-- {#if submission_field?.files?.length}
	<div style="margin-left: -32px;" class="my-2">
		New files (Save to upload the following files)
	</div>
{/if} -->

{#if uploadedFiles.length}
	<ul class="">
		{#each uploadedFiles as file}
			<li class="pr-2">
				<div
					class="pr-2 mb-1"
					style="display:flex; justify-content: space-between; max-width: 240px;"
				>
					<p style="margin-bottom: 0px;">{file.name}</p>
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
		containerClasses={"custom-dropzone " +
			(hover ? "bg-secondary border-secondary" : "bg-white")}
		containerStyles={(height ?? "height: 300px;") +
			"display: flex; justify-content: center; transition: 0.5s;  border-color: rgb(206, 212, 218)"}
		class="file-upload-hover"
		{$$restProps}
		on:dragover={() => (hover = true)}
		on:dragleave={() => (hover = false)}
	>
		<h1>
			<Icon name="cloud-upload" class={textcolor} style="transition: 0.5s" />
		</h1>
		<h4 class={textcolor} style="transition: 0.5s; text-align: center;">
			Drag and drop single or multiple files here
		</h4>
		<Button
			class={"border-0 bg-transparent " + textcolor}
			style="transition: 0.5s">or click and upload a file</Button
		>
	</Dropzone>
{:else}
	<div class="d-flex flex-column flex-wrap">
		<div />
		<div class="d-flex">
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

<style>
	:global(custom-dropzone) {
		border: dashed 2px #000;
	}
</style>
