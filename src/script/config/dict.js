'use strict';
angular.module('app').value('dict',{}).run(['dict','$http',function(dict,$http) {
    $http.get('data/city.json').then(function(res) {
        dict.city = res;
    });
    $http.get('data/salary.json').then(function(res) {
        dict.salary = res;
    });
    $http.get('data/scale.json').then(function(res) {
        dict.scale = res;
    })
}]);