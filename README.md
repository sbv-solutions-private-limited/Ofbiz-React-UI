



# Ofbiz-React-UI 
This is front-end application for Apache Ofbiz framework developed using React JS and Ant Design. OFBiz is a framework that provides a common data model and a set of business process. Apache OFBiz comes with a range of core modules like Accounting,CRM,Order Management & E-Commerce, Warehousing and Manufacturing.Using ofbiz services, Our aims to implement ofbiz web UI using React and ant design framework (provides Neat Design,Common Templates,Responsive etc.) , For data flow solution like Redux, We used DVA (redux saga based framework) and react boilerplate template that's Quick setup for new performance oriented, offline–first React.js applications.Currently we are focusing on  Accounting (AR,AP,FA,GL) and we have done with AR,AP ,Transactions,Payment Gateway,Billing Account, Financial Account,Tax Authorities etc.

## Installation

```bash
First copy the repo into your disk.

$ git clone https://github.com/sbv-solutions-private-limited/Ofbiz-React-UI.git OFBiz

cd OFBiz

# Make sure that you have Node.js v8.10 and npm v5 or above installed.

npm install

npm start   # visit http://localhost:3000/gui
```
## Feature List
OFBiz has a full set useful business features including:
* Accounting Management
* Product & Catalog Management

## Structure

├── README.md
├── fw  # fw directory  
├── app  # app source directory 
│   ├── common  # write your redux action here
│   │   ├── users.js  # redux action
│   │   └── users.spec.js  # redux action test
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
│   │   ├── Accounting
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
