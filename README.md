# keyway

Creating an object from an array, reverse of `Object.keys`

## Installation
To install it in node, run

    > npm install --save keyway

To add it in your html, add it as

    <script src="https://raw.githubusercontent.com/joeyism/node-keyway/master/index.js"/>

## Linking
To use it in node, add

    require("keyway");

## Usage
The point of this module is to make

    ["one", "two"]

to be

    {
        "one": "",
        "two": ""
    }

This can be done by using `Array.keyway` or `.keyway`

### Example

    var arr = ["one", "two"];
    obj = Array.keyway(arr) // obj = { "one": "", "two": ""}
    obj = arr.keyway()      // obj = { "one": "", "two": ""}

The reverse will be

    Object.keys(obj)        // ["one", "two"]

## Version
**1.0.0**
* First commit
