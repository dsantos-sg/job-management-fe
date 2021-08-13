<template>
  <v-card elevation="12" rounded="xl">
    <v-card-title>
      <h3 class="font-weight-light mx-auto">Company</h3>
    </v-card-title>
    <v-card-text class="pa-sm-3 pa-md-8 pa-lg-10 pa-xl-12">
      <v-text-field
        v-model="compCompanyName"
        label="Company name"
        outlined
        rounded
        clearable
      ></v-text-field>
      <v-text-field
        v-model="compWebSite"
        label="Website"
        outlined
        rounded
        clearable
      ></v-text-field>
      <jm-multi-text-field-list
        item-name="Phone"
        @getListItems="company.phone = $event"
      />
      <jm-multi-text-field-list
        item-name="Email"
        @getListItems="company.email = $event"
      />
      <v-text-field label="Address" outlined rounded clearable></v-text-field>
      <v-text-field
        label="Distance from Home"
        outlined
        rounded
        clearable
      ></v-text-field>
      <v-textarea
        v-model="compAboutUs"
        outlined
        clearable
        auto-grow
        rounded
        rows="6"
        label="About us"
      ></v-textarea>
      <v-textarea
        v-model="compAdditionalInfos"
        outlined
        clearable
        auto-grow
        rounded
        rows="4"
        label="Additional infos"
      ></v-textarea>
    </v-card-text>
  </v-card>
</template>

<script>
import JmMultiTextFieldList from "@/components/JmMultiTextFieldList/JmMultiTextFieldList";

export default {
  name: "JobCompanyForm",
  props: ["selectedJob"],
  components: { JmMultiTextFieldList },
  data() {
    return {
      company: {
        companyName: "",
        webSite: "",
        phone: [],
        email: [],
        geospatialData: {
          type: "Point",
          coordinates: [48.69548, 8.99777],
        },
        distanceFromHome: "",
        aboutUs: "",
        additionalInfos: "",
      },
    };
  },
  computed: {
    compCompanyName: {
      get() {
        return this.selectedJob.companyName;
      },
      set(val) {
        this.company.companyName = val;
      },
    },
    compWebSite: {
      get() {
        return this.selectedJob.webSite;
      },
      set(val) {
        this.company.webSite = val;
      },
    },
    compDistanceFromHome: {
      get() {
        return this.selectedJob.distanceFromHome;
      },
      set(val) {
        this.company.distanceFromHome = val;
      },
    },
    compAboutUs: {
      get() {
        return this.selectedJob.aboutUs;
      },
      set(val) {
        this.company.aboutUs = val;
      },
    },
    compAdditionalInfos: {
      get() {
        return this.selectedJob.additionalInfos;
      },
      set(val) {
        this.company.additionalInfos = val;
      },
    },
  },
  methods: {
    updateWithEmit() {
      this.$emit("setCompany", this.company);
    },
  },
  updated() {
    this.updateWithEmit();
  },
};
</script>

<style scoped></style>
