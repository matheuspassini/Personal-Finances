# Personal Finance Tracker

## Overview

The **Personal Finance Tracker** is a simple web application designed to help users manage their personal finances. With this tool, users can keep track of their bank balance and view transaction history. It provides a user-friendly interface for seamless financial management.

## Features

1. **Bank Balance**
   - Easily check your current bank balance at a glance. The balance is updated in real-time, ensuring accuracy and providing a quick overview of your financial situation.

2. **Transaction History**
   - Review your recent transactions to stay informed about your spending patterns. The transaction history is displayed in a clear and organized manner, making it easy to identify and categorize your expenses.

3. **Full Name and Savings Input**
   - Customize your experience by entering your full name for a personalized touch. Additionally, the application allows you to input the amount you want to save, making it easy to tailor your savings goals based on your financial aspirations.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Web browser with JavaScript enabled

### Installation process and running

 1. Create a new directory:

    ```bash
    mkdir personal-finance
    ```

 2. Clone the repository:

    ```bash
    git clone https://github.com/matheuspassini/Personal-Finances.git
    ```

  3. Navigate to the project directory:

      ```bash
      cd personal-finance
      ```

  4. Install dependencies:

      ```bash
      npm install
      ```
  5. Run the json-server. This will simulate a backend environment, hosted in the port 3000

      ```bash
      npm run json-server
      ```
      
  6. Open the html file

## Dependencies

Main dependencies and their versions in the `package.json` file.

```json
{
  "name": "personalfinance",
  "version": "1.0.0",
  "description": "Web pplication that uses html, css e javascript for personal finance control",
  "main": "index.js",
  "scripts": {
    "json-server": "json-server --watch db.json"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "json-server": "^0.17.4"
  }
}
```

## Usage

1. Upon opening the application, enter your full name for a personalized experience.
2. View your current bank balance on the main dashboard.
3. Navigate to the "Transaction History" tab to see a detailed list of your recent transactions.
4. Track your progress towards your savings goal over time.

## Contributing

Contributions are welcome! If you have any ideas, improvements, or bug fixes, please open an issue or submit a pull request.
