app.controller('HomeController', ['$scope', function ($scope) {

    // By default the 'text' property will be used as the display text in the dropdown entry.
    // All options that are not dividers must have a 'text' property.
    // You can specify a different property name in place of 'text' via the dropdown-item-label attribute.
    // A divider with a 'text' property will also be non-selectable.
    //
    // If an options object has an 'href' property set, then that dropdown entry
    //   will behave as a link and cannot be selected.
    $scope.ddSelectOptions = [
        {
            text: 'Jeffrey',
            href: "#/details/Jeffrey"
        },
        {
            text: 'Billy',
            href: "#/details/Billy"
        }
    ];

    $scope.ddSelectSelected = {}; // Must be an object

    //$scope.exampleData = [
    //    {
    //        "key": "Series 1",
    //        "values": [[1025,  0], [1028,  -6.3382185140371], [1030,  -5.9507873460847], [1033,  -11.569146943813], [1036,  -5.4767332317425], [1038,  0.50794682203014], [1041,  -5.5310285460542], [1043,  -5.7838296963382], [1046,  -7.3249341615649], [1049,  -6.7078630712489], [1051,  0.44227126150934], [1054,  7.2481659343222], [1056,  9.2512381306992]]
    //    },
    //    {
    //        "key": "Series 2",
    //        "values": [[1025,  0], [1028,  0], [1030,  0], [1033,  0], [1036,  0], [1038,  0], [1041,  0], [1043,  0], [1046,  0], [1049,  0], [1051,  0], [1054,  0], [1056,  0], [1059,  0], [1062,  0], [1064,  0], [1067,  0], [1070,  0], [1072,  0], [1075,  -0.049184266875945]]
    //    },
    //    {
    //        "key": "Series 3",
    //        "values": [[1025,  0], [1028,  -6.3382185140371], [1030,  -5.9507873460847], [1033,  -11.569146943813], [1036,  -5.4767332317425], [1038,  0.50794682203014], [1041,  -5.5310285460542], [1043,  -5.7838296963382], [1046,  -7.3249341615649], [1049,  -6.7078630712489], [1051,  0.44227126150934], [1054,  7.2481659343222], [1056,  9.2512381306992]]
    //    },
    //    {
    //        "key": "Series 4",
    //        "values": [[1025,  -7.0674410638835], [1028,  -14.663359292964], [1030,  -14.104393060540], [1033,  -23.114477037218], [1036,  -16.774256687841], [1038,  -11.902028464000], [1041,  -16.883038668422], [1043,  -19.104223676831], [1046,  -20.420523282736], [1049,  -19.660555051587], [1051,  -13.106911231646], [1054,  -8.2448460302143], [1056,  -7.0313058730976]]
    //    }];

    $scope.exampleData = [
        {
            "key": "Series 1",
            "values": [[1025409600000, 0], [1028088000000, -6.3382185140371], [1030766400000, -5.9507873460847], [1033358400000, -11.569146943813], [1036040400000, -5.4767332317425], [1038632400000, 0.50794682203014], [1041310800000, -5.5310285460542], [1043989200000, -5.7838296963382], [1046408400000, -7.3249341615649], [1049086800000, -6.7078630712489], [1051675200000, 0.44227126150934], [1054353600000, 7.2481659343222], [1056945600000, 9.2512381306992]]
        },
        {
            "key": "Series 2",
            "values": [[1025409600000, 0], [1028088000000, 0], [1030766400000, 0], [1033358400000, 0], [1036040400000, 0], [1038632400000, 0], [1041310800000, 0], [1043989200000, 0], [1046408400000, 0], [1049086800000, 0], [1051675200000, 0], [1054353600000, 0], [1056945600000, 0], [1059624000000, 0], [1062302400000, 0], [1064894400000, 0], [1067576400000, 0], [1070168400000, 0], [1072846800000, 0], [1075525200000, -0.049184266875945]]
        },
        {
            "key": "Series 3",
            "values": [[1025409600000, 0], [1028088000000, -6.3382185140371], [1030766400000, -5.9507873460847], [1033358400000, -11.569146943813], [1036040400000, -5.4767332317425], [1038632400000, 0.50794682203014], [1041310800000, -5.5310285460542], [1043989200000, -5.7838296963382], [1046408400000, -7.3249341615649], [1049086800000, -6.7078630712489], [1051675200000, 0.44227126150934], [1054353600000, 7.2481659343222], [1056945600000, 9.2512381306992]]
        },
        {
            "key": "Series 4",
            "values": [[1025409600000, -7.0674410638835], [1028088000000, -14.663359292964], [1030766400000, -14.104393060540], [1033358400000, -23.114477037218], [1036040400000, -16.774256687841], [1038632400000, -11.902028464000], [1041310800000, -16.883038668422], [1043989200000, -19.104223676831], [1046408400000, -20.420523282736], [1049086800000, -19.660555051587], [1051675200000, -13.106911231646], [1054353600000, -8.2448460302143], [1056945600000, -7.0313058730976]]
        }
    ];

    $scope.xAxisTickFormatFunction = function () {
        return function (d) {
            return d3.time.format('%b')(new Date(d));
        }
    };
}]);
