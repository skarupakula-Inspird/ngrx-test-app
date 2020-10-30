import {createSelector} from '@ngrx/store';
import AppState from '../../core/store/app.state';
import ProjectState from './project.state';
import * as _ from 'lodash';
export const appState = (state: AppState) => state;
export const projects = (state: AppState) => state.projects;
export const platforms = (state: AppState) => state.platforms;

export const selectedPlatform = createSelector(
    appState,
    (state: AppState) => state.platforms.selectedPlatform
);


export const selectAllPlatforms = createSelector(
    appState,
    (state: AppState) => state.platforms.platforms
);



export const selectedProject = createSelector(
    projects,
    (state: ProjectState) => state.selectedProject
);
