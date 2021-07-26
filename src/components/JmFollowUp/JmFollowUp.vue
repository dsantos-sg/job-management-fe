<template>
  <v-card flat>
    <v-card-title>Follow up</v-card-title>
    <v-card-text>
      <v-alert outlined color="grey">
        <v-card-subtitle class="ml-n5 mt-n3">Overview </v-card-subtitle>
        <v-card flat class="my-5 d-flex align-center jus">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                fab
                small
                v-bind="attrs"
                v-on="on"
                class="pa-3"
                color="info"
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
                color="info"
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
                color="info"
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
                color="secondary"
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
                color="secondary"
              >
                <v-icon>mdi-account-question</v-icon>
              </v-btn>
            </template>
            <span>Final result</span>
          </v-tooltip>
        </v-card>
        <v-card-subtitle class="ml-n5 mt-3 mb-n5">Status </v-card-subtitle>
        <v-radio-group v-model="status">
          <v-radio label="In progress" />
          <v-radio label="Approved" />
          <v-radio label="Rejected" />
          <v-radio label="Abandoned" />
        </v-radio-group>
      </v-alert>
      <!--      <v-menu-->
      <!--        v-model="menu1stCompanyFeedback"-->
      <!--        :close-on-content-click="false"-->
      <!--        :nudge-right="40"-->
      <!--        transition="scale-transition"-->
      <!--        offset-y-->
      <!--        min-width="auto"-->
      <!--      >-->
      <!--        <template v-slot:activator="{ on, attrs }">-->
      <!--          <v-text-field-->
      <!--            outlined-->
      <!--            v-model="newJob.followUp.companyFeedbackDate"-->
      <!--            label="1st company feedback date"-->
      <!--            readonly-->
      <!--            v-bind="attrs"-->
      <!--            v-on="on"-->
      <!--            class="mt-5 mb-3"-->
      <!--            hint="25 days waiting a company feedback"-->
      <!--            persistent-hint-->
      <!--          ></v-text-field>-->
      <!--        </template>-->
      <!--        <v-date-picker-->
      <!--          v-model="newJob.followUp.companyFeedbackDate"-->
      <!--          @input="menu1stCompanyFeedback = false"-->
      <!--          scrollable-->
      <!--        ></v-date-picker>-->
      <!--      </v-menu>-->
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
          ></v-text-field>
        </template>
        <v-date-picker v-model="firstCompanyFeedback" scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
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
        clearable
      ></v-text-field>
      <v-text-field
        v-model="proposedSalary"
        label="Proposed Salary (Year)"
        placeholder="Proposed Salary (Year)"
        outlined
        clearable
      ></v-text-field>
      <!-- TODO check read-only status -->
      <v-text-field
        v-model="salaryDifference"
        label="Difference"
        placeholder="Difference"
        outlined
        clearable
      ></v-text-field>
      <v-card flat class="mb-5">
        <v-alert outlined color="grey">
          <v-card-subtitle class="ml-n5 mt-n3">Rating </v-card-subtitle>
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
        <v-alert outlined color="grey">
          <v-card-title class="ml-n5 mt-n3">Comments </v-card-title>
          <v-card outlined class="pa-5">
            <v-textarea
              auto-grow
              rows="1"
              v-model="tempComment.comment"
              outlined
              clearable
              label="Comment"
              name="Comment"
              append-outer-icon="mdi-send"
              @click:append-outer="addNewComment"
            />
          </v-card>
          <v-card
            outlined
            class="my-5"
            v-for="(item, index) in comments"
            :key="index"
          >
            <v-card-text>
              <h3>
                {{ comments[index].commentDateTime.toString().substr(0, 24) }}
              </h3>

              <v-textarea
                auto-grow
                rows="1"
                solo
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
