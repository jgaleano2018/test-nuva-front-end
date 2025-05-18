import http from "../http-common-tasks";

class TaskDataService {
  getAll() {
    return http.get("/use-firebase/tasks");
  }

  get(id) {
    return http.get(`/use-firebase/tasks/${id}`);
  }

  create(data) {
    return http.post("/use-firebase/tasks", data);
  }

  update(id, data) {
    return http.put(`/use-firebase/tasks/${id}`, data);
  }

  delete(id) {
    return http.delete(`/use-firebase/tasks/${id}`);
  }

}

export default new TaskDataService();