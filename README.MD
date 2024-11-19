# Fox Web - A JavaScript Shortener

## What is?

FoxWeb is a JS script that aims to make JS easier. It can be used on both frontend and backend.

- NodeJs
```
$ npm i foxweb-node
```


* * index.js file
```js
import Fx from "../JS/FoxWeb.js";
const {default: FoxModule} = Fx; // Module
// Or
const {default: FoxModule} = require("./FoxWeb/sources/JS/FoxWeb.js"); // CommonJS
...
```

<a href="https://github.com/jefferson-developer-it/FoxWeb">
To use in Deno or Browser
</a>

## Understanding FoxWeb

### Return objects

| Name | Description |
|------|-------------|
|$VerifyTypes|Object with type checker|
|$Math|Use the math library more easily|
|$Utils|Make some tasks easier|
|HTTP|Perform HTTP Requests|

## $VerifyTypes


| Keys | Description |
|------|----------------|
|IsArray|Check if the value is an array|
|IsNum|Check if the value is a number|
|IsObj|Check if value is an object|

* isArray

```
const languages ​​= ["JS", "Go", "Rust"];
const myFavLang = languages[1]; // Go

console.log($VerifyTypes.IsArray(languages)) // true
console.log($VerifyTypes.IsArray(myFavLang)) // false
```

* isNum

```
const {IsNum} = $VerifyTypes;
const num1 = 10
const num2 = "a"
const num3 = "20"

console.log(IsNum(num1), IsNum(num2), IsNum(num3))
// output: true, false, true
// Even though it's a string, it should return true if it's a number
```

* isObject
```
const foxInfo = {
    Author: "Jefferson",
    packageName: "FoxWeb"
};
const languages ​​= ["JS", "Go", "Rust"];
 
console.log(IsObj(foxInfo), IsObj(languages))

// output: true, false
// Array is not an object in this case
```

## $Math


| Keys | Description |
|------|----------------|
|RoundNum|Logical round number|
|RoundNumUp|Rounds the number up 5,4 > 6|
|RoundNumDown|Rounds the number down 5.5 > 5|
|GenRandom|Generate a random number|

* RoundNum Examples
```
const n1 = 5.5
const n2 = 5.4

console.log(
    RoundNum(n1), // 6
    RoundNum(n2), // 5
    RoundNumUp(n1), // 6
    RoundNumUp(n2), // 6
    RoundNumDown(n1), // 5
    RoundNumDown(n2), // 5
)
```

* GenRandom
```
const randomNum = GenRandom(100, 110);
console.log(randomNum);
// output: Any number between 100 and 110
// GenRandom(min, max);
```

## $Utils

| Keys | Description |
|------|----------------|
|FindAllIndex|Find all indexes of a value in Array/string|
|GenRandomText|Gen random string|
|MaskText|Mask a text|

* FindAllIndex
```
const languages ​​= ["JS", "Go", "Rust", "JS"];
const language_str = "JS, Go, Rust";

console.log(FindAllIndex(languages, "JS")); // [0, 3]
console.log(FindAllIndex(languages_str, "S")); // [1, 10]

// FindAllIndex(arr, item)
```

* GenRandomText
```
const text = GenRandomText(10);
const text_mask = GenRandomText(10, {
    noUpChar: true, //Text will not be capitalized
    noLowerChar: true, //Text will not be lowercase
    noSpecial: true, //Text will have no special character
    templateMask: "##.##-#(#####)"
});
const text_mask2 = GenRandomText(10, {
    noNum: true, // Text will not have numbers
    firstChar: "r", // The first letter must be "r"
    templateMask: "###.##-#(#####)"
}); // Error: Template does not match text index amount

// No console.log because all text is random
```

* MaskText

```
const phone_number = "55000000000000"
const masked = MaskText(phone_number, "+## (##) #####-####)";

console.log(masked); // +55 (00) 00000-0000

//MaskText(text, template)
```
*If the amount of # is different from the length of the string, an error will be returned.*
___
## Modifications in Native JS

### In the number constructor
- Added format(x) method - This method changes from 1 to "01", "001".
- Added iterator;
```
console.log(10..format("3")); // 010
consolee.log([...3], [...-2]); // [0, 1, 2, 3], [0, -1, -2]
```
### In object constructor
- The toString method now returns the JSON string
- Add Method values, returns all Object values
- Add method keys, returns all object keys
### In the String constructor
- Add Method toObject, it returns an object or null
- Added toNum method (convert string to num)
- Added toInt method (convert string to int num)
- Added method toFloat(fractionsDigits) (convert string to float string (yes to string, example: "1"..ToFloat(2) -> "1.00", "1.234"..toFloat(2) -> "1.23" ))

# HTTP
> Use SendRequest to send requests
```js
const res = FoxModule.HTTP.SendRequest("http://example.com", {
     body: {},
     method: "GET",
     headers: {
         "content-type": "application/json"
     },
     query: {
         labelName: "test"
     }
})

// FoxModule.HTTP.SendRequest(uri, config?)


res.then(rs=>{
     console.log(rs.res);
     console.log(rs.resJSON); // Converted JSON object
})
```

> Create instances to facilitate your requests:
```js
const base = FoxModule.HTTP.RequestInstance("http://www.example.com")
const api = base.instance("/list");

api.send("/1").then(d=>{
     console.log(d.resJSON);
})

// use api.instance to create a new instance
```
> Convert query:
```js
const myQuery = {
     name: "jeff",
     token: "xxx-xxx.23.aa"
}

const stringQuery = FoxModule.HTTP.QueryParser(myQuery)
// or: FoxModule.HTTP.QueryParser(myQuery, "string")
// ?name=jeff&token=xxx-xxx.23.aa
const objQuery = FoxModule.HTTP.QueryParser("?app=Fox", "object")
// {app: "Fox"}
```