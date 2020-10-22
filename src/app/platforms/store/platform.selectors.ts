import {createSelector} from '@ngrx/store';
import PlatformState from './platform.state';
import AppState from '../../core/store/app.state';

export const platforms = (state: AppState) => state.platforms;

export const selectAllPlatforms = createSelector(
    platforms,
    (state: PlatformState) => state.platforms
);


export const selectedPlatform = createSelector(
    platforms,
    (state: PlatformState) => state.selectedPlatform
);
