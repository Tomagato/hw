# Cypress.io Automation Framework

This repository is all about creating, running and verifying automated UI tests on UI products <br>
using a cutting edge automation tool.

### Tech

This repo uses the following open source project:

* Cypress.io - A complete end-to-end testing experience!

  [![Cypress.io](./images/cypressLogo.png)](http://cypress.io/)

### PreRequisites

Before diving into this repo, make sure you have the necessary knowledge on the following:

1. [javaScript fundamentals](https://javascript.info/first-steps)
2. [Visual Studio Code](https://code.visualstudio.com/) / [PyCharm](https://www.jetbrains.com/pycharm/) (or any other
   code editor as you feel comfortable with)
3. [Github Basics](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)
4. [Github token setup](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) (
   token / ssh integrated in your local machine)
5. [Cypress.io documentation](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)
6. [NodeJS](https://nodejs.org/en/download/)

### Installation

Follow these steps to install this repo on your environment:

1. **Git Clone** this repository into your machine
2. Open Terminal
3. Navigate to the root directory and install Cypress infra as follows:

    ```sh 
    $ yarn add cypress
    ```
   or
    ```sh 
    $ npm install cypress
    ```

### Run tests
1. via [TestRunner](https://docs.cypress.io/guides/core-concepts/test-runner)
   ```sh 
    $ npx cypress open
   ```
   1. Choose the browser from the dropdown 
   2. Click on any spec file under `cypress/integration` folder (generated automatically)
   3. The browser should be initiated running the UI flow 
   <br><br>
2. via [Commandline](https://docs.cypress.io/guides/guides/command-line)
   ```sh 
    $ npx cypress run --spec "cypress/integration/TESTNAME.spec.js"
   ```
   1. add `--browser chrome` flag to run it under Chrome browser.
   2. add `--headed` flag so the browser will be visible. 
