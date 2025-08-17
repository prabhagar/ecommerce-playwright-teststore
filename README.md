# ecommerce-playwright-teststore

**Playwright · TypeScript · POM · Allure Reporting**

This repository contains a robust, maintainable Playwright automation solution for an e-commerce demo site—built to demonstrate my skills.

---
What I Did for This Code Assessment

For this coding assessment, I designed and implemented a Playwright automation framework in TypeScript for an e-commerce flow. My key contributions include:

End-to-End Test Flow: Automated the customer journey — Search → Add to Cart → Checkout (stopping before payment).

Page Object Model (POM): Created a clean, modular structure (HomePage, ProductPage, CartPage, CheckoutPage) to ensure reusability and scalability.

Step-Based Reporting: Used test.step() for detailed, business-readable reporting in Allure, making it easy for stakeholders to understand each phase of the test.

Error-Resilient Utilities: Added reusable functions for reliable element handling and form filling.

Allure Integration: Configured Allure for rich reports with screenshots and step details, ensuring clarity in results.


⚙️ Configuration Files

The project includes several configuration files:

playwright.config.ts: Configures Playwright settings.

tsconfig.json: TypeScript configuration.

package.json: Manages project dependencies and scripts.


🧩 Project Structure

The repository follows the Page Object Model (POM) design pattern and includes:

tests/: Contains test specifications.

pages/: Houses page object models.

utils/: Provides shared utilities and test data.


🛠️ Prerequisites

Ensure you have the following installed:

Node.js (version 16 or higher)

npm (Node Package Manager)


📥 Clone the Repository

Open your terminal and run:

git clone https://github.com/prabhagar/ecommerce-playwright-teststore.git
cd ecommerce-playwright-teststore


📦 Install Dependencies

Run the following command to install the necessary packages:

npm install


🌐 Install Browsers

Playwright requires browser binaries for testing. Install them using:

npx playwright install


🧪 Run Tests

Execute the tests with:

npx playwright test or npm run test:ui


📊 Allure Reporting - To run test and generate report :(configured this in package.json - to run and generate report in a single command)

npm run test:allure


Why This Test Stands Out
    
POM Architecture	Organized pages for scalability and reusability

Custom Utilities	Built a reusable waitAndFill for robust element handling

Allure Integration	Step-by-step reporting with screenshots for clarity

