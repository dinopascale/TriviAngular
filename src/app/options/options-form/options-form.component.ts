import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
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
    categorized = {
        Entertainment: [],
        Science: [],
        Others: []
    };
    categorizedKeys: string[];

    categoryChoose;

    defaultOptions: Options = {
        amount: 5,
        difficulty: 'any',
        type: 'any',
        category: 'any'
    };

    constructor(private store: Store<fromOptions.FeatureState>, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.data
            .subscribe((data: {categories: TriviaCategories[]}) => {
                this.onSubCategories(data);
            });
    }

    categoryChoosed (event) {
        this.categoryChoose = event.source._elementRef.nativeElement.textContent;
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

    onSubCategories(data: {categories: TriviaCategories[]}) {
        console.log(data);
        data.categories.forEach(el => {
            if (el.name.includes('Entertainment')) {
                let newName = el.name;
                newName = newName.replace('Entertainment: ', '');
                this.categorized['Entertainment'].push({...el, name: newName});
            } else if (el.name.includes('Science')) {
                let newName = el.name;
                newName = newName.replace('Science: ', '');
                this.categorized['Science'].push({...el, name: newName});
            } else {
                this.categorized['Others'].push(el);
            }
        });
        this.categorizedKeys = Object.keys(this.categorized);
        console.log(this.categorized, this.categorizedKeys);
    }

}
