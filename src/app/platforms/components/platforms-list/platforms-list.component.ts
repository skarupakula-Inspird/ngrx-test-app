import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {EntityMap, Field} from '../../../core/models/models';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as platformsActions from '../../store/platforms.actions';
import * as platformsSelectors from '../../store/platform.selectors';
import * as _ from 'lodash';
import AppState from '../../../core/store/app.state';
import {getAllVisibleFields} from '../../../core/util/entitymap-to-treenode.converter';
import {InspirdStoreService} from '../../../core/store/inspird.store';

@Component({
    selector: 'app-platforms-list',
    templateUrl: './platforms-list.component.html',
    styleUrls: ['./platforms-list.component.css']
})
export class PlatformsListComponent implements OnInit {

    platforms$: Observable<Array<EntityMap>> = new Observable<Array<EntityMap>>(null);
    columns$: Observable<Array<Field>> = new Observable<Array<Field>>();
    selectedPlatform: EntityMap = null;

    constructor(private store: InspirdStoreService) {
        this.store.dispatch(platformsActions.GetAllPlatforms());
        this.platforms$ = this.store.select(platformsSelectors.selectAllPlatforms)
            .pipe(
                map((platformMap) => _.values(platformMap)),
            );
    }

    ngOnInit(): void {
        this.columns$ = this.platforms$.pipe(
            map(entities => {
                if (entities.length > 0) {
                    return getAllVisibleFields(entities[0])
                        .filter(field => field.showColumn && field.columnHeading != 'Attachment')
                        .sort((field1, field2) => field1.columnOrder - field2.columnOrder);
                }
            })
        );

    }

    selectPlatform($event: EntityMap) {
        this.selectedPlatform = $event;
        this.store.dispatch(platformsActions.SelectPlatform({node: this.selectedPlatform}));
    }
}
