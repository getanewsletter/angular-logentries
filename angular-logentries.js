(function(module) {
    "use strict";

    module.provider('$logentries', [
        function() {

            var debug = false;
            var initialized = false;
            var methods = ['log', 'info', 'warn', 'error'];

            this.init = function(token) {
                initialized = true;
                LE.init(token);
            };

            this.setDebug = function(d) {
                debug = d;
            };

            this.$get = [
                '$log',
                '$timeout',
                function($log, $timeout) {

                    var _logentries = {};

                    angular.forEach(methods, function(key) {
                        _logentries[key] = (function(k) {
                            return function(message) {
                                // log to console if debug enabled
                                if(debug === true) {
                                    $log[k].apply($log, arguments);
                                } else if(initialized === true) {
                                    LE[k].apply(LE, arguments);
                                }

                                // call $timeout for digest
                                $timeout(angular.noop);
                            };
                        })(key);
                    });

                    return _logentries;
                }
            ];
        }
    ]);

})(angular.module('logentries', []));
