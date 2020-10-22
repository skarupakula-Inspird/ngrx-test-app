import {Action, createReducer, on} from '@ngrx/store';
import ProjectState, {initialProjectState} from './project.state';
import * as PlatformActions from './project.actions';
import * as _ from 'lodash';

const projectReducer = createReducer(
    initialProjectState,
    on(PlatformActions.ProjectsLoadedSuccess, (state, {projects}) => {

        const storeProjects = _.values(state.projects);

        if (storeProjects.length > 0) {
            projects = projects.concat(storeProjects);
        }

        const projectsByKey = _.keyBy(projects, 'number');

        return {...state, projects: projectsByKey};
    }),

    on(PlatformActions.SelectProject, (state, {node}) => {
        state = {...state, selectedProject: node.number};
        return state;
    }),
);

export function reducer(state: ProjectState | undefined, action: Action) {
    return projectReducer(state, action);
}


export const PROJECT_KEY = 'projects';
