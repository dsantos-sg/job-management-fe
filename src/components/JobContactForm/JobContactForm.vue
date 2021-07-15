<template>
  <v-card flat>
    <v-card-title> Add a contact</v-card-title>
    <v-card
      outlined
      v-for="(item, index) in contacts"
      :key="index"
      class="ma-1"
    >
      <v-card-title>
        Contact #{{ index + 1 }}
        <v-spacer />
        <v-btn fab plain @click.stop="removeThisContact(index)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="First name"
          outlined
          clearable
          v-model="contacts[index].firstName"
        ></v-text-field>
        <v-text-field
          label="Last name"
          v-model="contacts[index].lastName"
          outlined
          clearable
        ></v-text-field>
        <v-text-field
          label="Role"
          v-model="contacts[index].role"
          outlined
          clearable
        ></v-text-field>
        <jm-multi-text-field-list
          item-name="Phone"
          @getListItems="contacts[index].phone = $event"
        />
        <jm-multi-text-field-list
          item-name="Email"
          @getListItems="contacts[index].email = $event"
        />
        <v-textarea
          outlined
          clearable
          auto-grow
          rows="5"
          v-model="contacts[index].additionalInfo"
          label="Additional infos"
          name="AdditionalInfos"
        ></v-textarea>
      </v-card-text>
    </v-card>

    <v-card-actions class="justify-center">
      <v-btn color="primary" @click="addNewContact"> add a new contact </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import JmMultiTextFieldList from "@/components/JmMultiTextFieldList/JmMultiTextFieldList";

export default {
  name: "JobContactForm",
  components: { JmMultiTextFieldList },
  data() {
    return {
      contacts: [
        {
          firstName: "",
          lastName: "",
          role: "",
          phone: "",
          email: "",
          additionalInfo: "",
        },
      ],
      dialog: false,
      // childPhone: [],
    };
  },
  methods: {
    addNewContact() {
      const newContact = new Object();
      this.contacts.push(newContact);
    },
    removeThisContact(index) {
      alert("Remove this contact");
      this.contacts.splice(index, 1);
    },
  },
};
</script>

<style scoped></style>
