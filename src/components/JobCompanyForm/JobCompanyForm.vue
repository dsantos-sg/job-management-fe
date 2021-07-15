<template>
  <v-card flat>
    <v-card-title> Add a new company</v-card-title>
    <v-card-text>
      <v-text-field
        label="Company name"
        placeholder="Company Name"
        outlined
        clearable
      ></v-text-field>
      <!--    <v-text-field-->
      <!--      label="Industry"-->
      <!--      placeholder="Industry"-->
      <!--      outlined-->
      <!--    ></v-text-field>-->
      <v-text-field
        label="Website"
        placeholder="Web-site"
        outlined
        clearable
      ></v-text-field>
      <jm-multi-text-field-list item-name="Phone" />
      <!--      <v-alert outlined color="grey" class="mb-8 pt-8 px-5">-->
      <!--        <v-text-field-->
      <!--          v-model="newPhone"-->
      <!--          label="Phone"-->
      <!--          placeholder="Phone"-->
      <!--          outlined-->
      <!--          clearable-->
      <!--          append-outer-icon="mdi-plus-box"-->
      <!--          @click:append-outer="addNewPhone"-->
      <!--        ></v-text-field>-->
      <!--        &lt;!&ndash; TODO improve v-for, phone isn't used, why? &ndash;&gt;-->
      <!--        <div v-for="(phone, index) in newJob.company.phone" :key="index">-->
      <!--          <v-text-field-->
      <!--            :value="phone"-->
      <!--            label="Phone"-->
      <!--            placeholder="Phone"-->
      <!--            outlined-->
      <!--            readonly-->
      <!--            append-outer-icon="mdi-minus-box"-->
      <!--            @click:append-outer="removeThisPhone"-->
      <!--          ></v-text-field>-->
      <!--        </div>-->
      <!--      </v-alert>-->
      <!--      <v-alert outlined color="grey" class="mb-8 pt-8 px-5">-->
      <!--        <v-text-field-->
      <!--          v-model="newEmail"-->
      <!--          label="Email"-->
      <!--          placeholder="Email"-->
      <!--          outlined-->
      <!--          clearable-->
      <!--          append-outer-icon="mdi-plus-box"-->
      <!--          @click:append-outer="addNewEmail"-->
      <!--        ></v-text-field>-->
      <!--        &lt;!&ndash; TODO improve v-for, email isn't used, why? &ndash;&gt;-->
      <!--        <div v-for="(email, index) in newJob.company.email" :key="index">-->
      <!--          <v-text-field-->
      <!--            :value="email"-->
      <!--            label="Email"-->
      <!--            placeholder="Email"-->
      <!--            outlined-->
      <!--            readonly-->
      <!--            append-outer-icon="mdi-minus-box"-->
      <!--            @click:append-outer="removeThisEmail"-->
      <!--          ></v-text-field>-->
      <!--        </div>-->
      <!--      </v-alert>-->
      <v-text-field
        label="Address"
        placeholder="Address"
        outlined
        clearable
      ></v-text-field>
      <v-text-field
        label="Distance from Home"
        placeholder="Distance from Home"
        outlined
        clearable
      ></v-text-field>
      <v-textarea
        outlined
        clearable
        auto-grow
        rows="5"
        label="About us"
        name="AboutUs"
      ></v-textarea>
      <v-textarea
        outlined
        clearable
        auto-grow
        rows="5"
        label="Additional infos"
        name="AdditionalInfos"
      ></v-textarea>
    </v-card-text>
  </v-card>
</template>

<script>
import JmMultiTextFieldList from "@/components/JmMultiTextFieldList/JmMultiTextFieldList";
export default {
  name: "JobCompanyForm",
  components: { JmMultiTextFieldList },
};
</script>

<style scoped></style>
