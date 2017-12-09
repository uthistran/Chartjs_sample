angular.module('ChartApp', ['chart.js'])

    .controller('ChartController', function ($scope, $timeout) {

        var vm = $scope;

        vm.updateContent = updateContent;

        function updateContent() {

            vm.chart.data.datasets[0].data = [
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1),
                Math.floor((Math.random() * 100) + 1)
            ];
            vm.chart.update();

        }

        function updateChart() {
            var ctx = document.getElementById("chartcanvas");

            //create Chart class object
            vm.chart = new Chart(ctx, {
                type: "doughnut",
                data: vm.data,
                options: vm.options
            });

        }


        vm.data = {
            labels: ["Market Meter", "Index Meter", "Live Scanner", "Trend Scanner", "Market Breadth", "Market Dynamics", "Opportunity Finder"],
            datasets: [
                {
                    label: "Tools",
                    data: [10, 50, 25, 70, 40, 30, 20],
                    backgroundColor: [
                        "#E8EAF6",
                        "#C5CAE9",
                        "#9FA8DA",
                        "#1A237E",
                        "#5C6BC0",
                        "#FFCCBC",
                        "#3949AB"
                    ],
                    borderColor: [
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff"
                    ],
                    hoverBorderWidth: [
                        0, 0, 0, 0, 0, 0, 0
                    ],
                    hoverBorderColor: [
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff"
                    ],
                    borderWidth: [5, 5, 5, 5, 5, 5, 5]
                }
            ]
        };

        //options
        vm.options = {
            cutoutPercentage: 65,
            animation: {
                animateScale: true
            },
            responsive: true,
            title: {
                display: true,
                position: "top",
                text: "Tools usage",
                fontSize: 18,
                fontColor: "#111"
            },
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    fontColor: "#333",
                    fontSize: 16
                }
            }
        };

        $timeout(updateChart, 100);

    });

