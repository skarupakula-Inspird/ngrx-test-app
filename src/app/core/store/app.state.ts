import PlatformState from 'src/app/platforms/store/platform.state';
import ProjectState from 'src/app/projects/store/project.state';


export default interface AppState {
    platforms: PlatformState;
    projects: ProjectState;
}

export const initializeState = (): AppState => {
    return {
        platforms: {
            platforms: {},
            selectedPlatform: null
        },
        projects: {
            projects: {},
            selectedProject: null
        }
    };
};
