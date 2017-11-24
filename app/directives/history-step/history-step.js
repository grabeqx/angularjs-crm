const historyStep = function() {
    return {
        restrict: 'EAC',
        template: require('./history-step.html')
    }
}

export default angular.module('historyStep.directive', [])
    .directive('historyStep', historyStep);