import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import keplerGlReducer from 'kepler.gl/reducers';
import {enhanceReduxMiddleware} from 'kepler.gl/middleware';
import appReducer from './app-reducer';

const customizedKeplerGlReducer = keplerGlReducer.initialState({
    uiState: {
      // hide all modals when mounted
      currentModal: null,
      activeSidePanel: 'layer'
    },
    mapState:{
      latitude: 1.142714972,
      longitude: 34.41393654560247,
      zoom: 6
    }
  });

const reducers = combineReducers({
  keplerGl: customizedKeplerGlReducer,
  app: appReducer
});

const middlewares = enhanceReduxMiddleware([]);
const enhancers = [applyMiddleware(...middlewares)];

export default createStore(reducers, {}, compose(...enhancers));