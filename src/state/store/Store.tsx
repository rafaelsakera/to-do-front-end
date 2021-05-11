import * as ActionType from "../actions/ActionCases";
import updateState from "../utiles/UpdateState";

const initState: {
  navSize: number;
  openNewTaskModal: boolean;
} = {
  navSize: 0,
  openNewTaskModal: false,
};

const store = (state = initState, action: any) => {
  switch (action.type) {
    case ActionType.OPEN_NEW_TASK_MODAL:
      return updateState(state, { openNewTaskModal: action.openNewTaskModal });
    default:
      return state;
  }
};

export default store;
