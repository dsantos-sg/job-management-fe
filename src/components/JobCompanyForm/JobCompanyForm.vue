<template>
  <v-container>
    <v-row>
      <v-col
        sm="12"
        md="10"
        lg="8"
        xl="6"
        class="d-flex flex-column mx-auto mt-5"
      >
        <v-card elevation="10" rounded="xl">
          <v-card-text class="mt-3">
            <v-text-field
              :value="company.companyName"
              label="Company name"
              outlined
              rounded
              clearable
              @input="updateCompanyName"
            ></v-text-field>
            <v-text-field
              :value="company.webSite"
              label="Website"
              outlined
              rounded
              clearable
              @input="updateWebSite"
            ></v-text-field>
            <jm-multi-text-field-list
              item-name="Phone"
              @getListItems="company.phone = $event"
            />
            <jm-multi-text-field-list
              item-name="Email"
              @getListItems="company.email = $event"
            />
            <v-text-field
              label="Address"
              outlined
              rounded
              clearable
            ></v-text-field>
            <v-text-field
              :value="company.distanceFromHome"
              label="Distance from Home"
              outlined
              rounded
              clearable
              @input="updateDistanceFromHome"
            ></v-text-field>
            <v-textarea
              :value="company.aboutUs"
              outlined
              clearable
              auto-grow
              rounded
              rows="6"
              label="About us"
              @input="updateAboutUs"
            ></v-textarea>
            <v-textarea
              :value="company.additionalInfos"
              outlined
              clearable
              auto-grow
              rounded
              rows="4"
              label="Additional infos"
              @input="updateAdditionalInfos"
            ></v-textarea>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import JmMultiTextFieldList from "@/components/JmMultiTextFieldList/JmMultiTextFieldList";

export default {
  name: "JobCompanyForm",
  props: ["selectedCompany", "updateThisJob"],
  components: { JmMultiTextFieldList },
  data() {
    return {
      company: {
        companyName: this.selectedCompany.companyName,
        webSite: this.selectedCompany.webSite,
        phone: [],
        email: [],
        geospatialData: {
          type: "Point",
          coordinates: [48.69548, 8.99777],
        },
        distanceFromHome: this.selectedCompany.distanceFromHome,
        aboutUs: this.selectedCompany.distanceFromHome,
        additionalInfos: this.selectedCompany.additionalInfos,
      },
    };
  },
  methods: {
    updateWithEmit() {
      this.$emit("setCompany", this.company);
    },
    updateCompanyName(e) {
      this.company.companyName = e;
    },
    updateWebSite(e) {
      this.company.webSite = e;
    },
    updateDistanceFromHome(e) {
      this.company.distanceFromHome = e;
    },
    updateAboutUs(e) {
      this.company.aboutUs = e;
    },
    updateAdditionalInfos(e) {
      this.company.additionalInfos = e;
    },
  },
  updated() {
    this.updateWithEmit();
  },
};
</script>

<style scoped></style>
