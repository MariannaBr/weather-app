context('default UI', () => {
  beforeEach(() => {
    cy.visit('https://mariannabr.github.io/weather-app/')
  })

  it('goes to right website', () => {
    cy.url().should('include', 'weather-app')
  })

  it('checks the labels of temperature', () => {
    cy.get('#root > div > div:nth-child(2) > div > div > label:nth-child(2) > span.MuiTypography-root.MuiFormControlLabel-label.MuiTypography-body1').should('have.text', 'Fahrenheit')
  })

  it('change the type of temperature', () => {
    cy.get('#root > div > div:nth-child(2) > div > div > label:nth-child(1) > span.MuiButtonBase-root.MuiIconButton-root.jss9.MuiRadio-root.jss6 > span > input')
      .click()

    cy.get('#root > div > div:nth-child(2) > div > div > label:nth-child(1) > span.MuiButtonBase-root.MuiIconButton-root.jss9.MuiRadio-root.jss6.jss10.Mui-checked > span > span')
      .should('have.class', 'jss8')
  })
})

context('mocking API', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40', {fixture: 'test_api.json'})
    cy.visit('https://mariannabr.github.io/weather-app/')
  })

  it('goes to right website', () => {
    cy.url().should('include', 'weather-app')
  })

  it('moves the cards', () => {
    cy.get('#root > div > div.MuiGrid-root.jss4.MuiGrid-container.MuiGrid-justify-xs-space-evenly > div:nth-child(2) > button > span > div > p.MuiTypography-root.jss16.MuiTypography-body1').then(($div) => {
      const text1 = $div.text()

    cy.get('#root > div > div.MuiGrid-root.jss3.MuiGrid-container.MuiGrid-justify-xs-space-around > button:nth-child(2)')
    .click()

    cy.get('#root > div > div.MuiGrid-root.jss4.MuiGrid-container.MuiGrid-justify-xs-space-evenly > div:nth-child(2) > button > span > div > p.MuiTypography-root.jss16.MuiTypography-body1').should(($text2) => {
      expect($text2.text()).not.to.eq(text1)
    })
    })
  })

  it ('shows the right graph', () => {
    cy.get('#root > div > div.MuiGrid-root.jss4.MuiGrid-container.MuiGrid-justify-xs-space-evenly > div:nth-child(2) > button > span > div > p.MuiTypography-root.jss16.MuiTypography-body1')
      .click()
    cy.get('#root > div > div.MuiGrid-root.jss4.MuiGrid-container.MuiGrid-justify-xs-space-evenly > div:nth-child(2) > button > span > div > p.MuiTypography-root.jss16.MuiTypography-body1').then(($div) => {
      const date = $div.text()

    cy.get('#SvgjsText1010').should(($date2) => {
      expect(date).include($date2.text())
    })
    })
  })
})