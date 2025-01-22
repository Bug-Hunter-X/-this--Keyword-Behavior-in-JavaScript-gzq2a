function myFunc() {
  console.log(this);
}

// Using bind to explicitly set 'this'
const boundMyFunc = myFunc.bind({ name: 'Bound Object' });
boundMyFunc(); // this will be { name: 'Bound Object' }

const obj = {
  myMethod: function() {
    console.log(this); // this will be the obj object
  }
};

obj.myMethod();

//Using arrow functions (this will be lexically bound)
const arrowFunc = () => {
    console.log(this); //this will inherit the surrounding context
}

const arrowObj = {
    arrowMethod: arrowFunc
}

arrowObj.arrowMethod();