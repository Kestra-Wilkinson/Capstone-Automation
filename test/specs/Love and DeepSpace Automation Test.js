import LoveAndDeepspacePage from '../pageobjects/Love and Deepspace Homepage.js';

describe('Love and Deepspace Website Tests', () => {
beforeEach(async () => {
await LoveAndDeepspacePage.open();
 });

it('should navigate to Character section', async () => {
await LoveAndDeepspacePage.clickCharacterNav();
const characterSection = await $('div.character');
await expect(characterSection).toBeDisplayed();
});

it('should navigate to Feature section', async () => {
await LoveAndDeepspacePage.clickFeatureNav();
const featureSection = await $('div.feature');
await expect(featureSection).toBeDisplayed();
 });


it('should navigate to Gallery section', async () => {
await LoveAndDeepspacePage.clickGalleryNav();
const gallerySection = await $('div.gallery');
await expect(gallerySection).toBeDisplayed();
});

it('should navigate to News section', async () => {
await LoveAndDeepspacePage.clickNewsNav();
const newsSection = await $('div.news');
await expect(newsSection).toBeDisplayed();

});
});