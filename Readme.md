# New Visions for Public Schools Assesment

Project contains two typescript functions

1. groupByGrade ./src/util/groupByGrade.ts
2. findLowestAverage ./src/util/findLowestAverage.ts

These functions take in a student object and return a formatted collection of student values.
The data is taken from the file ./students.json.
Test files can be found with the extenstion \*.test.ts
Node.js and npm must be installed to run the app.

On start the app reads the file and parses the a data. The reults will be displayed in json format in the console. This applicaion will also start a server on port 5000.
The same results can be viewed at localhost:5000.

### Running the application

Do both of these options while located at the top most folder in the project
npm run build - transpiles typescript to javascript

### Development Mode

```code
npm install
npm run dev

```

### Normal Mode

```
npm install
npm run build
npm run start
```
