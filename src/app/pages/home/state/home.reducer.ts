import { createReducer, Action, on } from '@ngrx/store';

import * as fromHomeActions from './home.actions';

export interface HomeState {
    entity: any;
    loading: boolean;
    error: boolean;
}

export const homeInicialState: HomeState = {
    entity: undefined,
    loading: false,
    error: false
}

const reducer = createReducer(
    homeInicialState,
    on(fromHomeActions.clearHomeState, () => homeInicialState),
    on(fromHomeActions.loadCurrentWeather, state => ({
        ...state,
        loading: true,
        error: false
    })),
    on(fromHomeActions.loadCurrentWeatherSuccess, (state, { entity }) => ({
        ...state,
        entity,
        loading: false
    })),
    on(fromHomeActions.loadCurrentWeatherFail, state => ({
        ...state,
        loading: false,
        error: true
    })),
);

export function homeReducer(state: HomeState | undefined, action: Action): HomeState {
    return reducer(state, action);
}