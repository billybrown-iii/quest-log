// place files you want to import through the `$lib` alias in this folder.
import fakeData from './FakeDatabase/campaign-data.json';

const CampaignService = {};

CampaignService.fetch = (key) => {
    const campaign = fakeData.campaigns.find(x => x.key == key);
    if (!campaign) throw 'not found';

    return {
        campaign,
        // temp state: currently returns all
        quests: fakeData.quests,
        milestones: fakeData.milestones,
    }
}

export { CampaignService }