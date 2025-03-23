function getFormvalue() {
    //Write your code here
	describe('Form Submission Test', () => {
    it('should allow a user to input their first and last name and submit the form', () => {
        cy.visit('http://localhost:3000'); // Change to your actual test URL

        // Fill in the form fields
        cy.get('input[name="fname"]').should('be.visible').type('John');
        cy.get('input[name="lname"]').should('be.visible').type('Doe');

        // Submit the form
        cy.get('button[type="submit"]').should('be.visible').click();

        // Verify the alert message
        cy.on('window:alert', (str) => {
            expect(str).to.equal('John Doe');
        });
    });

    it('should allow a user to input a middle name and submit the form', () => {
        cy.visit('http://localhost:3000'); // Change to your actual test URL

        // Fill in the form fields
        cy.get('input[name="fname"]').should('be.visible').type('John');
        cy.get('input[name="lname"]').should('be.visible').type('Mark Doe');

        // Submit the form
        cy.get('button[type="submit"]').should('be.visible').click();

        // Verify the alert message
        cy.on('window:alert', (str) => {
            expect(str).to.equal('John Mark Doe');
        });
    });

    it('should display an error if the fields are empty', () => {
        cy.visit('http://localhost:3000'); // Change to your actual test URL

        // Submit the form without filling anything
        cy.get('button[type="submit"]').should('be.visible').click();

        // Verify the alert message
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please enter both first and last names.');
        });
    });

    it('should handle extra spaces correctly', () => {
        cy.visit('http://localhost:3000'); // Change to your actual test URL

        // Fill in the form fields with extra spaces
        cy.get('input[name="fname"]').should('be.visible').type('  John  ');
        cy.get('input[name="lname"]').should('be.visible').type('  Doe  ');

        // Submit the form
        cy.get('button[type="submit"]').should('be.visible').click();

        // Verify the alert message (trimming should happen)
        cy.on('window:alert', (str) => {
            expect(str).to.equal('John Doe');
        });
    });

    it('should handle special characters correctly', () => {
        cy.visit('http://localhost:3000'); // Change to your actual test URL

        // Fill in the form fields with special characters
        cy.get('input[name="fname"]').should('be.visible').type("Anne-Marie");
        cy.get('input[name="lname"]').should('be.visible').type("O'Connor");

        // Submit the form
        cy.get('button[type="submit"]').should('be.visible').click();

        // Verify the alert message
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Anne-Marie O'Connor");
        });
    });
});


}
