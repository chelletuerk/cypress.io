describe('WaterBucket home', () => {
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

  it('renders the title Water Bucket', () => {
    cy.contains('Water Bucket')
  })

  it('has a button', () => {
    cy.contains('Calculate')
    .parent()
    .find('button')
  })

  it('h3 tag should not have text', () => {
    cy.get('h3')
    .should('not.have.text')
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

  it('can take an integer value', () => {
    const inputText = '2'
    cy.get('#input1.inputX').type(`${inputText}{enter}`)
    cy.get('#input1.inputX').should('have.length', 1)
    //need to change the targeted element to attr - best practices
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

  it('can take an integer value', () => {
    const inputText = '1'
    cy.get('#input2.inputX').type(`${inputText}{enter}`)
    cy.get('#input2.inputX').should('have.length', 1)
    //need to change the targeted element to attr - best practices
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

  it('can calculate inputs on submit and render h3 text', () => {
    const inputText = '5'
    cy.get('#input1.inputX').type(`${inputText}{enter}`)
    cy.get('#input1.inputX').should('have.length', 1)
    //need to change the targeted element to attr - best practices
    const inputText2 = '3'
    cy.get('#input2.inputX').type(`${inputText2}{enter}`)
    cy.get('#input2.inputX').should('have.length', 1)
    //need to change the targeted element to attr - best practices
    cy.contains('Calculate').click().wait(500)
    cy.get('h3').should('have.text', 'Measured Amount: 4')
    .last()
  })
})
