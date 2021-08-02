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
        <v-card
          elevation="10"
          rounded="xl"
          v-for="(item, index) in newJobContact.contacts"
          :key="index"
          class="mb-8"
        >
          <v-card-title>
            <h3 class="font-weight-light">Contact #{{ index + 1 }}</h3>
            <v-spacer />
            <v-btn fab plain @click.stop="removeThisContact(index)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="First name"
              outlined
              rounded
              clearable
              v-model="newJobContact.contacts[index].firstName"
              @blur="updateWithEmit"
            ></v-text-field>
            <v-text-field
              label="Last name"
              v-model="newJobContact.contacts[index].lastName"
              rounded
              outlined
              clearable
              @blur="updateWithEmit"
            ></v-text-field>
            <v-text-field
              label="Role"
              v-model="newJobContact.contacts[index].role"
              rounded
              outlined
              clearable
              @blur="updateWithEmit"
            ></v-text-field>
            <jm-multi-text-field-list
              item-name="Phone"
              @getListItems="newJobContact.contacts[index].phone = $event"
              @change="updateWithEmit"
            />
            <jm-multi-text-field-list
              item-name="Email"
              @getListItems="newJobContact.contacts[index].email = $event"
              @change="updateWithEmit"
            />
            <v-textarea
              outlined
              clearable
              auto-grow
              rounded
              rows="4"
              v-model="newJobContact.contacts[index].additionalInfo"
              label="Additional infos"
              name="AdditionalInfos"
              @blur="updateWithEmit"
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import JmMultiTextFieldList from "@/components/JmMultiTextFieldList/JmMultiTextFieldList";

export default {
  name: "JobContactForm",
  components: { JmMultiTextFieldList },
  data() {
    return {
      newJobContact: {
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
      },
      dialog: false,
    };
  },
  methods: {
    addNewContact() {
      const newContact = {};
      this.newJobContact.contacts.push(newContact);
    },
    removeThisContact(index) {
      alert("Remove this contact");
      this.newJobContact.contacts.splice(index, 1);
    },
    updateWithEmit() {
      this.$emit("setNewJobContact", this.newJobContact);
      console.log("job contact emit");
    },
  },
};
</script>

<style scoped></style>
