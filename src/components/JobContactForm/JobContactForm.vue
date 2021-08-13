<template>
  <div>
    <v-card
      elevation="12"
      rounded="xl"
      v-for="(item, index) in contacts"
      :key="index"
      class="mb-8"
    >
      <v-card-title>
        <v-spacer />
        <h3 class="font-weight-light">Contact #{{ index + 1 }}</h3>
        <v-spacer />
        <v-btn fab plain small @click.stop="removeThisContact(index)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="pa-sm-3 pa-md-8 pa-lg-10 pa-xl-12">
        <v-text-field
          :value="contacts[index].contactFirstName"
          label="First name"
          outlined
          rounded
          clearable
          @input="updateFirstName(index)"
        ></v-text-field>
        <v-text-field
          :value="contacts[index].contactLastName"
          label="Last name"
          rounded
          outlined
          clearable
          @input="updateLastName(index)"
        ></v-text-field>
        <v-text-field
          :value="contacts[index].role"
          label="Role"
          rounded
          outlined
          clearable
          @input="updateRole(index)"
        ></v-text-field>
        <jm-multi-text-field-list
          item-name="Phone"
          @getListItems="contacts[index].phone = $event"
          @change="updateWithEmit"
        />
        <jm-multi-text-field-list
          item-name="Email"
          @getListItems="contacts[index].email = $event"
          @change="updateWithEmit"
        />
        <v-textarea
          :value="contacts[index].additionalInfo"
          outlined
          clearable
          auto-grow
          rounded
          rows="4"
          label="Additional infos"
          @input="updateAdditionalInfos(index)"
        ></v-textarea>
      </v-card-text>
    </v-card>
    <v-card-actions class="justify-center">
      <v-btn
        color="secondary"
        large
        rounded
        min-width="250"
        @click="addNewContact"
      >
        add a new contact
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import JmMultiTextFieldList from "@/components/JmMultiTextFieldList/JmMultiTextFieldList";

export default {
  name: "JobContactForm",
  props: ["selectedJob"],
  components: { JmMultiTextFieldList },
  data() {
    return {
      contacts: [
        {
          contactFirstName: "",
          contactLastName: "",
          role: "",
          phone: "",
          email: "",
          additionalInfo: "",
        },
      ],
      dialog: false,
    };
  },
  computed: {
    compFirstName: {
      get() {
        return this.selectedJob.contactFirstName;
      },
      set(val) {
        this.contacts.additionalInfos = val;
      },
    },
    compLastName: {
      get() {
        return this.selectedJob.additionalInfos;
      },
      set(val) {
        this.company.additionalInfos = val;
      },
    },
    compRole: {
      get() {
        return this.selectedJob.additionalInfos;
      },
      set(val) {
        this.company.additionalInfos = val;
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
    addNewContact() {
      const newContact = {};
      this.contacts.push(newContact);
    },
    removeThisContact(index) {
      alert("Remove this contact");
      this.contacts.splice(index, 1);
    },
    updateWithEmit() {
      this.$emit("setContact", this.contacts);
    },
    updateFirstName(e, index) {
      this.contacts[index].contactFirstName = e;
    },
    updateLastName(e, index) {
      this.contacts[index].contactLastName = e;
    },
    updateRole(e, index) {
      this.contacts[index].role = e;
    },
    updateAdditionalInfos(e, index) {
      this.contacts[index].additionalInfo = e;
    },
  },
  updated() {
    this.updateWithEmit();
  },
};
</script>

<style scoped></style>
