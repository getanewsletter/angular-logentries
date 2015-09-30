# angular-logentries
Angular logentries


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
