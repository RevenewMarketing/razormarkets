const accountCards = [
  {
    name: "Razor Edge",
    type: "Zero Spread Account",
    platform: "MT 5",
    markets: "Forex, Metals, Energies, Indices",
    minDeposit: "R100",
    spreads: "from 0 pips",
    bonus: "No",
    swapFees: "Yes",
    leverage: "1:500",
    miniTradeSize: "0.01",
    stopOut: "30%",
    accountBaseCurrencies: ["USD", "ZAR"],
    withdrawals: "Instant",
    orderExecution: "Market Execution",
    buttonText: "Sign Up",
    buttonLink: "https://crm.razormarkets.co.za/register/",
    icon: "../assets/accountTypes/account-edge.svg",
    order: 2,
  },
  {
    name: "Razor Spark",
    type: "Micro Account",
    platform: "MT 5",
    markets: "Forex, Metals, Energies, Indices",
    minDeposit: "R50",
    spreads: "from 1 pip",
    bonus: "No",
    swapFees: "Yes",
    leverage: "1:500",
    miniTradeSize: "0.01",
    stopOut: "30%",
    accountBaseCurrencies: ["USD", "ZAR"],
    withdrawals: "Instant",
    orderExecution: "Market Execution",
    buttonText: "Sign Up",
    buttonLink: "https://crm.razormarkets.co.za/register/",
    icon: "../assets/accountTypes/account-spark.svg",
    order: 3,
  },
  {
    name: "Razor Classic",
    type: "Standard Account",
    platform: "MT 5",
    markets: "Forex, Metals, Energies, Indices",
    minDeposit: "R100",
    spreads: "from 1 pip",
    bonus: "No",
    swapFees: "Yes",
    leverage: "1:500",
    miniTradeSize: "0.01",
    stopOut: "30%",
    accountBaseCurrencies: ["USD", "ZAR"],
    withdrawals: "Instant",
    orderExecution: "Market Execution",
    buttonText: "Sign Up",
    buttonLink: "https://crm.razormarkets.co.za/register/",
    icon: "../assets/accountTypes/account-classic.svg",
    order: 4,
  },
  {
    name: "Razor Surge",
    type: "100% Bonus Account",
    platform: "MT 5",
    markets: "Forex, Metals, Indices",
    minDeposit: "R100",
    spreads: "from 1 pip",
    bonus: "Yes",
    swapFees: "Yes",
    leverage: "1:500",
    miniTradeSize: "0.01",
    stopOut: "30%",
    accountBaseCurrencies: ["USD", "ZAR"],
    withdrawals: "Instant",
    orderExecution: "Market Execution",
    buttonText: "Sign Up",
    buttonLink: "https://crm.razormarkets.co.za/register/",
    icon: "../assets/accountTypes/account-surge.svg",
    order: 1,
  }
];

//=============== DO NOT EDIT BELOW THIS LINE ===============

const container = document.getElementById("accountCardsContainer");

// Sort the accountCards array by the order property
accountCards.sort((a, b) => a.order - b.order);

accountCards.forEach(card => {
  const cardHTML = `
    <div class="card-bg" id="card-bg">
      <div class="feature-card-account-types">
        <div class="feature-card-header" >
          <img src=${card.icon} alt="account type icon" />
          <div class="headers">
            <h2>${card.name}</h2>
            <h3>${card.type}</h3>
          </div>
        </div>
        <div class="card-account-contents">
          <p><strong>Platform:</strong> <span>${card.platform}</span></p>
          <p><strong>Markets:</strong> <span>${card.markets}</span></p>
          <p><strong>Min Deposit:</strong> <span>${card.minDeposit}</span></p>
          <p><strong>Spreads:</strong> <span>${card.spreads}</span></p>
          <p><strong>Bonus:</strong> <span>${card.bonus}</span></p>
          <p><strong>Swap Fees:</strong> <span>${card.swapFees}</span></p>
          <p><strong>Leverage:</strong> <span>${card.leverage}</span></p>
          <p><strong>Min Trade Size:</strong> <span>${card.miniTradeSize}</span></p>
          <p><strong>Stop Out:</strong> <span>${card.stopOut}</span></p>
          <p><strong>Base Currencies:</strong> <span>${card.accountBaseCurrencies.join(", ")}</span></p>
          <p><strong>Withdrawals:</strong> <span>${card.withdrawals}</span></p>
          <p><strong>Order Execution:</strong> <span>${card.orderExecution}</span></p>
        </div>
        <a href=${card.buttonLink} target="_blank"> <button class="button is-info signup">${card.buttonText}</button></a>
      </div>
    </div>
  `;


  container.innerHTML += cardHTML;
});
