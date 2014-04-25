'use strict';

angular.module('photowebapp')
    .controller('MainCtrl', function ($scope) {

        $scope.todos = ['one','two','three', 'four'];

        $scope.addTodo = function() {

            $scope.todos.push($scope.todo);
            $scope.todo = '';
        };

        $scope.removeTodo = function(index) {

            $scope.todos.splice(index, 1);
        }
    });
