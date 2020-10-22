import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {catchError, map, mergeMap } from 'rxjs/operators';
import {ProjectService} from '../service/project.service';
import * as projectActions from './project.actions';
import {EntityMap} from '../../core/models/models';

@Injectable()
export class ProjectEffects {

    loadProjectsByBasisPlatformNo$ = createEffect(() => {
        return this.actions$.pipe(
                ofType(projectActions.GetProjectByPlatformNo),
                mergeMap((platform: any) => this.projectService.getByPlatform(platform.entity)
                    .pipe(
                        map(projects => (projectActions.ProjectsLoadedSuccess({projects}))),
                        catchError(() => EMPTY)
                    ))
            );
        }
    );

    constructor(
        private actions$: Actions,
        private projectService: ProjectService
    ) {}
}
