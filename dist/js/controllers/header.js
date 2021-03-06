app.controller('header', ['$scope', 'user', function($scope, user) {
    $scope.user = user;

    $scope.unreadNotifications = false;

    $scope.ddSelectOptions = [
        {
            text: 'Signed in as freemo',
            href: "#"
        },
        {
            divider: true
        },
        {
            text: 'Your profile',
            href: "#"
        },
        {
            text: 'Your stars',
            href: "#"
        },
        {
            text: 'Explore',
            href: "#"
        },
        {
            text: 'Help',
            href: "#"
        },
        {
            divider: true
        },
        {
            text: 'Settings',
            href: "#"
        },
        {
            text: 'Sign out',
            href: "#"
        },
    ];

    $scope.ddSelectSelected = {};
}]);
