<script>
  import PreviewModal from "@/components/PreviewModal.svelte";
  import HomePageSkeleton from "./skeletons/HomePageSkeleton.svelte";
  import FaceMaskSection from "./components/FaceMaskSection.svelte";

  let innerWidth = window.innerWidth;

  onresize = () => {
    innerWidth = window.innerWidth;
  };

  const content = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 1500);
  });
</script>

{#await content}
  <HomePageSkeleton bind:innerWidth />
{:then { data }}
  <FaceMaskSection />
{/await}

<PreviewModal />
