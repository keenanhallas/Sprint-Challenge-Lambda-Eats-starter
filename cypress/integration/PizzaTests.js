http://localhost:3000/pizza

describe("Testing the pizza ordering form", () => {
    it("Types a name into the name input", () => {
        cy.visit("http://localhost:3000/pizza")
        cy.get('#name')
            .type("K")
        cy.contains("Your name must be at least 2 characters.") 
        cy.get('#name')  
            .type("eenan Hallas")
            .should("have.value", "Keenan Hallas")
    })

    it("Tests topping check boxes", () => {
        cy.get('#pepperoni').check().should("have.checked", "true")
            .get('#sausage').check().should("have.checked", "true")
            .get('#mushroom').check().should("have.checked", "true")
            .get('#pineapple').check().should("have.checked", "true")
    })
})