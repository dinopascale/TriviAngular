import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

    constructor() {}

    ngOnInit () {}

    onActivate(event) {
        if (event.constructor.name === 'QuestionsComponent') {
            window.scroll(0, 0);
        }
    }
}

