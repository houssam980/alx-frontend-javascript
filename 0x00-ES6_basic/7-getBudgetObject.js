export default function getBudgetObject(income, gdp, capita) {
    const budget = {
      income,gdp,
      capita: capita,
    };
  
    return budget;
  }
