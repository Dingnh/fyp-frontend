import { writable } from "svelte/store";

// Stores for router
export const Route = writable(undefined);
export const state = writable(undefined);
export const params = writable(undefined);
export const pathname = writable(undefined);
export const comingsoon = writable(false);
export const previewModal = writable(undefined);
export const specificationModal = writable(undefined);
export const hideNav = writable(false)
export const hideFooter = writable(false)
