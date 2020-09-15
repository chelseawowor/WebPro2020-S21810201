//Exercise 2

//1.
let account = {
    name: "Chelsea",
    expenses: [],
};
console.log(account);
//2.

function addExpenses(description,amount)
{
    return account.expenses.push(amount);
}

//3.
function getAccountSummary()
{
    let totalExpenses = 0;
    let jmlFunction = function (a, b)
    {
      return a + b;
    }
    account.expenses.forEach(function(expenses) {
        totalExpenses = jmlFunction(totalExpenses,expenses);
    });

    return console.log("Total Pengeluaran " + account.name + " adalah Rp." + totalExpenses);
}

//4.
addExpenses("Beli Kuota",50000);
addExpenses("Beli Makanan",35000);
addExpenses("Beli Baju",150000);
addExpenses("Bayar pulsa listrik",140000);
getAccountSummary();
