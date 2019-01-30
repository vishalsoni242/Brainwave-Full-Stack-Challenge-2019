# Brainwave-Full-Stack-Challenge-2019
**Features:**

 1. Listing of All Stocks Archive Data
 2. Searching of Stock Details by Stock Symbols
 3. Searching of Stock Graph by Stock Symbols
 4. Graph of Archive Data for Stock

**Technology Stack:**
Node-Express(View Engine - EJS), MongoDB, HTML, CSS, BOOTSTRAP


**Deployment Instructions:**

 - Open Command Prompt with Admin Rights and run following command. It
       will create DB named Data with Collection named DataDump from
       prices763fefc.csv

```
mongoimport -d Data -c DataDump --type CSV --file prices763fefc.csv --headerline
```

 - Run Following Commands

```
npm i
```

```
node app.js
```

3. Visit [http://localhost:5000/][1]


  [1]: http://localhost:5000/
