import { Component, OnInit, ViewChild, OnDestroy, ElementRef, HostBinding } from '@angular/core';
import { ClrWizard, ClrWizardPage } from "@clr/angular";
import { slideInDownAnimation } from '../../core/animations/animations';

@Component({
    selector: 'emc-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [ slideInDownAnimation ]
})
export class DashBoardComponent implements OnInit, OnDestroy {

    @HostBinding('@routeAnimation') routeAnimation = true;

    replJobsOptions: Object;
    backupJobsOptions: Object;
    private parent: HTMLElement;
    constructor(private element: ElementRef) { }

    public val: number = 33;
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
            legend: {
                enabled: true
            },
            colors: ['#007db8', '#F2255B', '#F7CE4D', '#6EA204'],
            credits: {
                enabled: false,
            },
            tooltip: {
                pointFormat: '<b>{point.name}</b>: {point.percentage:.1f} %',
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    center: ['50%', 105],
                    cursor: 'pointer',
                    size: '80%',
                    showInLegend: true
                }
            },
            title: {
                floating: true,
                text: '163',
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
                innerSize: '65%',
                data: [{
                    name: 'Complete', y: 56.33,
                    color: {
                        radialGradient: { cx: 0.5, cy: 0.5, r: 1 },
                        stops: [
                            [0, '#00D0FF'],
                            [1, '#F2255B']
                        ]
                    }
                }, {
                    name: 'Failed', y: 24.03, color: {
                        radialGradient: { cx: 0.5, cy: 0.5, r: 1 },
                        stops: [
                            [0, '#F2255B'],
                            [1, '#F7CE4D']
                        ]
                    }
                }, {
                    name: 'Schduled', y: 15.38, color: {
                        radialGradient: { cx: 0.5, cy: 0.5, r: 2 },
                        stops: [
                            [0, '#F7CE4D'],
                            [1, '#6EA204']
                        ]
                    }
                }, {
                    name: 'Running', y: 10.5, color: {
                        radialGradient: { cx: 0.5, cy: 0.5, r: 1 },
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
