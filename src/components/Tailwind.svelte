<!-- ./src/Components/Tailwind.svelte -->
<style global>
	@import "tailwindcss/base";

	@import "tailwindcss/components";

	@import "tailwindcss/utilities";

	@layer utilities {
		.filters::-webkit-scrollbar {
			width: 6px;
			height: 6px;
		}

		.filters::-webkit-scrollbar-track {
			background-color: #e4e6e8;
			border-radius: 5px;
		}

		.filters::-webkit-scrollbar-thumb {
			background-color: rgba(13, 10, 25, 0.75);
			border-radius: 5px;
		}
		.filter-option::-webkit-scrollbar {
			width: 6px;
		}

		.filter-option::-webkit-scrollbar-track {
			background-color: #e4e6e8;
			border-radius: 5px;
		}

		.filter-option::-webkit-scrollbar-thumb {
			background-color: rgba(13, 10, 25, 0.75);
			border-radius: 5px;
		}
		.image_gallery_container {
			max-width: none;
		}
		.image_gallery_main {
			height: auto;
		}
		.image_gallery_sub {
			max-width: 173px;
			height: 113px;
		}
		.image_gallery_last_sub {
			height: 110px;
			max-width: 170px;
		}
		@media (min-width: 1024px) {
			.image_gallery_container {
				max-width: 508px;
			}
			.image_gallery_main {
				height: 358px;
			}
			.image_gallery_sub {
				max-width: 153px;
				height: 113px;
			}
			.image_gallery_last_sub {
				height: 110px;
				max-width: 150px;
			}
		}

		@media (min-width: 1280px) {
			.image_gallery_container {
				max-width: 508px;
			}

			.image_gallery_main {
				height: 358px;
			}

			.image_gallery_sub {
				max-width: 163px;
				height: 113px;
			}

			.image_gallery_last_sub {
				max-width: 160px;
				height: 110px;
			}
		}
		.catalogue-product-image {
			max-height: 240px;
		}

		@media (min-width: 480px) {
			.catalogue-product-image {
				max-height: 177px;
			}
		}
		.vehicle_specifications_description {
			display: -webkit-box;
			-webkit-line-clamp: 8;
			-webkit-box-orient: vertical;
			overflow: hidden;
			white-space: pre-line;
		}
		.vehicle_description {
			display: -webkit-box;
			-webkit-line-clamp: 8;
			-webkit-box-orient: vertical;
			overflow: hidden;
			white-space: pre-line;
			height: 168px;
		}

		.vehicle_details_container {
			max-width: none;
			margin-left: 0px;
		}

		@media (min-width: 1024px) {
			.vehicle_details_container {
				margin-left: 32px;
			}
		}
		.cpos-wrapper:nth-child(even) > .image {
			@apply order-1;
		}

		.line {
			/* Layout */
			width: 98px;
			height: 6px;
			/* Color */
			background: #ff4d00;
			/* Effect */
			border-radius: 8px;
		}
		.custom-swiper-wrapper {
			display: flex;
			justify-content: space-between;
			width: 100%;
		}
		.swipergrabbing {
			cursor: grabbing;
			cursor: -moz-grabbing;
			cursor: -webkit-grabbing;
		}

		.feature-background {
			transform: translate(-10px, 40px);
		}
		@screen sm {
			.translation {
				left: 50%;
			}
			.translation {
				transform: translateY(30%) translateX(-180%);
			}
			.feature-background {
				transform: none;
			}
		}
		@screen md {
			.cpos-wrapper {
				display: grid;
				grid-template-columns: 1fr 1fr;
				column-gap: 60px;
			}
			.feature-background {
				transform: none;
			}
			.translation {
				left: 40%;
			}

			.about-us-wrapper:nth-child(even) .image {
				@apply order-1;
				@apply ml-2;
			}
			.about-us-wrapper:nth-child(odd) .image {
				@apply mr-2;
			}
			.about-us-wrapper:nth-child(even) {
				display: grid;
				grid-template-columns: 42.5% 52.5%;
				column-gap: 5%;
			}
			.about-us-wrapper:nth-child(odd) {
				display: grid;
				grid-template-columns: 52.5% 42.5%;
				column-gap: 5%;
			}
		}
		@screen lg {
			.cpos-cover {
				width: 549px;
				height: 366px;
			}
			.feature-background {
				transform: none;
			}
			.translation {
				left: 38%;
			}
		}
		.locate-us-background {
			width: 87%;
		}
		.locate-us-showroom-1 {
			width: 100%;
		}
		.locate-us-showroom-2 {
			width: 35%;
		}
		@media only screen and (min-width: 1024px) {
			.store-detail {
				width: 660px;
			}
			.locate-us-background {
				width: 80%;
			}
			.locate-us-showroom-1 {
				width: 90%;
			}
			.locate-us-showroom-2 {
				width: 33%;
			}
		}
		@media only screen and (min-width: 1280px) {
			.locate-us-background {
				width: 75%;
			}
			.locate-us-showroom-1 {
				width: 620px;
			}
		}
	}
</style>
