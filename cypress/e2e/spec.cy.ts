function generateTest(num: number) {
  it('Test ' + num.toString(), () => {
    cy.visit('http://localhost:4200')
  });
}

describe('Memory leak', () => {
  for (let i = 0; i < 1000; i++) {
    generateTest(i);
  }
})
