<script>
	import Skeleton from "svelte-skeleton";
</script>

<Skeleton
	height="700"
	width="100%"
	primaryColor="#2c2838"
	secondaryColor="#363242"
>
	<rect
		width="84"
		height="20"
		x="50%"
		y="0"
		rx="3"
		ry="3"
		transform="translate(-42 0)"
	/>
	<rect
		width="700"
		height="90"
		x="50%"
		y="35"
		rx="3"
		ry="3"
		transform="translate(-350 0)"
	/>

	<rect
		width="200"
		height="40"
		x="50%"
		y="145"
		rx="3"
		ry="3"
		transform="translate(-100 0)"
	/>

	<rect width="50" height="50" x="0%" y="400" rx="3" ry="3" />
	<rect
		width="50"
		height="50"
		x="100%"
		y="400"
		rx="3"
		ry="3"
		transform="translate(-50 0)"
	/>

	<rect
		width="800"
		height="400"
		x="50%"
		y="250"
		rx="3"
		ry="3"
		transform="translate(-400 0)"
	/>
</Skeleton>
