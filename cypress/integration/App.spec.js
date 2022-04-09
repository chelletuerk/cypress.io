describe('Create react app home', () => {
  beforeEach(() => {
    cy.request({
      url: 'http://localhost:3000',
      failOnStatusCode: false,
    }).then((response) => {
      if (response.isOkStatusCode) {
        cy.visit('http://localhost:3000')
      } else {
        cy.visit('http://localhost:3000')
      }
    })
  })
  it('renders learn the title Water Bucket', () => {
    cy.contains('Water Bucket')
  })

  it('has a button', () => {
    cy.contains('Calculate')
    .parent()
    .find('button')
  })
})

describe('Input 1', () => {
  beforeEach(() => {
    cy.request({
      url: 'http://localhost:3000',
      failOnStatusCode: false,
    }).then((response) => {
      if (response.isOkStatusCode) {
        cy.visit('http://localhost:3000')
      } else {
        cy.visit('http://localhost:3000')
      }
    })
  })

  it('should be empty on load', () => {
    cy.get('#input1.inputX').should('have.value', '')
    //need to change the targeted element to attr - best practices
  })

  it('should have a value', () => {
    const newItem = '5'
    cy.get('#input1.inputX').type(`${newItem}{enter}`)
    cy.get('#input1.inputX')
    //need to change the targeted element to attr - best practices
      .should('have.length', 1)
      .last()
  })
})

describe('Input 2', () => {
  beforeEach(() => {
    cy.request({
      url: 'http://localhost:3000',
      failOnStatusCode: false,
    }).then((response) => {
      if (response.isOkStatusCode) {
        cy.visit('http://localhost:3000')
      } else {
        cy.visit('http://localhost:3000')
      }
    })
  })

  it('should be empty on load', () => {
    cy.get('#input2.inputX').should('have.value', '')
    //need to change the targeted element to attr - best practices
  })

  it('should have a value', () => {
    const newItem = '3'
    cy.get('#input2.inputX').type(`${newItem}{enter}`)
    cy.get('#input2.inputX')
    //need to change the targeted element to attr - best practices
      .should('have.length', 1)
      .last()
  })
})

describe('Button', () => {
  beforeEach(() => {
    cy.request({
      url: 'http://localhost:3000',
      failOnStatusCode: false,
    }).then((response) => {
      if (response.isOkStatusCode) {
        cy.visit('http://localhost:3000')
      } else {
        cy.visit('http://localhost:3000')
      }
    })
  })

  it('can click a button', () => {
    cy.contains('Calculate').click()
  })
})

describe('App behavior', () => {
  beforeEach(() => {
    cy.request({
      url: 'http://localhost:3000',
      failOnStatusCode: false,
    }).then((response) => {
      if (response.isOkStatusCode) {
        cy.visit('http://localhost:3000')
      } else {
        cy.visit('http://localhost:3000')
      }
    })
  })

  it('should have a value', () => {
    const newItem = '5'
    cy.get('#input1.inputX').type(`${newItem}{enter}`)
    cy.get('#input1.inputX')
    //need to change the targeted element to attr - best practices
      .should('have.length', 1)
      const newItem2 = '3'
      cy.get('#input2.inputX').type(`${newItem2}{enter}`)
      cy.get('#input2.inputX')
      //need to change the targeted element to attr - best practices
        .should('have.length', 1)
        .last()
      cy.contains('Calculate').click()
      .last()
  })
})
