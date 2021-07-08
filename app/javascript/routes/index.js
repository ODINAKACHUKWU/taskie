import TaskListPage from "../pages/TaskList";
import TaskAddPage from "../pages/TaskAdd";
import NotFoundPage from "../pages/NotFound";

export const routes = {
  default: [
    {
      exact: true,
      path: "/",
      component: TaskListPage,
    },
    {
      exact: true,
      path: "/add-task",
      component: TaskAddPage,
    },
    {
      exact: true,
      path: "*",
      component: NotFoundPage,
    },
  ],
};
