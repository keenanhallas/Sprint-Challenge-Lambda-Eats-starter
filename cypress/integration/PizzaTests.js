http://localhost:3000/pizza

describe("Testing the pizza ordering form", () => {
    it("Clicks to the order form", () => {
        cy.visit("http://localhost:3000/")
        cy.pause()
        cy.get('[data-cy=pizza-form]').click()
    })
    
    it("Types a name into the name input", () => {
        cy.visit("http://localhost:3000/pizza")
        cy.pause()
        cy.get('#name')
            .type("K")
        cy.contains("Your name must be at least 2 characters.") 
        cy.get('#name')  
            .type("eenan Hallas")
            .should("have.value", "Keenan Hallas")
    })

    it("Selects a pizza size", () => {
        cy.pause()
        cy.get('#size').select("Medium")
    })

    it("Selects a sauce", () => {
        cy.pause()
        cy.get('#sauce').select("Red")
    })

    it("Tests topping check boxes", () => {
        cy.pause()
        cy.get('#pepperoni').check().should("have.checked", "true")
            .get('#sausage').check().should("have.checked", "true")
            .get('#mushroom').check().should("have.checked", "true")
            .get('#pineapple').check().should("have.checked", "true")
    })

    it("Types special instructions", () => {
        cy.get('#instructions').type("Please make the crust extra crispy. Thanks!")
    })

    it("Tests the 'Order Now!' button", () => {
        cy.pause()
        cy.get('[data-cy=order-now]').click()
        cy.get('#name').should("have.value", "")
    })
})