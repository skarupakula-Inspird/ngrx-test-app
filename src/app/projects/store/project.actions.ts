// load all platforms
import {createAction, props} from '@ngrx/store';
import {EntityMap} from '../../core/models/models';

export const GetProjectByPlatformNo = createAction(
    '[Inspird] - Load all Projects by basis Platform No',
    props<{entity: EntityMap}>()
);


export const GetAllProjects = createAction(
    '[Inspird] - Load all Projects'
);

export const ProjectsLoadedSuccess = createAction(
    '[Inspird] - Projects loaded successfully',
    props<{projects: Array<EntityMap>}>()
);

export const ProjectsLoadingFailed = createAction(
    '[Inspird] - Projects loading failed'
);

export const SelectProject = createAction(
    '[Inspird] - Select a Project',
        props<{node: EntityMap}>()
);

export const DeleteaProject = createAction(
    '[Inspird] - Delete a Project',
    props<{node: EntityMap}>()
);

