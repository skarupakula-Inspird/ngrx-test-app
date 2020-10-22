import {EntityMap} from '../../core/models/models';

export default interface PlatformState {
    platforms: { [key: string]: EntityMap };
    selectedPlatform: string;
}

export const initialPlatformState : PlatformState = {
        platforms: {},
        selectedPlatform: null,
};
