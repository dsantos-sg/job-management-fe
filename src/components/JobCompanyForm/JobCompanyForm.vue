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
              v-model="newJobCompany.companyName"
              label="Company name"
              placeholder="Company Name"
              outlined
              rounded
              clearable
              @blur="updateWithEmit"
            ></v-text-field>
            <v-text-field
              v-model="newJobCompany.webSite"
              label="Website"
              placeholder="Web-site"
              outlined
              rounded
              clearable
              @blur="updateWithEmit"
            ></v-text-field>
            <jm-multi-text-field-list
              item-name="Phone"
              @getListItems="newJobCompany.phone = $event"
            />
            <jm-multi-text-field-list
              item-name="Email"
              @getListItems="newJobCompany.email = $event"
            />
            <v-text-field
              label="Address"
              placeholder="Address"
              outlined
              rounded
              clearable
            ></v-text-field>
            <v-text-field
              v-model="newJobCompany.distanceFromHome"
              label="Distance from Home"
              placeholder="Distance from Home"
              outlined
              rounded
              clearable
            ></v-text-field>
            <v-textarea
              v-model="newJobCompany.aboutUs"
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
              v-model="newJobCompany.additionalInfos"
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
  components: { JmMultiTextFieldList },
  data() {
    return {
      newJobCompany: {
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
      this.$emit("setNewCompany", this.newJobCompany);
      console.log("company emit");
    },
  },
};
</script>

<style scoped></style>
