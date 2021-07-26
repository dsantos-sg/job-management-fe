<template>
  <v-card flat color="transparent" class="d-flex flex-column mt-5">
    <!--    <v-card-title class="transparent my-5 d-flex justify-center">-->
    <!--      <h2 class="font-weight-light text-uppercase">Add New Job</h2>-->
    <!--    </v-card-title>-->

    <v-tabs
      v-model="tab"
      centered
      light
      center-active
      show-arrows
      color="primary"
      background-color="transparent"
    >
      <v-tab>
        <v-icon left> mdi-tools</v-icon>
        Job description
      </v-tab>
      <v-tab>
        <v-icon left> mdi-factory</v-icon>
        Company
      </v-tab>
      <v-tab>
        <v-icon left> mdi-card-account-mail</v-icon>
        Contacts
      </v-tab>
      <v-tab>
        <v-icon left> mdi-file-send</v-icon>
        Application
      </v-tab>
      <v-tab>
        <v-icon left> mdi-calendar-cursor</v-icon>
        Interview
      </v-tab>
      <v-tab>
        <v-icon left> mdi-sync</v-icon>
        Follow-up
      </v-tab>
      <v-tabs-items class="transparent" v-model="tab">
        <!-- JOB DESCRIPTION ------------------------------------------------------------------------------------------>
        <v-tab-item>
          <v-container>
            <v-row class="d-flex justify-center my-5">
              <v-col xl="8" lg="11" md="12">
                <v-card elevation="12" class="mx-3">
                  <!-- SECTION DETAIL -->
                  <v-card flat>
                    <v-card-title>Add the job description</v-card-title>
                    <v-card-text>
                      <v-text-field
                        v-model="newJob.jobDescription.jobTitle"
                        label="Title"
                        placeholder="Title"
                        outlined
                        clearable
                      ></v-text-field>
                      <v-text-field
                        v-model="newJob.jobDescription.jobCode"
                        label="Code"
                        placeholder="Code"
                        outlined
                        clearable
                      ></v-text-field>
                      <v-text-field
                        v-model="newJob.jobDescription.jobLink"
                        label="Link"
                        placeholder="Link"
                        outlined
                        clearable
                      ></v-text-field>
                      <v-alert outlined color="grey" class="mb-7">
                        <!-- TODO Remover item -->
                        <v-card outlined color="transparent">
                          <v-card-title class="ml-n5 mt-n5">
                            <v-avatar
                              size="32"
                              :color="priorityColor"
                              rounded
                              class="ml-5 mt-5 elevation-1"
                            >
                              <v-icon :color="priorityTextColor">
                                {{ priorityIcon }}
                              </v-icon>
                            </v-avatar>
                            <h1 class="subtitle-1 mt-5 ml-2">Priority</h1>
                          </v-card-title>
                          <v-slider
                            v-model="newJob.jobDescription.priority"
                            :max="4"
                            color="grey darken-4"
                            light
                            step="1"
                            ticks="always"
                            tick-size="4"
                            class="mx-3"
                            track-color="grey lighten-1"
                            :tick-labels="priorityItems"
                            @change="priorityChange()"
                          >
                          </v-slider>
                        </v-card>
                      </v-alert>
                      <v-menu
                        v-model="menuPublishDate"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            outlined
                            v-model="newJob.jobDescription.publishDate"
                            label="Publish date"
                            v-bind="attrs"
                            v-on="on"
                            clearable
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="newJob.jobDescription.publishDate"
                          @input="menuPublishDate = false"
                          scrollable
                        ></v-date-picker>
                      </v-menu>

                      <v-menu
                        v-model="menuCloseDate"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            outlined
                            v-model="newJob.jobDescription.closeDate"
                            label="Close date"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            clearable
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="newJob.jobDescription.closeDate"
                          @input="menuCloseDate = false"
                          scrollable
                        ></v-date-picker>
                      </v-menu>

                      <v-textarea
                        v-model="newJob.jobDescription.jobDetail"
                        outlined
                        clearable
                        label="Job details"
                        name="JobDetails"
                      >
                      </v-textarea>

                      <v-textarea
                        v-model="newJob.jobDescription.jobRequirements"
                        outlined
                        clearable
                        label="Job requirements"
                        name="JobRequirements"
                      ></v-textarea>

                      <v-combobox
                        outlined
                        clearable
                        v-model="newJob.jobDescription.contractType"
                        label="Contract type"
                        :items="contractTypeItems"
                      ></v-combobox>

                      <v-text-field
                        v-model="newJob.jobDescription.salaryOffer"
                        label="Salary Offer"
                        placeholder="Salary Offer"
                        outlined
                        clearable
                      ></v-text-field>

                      <v-combobox
                        outlined
                        v-model="newJob.jobDescription.benefits"
                        :items="null"
                        label="Benefits"
                        multiple
                        chips
                        clearable
                      ></v-combobox>

                      <v-combobox
                        outlined
                        v-model="newJob.jobDescription.tags"
                        :items="null"
                        label="Tags"
                        multiple
                        chips
                        clearable
                      ></v-combobox>

                      <v-textarea
                        v-model="newJob.jobDescription.additionalInfos"
                        outlined
                        clearable
                        label="Additional infos"
                        name="AdditionalInfos"
                      ></v-textarea>
                    </v-card-text>
                  </v-card>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn plain color="primary" @click="tab = 1">
                      Next
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <!-- COMPANY -------------------------------------------------------------------------------------------------->
        <v-tab-item>
          <v-container>
            <v-row class="d-flex justify-center my-5">
              <v-col xl="8" lg="11" md="12">
                <v-card elevation="12" class="mx-3">
                  <!-- SECTION DETAIL -->
                  <v-card flat>
                    <v-card-title> Add a new company</v-card-title>
                    <v-card-text>
                      <v-text-field
                        v-model="newJob.company.companyName"
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
                        v-model="newJob.company.website"
                        label="Website"
                        placeholder="Web-site"
                        outlined
                        clearable
                      ></v-text-field>
                      <v-alert outlined color="grey" class="mb-8 pt-8 px-5">
                        <v-text-field
                          v-model="newPhone"
                          label="Phone"
                          placeholder="Phone"
                          outlined
                          clearable
                          append-outer-icon="mdi-plus-box"
                          @click:append-outer="addNewPhone"
                        ></v-text-field>
                        <!-- TODO improve v-for, phone isn't used, why? -->
                        <div
                          v-for="(phone, index) in newJob.company.phone"
                          :key="index"
                        >
                          <v-text-field
                            :value="phone"
                            label="Phone"
                            placeholder="Phone"
                            outlined
                            readonly
                            append-outer-icon="mdi-minus-box"
                            @click:append-outer="removeThisPhone"
                          ></v-text-field>
                        </div>
                      </v-alert>
                      <v-alert outlined color="grey" class="mb-8 pt-8 px-5">
                        <v-text-field
                          v-model="newEmail"
                          label="Email"
                          placeholder="Email"
                          outlined
                          clearable
                          append-outer-icon="mdi-plus-box"
                          @click:append-outer="addNewEmail"
                        ></v-text-field>
                        <!-- TODO improve v-for, email isn't used, why? -->
                        <div
                          v-for="(email, index) in newJob.company.email"
                          :key="index"
                        >
                          <v-text-field
                            :value="email"
                            label="Email"
                            placeholder="Email"
                            outlined
                            readonly
                            append-outer-icon="mdi-minus-box"
                            @click:append-outer="removeThisEmail"
                          ></v-text-field>
                        </div>
                      </v-alert>
                      <v-text-field
                        label="Address"
                        placeholder="Address"
                        outlined
                        clearable
                      ></v-text-field>
                      <v-text-field
                        v-model="newJob.company.distanceFromHome"
                        label="Distance from Home"
                        placeholder="Distance from Home"
                        outlined
                        clearable
                      ></v-text-field>
                      <v-textarea
                        v-model="newJob.company.aboutUs"
                        outlined
                        label="About us"
                        name="AboutUs"
                        clearable
                      ></v-textarea>
                      <v-textarea
                        v-model="newJob.company.additionalInfos"
                        outlined
                        label="Additional infos"
                        name="AdditionalInfos"
                        clearable
                      ></v-textarea>
                    </v-card-text>
                  </v-card>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn plain color="primary" @click="tab = 0">
                      <v-icon>mdi-chevron-left</v-icon>
                      Back
                    </v-btn>
                    <v-btn plain color="primary" @click="tab = 2">
                      Next
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <!-- CONTACTS ------------------------------------------------------------------------------------------------->
        <v-tab-item>
          <v-container>
            <v-row class="d-flex justify-center my-5">
              <v-col xl="8" lg="11" md="12">
                <v-card elevation="12" class="mx-3">
                  <!-- SECTION DETAIL -->
                  <v-card flat>
                    <v-card-title>Add contact</v-card-title>
                    <v-card-text>
                      <v-card outlined class="pa-4">
                        <v-card-subtitle class="ml-n3 mb-5"
                          >1st contact
                        </v-card-subtitle>
                        <v-text-field
                          v-model="newJob.contacts[0].contactFirstName"
                          label="First Name"
                          placeholder="First Name"
                          outlined
                        ></v-text-field>
                        <v-text-field
                          v-model="newJob.contacts[0].contactLastName"
                          label="Last Name"
                          placeholder="Last Name"
                          outlined
                        ></v-text-field>
                        <v-text-field
                          v-model="newJob.contacts[0].role"
                          label="Role"
                          placeholder="Role"
                          outlined
                        ></v-text-field>
                        <v-alert outlined color="grey" class="mb-8 pt-8 px-5">
                          <v-text-field
                            v-model="newContactPhone"
                            label="Phone"
                            placeholder="Phone"
                            outlined
                            clearable
                            append-outer-icon="mdi-plus-box"
                            @click:append-outer="addNewContactPhone"
                          ></v-text-field>
                          <!-- TODO improve v-for, phone isn't used, why? -->
                          <div
                            v-for="(phone, index) in newJob.contacts[0].phone"
                            :key="index"
                          >
                            <v-text-field
                              :value="phone"
                              label="Phone"
                              placeholder="Phone"
                              outlined
                              readonly
                              append-outer-icon="mdi-minus-box"
                              @click:append-outer="removeThisContactPhone"
                            ></v-text-field>
                          </div>
                        </v-alert>
                        <v-alert outlined color="grey" class="mb-8 pt-8 px-5">
                          <v-text-field
                            v-model="newContactEmail"
                            label="Email"
                            placeholder="Email"
                            outlined
                            clearable
                            append-outer-icon="mdi-plus-box"
                            @click:append-outer="addNewContactEmail"
                          ></v-text-field>
                          <!-- TODO improve v-for, phone isn't used, why? -->
                          <div
                            v-for="(email, index) in newJob.contacts[0].email"
                            :key="index"
                          >
                            <v-text-field
                              :value="email"
                              label="Email"
                              placeholder="Email"
                              outlined
                              readonly
                              append-outer-icon="mdi-minus-box"
                              @click:append-outer="removeThisContactEmail"
                            ></v-text-field>
                          </div>
                        </v-alert>
                        <v-textarea
                          v-model="newJob.contacts[0].additionalInfos"
                          outlined
                          clearable
                          label="Additional infos"
                          name="AdditionalInfos"
                        ></v-textarea>
                        <v-card-actions>
                          <v-spacer />
                          <v-btn depressed disabled fab color="secondary">
                            <v-icon>mdi-account-minus</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                      <!--      <v-divider class="grey my-5"/>-->
                      <v-card-actions class="my-8">
                        <v-btn depressed color="secondary" class="mx-auto px-10"
                          >Add one more contact
                        </v-btn>
                      </v-card-actions>
                    </v-card-text>
                  </v-card>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn plain color="primary" @click="tab = 1">
                      <v-icon>mdi-chevron-left</v-icon>
                      Back
                    </v-btn>
                    <v-btn plain color="primary" @click="tab = 3">
                      Next
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <!-- APPLICATION ---------------------------------------------------------------------------------------------->
        <v-tab-item>
          <v-container>
            <v-row class="d-flex justify-center my-5">
              <v-col xl="8" lg="11" md="12">
                <v-card elevation="12" class="mx-3">
                  <!-- SECTION DETAIL -->
                  <v-card flat>
                    <v-card-title>Application</v-card-title>
                    <v-card-text>
                      <v-menu
                        v-model="menuApplicationSent"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            outlined
                            v-model="newJob.application.applicationDate"
                            label="Application date"
                            show-current
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            clearable
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="newJob.application.applicationDate"
                          @input="menuApplicationSent = false"
                          scrollable
                        ></v-date-picker>
                      </v-menu>
                      <v-textarea
                        v-model="newJob.application.additionalInfos"
                        outlined
                        clearable
                        label="Additional infos"
                        name="AdditionalInfos"
                      ></v-textarea>
                    </v-card-text>
                  </v-card>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn plain color="primary" @click="tab = 2">
                      <v-icon>mdi-chevron-left</v-icon>
                      Back
                    </v-btn>
                    <v-btn plain color="primary" @click="tab = 4">
                      Next
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <!-- INTERVIEW ------------------------------------------------------------------------------------------------>
        <v-tab-item>
          <v-container>
            <v-row class="d-flex justify-center my-5">
              <v-col xl="8" lg="11" md="12">
                <v-card elevation="12" class="mx-3">
                  <!-- SECTION DETAIL -->
                  <v-card flat>
                    <v-card-title>Interview details</v-card-title>
                    <v-card-text>
                      <v-card outlined class="pa-4">
                        <v-card-subtitle class="ml-n3 mb-5"
                          >1st appointment
                        </v-card-subtitle>
                        <!-- TODO Error to save time, need convert time to UTC -->
                        <v-datetime-picker
                          label="Set interview date and time"
                          v-model="newJob.interviews[0].interviewDateTime"
                        >
                        </v-datetime-picker>
                        <v-text-field outlined label="Local" name="Local">
                        </v-text-field>
                        <v-combobox
                          v-model="newJob.interviews[0].participants"
                          :items="newJob.contacts[0].contactFirstName"
                          label="Participants"
                          multiple
                          chips
                          outlined
                        ></v-combobox>
                        <v-textarea
                          v-model="newJob.interviews[0].additionalInfos"
                          outlined
                          clearable
                          label="Additional infos"
                          name="AdditionalInfos"
                        ></v-textarea>
                        <v-card-actions>
                          <v-spacer />
                          <v-btn depressed disabled fab color="secondary">
                            <v-icon>mdi-calendar-minus</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-card-text>
                    <v-card-actions class="my-8">
                      <v-btn depressed color="secondary" class="mx-auto px-10"
                        >New interview appointment
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn plain color="primary" @click="tab = 3">
                      <v-icon>mdi-chevron-left</v-icon>
                      Back
                    </v-btn>
                    <v-btn plain color="primary" @click="tab = 5">
                      Next
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <!-- FOLLOW-UP ------------------------------------------------------------------------------------------------>
        <v-tab-item>
          <v-container>
            <v-row class="d-flex justify-center my-5">
              <v-col xl="8" lg="11" md="12">
                <v-card elevation="12" class="mx-3">
                  <!-- SECTION DETAIL -->
                  <v-card flat>
                    <v-card-title>Follow up</v-card-title>
                    <v-card-text>
                      <v-alert outlined color="grey">
                        <v-card-subtitle class="ml-n5 mt-n3"
                          >Overview
                        </v-card-subtitle>
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

                        <!--                        <v-chip-group multiple column v-model="status">-->
                        <!--                          <v-chip color="info">-->
                        <!--                            <v-icon>mdi-text-box-check</v-icon>-->
                        <!--                            Registered job-->
                        <!--                          </v-chip>-->
                        <!--                          <v-chip color="info">-->
                        <!--                            <v-icon>mdi-file-send</v-icon>-->
                        <!--                            Application sent-->
                        <!--                          </v-chip>-->
                        <!--                          <v-chip color="info">-->
                        <!--                            <v-icon>mdi-phone-incoming</v-icon>-->
                        <!--                            Company feedback-->
                        <!--                          </v-chip>-->
                        <!--                          <v-chip>-->
                        <!--                            <v-icon>mdi-calendar-cursor</v-icon>-->
                        <!--                            Scheduled Interview-->
                        <!--                          </v-chip>-->
                        <!--                          <v-chip filter>-->
                        <!--                            <v-icon>mdi-account-question</v-icon>-->
                        <!--                            Final response-->
                        <!--                          </v-chip>-->
                        <!--                        </v-chip-group>-->
                        <v-card-subtitle class="ml-n5 mt-3 mb-n5"
                          >Status
                        </v-card-subtitle>
                        <v-radio-group v-model="newJob.followUp.status">
                          <v-radio label="In progress"></v-radio>
                          <v-radio label="Approved"></v-radio>
                          <v-radio label="Rejected"></v-radio>
                          <v-radio label="Abandoned"></v-radio>
                        </v-radio-group>
                      </v-alert>
                      <v-menu
                        v-model="menu1stCompanyFeedback"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            outlined
                            v-model="newJob.followUp.companyFeedbackDate"
                            label="1st company feedback date"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            class="mt-5 mb-3"
                            hint="25 days waiting a company feedback"
                            persistent-hint
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="newJob.followUp.companyFeedbackDate"
                          @input="menu1stCompanyFeedback = false"
                          scrollable
                        ></v-date-picker>
                      </v-menu>
                      <v-text-field
                        v-model="newJob.followUp.salaryOffer"
                        label="Salary Offer (Year)"
                        placeholder="Salary Offer (Year)"
                        outlined
                        clearable
                      ></v-text-field>
                      <v-text-field
                        v-model="newJob.followUp.proposedSalary"
                        label="Proposed Salary (Year)"
                        placeholder="Proposed Salary (Year)"
                        outlined
                        clearable
                      ></v-text-field>
                      <!-- TODO check read-only status -->
                      <v-text-field
                        v-model="newJob.followUp.difference"
                        label="Difference"
                        placeholder="Difference"
                        outlined
                        clearable
                      ></v-text-field>
                      <v-card flat class="mb-5">
                        <v-alert outlined color="grey">
                          <v-card-subtitle class="ml-n5 mt-n3"
                            >Rating
                          </v-card-subtitle>
                          <v-rating
                            v-model="newJob.followUp.rating"
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
                          <v-card-subtitle class="ml-n5 mt-n3"
                            >Comments
                          </v-card-subtitle>
                          <v-textarea
                            v-model="newComment.comment"
                            outlined
                            clearable
                            label="Comment"
                            name="Comment"
                            @blur="addNewComment"
                          ></v-textarea>
                          <p v-if="newComment.comment">
                            {{ newComment.commentDateTime }}
                          </p>
                          <!--                          <v-btn-->
                          <!--                            depressed-->
                          <!--                            color="secondary"-->
                          <!--                            class="mx-auto px-10"-->
                          <!--                            @click="addNewComment"-->
                          <!--                            >save comment-->
                          <!--                          </v-btn>-->
                          <p>from central: {{ newJob.followUp.comments }}</p>
                          <p>from temp: {{ newComment }}</p>

                          <div
                            v-for="(comment, index) in newJob.followUp.comments"
                            :key="index"
                          >
                            <v-textarea
                              :value="comment.comment"
                              label="Comments"
                              placeholder="Comments"
                              outlined
                              readonly
                              @input="comment = $event"
                            ></v-textarea>
                          </div>
                          <v-card-actions>
                            <v-btn
                              depressed
                              color="secondary"
                              class="mx-auto px-10"
                              @click="addNewComment"
                              >New Comment
                            </v-btn>
                          </v-card-actions>
                        </v-alert>
                      </v-card>
                      <!--        <v-combobox-->
                      <!--            v-model="contactResult"-->
                      <!--            :items="contactItems"-->
                      <!--            label="Contacts"-->
                      <!--            multiple-->
                      <!--            outlined-->
                      <!--            dense-->
                      <!--        ></v-combobox>-->
                    </v-card-text>
                  </v-card>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn plain color="primary" @click="tab = 4">
                      <v-icon>mdi-chevron-left</v-icon>
                      Back
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
    <v-container>
      <v-row class="d-flex justify-center mb-5">
        <v-col xl="8" lg="11" md="12">
          <v-card-actions>
            <v-spacer />
            <v-btn outlined width="100">Cancel</v-btn>
            <v-btn @click="submit" color="primary" width="100">Save</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
    <v-card class="pa-10 ma-10" elevation="12" color="warning">
      {{ newJob }}
    </v-card>
  </v-card>
</template>

<script>
import VDatetimePicker from "@/components/DateTimePicker/DateTimePicker";

export default {
  name: "!!!NewJob(Only for visualization)",
  components: { VDatetimePicker },
  data() {
    return {
      newPhone: null,
      newEmail: null,
      newContactPhone: null,
      newContactEmail: null,
      tab: null,
      priorityItems: ["none", "low", "medium", "high", "TOP"],
      priorityColor: "",
      priorityTextColor: "",
      priorityIcon: "",
      menuPublishDate: false,
      menuCloseDate: false,
      menuApplicationSent: false,
      // interviewDateTime: null,
      menu1stCompanyFeedback: false,
      contractTypeItems: ["Full time", "Partial Time", "Free-lance", "Others"],
      selectParticipants: "",
      newComment: { comment: null, commentDateTime: new Date() },
      newJob: {
        jobDescription: {
          jobTitle: null,
          jobCode: null,
          jobLink: null,
          priority: null,
          publishDate: null,
          closeDate: null,
          jobDetail: null,
          jobRequirements: null,
          contractType: null,
          salaryOffer: null,
          benefits: [],
          tags: [],
          additionalInfos: null,
        },
        company: {
          companyName: null,
          website: null,
          phone: [],
          email: [],
          geospatialData: {
            type: "Point",
            coordinates: [0, 0],
          },
          distanceFromHome: null,
          aboutUs: null,
          additionalInfos: null,
        },
        contacts: [
          {
            contactFirstName: null,
            contactLastName: null,
            role: null,
            phone: [],
            email: [],
            additionalInfos: null,
          },
        ],
        application: {
          sent: true,
          applicationDate: null,
          additionalInfos: null,
        },
        interviews: [
          {
            scheduled: true,
            interviewDateTime: null,
            geospatialData: {
              type: "Point",
              coordinates: [0, 0],
            },
            participants: [],
            additionalInfos: null,
          },
        ],
        followUp: {
          overview: {
            ApplicationSent: null,
            ScheduledInterview: null,
            FinalAnswer: null,
            RegisteredJob: null,
            CompanyFeedback: null,
          },
          status: null,
          companyFeedbackDate: null,
          salaryOffer: null,
          proposedSalary: null,
          difference: null,
          rating: null,
          comments: [],
        },
      },
    };
  },
  computed: {},
  methods: {
    priorityChange() {
      switch (this.newJob.jobDescription.priority) {
        case 0: {
          this.priorityColor = "white";
          this.priorityTextColor = "white";
          this.priorityIcon = "";
          break;
        }
        case 1: {
          this.priorityColor = "yellow";
          this.priorityTextColor = "grey darken-2";
          this.priorityIcon = "mdi-arrow-bottom-right";
          break;
        }
        case 2: {
          this.priorityColor = "orange";
          this.priorityTextColor = "white";
          this.priorityIcon = "mdi-arrow-right";
          break;
        }
        case 3: {
          this.priorityColor = "red";
          this.priorityTextColor = "white";
          this.priorityIcon = "mdi-arrow-top-right";
          break;
        }
        case 4: {
          this.priorityColor = "purple";
          this.priorityTextColor = "white";
          this.priorityIcon = "mdi-exclamation";
          break;
        }
      }
    },
    async submit() {
      this.$store.dispatch("addNewJobData", {
        jobDescription: this.newJob.jobDescription,
        company: this.newJob.company,
        contacts: this.newJob.contacts,
        application: this.newJob.application,
        interviews: this.newJob.interviews,
        followUp: this.newJob.followUp,
      });
    },
    addNewComment() {
      this.newJob.followUp.comments.push(this.newComment);
    },
    addNewPhone() {
      this.newJob.company.phone.push(this.newPhone);
      this.newPhone = null;
    },
    removeThisPhone(index) {
      this.newJob.company.phone.splice(index, 1);
    },
    addNewEmail() {
      this.newJob.company.email.push(this.newEmail);
      this.newEmail = null;
    },
    removeThisEmail(index) {
      this.newJob.company.email.splice(index, 1);
    },
    addNewContactPhone() {
      this.newJob.contacts[0].phone.push(this.newContactPhone);
      this.newContactPhone = null;
    },
    removeThisContactPhone(index) {
      this.newJob.contacts[0].phone.splice(index, 1);
    },
    addNewContactEmail() {
      this.newJob.contacts[0].email.push(this.newContactEmail);
      this.newContactEmail = null;
    },
    removeThisContactEmail(index) {
      this.newJob.contacts[0].email.splice(index, 1);
    },
  },
};
</script>
