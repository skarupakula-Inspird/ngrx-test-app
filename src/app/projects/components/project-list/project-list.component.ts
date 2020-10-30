import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {EntityMap, Field} from '../../../core/models/models';
import {map} from 'rxjs/operators';
import {getAllVisibleFields} from '../../../core/util/entitymap-to-treenode.converter';
import * as ProjectSelectors from './../../store/project.selectors';
import * as ProjectActions from './../../store/project.actions';
import * as _ from 'lodash';
import {SelectPlatform} from 'src/app/platforms/store/platforms.actions';
import {InspirdStoreService} from '../../../core/store/inspird.store';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

    platformColumnsForSideNav = ['No.', 'Title'];
    
    platforms$: Observable<Array<EntityMap>> = new Observable<Array<EntityMap>>(null);
    columns$: Observable<Array<Field>> = new Observable<Array<Field>>();
    
    projects$: Observable<Array<EntityMap>> = new Observable<Array<EntityMap>>(null);
    projectColumns$: Observable<Array<Field>> = new Observable<Array<Field>>();

    constructor(private store: InspirdStoreService) {
        /*this.projects$ = this.store.select()
            .pipe(
                map((projectMap) => _.values(projectMap)),
            );
        this.platforms$ = this.store.select(ProjectSelectors.selectAllPlatforms)
            .pipe(
                map((projectMap) => _.values(projectMap)),
                map(projects => projects.map(project => Object.assign({}, project)))
            );*/
    }

    ngOnInit(): void {
        this.columns$ = this.platforms$.pipe(
            map(entities => {
                if (entities.length > 0) {
                    return getAllVisibleFields(entities[0])
                        .filter(field => field.showColumn
                            && this.platformColumnsForSideNav.indexOf(field.columnHeading) != -1);
                }
            }));

        this.projectColumns$ = this.projects$.pipe(
            map(entities => {
                if (entities.length > 0) {
                    return getAllVisibleFields(entities[0])
                        .filter(field => field.showColumn && field.columnHeading != 'Attachment');
                }
            }));
    }

    loadProjectsForSelectedPlatform(node: EntityMap) {
        this.store.dispatch(SelectPlatform({node}));
        this.store.dispatch(ProjectActions.GetProjectByPlatformNo({entity: node}));
    }

    // just to keep it working.
    selectedProject(project: EntityMap) {
        console.log(project);
    }

}
