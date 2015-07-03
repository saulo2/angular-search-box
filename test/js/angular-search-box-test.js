(function () {
    "use strict";

    angular.module("angular-search-box-test", ["angular-search-box"]).controller("testController", ["$scope", function ($scope) {
        var ids = [];
        for (var i = 1; i <= 10; ++i) {
            ids.push(i);
        }

        $scope.projects = ids.map(function (id) {
            return {
                name: "" + id,
                tasks: ids.map(function (id) {
                    return {
                        name: "" + id
                    };
                })
            };
        });

        $scope.filterProject = function (project) {
            if ($scope.searchingProject && $scope.projectNamePrefix) {
                return project.name.toLowerCase().startsWith($scope.projectNamePrefix.toLowerCase());
            }
            return true;
        };

        $scope.filterTask = function (task) {
            if ($scope.searchingTask && $scope.taskNamePrefix) {
                return task.name.toLowerCase().startsWith($scope.taskNamePrefix.toLowerCase());
            }
            return true;
        };
    }]);
})();