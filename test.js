import {
    Selector, t
} from 'testcafe'; // first import testcafe selectors

fixture `Test IndexedDB` // declare the fixture
    .page `http://localhost:3000`; // specify the start page


//then create a test and place your code there
test('My first test', async t => {
    await t
        .click('#form-submit')
        .click('#form2-submit')
        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#number-of-items').innerText).eql('1');
});