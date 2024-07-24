<script>
    import { onMount } from 'svelte';
    export let data;

    let value = 'loading...';

    // if you want to show the page instantly
    // then update it with the fetched data
    // then use this approach*:
    onMount(() => {
        setTimeout(() => {
            value = `fetched data for campaign key:  ${data.campaignKey}`
        }, 1000)
    })

    // *note on the above - it might be a bad practice
    // looks like the general svelte philosophy is that data fetching lives in the .js file load function
    // TODO try this instead
    // https://kit.svelte.dev/docs/load#streaming-with-promises
</script>

{#if value}
<div>Here is data:</div>
<div>{JSON.stringify(value)}</div>
{:else}
<div>Waiting on data</div>
{/if}

<a class="button" href="/">Click me to go back home</a>

