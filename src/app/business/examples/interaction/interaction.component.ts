import { Component, OnInit, ElementRef } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';


@Component({
    selector: 'mc-interaction',
    templateUrl: './interaction.component.html',
    styleUrls: ['./interaction.component.scss'],
    styles: [`.event.busy {
        background: #f64747;
    }`]
})
export class InteractionComponent implements OnInit {

    exampleOptions: FlatpickrOptions = {
        mode: "range",
        onDayCreate: (dObj, dStr, fp, dayElem: HTMLElement)=>{
            if (Math.random() < 0.15)
                dayElem.style.background = 'red';

            else if (Math.random() > 0.85)
            dayElem.style.background = 'bule';
        }
      };

    private list: HTMLElement;
    private children: Element[] = [];
    constructor() { }

    current: Element;

    ngOnInit(): void { 
        
    }

}
