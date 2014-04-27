'use strict';

APP.controller('RegionsController', function ($scope) {

    $scope.regions = [
        {name: ' - '},
        {name: 'Almeria'},
        {name: 'Malaga'},
        {name: 'Madrid'},
        {name: 'Barcelona'}
    ];

    $scope.region = $scope.regions[0];
    $scope.photogrphersByRegion = [];

    $scope.$watch('region', function() {
        $scope.photogrphersByRegion = [];
        angular.forEach($scope.photographers, function (photographer) {
            if (photographer.region == $scope.region.name) {
                $scope.photogrphersByRegion.push(photographer);
            }
        });

    });

    $scope.addPhotographer = function(user) {
        $scope.photographers.push(user);
    };

    $scope.photographers = [
        {
            company: "Porras ltd",
            name: "Carlos",
            surname: "Porras",
            email: "porro@loco.com",
            region: "Almeria",
            website: "http://www.fotografos.com",
            message: "jolin!",
            services: "fotografia"
        },
        {
            company: "Paco ltd",
            name: "Francisco",
            surname: "Pacorro",
            email: "paco@a-mamadla.com",
            region: "Malaga",
            website: "http://www.scala.com",
            message: "viva peron",
            services: "fotografia y video"
        },
        {
            company: "Seb Consultancy ltd",
            name: "Seba",
            surname: "Seb",
            email: "seon@onorati.com",
            region: "Madrid",
            website: "http://www.seos.com",
            message: "boludo!",
            services: "fotografia"
        },
        {
            company: "ytre ltd",
            name: "Ana Laura",
            surname: "M",
            email: "ana@mmm.com",
            region: "Barcelona",
            website: "http://www.facebook.com",
            message: "foto foto foto",
            services: "fotografia"
        },
        {
            company: "Ani2 ltd",
            name: "Ani",
            surname: "Ana",
            email: "ani2@mmmm.com",
            region: "Barcelona",
            website: "http://www.amazon.com",
            message: "foto foto foto foto foto",
            services: "fotografia video"
        },
        {
            company: "Felini ltd",
            name: "Pablo",
            surname: "Felino",
            email: "pablo@felino.com",
            region: "Barcelona",
            website: "http://www.ebay.com",
            message: "foto video foto",
            services: "video"
        }
    ];

});
