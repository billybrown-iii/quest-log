<script>
    import {goto} from '$app/navigation';
    import { CampaignService } from '$lib';
    import { currentCampaign } from '../stores';

    let campaignKey = '';

    function findCampaign () {
        let foundCampaign;
        try {
            foundCampaign = CampaignService.fetch(campaignKey)
        } catch (e) {
            // TODO gracefully handle campaign not found error
            // also, make it async and add loading indicator
            alert(e)
            return
        }

        currentCampaign.set(foundCampaign);

        goto(`/campaign/${campaignKey}`);
    }
</script>

<!-- TODO associate the input w/ the button so you can hit enter to submit -->
<input type="text" bind:value={campaignKey} placeholder="Enter key.  ex: a12d3" />
<button type="button" class="button" on:click={findCampaign}>
    Find campaign
</button>

<style lang='scss'>
    
</style>