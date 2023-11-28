const { income, expenses } = transactions.reduce(
        (acc, transaction) => {
            const amount = parseFloat(transaction.amount);

            if (amount >= 0) {
                acc.income += amount;
            } else {
                acc.expenses += amount;
            }

            return acc;
        },
        { income: 0, expenses: 0 }
    );

    return { income, expenses };
