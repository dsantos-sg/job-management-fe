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
              v-model="newCompany.companyName"
              label="Company name"
              placeholder="Company Name"
              outlined
              rounded
              clearable
              @blur="updateWithEmit"
            ></v-text-field>
            <v-text-field
              v-model="newCompany.webSite"
              label="Website"
              placeholder="Web-site"
              outlined
              rounded
              clearable
              @blur="updateWithEmit"
            ></v-text-field>
            <jm-multi-text-field-list
              item-name="Phone"
              @getListItems="newCompany.phone = $event"
            />
            <jm-multi-text-field-list
              item-name="Email"
              @getListItems="newCompany.email = $event"
            />
            <v-text-field
              label="Address"
              placeholder="Address"
              outlined
              rounded
              clearable
            ></v-text-field>
            <v-text-field
              v-model="newCompany.distanceFromHome"
              label="Distance from Home"
              placeholder="Distance from Home"
              outlined
              rounded
              clearable
            ></v-text-field>
            <v-textarea
              v-model="newCompany.aboutUs"
              outlined
              clearable
              auto-grow
              rounded
              rows="6"
              label="About us"
              name="AboutUs"
              @blur="updateWithEmit"
            ></v-textarea>
            <v-textarea
              v-model="newCompany.additionalInfos"
              outlined
              clearable
              auto-grow
              rounded
              rows="4"
              label="Additional infos"
              name="AdditionalInfos"
              @blur="updateWithEmit"
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
      newCompany: {
        companyName: "",
        webSite: "",
        phone: "",
        email: "",
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
  methods: {
    updateWithEmit() {
      this.$emit("setNewCompany", this.newCompany);
      console.log("company emit");
    },
    updateJob() {
      if (this.updateThisJob) {
        this.newCompany = this.selectedCompany;
      }
    },
  },
  beforeMount() {
    this.updateJob();
  },
};
</script>

<style scoped></style>
