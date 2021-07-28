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
              label="Company name"
              placeholder="Company Name"
              outlined
              rounded
              clearable
            ></v-text-field>
            <v-text-field
              label="Website"
              placeholder="Web-site"
              outlined
              rounded
              clearable
            ></v-text-field>
            <jm-multi-text-field-list item-name="Phone" />
            <jm-multi-text-field-list item-name="Email" />
            <v-text-field
              label="Address"
              placeholder="Address"
              outlined
              rounded
              clearable
            ></v-text-field>
            <v-text-field
              label="Distance from Home"
              placeholder="Distance from Home"
              outlined
              rounded
              clearable
            ></v-text-field>
            <v-textarea
              outlined
              clearable
              auto-grow
              rounded
              rows="6"
              label="About us"
              name="AboutUs"
            ></v-textarea>
            <v-textarea
              outlined
              clearable
              auto-grow
              rounded
              rows="4"
              label="Additional infos"
              name="AdditionalInfos"
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
};
</script>

<style scoped></style>
