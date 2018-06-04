import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { Options } from './../../shared/options.model';
import { TriviaCategories } from './../../shared/triviaCategories.model';

import * as fromOptions from '../store/options.reducers';
import * as OptionsAction from '../store/options.actions';

@Component({
  selector: 'app-options-form',
  templateUrl: './options-form.component.html',
  styleUrls: ['./options-form.component.css']
})
export class OptionsFormComponent implements OnInit {
    categories;

    defaultOptions: Options = {
        amount: 10,
        difficulty: 'any',
        type: 'any',
        category: 'any'
    };

    constructor(private store: Store<fromOptions.FeatureState>, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.data
            .subscribe((data: {categories: TriviaCategories[]}) => {
                this.categories = data.categories;
            });
    }

    onSubmit(value: Options) {
        this.store.dispatch(new OptionsAction.SetOptions({
            amount: value.amount,
            category: value.category,
            type: value.type,
            difficulty: value.difficulty
        }));
        this.router.navigate(['/questions']);
    }

}
