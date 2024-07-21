<script>
    import { onMount } from 'svelte';
    export let data;

    let value = 'loading...';

    // if you weant to show the page instantly
    // then update it with the fetched data
    // then use this approach:
    onMount(() => {
        setTimeout(() => {
            value = `fetched data for slug:  ${data.slug}`
        }, 1000)
    })
</script>

{#if value}
<div>Here is data:</div>
<div>{JSON.stringify(value)}</div>
{:else}
<div>Waiting on data</div>
{/if}

<a class="button" href="/">Click me to go back home</a>

