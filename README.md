# angular-logentries
Angular logentries


### Installation

```
bower install angular-logentries
```

```js
var app = angular.module('yourapp', [
    'logentries'
]);
```

### Configuration

```js
app.config([
    '$logentriesProvider',
    function($logentriesProvider) {

        // setDebug(true) outputs to console, setDebug(false) sends it to logentries
        $logentriesProvider.setDebug(true);
        $logentriesProvider.init('yourtokengoeshere');
    }
]);
```

### Lets log
------------------------------
For more information regarding logging levels [read le_js wiki first](https://github.com/logentries/le_js/wiki/API)

```js
var app = angular.module('yourapp');

app.controller('TeslaGotScrewdOverController', [
    '$scope',
    '$logentries',
    '$timeout',
    function($scope, $logentries, $timeout) {
        $logentries.info({
            'event': 'user clicked',
            'user_id': 1
        });
    }
]);
```

### Error handling
-----------------------------

#### Basic usage

```js
angular
    .module('exceptionOverride', [])
    .factory('$exceptionHandler', [
        '$logentries',
        function($logentries) {
            return function(exception, cause) {
                exception.message += ' (caused by "' + cause + '")';
                $logentries.error(exception);
            };
        }
    ]);
});
```

#### Advanced usage

```js
app.config([, function() {
    $provide.decorator('$exceptionHandler', [
        '$delegate', '$injector', function($delegate, $injector) {
            return function(exception, cause) {
                exception.message += ' (caused by "' + cause + '")';
                $logentries.error(exception);
                $delegate(exception, cause);
            }
        }
    ]);
}])

```
