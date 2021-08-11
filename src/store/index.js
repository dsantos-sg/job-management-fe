import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const URL = "http://localhost:8080/api/jobs/";

export default new Vuex.Store({
  state: {
    jobs: [],
    navigationDrawerState: false,
    loggedIn: false,
    resetNewJob: false,
  },
  getters: {
    jobItems: (state) => {
      return state.jobs;
    },
    jobItemById: (state) => (id) => {
      return state.jobs.find((job) => job.id === id);
    },
    drawerStatus: (state) => {
      return state.navigationDrawerState;
    },
    loginStatus: (state) => {
      return state.loggedIn;
    },
    resetNewJobStatus: (state) => {
      return state.resetNewJob;
    },
  },
  mutations: {
    ADD_NEW_JOB(state, job) {
      state.jobs = job;
    },
    GET_JOB_ITEMS(state, jobItems) {
      state.jobs = jobItems;
    },
    UPDATE_JOB_BY_ID(state, job) {
      const index = state.jobs.findIndex((s) => s.id == job.id);
      Vue.set(state.jobs, index, job);
    },
    TOGGLE_DRAWER(state) {
      state.navigationDrawerState = !state.navigationDrawerState;
    },
    SET_LOGIN(state) {
      state.loggedIn = true;
    },
    SET_LOGOUT(state) {
      state.loggedIn = false;
    },
    RESET_NEW_JOB(state) {
      state.resetNewJob = !state.resetNewJob;
    },
  },
  actions: {
    // loadJobsData({ commit }) {
    //   axios
    //     .get(URL, {
    //       headers: {
    //         "Content-type": "application/json",
    //       },
    //     })
    //     .then((response) => response.data)
    //     .then((jobItems) => {
    //       console.log("Jobs list");
    //       console.log(jobItems);
    //       commit("SET_JOB_ITEMS", jobItems);
    //     });
    // },
    async loadJobsData(context) {
      try {
        const jobs = (
          await axios.get(URL, {
            headers: { "Content-type": "application/json" },
          })
        ).data;
        context.commit("GET_JOB_ITEMS", jobs);
      } catch (error) {
        context.commit("showError", error);
      }
    },
    async addNewJobData(context, job) {
      const newJob = (await axios.post("http://localhost:8080/api/jobs/", job))
        .data;
      context.commit("ADD_NEW_JOB", newJob);
      alert("new job add successfully");
    },
    async updateJob(context, { id, job }) {
      const jobEditing = (
        await axios.patch(`http://localhost:8080/api/jobs/${id}`, job)
      ).data;
      context.commit("UPDATE_JOB_BY_ID", jobEditing);
      alert("Job is updated successfully");
    },
  },
  modules: {},
});
