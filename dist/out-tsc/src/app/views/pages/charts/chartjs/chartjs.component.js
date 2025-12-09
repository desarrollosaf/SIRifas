import { __decorate } from "tslib";
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ThemeCssVariableService } from '../../../../core/services/theme-css-variable.service';
let ChartjsComponent = class ChartjsComponent {
    themeCssVariableService = inject(ThemeCssVariableService);
    themeCssVariables = this.themeCssVariableService.getThemeCssVariables();
    /**
     * Bar chart
     */
    barChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: true,
                    color: this.themeCssVariables.gridBorder,
                },
                ticks: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 12
                    }
                }
            },
            y: {
                grid: {
                    display: true,
                    color: this.themeCssVariables.gridBorder,
                },
                ticks: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 12
                    }
                }
            }
        }
    };
    barChartType = 'bar';
    barChartPlugins = [];
    barChartData = {
        labels: ["China", "America", "India", "Germany", "Oman"],
        datasets: [
            {
                label: "Population",
                backgroundColor: [this.themeCssVariables.primary, this.themeCssVariables.danger, this.themeCssVariables.warning, this.themeCssVariables.success, this.themeCssVariables.info],
                hoverBackgroundColor: [this.themeCssVariables.primary, this.themeCssVariables.danger, this.themeCssVariables.warning, this.themeCssVariables.success, this.themeCssVariables.info],
                borderColor: [this.themeCssVariables.primary, this.themeCssVariables.danger, this.themeCssVariables.warning, this.themeCssVariables.success, this.themeCssVariables.info],
                hoverBorderColor: [this.themeCssVariables.primary, this.themeCssVariables.danger, this.themeCssVariables.warning, this.themeCssVariables.success, this.themeCssVariables.info],
                data: [2478, 5267, 734, 2084, 1433],
            }
        ],
    };
    /**
     * Line chart
     */
    lineChartData = {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [{
                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                label: "Africa",
                borderColor: this.themeCssVariables.info,
                backgroundColor: "transparent",
                fill: true,
                pointBackgroundColor: this.themeCssVariables.light,
                pointHoverBackgroundColor: this.themeCssVariables.light,
                pointBorderColor: this.themeCssVariables.info,
                pointHoverBorderColor: this.themeCssVariables.info,
                pointBorderWidth: 2,
                pointHoverBorderWidth: 3,
                tension: .3
            }, {
                data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                label: "Asia",
                borderColor: this.themeCssVariables.danger,
                backgroundColor: "transparent",
                fill: true,
                pointBackgroundColor: this.themeCssVariables.light,
                pointHoverBackgroundColor: this.themeCssVariables.light,
                pointBorderColor: this.themeCssVariables.danger,
                pointHoverBorderColor: this.themeCssVariables.danger,
                pointBorderWidth: 2,
                pointHoverBorderWidth: 3,
                tension: .3
            }
        ]
    };
    lineChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 13,
                        family: this.themeCssVariables.fontFamily
                    }
                }
            },
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: true,
                    color: this.themeCssVariables.gridBorder,
                },
                ticks: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 12
                    }
                }
            },
            y: {
                grid: {
                    display: true,
                    color: this.themeCssVariables.gridBorder,
                },
                ticks: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 12
                    }
                }
            }
        }
    };
    lineChartType = 'line';
    lineChartPlugins = [];
    /**
     * Doughnut chart
     */
    doughnutChartOptions = {
        aspectRatio: 2,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 13,
                        family: this.themeCssVariables.fontFamily
                    }
                }
            },
        }
    };
    doughnutChartLabels = ["Africa", "Asia", "Europe"];
    doughnutChartData = {
        labels: this.doughnutChartLabels,
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: [this.themeCssVariables.primary, this.themeCssVariables.danger, this.themeCssVariables.info],
                hoverBackgroundColor: [this.themeCssVariables.primary, this.themeCssVariables.danger, this.themeCssVariables.info],
                borderColor: this.themeCssVariables.light,
                hoverBorderColor: [this.themeCssVariables.primary, this.themeCssVariables.danger, this.themeCssVariables.info],
                data: [2478, 4267, 1334],
            }
        ]
    };
    doughnutChartType = 'doughnut';
    /**
     * Area chart
     */
    areaChartData = {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [{
                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                label: "Africa",
                borderColor: this.themeCssVariables.danger,
                backgroundColor: 'rgba(255,51,102,.3)',
                fill: true,
                pointBackgroundColor: this.themeCssVariables.light,
                pointHoverBackgroundColor: this.themeCssVariables.light,
                pointBorderColor: this.themeCssVariables.danger,
                pointHoverBorderColor: this.themeCssVariables.danger,
                pointBorderWidth: 2,
                pointHoverBorderWidth: 3,
                tension: .3
            }, {
                data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                label: "Asia",
                borderColor: this.themeCssVariables.info,
                backgroundColor: 'rgba(102,209,209,.3)',
                fill: true,
                pointBackgroundColor: this.themeCssVariables.light,
                pointHoverBackgroundColor: this.themeCssVariables.light,
                pointBorderColor: this.themeCssVariables.info,
                pointHoverBorderColor: this.themeCssVariables.info,
                pointBorderWidth: 2,
                pointHoverBorderWidth: 3,
                tension: .3
            }
        ]
    };
    areaChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 13,
                        family: this.themeCssVariables.fontFamily
                    }
                }
            },
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: true,
                    color: this.themeCssVariables.gridBorder,
                },
                ticks: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 12
                    }
                }
            },
            y: {
                grid: {
                    display: true,
                    color: this.themeCssVariables.gridBorder,
                },
                ticks: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 12
                    }
                }
            }
        }
    };
    areaChartType = 'line';
    areaChartPlugins = [];
    /**
     * Pie chart
     */
    pieChartOptions = {
        aspectRatio: 2,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 13,
                        family: this.themeCssVariables.fontFamily
                    }
                }
            },
        },
    };
    pieChartLabels = ["Africa", "Asia", "Europe"];
    pieChartData = {
        labels: this.pieChartLabels,
        datasets: [{
                label: "Population (millions)",
                backgroundColor: [this.themeCssVariables.primary, this.themeCssVariables.danger, this.themeCssVariables.info],
                hoverBackgroundColor: [this.themeCssVariables.primary, this.themeCssVariables.danger, this.themeCssVariables.info],
                borderColor: this.themeCssVariables.light,
                hoverBorderColor: [this.themeCssVariables.primary, this.themeCssVariables.danger, this.themeCssVariables.info],
                data: [2478, 4267, 1334]
            }]
    };
    pieChartType = 'pie';
    /**
     * Bubble chart
     */
    bubbleChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 13,
                        family: this.themeCssVariables.fontFamily
                    }
                }
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: "GDP (PPP)",
                    color: this.themeCssVariables.secondary,
                    font: {
                        family: this.themeCssVariables.fontFamily
                    }
                },
                grid: {
                    display: true,
                    color: this.themeCssVariables.gridBorder,
                },
                ticks: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 12
                    }
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: "Happiness",
                    color: this.themeCssVariables.secondary,
                    font: {
                        family: this.themeCssVariables.fontFamily
                    }
                },
                grid: {
                    display: true,
                    color: this.themeCssVariables.gridBorder,
                },
                ticks: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 12
                    }
                }
            },
        }
    };
    bubbleChartType = 'bubble';
    bubbleChartLegend = true;
    bubbleChartData = {
        labels: [],
        datasets: [
            {
                label: "China",
                backgroundColor: 'rgba(102,209,209,.3)',
                hoverBackgroundColor: 'rgba(102,209,209,.3)',
                borderColor: this.themeCssVariables.info,
                hoverBorderColor: this.themeCssVariables.info,
                data: [{
                        x: 21269017,
                        y: 5.245,
                        r: 15
                    }]
            }, {
                label: "Denmark",
                backgroundColor: "rgba(255,51,102,.3)",
                hoverBackgroundColor: "rgba(255,51,102,.3)",
                borderColor: this.themeCssVariables.danger,
                hoverBorderColor: this.themeCssVariables.danger,
                data: [{
                        x: 258702,
                        y: 7.526,
                        r: 10
                    }]
            }, {
                label: "Germany",
                backgroundColor: "rgba(101,113,255,.3)",
                hoverBackgroundColor: "rgba(101,113,255,.3)",
                borderColor: this.themeCssVariables.primary,
                hoverBorderColor: this.themeCssVariables.primary,
                data: [{
                        x: 3979083,
                        y: 6.994,
                        r: 15
                    }]
            }, {
                label: "Japan",
                backgroundColor: "rgba(251,188,6,.3)",
                hoverBackgroundColor: "rgba(251,188,6,.3)",
                borderColor: this.themeCssVariables.warning,
                hoverBorderColor: this.themeCssVariables.warning,
                data: [{
                        x: 4931877,
                        y: 5.921,
                        r: 15
                    }]
            }
        ]
    };
    /**
     * Radar chart
     */
    radarChartOptions = {
        responsive: true,
        aspectRatio: 2,
        scales: {
            r: {
                angleLines: {
                    display: true,
                    color: this.themeCssVariables.gridBorder,
                },
                grid: {
                    color: this.themeCssVariables.gridBorder
                },
                suggestedMin: 0,
                suggestedMax: 60,
                ticks: {
                    backdropColor: this.themeCssVariables.light,
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 11,
                        family: this.themeCssVariables.fontFamily
                    }
                },
                pointLabels: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        family: this.themeCssVariables.fontFamily,
                        size: 13
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 13,
                        family: this.themeCssVariables.fontFamily
                    }
                }
            },
        },
    };
    radarChartLabels = ["Africa", "Asia", "Europe", "Latin America", "North America"];
    radarChartData = {
        labels: this.radarChartLabels,
        datasets: [
            {
                label: "1950",
                fill: true,
                backgroundColor: "rgba(255,51,102,.3)",
                borderColor: this.themeCssVariables.danger,
                pointBorderColor: this.themeCssVariables.danger,
                pointHoverBorderColor: this.themeCssVariables.danger,
                pointBackgroundColor: this.themeCssVariables.light,
                pointHoverBackgroundColor: this.themeCssVariables.light,
                pointBorderWidth: 2,
                pointHoverBorderWidth: 3,
                data: [8.77, 55.61, 21.69, 6.62, 6.82]
            }, {
                label: "2050",
                fill: true,
                backgroundColor: "rgba(102,209,209,.3)",
                borderColor: this.themeCssVariables.info,
                pointBorderColor: this.themeCssVariables.info,
                pointHoverBorderColor: this.themeCssVariables.info,
                pointBackgroundColor: this.themeCssVariables.light,
                pointHoverBackgroundColor: this.themeCssVariables.light,
                pointBorderWidth: 2,
                pointHoverBorderWidth: 3,
                data: [25.48, 54.16, 7.61, 8.06, 4.45]
            }
        ]
    };
    radarChartType = 'radar';
    /**
     * Polar area chart
     */
    polarChartOptions = {
        aspectRatio: 2,
        scales: {
            r: {
                angleLines: {
                    display: true,
                    color: this.themeCssVariables.gridBorder,
                },
                grid: {
                    color: this.themeCssVariables.gridBorder
                },
                suggestedMin: 1000,
                suggestedMax: 5500,
                ticks: {
                    backdropColor: this.themeCssVariables.light,
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 11,
                        family: this.themeCssVariables.fontFamily
                    }
                },
                pointLabels: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        family: this.themeCssVariables.fontFamily,
                        size: 13
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 13,
                        family: this.themeCssVariables.fontFamily
                    }
                }
            },
        },
    };
    polarAreaChartLabels = ["Africa", "Asia", "Europe", "Latin America"];
    polarAreaChartData = {
        labels: this.polarAreaChartLabels,
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: [this.themeCssVariables.primary, this.themeCssVariables.danger, this.themeCssVariables.success, this.themeCssVariables.info],
                hoverBackgroundColor: [this.themeCssVariables.primary, this.themeCssVariables.danger, this.themeCssVariables.success, this.themeCssVariables.info],
                borderColor: this.themeCssVariables.light,
                hoverBorderColor: [this.themeCssVariables.primary, this.themeCssVariables.danger, this.themeCssVariables.success, this.themeCssVariables.info],
                data: [3578, 5000, 1034, 2034]
            }
        ]
    };
    polarAreaLegend = true;
    polarAreaChartType = 'polarArea';
    /**
     * Grouped bar chart
     */
    groupedBarChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 13,
                        family: this.themeCssVariables.fontFamily
                    }
                }
            },
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: true,
                    color: this.themeCssVariables.gridBorder,
                },
                ticks: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 12
                    }
                }
            },
            y: {
                grid: {
                    display: true,
                    color: this.themeCssVariables.gridBorder,
                },
                ticks: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 12
                    }
                }
            }
        }
    };
    groupedBarChartType = 'bar';
    groupedBarChartPlugins = [];
    groupedBarChartData = {
        labels: ["1900", "1950", "1999", "2050"],
        datasets: [
            {
                label: "Africa",
                backgroundColor: this.themeCssVariables.danger,
                hoverBackgroundColor: this.themeCssVariables.danger,
                borderColor: this.themeCssVariables.danger,
                hoverBorderColor: this.themeCssVariables.danger,
                data: [133, 221, 783, 2478]
            }, {
                label: "Europe",
                backgroundColor: this.themeCssVariables.primary,
                hoverBackgroundColor: this.themeCssVariables.primary,
                borderColor: this.themeCssVariables.primary,
                hoverBorderColor: this.themeCssVariables.primary,
                data: [408, 547, 675, 734]
            }
        ],
    };
    /**
     * Mixed chart
     */
    mixedChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 13,
                        family: this.themeCssVariables.fontFamily
                    }
                }
            },
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: true,
                    color: this.themeCssVariables.gridBorder,
                },
                ticks: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 12
                    }
                }
            },
            y: {
                grid: {
                    display: true,
                    color: this.themeCssVariables.gridBorder,
                },
                ticks: {
                    color: this.themeCssVariables.secondary,
                    font: {
                        size: 12
                    }
                }
            }
        }
    };
    mixedChartType = 'bar';
    mixedChartPlugins = [];
    mixedChartData = {
        labels: ["1900", "1950", "1999", "2050"],
        datasets: [
            {
                label: "Europe",
                type: "line",
                borderColor: this.themeCssVariables.danger,
                backgroundColor: "transparent",
                data: [408, 547, 675, 734],
                fill: false,
                pointBackgroundColor: this.themeCssVariables.light,
                pointHoverBackgroundColor: this.themeCssVariables.light,
                pointBorderColor: this.themeCssVariables.danger,
                pointHoverBorderColor: this.themeCssVariables.danger,
                pointBorderWidth: 2,
                pointHoverBorderWidth: 3,
                tension: .3
            }, {
                label: "Africa",
                type: "line",
                borderColor: this.themeCssVariables.primary,
                backgroundColor: "transparent",
                data: [133, 221, 783, 2478],
                fill: false,
                pointBackgroundColor: this.themeCssVariables.light,
                pointHoverBackgroundColor: this.themeCssVariables.light,
                pointBorderColor: this.themeCssVariables.primary,
                pointHoverBorderColor: this.themeCssVariables.primary,
                pointBorderWidth: 2,
                pointHoverBorderWidth: 3,
                tension: .3
            }, {
                label: "Europe",
                type: "bar",
                backgroundColor: this.themeCssVariables.danger,
                hoverBackgroundColor: this.themeCssVariables.danger,
                borderColor: '',
                data: [408, 547, 675, 734],
            }, {
                label: "Africa",
                type: "bar",
                backgroundColor: this.themeCssVariables.primary,
                hoverBackgroundColor: this.themeCssVariables.primary,
                borderColor: '',
                data: [133, 221, 783, 2478]
            }
        ],
    };
    constructor() { }
};
ChartjsComponent = __decorate([
    Component({
        selector: 'app-chartjs',
        imports: [
            RouterLink,
            BaseChartDirective
        ],
        providers: [
            provideCharts(withDefaultRegisterables())
        ],
        templateUrl: './chartjs.component.html'
    })
], ChartjsComponent);
export { ChartjsComponent };
//# sourceMappingURL=chartjs.component.js.map