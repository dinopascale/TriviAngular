import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import * as fromApp from '../../../store/app.reducers';

@Component({
  selector: 'app-pause-modal',
  templateUrl: './pause-modal.component.html',
  styleUrls: ['./pause-modal.component.css']
})
export class PauseModalComponent implements OnInit {
    constructor() { }

    ngOnInit() {}

}
