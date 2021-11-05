<script>
	import Modal from "@/components/Modal.svelte";
	import { previewModal } from "@/components/stores";

	previewModal.update((r) => {
		return {
			open: false,
			src: "",
		};
	});
</script>

<Modal bind:open={$previewModal.open} hideHeader hideFooter>
	<div
		slot="body"
		class="flex flex-col items-center xs:max-w-lg md:max-w-xl lg:max-w-2xl"
	>
		<img src={$previewModal.src} alt="img" />
	</div>
</Modal>
