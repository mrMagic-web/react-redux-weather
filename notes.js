// Error - Uncaught TypeError: Cannot read property 'setState' of undefined
// if there is callback(onChange, onClick) using this it probably will need to be bound
// we either do fat arrow (=>) function
// or we can use bind function in constructor 
this.onInputChange = this.onInputChange.bind(this);


