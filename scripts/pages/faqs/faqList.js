// faqList.js

const faqs = [
  {
      id: "verification-and-account-opening",
      category: "Verification and Account Opening",
      items: [
          {
              question: "What documents are required for verification at Razor Markets?",
              answer: `
                  <p>Proof of ID: A valid government-issued ID (e.g., passport, driver’s license).</p>
                  <p>Proof of Address: A recent utility bill or bank statement (no older than 3 months).</p>
                  <p>Payment Details: Razor Markets also requires your banking details or other preferred payment details, which need to be verified before withdrawals.</p>
              `
          },
          {
              question: "How do I upload my payment details for withdrawals?",
              answer: `
                  <p>Log in to your Razor Markets profile.</p>
                  <p>Click on the “FUNDS” tab.</p>
                  <p>Select “Payment Details.”</p>
                  <p>Follow the on-screen instructions to submit your banking or payment information.</p>
              `
          },
          {
              question: "How long does the verification process take?",
              answer: "Verification typically takes up to 24 hours, provided you have submitted all the required documents correctly and they meet the compliance requirements."
          },
          {
              question: "How do I open a live trading account?",
              answer: `
                  <p>Log in to your Razor Markets profile.</p>
                  <p>Click on the “Accounts” tab.</p>
                  <p>Select “Open Live Account.”</p>
                  <p>Choose your preferred account type (e.g., Razor Surge, Razor Spark, Razor Classic, Razor Edge).</p>
                  <p>Click “Continue” and follow the prompts to complete the process.</p>
              `
          },
          {
              question: "Can I open a Demo Account?",
              answer: "Yes. Razor Markets offers demo accounts on the MT5 platform, allowing you to practice trading strategies under real market conditions without risking real funds."
          },
          {
              question: "What are the different account types available?",
              answer: `
                  <p><b>Razor Surge (100% Bonus Account)</b></p>
                  <ul>
                      <li>Minimum Deposit: R100</li>
                      <li>Spreads from 1 pip</li>
                      <li>Bonus: Yes (100% on deposits)</li>
                      <li>Maximum Leverage: 1:500</li>
                      <li>Base Currencies: USD, ZAR</li>
                  </ul>
                  <p><b>Razor Spark (Micro Account)</b></p>
                  <ul>
                      <li>Minimum Deposit: R50</li>
                      <li>Spreads from 1 pip</li>
                      <li>Bonus: No</li>
                      <li>Maximum Leverage: 1:500</li>
                      <li>Base Currencies: USD, ZAR</li>
                  </ul>
                  <p><b>Razor Classic (Standard Account)</b></p>
                  <ul>
                      <li>Minimum Deposit: R100</li>
                      <li>Spreads from 1 pip</li>
                      <li>Bonus: No</li>
                      <li>Maximum Leverage: 1:500</li>
                      <li>Base Currencies: USD, ZAR</li>
                  </ul>
                  <p><b>Razor Edge (Zero Spread Account)</b></p>
                  <ul>
                      <li>Minimum Deposit: R100</li>
                      <li>Spreads from 0 pips</li>
                      <li>Bonus: No</li>
                      <li>Maximum Leverage: 1:500</li>
                      <li>Base Currencies: USD, ZAR</li>
                  </ul>
                  <p>All accounts offer trading in Forex, Metals, Indices, and (for some) Energies on the MT5 platform, with a 30% stop-out level. Swap fees are applicable, and withdrawals are processed instantly once approved.</p>
              `
          },
          {
              question: "How can I change the leverage on my account?",
              answer: `
                  <p>Log into your Razor Markets dashboard.</p>
                  <p>Go to “Accounts Overview.”</p>
                  <p>Select the account you wish to change.</p>
                  <p>Click on “Request New Leverage.”</p>
                  <p>Follow the on-screen prompts to submit your leverage change request.</p>
              `
          },
          {
              question: "Are there any country restrictions?",
              answer: "Yes. Razor Markets does not offer services to the United States or any other jurisdiction where such distribution or use would be contrary to local law or regulation. Services are primarily available to clients in South Africa, Kenya, Namibia, Nigeria, Botswana, Zimbabwe, Mozambique, Uganda, Tanzania, and other permitted jurisdictions."
          },
          {
              question: "Are there limitations on how many account types I can open?",
              answer: "Yes. Each client can only open one (1) account for each available account type. For example, you may have one Razor Surge account and one Razor Edge account, but not two separate Razor Surge accounts"
          },
          {
              question: "When is my account disabled for inactivity?",
              answer: "Your account will be disabled if there is no trading or transaction activity for 3 months. To reactivate a disabled account, please contact Razor Markets’ support team."
          }
      ]
  },
  {
      id: "deposits-and-withdrawals-queries",
      category: "Deposits and Withdrawals Queries",
      items: [
          {
              question: "What payment methods are accepted for deposits?",
              answer: `
                  <p>Bank Cards: Visa, MasterCard</p>
                  <p>Instant EFT: Ozow (including Capitec Pay)</p>
                  <p>Mobile Wallets: Airtel, Orange, Mpesa, MTN Mobile Money, Bank Transfer, Tigo Pesa, Vodacom</p>
                  <p>Other: Apple Pay, Samsung Pay</p>
                  <p>Crypto : such as BTC, Eth, XRP, ADA, USDT and many more</p>
              `
          },
          {
              question: "What methods are available for withdrawals?",
              answer: `
                  <p>Crypto : such as BTC, Eth, XRP, ADA, USDT and many more</p>
                  <p>Bank Wire (transfers to your local or international bank account)</p>
                  <p>Mobile Money : Airtel, Orange, Mpesa, MTN Mobile Money, Bank Transfer, Tigo Pesa, Vodacom</p>
              `
          },
          {
              question: "Is there a minimum deposit for each account?",
              answer: `
                  <p>Razor Surge: R100</p>
                  <p>Razor Spark (Micro Account): R50</p>
                  <p>Razor Classic (Standard Account): R100</p>
                  <p>Razor Edge (Zero Spread Account): R100</p>
              `
          },
          {
              question: "How do I make a deposit?",
              answer: `
                  <p>Log into your Razor Markets Dashboard.</p>
                  <p>Click on the “FUNDS” tab.</p>
                  <p>Select “Deposit Funds.”</p>
                  <p>Select the account you wish to deposit into.</p>
                  <p>Choose your preferred deposit method.</p>
                  <p>Follow the on-screen prompts to complete the process.</p>
              `
          },
          {
              question: "How long will it take for the deposit to reflect?",
              answer: "Deposits are allocated instantly and automatically to the selected trading account, provided that your payment is successful and verified."
          },
          {
              question: "Does Razor Markets allow third-party deposits?",
              answer: "No. Razor Markets does not allow deposits from anyone other than the verified account holder. All payment methods must be in the client’s own name."
          },
          {
              question: "How do withdrawals work when deposits are made from multiple payment methods?",
              answer: "If you have used multiple deposit methods (e.g., card and mobile money), the total amount you initially deposited must be returned to the same methods in proportion to the original deposits. For example, if you deposited via credit card, the equivalent amount of your withdrawal must first be processed back to that card. Once that is done, you can withdraw any remaining funds via a different available withdrawal method."
          },
          {
              question: "How long do withdrawals take to reflect?",
              answer: `Razor Markets processes withdrawal requests instantly once they have been approved. The actual time for funds to reach your bank or payment provider may vary depending on processing times on the provider’s end.
                  <br>Note: During public holidays and over weekends, there may be operational delays.
              `
          },
          {
              question: "Are there any fees for deposits or withdrawals?",
              answer: "Razor Markets does not charge direct fees for most payment methods."
          },
          {
              question: "Why might my withdrawal be delayed or rejected?",
              answer: `
                  <p>Incomplete Verification: Ensure you have fully verified your account (ID, proof of address, and verified payment method).</p>
                  <p>Incorrect Payment Details: Double-check your banking or mobile wallet details.</p>
                  <p>Pending Requirements: Occasionally, extra documentation or compliance checks may be required.</p>
              `
          }
      ]
  },
  {
      id: "client-support-queries",
      category: "Client Support Queries",
      items: [
          {
              question: "How can I contact Razor Markets’ support team?",
              answer: `
                  <p>Email: Use the dedicated support email address : <a href="mailto:support@razormarkets.com">support@razormarkets.com</a></p>
              `
          },
          {
              question: "What are the support hours?",
              answer: "Razor Markets typically provides support during standard market hours (24/5 for trading-related queries). Email supports are often available beyond normal business hours, but response times may vary."
          },
          {
              question: "How do I lodge a complaint?",
              answer: "If you have concerns or issues that are not resolved via normal support channels, you can escalate by sending a formal complaint to Razor Markets’ support department. Contact details for complaints can usually be found in the Client Agreement or on the website’s Contact Us section."
          },
          {
              question: "Do you trade on behalf of clients or provide trading signals?",
              answer: "No. Razor Markets does not trade on behalf of clients, nor do we offer any trading signals. Clients are fully responsible for placing their own trades, managing their accounts, and making their own trading decisions."
          }
      ]
  },
  {
      id: "technical-queries",
      category: "Technical Queries",
      items: [
          {
              question: "What trading platform does Razor Markets offer?",
              answer: "Razor Markets offers MetaTrader 5 (MT5), a popular multi-asset platform suitable for trading Forex, Metals, Indices, and Energies."
          },
          {
              question: "How do I recover my MT5 password or login details?",
              answer: `
                  <p>Log in to your Razor Markets client portal.</p>
                  <p>Go to the “Accounts” section to view your MT5 account details.</p>
                  <p>Select “Reset Password” or “Recover Login.”</p>
                  <p>An email with reset instructions or new login credentials will be sent to your registered email address.</p>
              `
          },
          {
              question: "What instruments can I trade on MT5 with Razor Markets?",
              answer: `
                  <p>Forex (major, minor, and exotic currency pairs)</p>
                  <p>Metals (e.g., Gold, Silver)</p>
                  <p>Indices (major global indices)</p>
                  <p>Energies (e.g., Crude Oil, Natural Gas)</p>
              `
          },
          {
              question: "How do I install the MT5 platform?",
              answer: `
                  <p>Download MT5 from the Razor Markets website, iOS or Android app store or from the official MetaTrader website.</p>
                  <p>Run the installer on your desktop or mobile device.</p>
                  <p>Enter your login credentials (MT5 login credential and password) provided in your Razor Markets account area and on email once you open the account.</p>
              `
          },
          {
              question: "Why am I getting a “No Connection” error on MT5?",
              answer: `
                  <p>Internet Connectivity: Check your internet connection.</p>
                  <p>Incorrect Server Selection: Ensure you’ve selected the correct server in the MT5 login screen.</p>
                  <p>Maintenance/Downtime: There might be scheduled server maintenance. Check Razor Markets’ announcements for updates.</p>
              `
          }
      ]
  },
  {
      id: "general-queries",
      category: "General Queries",
      items: [
          {
              question: "Is Razor Markets licensed and regulated?",
              answer: "Yes. Razor Markets (Pty) Ltd (registration number 2024/605719/07) is a duly appointed Juristic Representative of Sithundhi Group (Pty) Ltd, regulated by the Financial Sector Conduct Authority (FSCA) under FSP No. 52030. The CFDs offered on the Razor Markets platform are issued by RocketX (Pty) Ltd, also licensed by the FSCA (license number 52142)."
          },
          {
              question: "Does Razor Markets offer trading bonuses?",
              answer: "Razor Surge Account offers a 100% deposit bonus. Other account types (Spark, Classic, Edge) do not offer deposit bonuses."
          },
          {
              question: "What are the trading hours for Forex?",
              answer: "Forex markets are generally open 24 hours a day, 5 days a week (Monday to Friday). Specific markets such as Metals, Indices, and Energies follow relevant exchange hours. You can find detailed session times in the MT5 platform."
          },
          {
              question: "What is the stop-out level on Razor Markets accounts?",
              answer: "All Razor Markets accounts have a 30% stop-out level, meaning your positions may be closed automatically once your equity falls to 30% of the required margin."
          },
          {
              question: "Is Scalping allowed on Razor Markets’ platform?",
              answer: "No, Scalping is prohibited as per the Terms and Conditions."
          },
          {
              question: "Does Razor Markets provide educational resources?",
              answer: "Yes. Razor Markets offers free resources such as educational resources, eBooks, trading guides, trading glossaries, Blogs etc. Visit the Knowledge Hub section of the website or the client portal for more information."
          }
      ]
  },
  {
      id: "partners",
      category: "Partners",
      items: [
          {
              question: "What is an Introducing Broker (IB)?",
              answer: "An Introducing Broker (IB) is an individual or company that refers clients to Razor Markets. In return, the IB receives a commission or rebate based on the trading activity of the referred clients."
          },
          {
              question: "How do I become an Introducing Broker?",
              answer: `
                  <p>Partnerships page – Go to our partners page</p>
                  <p>Complete the IB partner registration – Fill out the partnership’s form.</p>
                  <p>Sign the IB Agreement – Once approved, you will receive a formal Introducing Broker Agreement outlining the terms and conditions.</p>
                  <p>Receive Referral Links & Marketing Materials – After your account is set up, you will get unique links or codes for tracking your referrals.</p>
                  <p>Start Referring Clients – Direct prospective traders to Razor Markets using your personalized referral link.</p>
                  <p>Earn Commissions – Commissions or rebates will be credited to your IB account based on the referred clients’ trading volumes and activity.</p>
              `
          },
          {
              question: "What are the benefits of being an IB?",
              answer: `
                  <p>Competitive Rebates/Commission Structure – Earn commissions based on the trading activity of your referrals.</p>
                  <p>Dedicated Support – Access to a dedicated IB support team for assistance.</p>
                  <p>Real-Time Tracking – Monitor referred clients, track performance, and manage payouts in real time.</p>
                  <p>Marketing Tools – Get promotional materials, webinars, and other resources to assist in client acquisition.</p>
              `
          }
      ]
  }
];