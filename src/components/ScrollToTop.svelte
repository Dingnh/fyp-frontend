<script>
  $: show = false;

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.documentElement.scrollTop > 200) {
      show = true;
    } else {
      show = false;
    }
  }
</script>

<button
  on:click={() => (document.documentElement.scrollTop = 0)}
  class="{show ? 'block' : 'hidden'} fixed bottom-20 right-10
         xl:right-20 2xl:right-40 bg-facemask-logoBg hover:bg-facemask-gray-500 z-50 rounded-full text-white"
  style="width: 60px; height: 60px"
  title="Go to top"
>
  <i class="bi bi-arrow-up" style="font-size: 24px;" />
</button>
