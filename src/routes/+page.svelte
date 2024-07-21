<div class='example-class'>
    Blue text!
</div>
<div class='component-scoped-class'>
    Cyan text!
</div>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style lang='scss'>
    $componentScopedScssVariable: cyan;

    .component-scoped-class {
        color: $componentScopedScssVariable;
    }
</style>