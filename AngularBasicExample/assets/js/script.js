//var uygulama=angular.module("nUygulama", []);

var uygulama2=angular.module("ngUygulama",[]);

uygulama2.controller("FirstController",['$scope',function($scope){
    $scope.degisken="Merhaba Angular.min.js";
    $scope.degisken2="HTML ile kullanımı";
    $scope.dizi=["Erhan", "Ahmet","Özge"];
    $scope.Baslik="<h2>Başlık</h2>";
    $scope.number1=5;
    $scope.number2=18;

}]);