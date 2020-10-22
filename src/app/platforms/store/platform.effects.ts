import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {catchError, map, mergeMap } from 'rxjs/operators';
import { PlatformsService } from '../service/platforms.service';
import * as platformActions from './platforms.actions';

@Injectable()
export class PlatfromEffects {

    loadPlatfroms$ = createEffect(() => {
        return this.actions$.pipe(
                ofType(platformActions.GetAllPlatforms),
                mergeMap(() => this.platformService.getAll()
                    .pipe(
                        map(platforms => (platformActions.PlatformsLoadedSuccess({platforms}))),
                        catchError(() => EMPTY)
                    ))
            )
        }
    );

    constructor(
        private actions$: Actions,
        private platformService: PlatformsService
    ) {}
}
