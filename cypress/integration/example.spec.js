
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('user interactions', ()=>{   
        it('message is displayed after button is clicked', ()=>{
            cy.get('#button').click();
            cy.get('#message').should('be.visible');
        });
    });
});