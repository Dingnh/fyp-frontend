<script>
  export let open;
  export let icon;
  export let title;
  export let description;
  export let hideHeader = false;
  export let hideFooter = false;
  export let hideClose = false;
  export let roundedCorner = true;
  export let closable = true;
  export let dismissModal = () => {
    if (closable) {
      open = false;
    }
  };
  export let pBtnName = "Deactivate";
  export let pBtnFn = () => {
    open = false;
  };
  export let sBtnName = "Cancel";
  export let sBtnFn = () => {
    open = false;
  };
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div
  class="{open ? 'fixed' : 'hidden'} inset-0 overflow-hidden"
  style="z-index: 1000;"
  aria-labelledby="modal-title"
  role="dialog"
  aria-modal="true"
>
  {#if open}
    <slot name="image-carousel" />
  {/if}
  <div
    class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  >
    {#if !hideClose}
      <i
        class="bi bi-x-lg absolute leading-0 top-5 right-8 text-facemask-gray-400 z-20 cursor-pointer hover:text-facemask-gray-300 transition-all duration-150"
        style="font-size: 40px;"
        on:click={dismissModal}
      />
    {/if}
    <div
      class="fixed inset-0 bg-facemask-gray-500 bg-opacity-90 transition-opacity"
      aria-hidden="true"
      on:click={dismissModal}
    />
    <span
      class="hidden sm:inline-block sm:align-middle sm:h-screen"
      aria-hidden="true">&#8203;</span
    >
    <div
      class="inline-block align-middle bg-white {roundedCorner
        ? 'rounded-lg'
        : ''} text-left overflow-hidden shadow-xl transform transition-all sm:my-8"
    >
      <!-- content -->
      <div class="bg-white">
        <div class="sm:flex sm:items-start">
          {#if icon}
            <div
              class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
            >
              <svg
                class="h-6 w-6 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          {/if}
          {#if title || description}
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              {#if title}
                <h3
                  class="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Deactivate account
                </h3>
              {/if}
              {#if description}
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Are you sure you want to deactivate your account? All of
                    your data will be permanently removed. This action cannot be
                    undone.
                  </p>
                </div>
              {/if}
            </div>
          {/if}
          <slot name="body" />
        </div>
      </div>
      {#if !hideFooter}
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            on:click={pBtnFn}
          >
            {pBtnName}
          </button>
          <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            on:click={sBtnFn}
          >
            {sBtnName}
          </button>
        </div>
      {/if}
    </div>
  </div>
</div>
