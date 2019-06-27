const { Given, When, Then } = require('cucumber');
const { Selector: NativeSelector } = require('testcafe');

const Selector = (input, t) => NativeSelector(input).with({ boundTestRun: t });

Given("I am on the dashboard", async t => {
    await t.navigateTo('http://localhost:3000/');
});

When(/^I search for \"(.*)\"$/, async (t, [searchTerm]) => {
    await t.typeText('.search__input .input-wrapper__input', searchTerm);
    await t.click('button.search__button'); 
});

Then('I should see a list of results', async t => {
    const searchResults = Selector('.search__result', t);
    await t.expect(searchResults.count).eql(3);
});

Then(/^I should see a message saying \"(.*)\"$/, async (t, [expectedText]) => {
    const emptyResultsMessage = Selector('.--no-results', t);
    await t.expect(emptyResultsMessage.innerText).contains(expectedText);
});

Given('when I click on the message', async t => {
    await t.click('.search__result.--no-results');
});

Then('the results list disappears', async t => {
    await t.expect(Selector('.search__results.--no-results',t).count).eql(0);
});