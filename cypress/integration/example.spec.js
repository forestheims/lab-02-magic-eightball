
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('user interactions', ()=>{   
        it('div containing message is displayed after button is clicked', ()=>{
            cy.get('#button').click();
            cy.get('#message-background').should('be.visible');
        });
    });
});