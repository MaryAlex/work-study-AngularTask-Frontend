const sendToServer = ($http, vm, i) => {
    $http.get('http://localhost:3000/bookmark?page=' + i)
        .then(function (response) {
            console.log(i);
            vm.greeting = response.data;
            vm.valuesFromServ.push(vm.greeting.items);
             if(vm.greeting.more) {
                 sendToServer($http, vm, i+1);
             }
            vm.fun = 'Success!';
        }, function (error) {
            vm.greeting = error.message;
            vm.fun = 'Error';
        });
};

module.exports = function(ngModule) {
    ngModule.directive('reader', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/directives/reader.html',
            controllerAs: 'vm',
            controller: function ($scope, $http) {
                let vm = this;
                vm.valuesFromServ = [];
                vm.greeting = null;
                vm.fun = 'Nothing';
                sendToServer($http, vm, 0);
            }
        }
    })
};
