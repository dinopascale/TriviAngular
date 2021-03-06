import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import * as fromModalLayer from './store/modal-layer.reducers';
import * as ModalLayerActions from './store/modal-layer.actions';

@Component({
  selector: 'app-modal-layer',
  templateUrl: './modal-layer.component.html',
  styleUrls: ['./modal-layer.component.css']
})
export class ModalLayerComponent implements OnInit {
   modalState$: Observable<fromModalLayer.State>;

  constructor(private store: Store<fromModalLayer.State>) { }

  ngOnInit() {
    this.modalState$ = this.store.select('modal');
  }

  onHide (event) {
    if (event.target.id === '') {
        return false;
    }
    this.store.dispatch(new ModalLayerActions.HideModal());
  }

}
