```
Author:Ernesto Cisnero.
```
## creditcards-numb-valid
You can verify if a credit card number is valid or not. Based on Luhn algorithm to check 16 digits credit card numbers.

### To install the package:


```
npm install creditcards-numb-valid
```

use it:

```
const validate = require('creditcards-numb-valid');

const validation = validate( /*Number to validate*/ );
```

return:

```
if valid:

{ 
    errorCode: false, 
    info: 'The credit card number is valid!'
}

if not valid:

{ 
    errorCode: true, 
    info: 'The credit card number is not valid!'
}
```
