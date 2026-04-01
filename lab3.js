/**
 * @param {transactions[]} transactions 
 */
const transactions = 
  [
    {
      transaction_id: "1",
      transaction_date: "2019-01-01",
      transaction_amount: 100.0,
      transaction_type: "debit",
      transaction_description: "Payment for groceries",
      merchant_name: "SuperMart",
      card_type: "Visa",
    },
    {
      transaction_id: "2",
      transaction_date: "2019-01-02",
      transaction_amount: 50.0,
      transaction_type: "credit",
      transaction_description: "Refund for returned item",
      merchant_name: "OnlineShop",
      card_type: "MasterCard",
    },
    {
      transaction_id: "3",
      transaction_date: "2019-01-03",
      transaction_amount: 75.0,
      transaction_type: "debit",
      transaction_description: "Dinner with friends",
      merchant_name: "RestaurantABC",
      card_type: "Amex",
    }
]

/**1
 * Возвращает массив уникальных типов транзакций.
 * @param {Transaction[]} transactions
 * @returns {string[]}
 */
function getUniqueTransactionTypes(transactions) {
    return  [...new Set(transactions.map (t => t.transaction_type))];
}

//2. сумма всех транзакций
/** 
 * Вычисляет общую сумму всех транзакций.
 * @param {Transaction[]} transactions
 * @returns {number}
 */
function calculateTotalAmount(transactions){
    return transactions.reduce((sum, t) => sum + t.transaction_amount, 0);
}
//4. возврат транзакции определенного типа
/** 
 * Возвращает транзакции указанного типа.
 * @param {Transaction[]} transactions
 * @param {string} type
 * @returns {Transaction[]}
 */
function getTransactionByType(transactions, type){
    return transactions.filter (t => t.transaction_type ===type);
}
//5. транзакции в диапозоне дат
/** 
 * Возвращает транзакции в указанном диапазоне дат.
 * @param {Transaction[]} transactions
 * @param {string} startDate
 * @param {string} endDate
 * @returns {Transaction[]}
 */
function getTransactionsInDateRange(transactions, startDate, endDate) {
  return transactions.filter(t => {
    const date = new Date(t.transaction_date);
    return date >= new Date(startDate) && date <= new Date(endDate);
  });
}

// 6 
/** 
 * Возвращает транзакции по названию магазина.
 * @param {Transaction[]} transactions
 * @param {string} merchantName
 * @returns {Transaction[]}
 */
function getTransactionsByMerchant(transactions, merchantName) {
  return transactions.filter(t => t.merchant_name === merchantName);
}

// 7
/** 
 * Возвращает среднее значение транзакций.
 * @param {Transaction[]} transactions
 * @returns {number}
 */
function calculateAverageTransactionAmount(transactions) {
  if (transactions.length === 0) return 0;
  return calculateTotalAmount(transactions) / transactions.length;
}

// 8
/** 
 * Возвращает транзакции в заданном диапазоне сумм.
 * @param {Transaction[]} transactions
 * @param {number} minAmount
 * @param {number} maxAmount
 * @returns {Transaction[]}
 */
function getTransactionsByAmountRange(transactions, min, max) {
  return transactions.filter(t =>
    t.transaction_amount >= min && t.transaction_amount <= max
  );
}

// 9
/** 
 * Вычисляет общую сумму дебетовых транзакций.
 * @param {Transaction[]} transactions
 * @returns {number}
 */
function calculateTotalDebitAmount(transactions) {
  return transactions
    .filter(t => t.transaction_type === "debit")
    .reduce((sum, t) => sum + t.transaction_amount, 0);
}

// 10
/** 
 * Возвращает месяц, в котором было больше всего транзакций.
 * @param {Transaction[]} transactions
 * @returns {string}
 */
function findMostTransactionsMonth(transactions) {
  const counts = {};

  transactions.forEach(t => {
    const month = new Date(t.transaction_date).getMonth() + 1;
    counts[month] = (counts[month] || 0) + 1;
  });

  return Object.keys(counts).reduce((a, b) =>
    counts[a] > counts[b] ? a : b
  );
}

// 11
/** 
 * Возвращает месяц, в котором было больше дебетовых транзакций.
 * @param {Transaction[]} transactions
 * @returns {string}
 */
function findMostDebitTransactionMonth(transactions) {
  const counts = {};

  transactions
    .filter(t => t.transaction_type === "debit")
    .forEach(t => {
      const month = new Date(t.transaction_date).getMonth() + 1;
      counts[month] = (counts[month] || 0) + 1;
    });

  return Object.keys(counts).reduce((a, b) =>
    counts[a] > counts[b] ? a : b
  );
}

// 12
/** 
 * Возвращает тип транзакций, которых больше всего.
 * @param {Transaction[]} transactions
 * @returns {string}
 */
function mostTransactionTypes(transactions) {
  let debit = 0, credit = 0;

  transactions.forEach(t => {
    if (t.transaction_type === "debit") debit++;
    else if (t.transaction_type === "credit") credit++;
  });

  if (debit > credit) return "debit";
  if (credit > debit) return "credit";
  return "equal";
}

// 13
/** 
 * Возвращает транзакции до указанной даты.
 * @param {Transaction[]} transactions
 * @param {string} date
 * @returns {Transaction[]}
 */
function getTransactionsBeforeDate(transactions, date) {
  return transactions.filter(t =>
    new Date(t.transaction_date) < new Date(date)
  );
}

// 14
/** 
 * Возвращает транзакцию по ее ID.
 * @param {Transaction[]} transactions
 * @param {string} id
 * @returns {Transaction|undefined}
 */
function findTransactionById(transactions, id) {
  return transactions.find(t => t.transaction_id === id);
}

// 15
/**
 * Возвращает новый массив, содержащий только описания транзакций.
 * @param {Transaction[]} transactions
 * @returns {string[]}
 */
function mapTransactionDescriptions(transactions) {
  return transactions.map(t => t.transaction_description);
}
console.log("Уникальные типы:", getUniqueTransactionTypes(transactions));

console.log("Общая сумма:", calculateTotalAmount(transactions));

console.log("Debit транзакции:",getTransactionByType(transactions, "debit"));

console.log("Диапазон дат:",getTransactionsInDateRange(transactions, "2024-03-01", "2024-03-31"));

console.log("По магазину Zara:",getTransactionsByMerchant(transactions, "Zara"));

console.log("Среднее:",calculateAverageTransactionAmount(transactions));

console.log("Диапазон суммы:",getTransactionsByAmountRange(transactions, 100, 300));

console.log("Сумма debit:",calculateTotalDebitAmount(transactions));

console.log("Самый активный месяц:",findMostTransactionsMonth(transactions));

console.log("Самый debit месяц:",findMostDebitTransactionMonth(transactions));

console.log("Каких больше:",mostTransactionTypes(transactions));

console.log("До даты:",getTransactionsBeforeDate(transactions, "2024-04-01"));

console.log("По ID:",findTransactionById(transactions, "2"));

console.log("Описания:",mapTransactionDescriptions(transactions));

// [extra]
console.log("Пустой массив (сумма):", calculateTotalAmount([]));
console.log("Одна транзакция (среднее):", calculateAverageTransactionAmount([transactions[0]]));