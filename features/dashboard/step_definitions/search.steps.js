const { Given, When, Then } = require('cucumber');
const { Selector: NativeSelector } = require('testcafe');
const Search = require('../../page-objects/search');
const Dashboard = require('../../page-objects/dashboard');

const Selector = (input, t) => NativeSelector(input).with({ boundTestRun: t });

Given("I am on the dashboard", async t => {
    await t.navigateTo('http://localhost:3000/');
});

When(/^I search for \"(.*)\"$/, async (t, [searchTerm]) => {
    await t.typeText(Search.searchInput, searchTerm);
    await t.click(Search.searchButton); 
});

Then('I should see a list of results', async t => {
    const searchResults = Selector(Search.searchResult, t);
    await t.expect(searchResults.count).gt(0);
});

Then(/^I should see a message saying \"(.*)\"$/, async (t, [expectedText]) => {
    const emptyResultsMessage = Selector(Search.emptyResults, t);
    await t.expect(emptyResultsMessage.innerText).contains(expectedText);
});

Given('when I click on the message', async t => {
    await t.click(Search.emptyResults);
});

Then('the results list disappears', async t => {
    await t.expect(Selector(Search.emptyResults).count).eql(0);
});

Then('I should see a button to create a new party', async t => {
    const createNewPartyButton = Selector(Dashboard.createNewParty, t);
    await t.expect(createNewPartyButton.count).eql(1);
});