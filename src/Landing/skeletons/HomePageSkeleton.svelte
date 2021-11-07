<script>
  import Skeleton from "svelte-skeleton";

  export let innerWidth;
</script>

<Skeleton
  height="1200"
  width="100%"
  primaryColor="#E4E6E8"
  secondaryColor="#F5F6F7"
>
  {#if innerWidth >= 768}
    <rect width="62%" height="125" x="19%" y="75" rx="10" ry="10" />
  {:else if innerWidth >= 360}
    <rect width="62%" height="100" x="19%" y="50" rx="10" ry="10" />
  {:else if innerWidth >= 0}
    <rect width="90%" height="100" x="5%" y="50" rx="10" ry="10" />
  {/if}

  {#if innerWidth >= 1281}
    <rect width="590" height="500" x="0%" y="275" rx="10" ry="10" />
    <rect width="320" height="75" x="51%" y="275" rx="10" ry="10" />
    <rect width="590" height="410" x="51%" y="365" rx="10" ry="10" />
    <rect width="35%" height="75" x="0%" y="850" rx="10" ry="10" />
  {:else if innerWidth >= 1024}
    <rect width="500" height="500" x="0%" y="275" rx="10" ry="10" />
    <rect width="320" height="75" x="51%" y="275" rx="10" ry="10" />
    <rect width="500" height="410" x="51%" y="365" rx="10" ry="10" />
    <rect width="35%" height="75" x="0%" y="850" rx="10" ry="10" />
  {:else if innerWidth >= 768}
    <rect width="374" height="350" x="0%" y="275" rx="10" ry="10" />
    <rect width="320" height="75" x="51%" y="275" rx="10" ry="10" />
    <rect width="374" height="260" x="51%" y="365" rx="10" ry="10" />
    <rect width="35%" height="75" x="0%" y="700" rx="10" ry="10" />
  {:else if innerWidth >= 0}
    <rect width="100%" height="75" x="0%" y="200" rx="10" ry="10" />
    <rect width="100%" height="260" x="0%" y="300" rx="10" ry="10" />
    <rect width="180" height="75" x="0%" y="600" rx="10" ry="10" />
  {/if}

  {#if innerWidth >= 1024}
    <rect width="180" height="180" x="0" y="950" rx="10" ry="10" />
    <rect width="180" height="180" x="200" y="950" rx="10" ry="10" />
    <rect width="180" height="180" x="400" y="950" rx="10" ry="10" />
    <rect width="180" height="180" x="600" y="950" rx="10" ry="10" />
    <rect width="180" height="180" x="800" y="950" rx="10" ry="10" />
    <rect width="180" height="180" x="1000" y="950" rx="10" ry="10" />
    <rect width="180" height="180" x="1200" y="950" rx="10" ry="10" />
  {:else if innerWidth >= 768}
    <rect width="180" height="180" x="0" y="800" rx="10" ry="10" />
    <rect width="180" height="180" x="200" y="800" rx="10" ry="10" />
    <rect width="180" height="180" x="400" y="800" rx="10" ry="10" />
    <rect width="180" height="180" x="600" y="800" rx="10" ry="10" />
    <rect width="180" height="180" x="800" y="800" rx="10" ry="10" />
    <rect width="180" height="180" x="1000" y="800" rx="10" ry="10" />
    <rect width="180" height="180" x="1200" y="800" rx="10" ry="10" />
  {:else if innerWidth >= 0}
    <rect width="180" height="180" x="0" y="700" rx="10" ry="10" />
    <rect width="180" height="180" x="200" y="700" rx="10" ry="10" />
    <rect width="180" height="180" x="400" y="700" rx="10" ry="10" />
    <rect width="180" height="180" x="600" y="700" rx="10" ry="10" />
    <rect width="180" height="180" x="800" y="700" rx="10" ry="10" />
    <rect width="180" height="180" x="1000" y="700" rx="10" ry="10" />
    <rect width="180" height="180" x="1200" y="700" rx="10" ry="10" />
  {/if}
</Skeleton>
