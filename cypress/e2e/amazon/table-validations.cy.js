///<reference types = "cypress"/>

describe('basics1', () => {

    it('test basics', () => {
        cy.visit('https://en.wikipedia.org/wiki/List_of_current_Indian_chief_ministers')

        //Header Row
        cy.get('table.wikitable > thead > tr').should('have.length','1')
        
        //Header columns in a Row
        cy.get('table.wikitable > thead > tr:first-child th').should('have.length','8')

        // cy.get('table.wikitable > thead > tr:first-child th').within( (ele)=> {
        //     cy.log(ele.text())
        // })

        cy.get('table.wikitable > thead > tr:first-child th').each( ($ele, index, $eledata)=> {
            cy.log("index column is: "+index+" : "+$ele.text())
        })

        //All Rows
        cy.get('table.wikitable > tbody > tr').should('have.length','31')
    

    //How to get Single Row Data://
    cy.get('table.wikitable > tbody > tr:first-child')
      .each(($ele1, index, $ele1list) => {
        cy.log($ele1.text())
      })


      //How to validate Single cell Data://
    cy.get('table.wikitable > tbody > tr > th').eq(0)
      .contains('Y. S. Jagan Mohan Reddy')
      .should('contain.text','Y. S. Jagan Mohan Reddy')

    cy.get('table.wikitable > tbody > tr > th')
      .contains('Y. S. Jagan Mohan Reddy')

      //Validate data based on cell value
      cy.get('table.wikitable > tbody > tr > th')
      .contains('Kalvakuntla Chandrasekhar Rao')     


      

    })

})
