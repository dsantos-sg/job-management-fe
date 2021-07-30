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
          <v-card-text class="mt-2">
            <v-alert rounded="xl" outlined color="grey" class="mb-8">
              <v-card-subtitle class="ml-n5 mt-n3">Overview</v-card-subtitle>
              <v-card flat class="my-5 d-flex align-center jus">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      fab
                      small
                      v-bind="attrs"
                      v-on="on"
                      class="pa-3"
                      color="primary"
                    >
                      <v-icon>mdi-text-box-check</v-icon>
                    </v-btn>
                  </template>
                  <span
                    >Registered job <br />
                    on 32/02/2011</span
                  >
                </v-tooltip>
                <v-divider />
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      fab
                      small
                      v-bind="attrs"
                      v-on="on"
                      class="pa-3"
                      color="primary"
                    >
                      <v-icon>mdi-file-send</v-icon>
                    </v-btn>
                  </template>
                  <span>Application sent</span>
                </v-tooltip>
                <v-divider />
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      fab
                      small
                      v-bind="attrs"
                      v-on="on"
                      class="pa-3"
                      color="primary"
                    >
                      <v-icon>mdi-phone-incoming</v-icon>
                    </v-btn>
                  </template>
                  <span>Application feedback</span>
                </v-tooltip>
                <v-divider />
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      fab
                      small
                      v-bind="attrs"
                      v-on="on"
                      class="pa-3"
                      color="primary"
                      disabled
                    >
                      <v-icon>mdi-calendar-cursor</v-icon>
                    </v-btn>
                  </template>
                  <span>Interview scheduled</span>
                </v-tooltip>
                <v-divider />
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      fab
                      small
                      v-bind="attrs"
                      v-on="on"
                      class="pa-3"
                      color="primary"
                      disabled
                    >
                      <v-icon>mdi-account-question</v-icon>
                    </v-btn>
                  </template>
                  <span>Final result</span>
                </v-tooltip>
              </v-card>
              <v-card-subtitle class="ml-n5 mt-3 mb-n5">Status</v-card-subtitle>
              <v-radio-group v-model="status">
                <v-radio label="In progress" />
                <v-radio label="Approved" />
                <v-radio label="Rejected" />
                <v-radio label="Abandoned" />
              </v-radio-group>
            </v-alert>
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="firstCompanyFeedback"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  outlined
                  v-model="firstCompanyFeedback"
                  label="First company feedback"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  clearable
                  rounded
                  hint="25 days without a company feedback"
                  persistent-hint
                  class="my-5"
                ></v-text-field>
              </template>
              <v-date-picker v-model="firstCompanyFeedback" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog.save(firstCompanyFeedback)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
            <v-text-field
              v-model="salaryOffer"
              label="Salary Offer (Year)"
              placeholder="Salary Offer (Year)"
              outlined
              rounded
              clearable
            ></v-text-field>
            <v-text-field
              v-model="proposedSalary"
              label="Proposed Salary (Year)"
              placeholder="Proposed Salary (Year)"
              outlined
              rounded
              clearable
            ></v-text-field>
            <v-text-field
              v-model="salaryDifference"
              label="Difference"
              placeholder="Difference"
              outlined
              rounded
              clearable
            ></v-text-field>
            <v-card flat class="mb-8">
              <v-alert outlined rounded="xl" color="grey">
                <v-card-subtitle class="ml-n5 mt-n3">Rating</v-card-subtitle>
                <v-rating
                  v-model="jobRating"
                  color="grey darken-3"
                  background-color="grey darken-1"
                  hover
                  large
                  dense
                ></v-rating>
              </v-alert>
            </v-card>
            <v-card flat class="mb-5">
              <v-alert outlined rounded="xl" color="grey">
                <v-card-subtitle class="ml-n5 mt-n3">Comments</v-card-subtitle>
                <v-textarea
                  auto-grow
                  rows="1"
                  v-model="tempComment.comment"
                  clearable
                  rounded
                  outlined
                  label="Comment"
                  name="Comment"
                  append-outer-icon="mdi-send"
                  @click:append-outer="addNewComment"
                />
                <v-card
                  rounded="xl"
                  class="mb-10"
                  elevation="12"
                  v-for="(item, index) in comments"
                  :key="index"
                >
                  <v-card-subtitle>
                    <h3 class="font-weight-regular">
                      {{
                        comments[index].commentDateTime.toString().substr(0, 24)
                      }}
                    </h3>
                  </v-card-subtitle>
                  <v-card-text>
                    <v-textarea
                      rounded
                      auto-grow
                      rows="1"
                      flat
                      readonly
                      :value="comments[index].comment"
                    >
                    </v-textarea>
                  </v-card-text>
                </v-card>
              </v-alert>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "JmFollowUp",
  data() {
    return {
      status: "",
      firstCompanyFeedback: "",
      modal: false,
      salaryOffer: "",
      proposedSalary: "",
      salaryDifference: "",
      jobRating: "",
      myLabel: Date().toString().substr(0, 10),
      tempComment: {
        comment: "",
        commentDateTime: new Date(),
      },
      comments: [],
    };
  },
  methods: {
    addNewComment() {
      if (this.tempComment.comment) {
        this.comments.push(this.tempComment);
        this.tempComment = new Object();
        // this.tempComment.comment = "";
        this.tempComment.commentDateTime = new Date();
      }
    },
  },
};
</script>

<style scoped></style>
