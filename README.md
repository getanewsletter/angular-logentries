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

### Basic usage

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

# Advanced usage

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
