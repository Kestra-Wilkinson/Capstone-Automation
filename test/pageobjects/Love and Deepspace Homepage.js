class LoveAndDeepspacePage {
    // Navigation items
    get characterNav() {
        return $('div.character.style_navItem__P6C4N'); // Adjust this selector based on actual HTML
    }

    get featureNav() {
        return $('div.feature.style_navItem__P6C4N'); // Adjust this selector based on actual HTML
    }

    get galleryNav() {
        return $('div.gallery.style_navItem__P6C4N'); // Adjust this selector based on actual HTML
    }

    get newsNav() {
        return $('div.news.style_navItem__P6C4N'); // Adjust this selector based on actual HTML
    }
    // Open homepage
    async open() {
        await browser.url('https://loveanddeepspace.infoldgames.com/en-EN/home#0');
    }
    // Navigation actions
    async clickCharacterNav() {
        await this.characterNav.click();
    }

    async clickFeatureNav() {
        await this.featureNav.click();
    }
    async clickGalleryNav() {
        await this.galleryNav.click();
    }
    async clickNewsNav() {
        await this.newsNav.click();
    }
}

export default new LoveAndDeepspacePage();