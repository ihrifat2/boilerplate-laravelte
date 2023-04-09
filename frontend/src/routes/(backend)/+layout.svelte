<script>
</script>

<svelte:head>
	<link href="assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
	<link href="assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
</svelte:head>


<div class="app">
	<main>
		<slot />
	</main>
	<script src="assets/plugins/global/plugins.bundle.js"></script>
	<script src="assets/js/scripts.bundle.js"></script>
	<script src="assets/js/custom/widgets.js"></script>
</div>
