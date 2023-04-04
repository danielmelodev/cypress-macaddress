///<reference types='cypress'/>
describe('Validando Mac Address', () => {
    beforeEach(() => {
        cy.visit('https://macaddress.io/')
    })
   
    it.only('Mac Address Válido', () => {
        
        cy.fixture('dados.json').then((dados) => {
            cy.get('input[name="mac-address-value"]').type(dados.deleteMac.macAdress)
            cy.get('input[type="submit"]')
                .should('be.visible')
                .click()
        })

    })
})