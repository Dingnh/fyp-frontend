<script>
  import PreviewModal from "@/components/PreviewModal.svelte";
  import HomePageSkeleton from "./skeletons/HomePageSkeleton.svelte";

  let innerWidth = window.innerWidth;

  onresize = () => {
    innerWidth = window.innerWidth;
  };

  const content = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 3000);
  });
</script>

<!-- {#await content}
  <HomePageSkeleton />
{:then { data }}
  <div class="flex flex-col gap-20 mb-20">Its loaded</div>
{/await} -->

<PreviewModal />
