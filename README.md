



# Ofbiz-React-UI 
This is front-end application for Apache Ofbiz framework developed using React JS and Ant Design. OFBiz is a framework that provides a common data model and a set of business process. Apache OFBiz comes with a range of core modules like Accounting,CRM,Order Management & E-Commerce, Warehousing and Manufacturing.Using ofbiz services, Our aims to implement ofbiz web UI using React and ant design framework (provides Neat Design,Common Templates,Responsive etc.) , For data flow solution like Redux, We used DVA (redux saga based framework) and react boilerplate template that's Quick setup for new performance oriented, offline–first React.js applications.Currently we  developed   **Accounting (AR,AP,FA,GL)** module with post call API integration using ofbiz services . To use ofbiz sevices for Api integration , follow it https://github.com/sbv-solutions-private-limited/ofbiz-framework

## Installation

```bash
First copy the repo into your disk.

$ git clone https://github.com/sbv-solutions-private-limited/Ofbiz-React-UI.git OFBiz-React-UI

cd OFBiz-React-UI

# Make sure that you have Node.js v8.10, antd 3.7.2 and npm v5 or above installed.

npm install

npm start   # visit http://localhost:3000/gui
```
```
To use ofbiz sevices for Api integration , follow it 
https://github.com/sbv-solutions-private-limited/ofbiz-framework
```
## Feature List
OFBiz has a full set useful business features including:
* Accounting Management
* Product & Catalog Management

##  Status 
status for UI development of OFBiz module/sub module
1. Accounting :
* Main
* Invoice
* Payment
* Payment Groups
* Transactions
* Payment Gateway Config
* Billing Account
* Financial Account
* Tax Authorities
* Agreements
* Fixed Assets
* Budgets 
* Global GL Settings 
* Organization GL Settings 


2. Accounting(AP)
* Main
* Agreements
* Invoices
* Payment
* Payment Groups
* Find Vendors
* Reports

3. Accounting(AP)
* Main
* Agreements
* Invoices
* Payment
* Payment Groups
* Reports


```sh
# Note: all listed module showing completed UI with post calls 
```
## Structure

```sh
├── README.md
├── fw  # fw directory  
├── app  # app source directory 
│   ├── common  # common file
│   │   ├── Dialogs  #
│   │   ├── Layout
│   │   ├── Table
│   │   ├── TitlePane
│   │   ├── Utils
│   ├── commonConsts.js
│   ├── menu.js
│   ├── rest_urls.js
│   ├── router.js
│   ├── Styles.less 
│   ├── components  # components file to set global footer, header 
│   │   ├── _utils
│   │   ├── Authorized
│   │   ├── Exception
│   │   ├── GlobalFooter
│   │   ├── HeaderSearch
│   │   ├── NoticeIcon
│   │   ├── PageHeader
│   │   ├── SideMenu
│   ├── images  # images file
│   ├── layouts  # layouts file
│   │   ├── BasicLayout.js
│   │   ├── LoginLayout.js
│   │   ├── PageHeaderLayout.js
│   │   ├── PageHeaderLayout.less
│   ├── pages  # ofbiz modules pages
│   │   ├── Accounting  # accounting module
│   │   │   ├── Agreements
│   │   │   │   ├── AgreementsConst.js   # all defined local Constants here
│   │   │   │   ├── AgreementsForm.js    # from Ui
│   │   │   │   ├── AgreementsModel.js   # defined Model , require for dva 
│   │   │   │   ├── AgreementsSearchForm.js  # search form UI
│   │   │   │   ├── AgreementsService.js   # defined services , require for dva
│   │   │   │   ├── AgreementsTable.js    # Listing table UI
│   │   │   │   ├── AgreementsView.js    # view file to toggle the form/table 
│   │   │   │   ├── index.js 
│   │   │   │   ├── Loadable.js 
│   │   │   ├── BillingAccounts      # same structure for all sub module / module
│   │   │   ├── Budgets
│   │   │   ├── FinancialAccounts
│   │   │   ├── Invoice
│   │   │   ├── Main
│   │   │   ├── Payment
│   │   │   ├── PaymentGatewayConfig
│   │   │   ├── TaxAuthorities
│   │   │   ├── Transactions
│   │   ├── Accounting(AP) 
│   │   ├── Accounting(AR)
│   │   ├── Exception
│   │   ├── HomePage
│   │   ├── LoginPage
│   │   ├── NotFoundPage
│   │   ├── Result
│   ├── static
│   ├── global-styles.js      # global styles 
│   ├── index.html  # template index.html
│   ├── app.js  # entry file
│   ├── tests  # tests file
│   ├── router.js  # routes
│   └── utils  # utils file
│       
├── internals  # tooling configuration directory
├── server # server file
└── package.json


```


## Useful links
 * [React's official site](https://reactjs.org/) 
 * [Ant Design React UI framework](https://ant.design/)
* [Know about DVA](https://ant.design/docs/react/practical-projects)
 * [React-boilerplate
](https://www.reactboilerplate.com/)  
 * [APACHE-OFBiz official site
](https://ofbiz.apache.org/ofbiz-demos.html)
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
