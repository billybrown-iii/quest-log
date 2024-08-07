import { CampaignService } from '$lib'
import { error } from '@sveltejs/kit';

function simulateApiDelay () {
    return new Promise(resolve => {
        setTimeout(resolve, 400)
    })
}

export async function load ({params}) {    
    return simulateApiDelay().then(() => {
        try {
            const foundCampaign = CampaignService.fetch(params.campaignKey)
            return {campaign: foundCampaign}
        } catch (e) {
            error(404, e)
        }
    })
}