import {getTasksAction, getTasks, createTasks} from "./allActions"


describe("All Actions", () => {
    test(" getTasksAction", () => {
        const expectedResult = {
            type: "GET_TASKS",
            payload: {
                tasks: []
            }
          };
          const result = getTasksAction([]);
          expect(expectedResult).toMatchObject(result);
        });
    });

