import {Action, createReducer, on } from '@ngrx/store';
import PlatformState, { initialPlatformState } from './platform.state';
import * as PlatformActions from './platforms.actions';
import {EntityMap} from '../../core/models/models';
import * as _ from 'lodash';

const platformReducer = createReducer(
    initialPlatformState,
    on(PlatformActions.PlatformsLoadedSuccess, (state, {platforms}) => {

        const storedPlatforms = _.values(state.platforms);
        if(storedPlatforms.length > 0) {
            platforms = platforms.concat(storedPlatforms);
        }

        const platformsByKey = _.keyBy(platforms, 'number');

        return {...state, platforms: platformsByKey};
    }),
    on(PlatformActions.SelectPlatform, (state, {node}) => {
        state = {...state, selectedPlatform: node.number};
        return state;
    }),
);

export function reducer(state: PlatformState | undefined, action: Action) {
    return platformReducer(state, action);
}


export const PLATFORM_KEY = 'platforms';
