import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ClrWizard, ClrWizardPage } from "@clr/angular";

@Component({
    selector: 'emc-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashBoardComponent implements OnInit, OnDestroy {

    private parent: HTMLElement;
    backupJobsOptions: Object;
    constructor(private element: ElementRef) { }

    ngOnInit(): void {
        let nativeElement: Element = this.element.nativeElement;
        // show vertical scroll bar
        this.parent = nativeElement.parentElement;
        this.parent.style.overflowY = 'auto';

        this.backupJobsOptions = {
            chart: {
                animation: {
                    duration: 200,
                    easing: 'swing'
                },
                height: 300,
                showAxes: true,
                type: "pie",
            },
            colors: ['#007db8', '#F2255B', '#F7CE4D', '#6EA204'],
            credits: {
                enabled: false,
            },
            legend: {
                enabled: true,
                itemStyle: {
                    fontSize: "13px",
                }
            },
            tooltip: {
                pointFormat: '<b>{point.name}</b>: {point.percentage:.1f} %',
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    center: ['50%', 110],
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        y: 0
                    },
                    size: '50%',
                }
            },
            title: {
                floating: true,
                text: '361',
                align: 'center',
                verticalAlign: 'middle',
                style: {
                    fontSize: '36px',
                    fontWeight: 'bold'
                }, y: 0
            },
            xAxis: {
                lineWidth: 0,
            },
            yAxis: {
                title: {
                    text: null,
                },
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                innerSize: '80%',
                data: [{
                    name: 'Complete (218)', y: 56.33,
                    color: {
                        linearGradient: { x1: 0.5, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#00D0FF'],
                            [1, '#F2255B']
                        ]
                    }
                }, {
                    name: 'Failed (66)', y: 24.03, color: {
                        linearGradient: { x1: 0, y1: 0.8, x2: 0, y2: 0 },
                        stops: [
                            [0, '#F2255B'],
                            [1, '#F7CE4D']
                        ]
                    }
                }, {
                    name: 'Running (30)', y: 15.38, color: {
                        linearGradient: { x1: 0, y1: 0.5, x2: 1, y2: 0 },
                        stops: [
                            [0, '#F7CE4D'],
                            [1, '#6EA204']
                        ]
                    }
                }, {
                    name: 'Schduled (45)', y: 10.5, color: {
                        linearGradient: { x1: 0, y1: 0.5, x2: 1, y2: 0 },
                        stops: [
                            [0, '#6EA204'],
                            [1, '#00D0FF']
                        ]
                    }
                }]
            }]
        }
    }

    ngOnDestroy(): void {
        // hidden vertical scroll bar, only this page display scroll bar
        this.parent.style.overflowY = 'hidden';
    }
}
