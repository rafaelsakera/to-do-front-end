import * as ActiosType from "./ActionCases";

export const openNewtaskModal = (open: boolean) => {
  return {
    type: ActiosType.OPEN_NEW_TASK_MODAL,
    openNewTaskModal: open,
  };
};
