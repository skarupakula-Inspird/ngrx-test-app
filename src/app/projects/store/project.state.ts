import {EntityMap} from '../../core/models/models';

export default interface ProjectState {
    projects: { [key: string]: EntityMap };
    selectedProject: string;
}

export const initialProjectState: ProjectState = {
    projects: {},
    selectedProject: null,
};
