<script>
  import Modal from "@/components/Modal.svelte";
  import { comingsoon } from "@/components/stores.js";
</script>

<Modal bind:open={$comingsoon} hideHeader hideFooter hideClose>
  <div
    slot="body"
    class="flex flex-col items-center"
    style="padding: 20px; padding-bottom: 50px"
  >
    <img src="/assets/working.gif" alt="working" />
    <p style="font-weight: 500; font-size: 20px; margin-bottom: 5px">
      Feature coming soon!
    </p>
    <p style="text-align: center; padding: 0px 20px; margin-bottom: 30px">
      I'm currently working hard to bring this to you. Please check back soon!
    </p>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      on:click={() => {
        $comingsoon = false;
      }}
    >
      Alright!
    </button>
  </div>
</Modal>
