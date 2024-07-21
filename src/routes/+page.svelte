<script>
    import {goto} from '$app/navigation';
    function viewSomeCampaign () {
        const randomValue = Date.now()
        goto(`/campaign/${randomValue}`)
    }
</script>

<div class='example-class'>
    Blue text!
</div>
<div class='component-scoped-class'>
    Lime text!
</div>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button class="button" on:click={viewSomeCampaign}>
    Click me to view a campaign
</button>

<style lang='scss'>
    $componentScopedScssVariable: lime;

    .component-scoped-class {
        color: $componentScopedScssVariable;
    }
</style>