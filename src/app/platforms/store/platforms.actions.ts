// load all platforms
import {createAction, props} from '@ngrx/store';
import {EntityMap} from '../../core/models/models';

export const GetAllPlatforms = createAction(
    '[Inspird] - Load all Platforms'
);

export const PlatformsLoadedSuccess = createAction(
    '[Inspird] - Platforms loaded successfully',
    props<{ platforms: Array<EntityMap> }>()
);

export const PlatformsLoadingFailed = createAction(
    '[Inspird] - Platforms loading failed'
);

export const SelectPlatform = createAction(
    '[Inspird] - Select a Platform',
    props<{ node: EntityMap }>()
);

export const DeleteAPlatform = createAction(
    '[Inspird] - Delete a platform',
    props<{ node: EntityMap }>()
);

export const PlatformDeletedSuccessfully = createAction(
    '[Inspird] - Delete a platform from store',
    props<{ node: EntityMap }>()
);


