import { types } from "./gridTypes";
export const actions = {
  
  changeTab(tabIndex) {
    return (dispatch, getState) => {
      let state = getState();
      let currentViewIndex = state.currentViewInfo.index;
      let currentView = state.allViews[currentViewIndex];
      let viewId = state.currentViewInfo.id;
      let grid = currentView.allGrids[tabIndex];
      let gridId = grid.id;
      let gridUrl = grid.url;
      let fetchAgain = grid.fetchAgain;

      dispatch(actions.setTabIndex(tabIndex));

      if (fetchAgain) {
        dispatch(actions.fetchGridData(viewId, gridId, gridUrl));
      }
    };
  },

  setTabIndex(tabIndex) {
    return {
      type: types.SET_TAB_INDEX,
      payload: tabIndex,
    };
  },

  fetchGridData(viewId, gridId, url) {
    return (dispatch) => {
      fetch(url)
        .then((response) => {
          return response.json().then((rowData) => {
            dispatch(actions.fetchGridDataSuccess(viewId, gridId, rowData));
          });
        })
        .catch((err) => {
          dispatch(actions.fetchGridDataFail(err));
        });
    };
  },

  fetchGridDataSuccess(viewId, gridId, rowData) {
    return (dispatch) => {
      dispatch(actions.setGridData(viewId, gridId, rowData));
      dispatch(actions.setGridFetchAgainToFalse(viewId, gridId));
    };
  },

  fetchGridDataFail(err) {
    new Error(err, " <<<< FETCH GRID DATA FAIL");
  },


  setGridData(viewId, gridId, newData) {
    return {
      type: types.SET_GRID_DATA,
      payload: { viewId, gridId, newData },
    };
  },

  setGridFetchAgainToFalse(viewId, gridId) {
    return {
      type: types.SET_GRID_FETCH_AGAIN_TO_FALSE,
      payload: { viewId, gridId },
    };
  },


  saveGridSortModel(gridId, sortModel) {
    return {
      type: types.SAVE_GRID_SORT_MODEL,
      payload: { gridId, sortModel },
    };
  },
  saveGridFilterModel(gridId, filterModel) {
    return {
      type: types.SAVE_GRID_FILTER_MODEL,
      payload: { gridId, filterModel },
    };
  },
  
};
