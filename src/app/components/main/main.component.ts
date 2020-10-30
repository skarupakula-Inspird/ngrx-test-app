import {Component, OnInit} from '@angular/core';
import { InspirdStoreService } from '../../core/store/inspird.store';
import {EntityMap, Field} from '../../core/models/models';
import { GetAllProjects } from './../../projects/store/project.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getAllVisibleFields } from '../../core/util/entitymap-to-treenode.converter';
import * as platformsSelectors from '../../platforms/store/platform.selectors';
import * as _ from 'lodash';
import { PopupService } from '../../core/services/popup.service';
import { SummeryPopupComponent } from '../summery-popup/summery-popup.component';
import { DeleteAPlatform } from '../../platforms/store/platforms.actions';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    platforms$: Observable<Array<EntityMap>> = new Observable<Array<EntityMap>>(null);
    columns$: Observable<Array<Field>> = new Observable<Array<Field>>();
    selectedPlatform: EntityMap = null;
    constructor(private store: InspirdStoreService,
                private popupService: PopupService) {
    }

    openSummery() {
       this.store.dispatch(GetAllProjects());
        

        this.platforms$ = this.store.select(platformsSelectors.summerizedPlatforms);
        const config = {
            height: '800px',
            width: '1200px',
            data: { rows$: this.platforms$
            }
        }
       this.popupService.open(SummeryPopupComponent, config);
    }

    deletePlatform() {
        if(this.selectedPlatform) {
            this.store.dispatch(DeleteAPlatform({node: this.selectedPlatform}))
        } else {
            alert("Select a Platform to Delete")
        }
    }

    ngOnInit(): void {
        
        this.store.select(platformsSelectors.selectedPlatform)
            .subscribe((platform: EntityMap) => this.selectedPlatform = platform);
        
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

}
