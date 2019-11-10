const express = require('express');

const app = express();

// function using the modern arrow style
app.get('/', (req, res) => {
  res.send('Hello');
  process.exit(1);
});

// traditional function including a function name
app.get('/one', function one(req, res) {
  res.send('One');
});

// anonymous function without a name
app.get('/two', function(req, res) {
  res.send('Two');
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});

// object shorthand
const obj = {
  hello: function() {
    console.log('Hello!');
  }
};

// without the keyword function
const obj2 = {
  hello() {
    console.log('Hello!');
  }
};
// class method user 'this' - should the method 'foo' be an instance method or a static method
class A {
  foo() {
    console.log(
      'Hello World'
    ); /* error Expected 'this' to be used by class method 'foo'. */
  }
}
