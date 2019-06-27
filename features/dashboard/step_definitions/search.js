const { Given, When, Then } = require('cucumber');
const { Selector: NativeSelector } = require('testcafe');
const DashboardPage = require('../../../test/page-objects/search');

const Selector = (input, t) => NativeSelector(input).with({ boundTestRun: t });

Given("I am on the dashboard", async t => {
    await t.navigateTo('http://localhost:3000/');
});

When(/^I search for \"(.*)\"$/, async (t, [searchTerm]) => {
    await t.typeText(DashboardPage.searchInput, searchTerm);
    await t.click(DashboardPage.searchButton); 
});

Then('I should see a list of results', async t => {
    const searchResults = Selector(DashboardPage.searchResult, t);
    await t.expect(searchResults.count).gt(0);
});

Then(/^I should see a message saying \"(.*)\"$/, async (t, [expectedText]) => {
    const emptyResultsMessage = Selector(DashboardPage.emptyResults, t);
    await t.expect(emptyResultsMessage.innerText).contains(expectedText);
});

Given('when I click on the message', async t => {
    await t.click(DashboardPage.emptyResults);
});

Then('the results list disappears', async t => {
    await t.expect(Selector(DashboardPage.emptyResults).count).eql(0);
});