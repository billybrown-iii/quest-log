<script>
    import {goto} from '$app/navigation';

    let campaignKey = '';
    let buttonText = 'Find campaign'

    function routeToCampaignPage (event) {
        // if not for this, the automatic page reload prevents the goto from working
        event.preventDefault();
        
        if (!campaignKey) return alert('type something.  pls')
        
        buttonText = 'Loading campaign...'
        
        goto(`/campaign/${campaignKey}`)
    }
</script>

 <form on:submit={routeToCampaignPage}>
     <input type="text" bind:value={campaignKey} placeholder="Enter key.  ex: a12d3" />
     <button type="submit" class="button">
         {buttonText}
     </button>
 </form>

<style lang='scss'>
    
</style>