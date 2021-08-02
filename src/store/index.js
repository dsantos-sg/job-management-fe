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
    newJob: {
      jobDescription: {
        jobTitle: "",
        jobCode: "",
        jobLink: "",
        priority: "",
        publishDate: "",
        closeDate: "",
        jobDetail: "",
        jobRequirements: "",
        contractType: "",
        salaryOffer: "",
        benefits: [],
        tags: [],
        additionalInfos: "",
      },
      company: {
        companyName: "",
        website: "",
        phone: [],
        email: [],
        geospatialData: {
          type: "Point",
          coordinates: [0, 0],
        },
        distanceFromHome: "",
        aboutUs: "",
        additionalInfos: "",
      },
      contacts: [
        {
          contactFirstName: "",
          contactLastName: "",
          role: "",
          phone: [],
          email: [],
          additionalInfos: "",
        },
      ],
      application: {
        sent: true,
        applicationDate: "",
        additionalInfos: "",
      },
      interviews: [
        {
          scheduled: true,
          interviewDateTime: "",
          geospatialData: {
            type: "Point",
            coordinates: [0, 0],
          },
          participants: [],
          additionalInfos: "",
        },
      ],
      followUp: {
        overview: {
          ApplicationSent: "",
          ScheduledInterview: "",
          FinalAnswer: "",
          RegisteredJob: "",
          CompanyFeedback: "",
        },
        status: "",
        companyFeedbackDate: "",
        salaryOffer: "",
        proposedSalary: "",
        difference: "",
        rating: "",
        comments: [],
      },
    },
  },
  getters: {
    jobItems: (state) => {
      return state.jobs;
    },
    drawerStatus: (state) => {
      return state.navigationDrawerState;
    },
    loginStatus: (state) => {
      return state.loggedIn;
    },
  },
  mutations: {
    ADD_NEW_JOB(state, job) {
      state.jobs = job;
    },
    SET_JOB_ITEMS(state, jobItems) {
      state.jobs = jobItems;
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
    //New job description
    SET_NEW_JOB_DESCRIPTION_TITLE(state, payload) {
      state.newJob.jobDescription.jobTitle = payload.newJobDescriptionTitle;
    },
    SET_NEW_JOB_DESCRIPTION_CODE(state, payload) {
      state.newJob.jobDescription.jobCode = payload.newJobDescriptionCode;
    },
    SET_NEW_JOB_DESCRIPTION_LINK(state, payload) {
      state.newJob.jobDescription.jobLink = payload.newJobDescriptionLink;
    },
    SET_NEW_JOB_DESCRIPTION_CONTRACT_TYPE(state, payload) {
      state.newJob.jobDescription.contractType =
        payload.newJobDescriptionContractType;
    },
    SET_NEW_JOB_DESCRIPTION_ADDITIONAL_INFOS(state, payload) {
      state.newJob.jobDescription.additionalInfos =
        payload.newJobDescriptionAdditionalInfos;
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
        context.commit("SET_JOB_ITEMS", jobs);
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
  },
  modules: {},
});
