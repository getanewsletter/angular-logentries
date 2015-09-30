# angular-logentries
Angular logentries


### Installation

```
bower install angular-logentries
```

### Configuration

```js
var app = angular.module('yourapp', [
    'logentries'
]);

app.config([
    '$logentriesProvider',
    function($logentriesProvider) {

        // setDebug(true) outputs to console, setDebug(false) sends it to logentries
        $logentriesProvider.setDebug(true);
        $logentriesProvider.init('yourtokengoeshere');
    }
]);
```
