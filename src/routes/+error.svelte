<script>
	import { page } from '$app/stores';
</script>


<!-- options for a more elegant error handling experience? -->
<!-- validate via a front end API call that the campaign exists, or just find it from the front end in the first place -->
<!-- make this file a skinny goto that supplies the error message via the store or a query param -->

<div>{$page.error.message}</div>