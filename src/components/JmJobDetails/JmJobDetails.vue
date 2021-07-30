<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="10" lg="8" xl="6" class="d-flex justify-end mx-auto">
        <v-card rounded="xl" elevation="10">
          <v-card-title>
            <v-btn plain fab small to="/registered-jobs">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn plain fab small @click.stop="setEditItem">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn plain fab small>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-title>
          <v-expansion-panels flat multiple accordion class="rounded-xl">
            <v-expansion-panel>
              <v-expansion-panel-header ripple>
                <v-card flat>
                  <v-card-title>
                    <h2 class="font-weight-light mb-5">
                      Job description
                    </h2></v-card-title
                  >
                  <v-card-subtitle>
                    <h2>
                      Technischer Zeichner (m/w) / Technischer Produktdesigner
                      (m/w)
                    </h2>
                    <h5>XPTO/SQR(2)</h5>
                    <div class="d-flex align-center mt-n3">
                      <v-avatar size="24" color="purple">
                        <v-icon color="white" class="">mdi-exclamation</v-icon>
                      </v-avatar>
                      <p class="ml-1 mt-4">TOP</p>
                    </div>
                    <h5>Published @ 31/02/2099</h5>
                  </v-card-subtitle>
                </v-card>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card flat>
                  <v-card-text>
                    <v-subheader><h2>Job details</h2></v-subheader>
                    <section>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Adipiscing at in tellus integer feugiat
                        scelerisque varius. Commodo quis imperdiet massa
                        tincidunt. Nulla malesuada pellentesque elit eget.
                      </p>
                    </section>
                    <v-subheader><h2>Job requirements</h2></v-subheader>
                    <section>
                      <p>
                        Vulputate dignissim suspendisse in est ante in. Nibh sed
                        pulvinar proin gravida hendrerit. Nisl nisi scelerisque
                        eu ultrices. Pharetra magna ac placerat vestibulum
                        lectus mauris ultrices eros. Cursus in hac habitasse
                        platea dictumst quisque sagittis purus sit.
                      </p>
                    </section>
                    <v-subheader><h2>Contract type</h2></v-subheader>
                    <p>Permanent</p>
                    <v-subheader><h2>Salary offer (year)</h2></v-subheader>
                    <p>$52.000,00</p>
                    <v-subheader><h2>Benefits</h2></v-subheader>
                    <v-chip-group center-active>
                      <v-chip outlined>Park</v-chip>
                      <v-chip outlined>Social assistance</v-chip>
                      <v-chip outlined>Bonus</v-chip>
                    </v-chip-group>
                    <v-subheader><h2>Tags</h2></v-subheader>
                    <v-chip-group center-active>
                      <v-chip outlined>Javascript</v-chip>
                      <v-chip outlined>HTML</v-chip>
                      <v-chip outlined>CSS3</v-chip>
                      <v-chip outlined>NodeJS</v-chip>
                      <v-chip outlined>Front-end</v-chip>
                    </v-chip-group>
                    <v-subheader><h2>Additional infos</h2></v-subheader>
                    <section>
                      <p>
                        At imperdiet dui accumsan sit amet. Nam at lectus urna
                        duis convallis convallis tellus. Ultrices dui sapien
                        eget mi proin sed. Cursus turpis massa tincidunt dui ut
                        ornare.
                      </p>
                    </section>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header ripple>
                <v-card flat>
                  <v-card-title>
                    <h2 class="font-weight-light mb-5">Company</h2>
                  </v-card-title>
                  <v-card-subtitle>
                    <h2>Sauerkraut Software GmbH</h2>
                    <h5>+49 171 996 6699</h5>
                    <h5>Porschestraße 1, 42279 Wuppertal</h5>
                    <h5>24Km from home</h5>
                  </v-card-subtitle>
                </v-card>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card flat>
                  <v-card-text>
                    <v-subheader><h2>About us</h2></v-subheader>
                    <section>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Adipiscing at in tellus integer feugiat
                        scelerisque varius. Commodo quis imperdiet massa
                        tincidunt. Nulla malesuada pellentesque elit eget.
                        Vulputate sapien nec sagittis aliquam malesuada bibendum
                        arcu vitae. Fringilla phasellus faucibus scelerisque
                        eleifend donec. Semper quis lectus nulla at volutpat
                        diam ut venenatis. A erat nam at lectus urna duis
                        convallis convallis. Amet nulla facilisi morbi tempus
                        iaculis urna id volutpat. Risus nullam eget felis eget
                        nunc. Sagittis purus sit amet volutpat consequat mauris
                        nunc congue nisi. A arcu cursus vitae congue. Venenatis
                        urna cursus eget nunc scelerisque. Vehicula ipsum a arcu
                        cursus vitae congue mauris rhoncus. Tristique
                        sollicitudin nibh sit amet commodo. At imperdiet dui
                        accumsan sit amet. Nam at lectus urna duis convallis
                        convallis tellus. Ultrices dui sapien eget mi proin sed.
                        Cursus turpis massa tincidunt dui ut ornare.
                      </p>
                    </section>
                    <v-subheader><h2>Additional infos</h2></v-subheader>
                    <section>
                      <p>
                        At imperdiet dui accumsan sit amet. Nam at lectus urna
                        duis convallis convallis tellus. Ultrices dui sapien
                        eget mi proin sed. Cursus turpis massa tincidunt dui ut
                        ornare.
                      </p>
                    </section>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header ripple>
                <v-card flat>
                  <v-card-title>
                    <h2 class="font-weight-light mb-5">Contact</h2>
                  </v-card-title>
                  <v-card-subtitle>
                    <h2>Michael JACKSON</h2>
                    <h5>HR Consultant</h5>
                    <h5>H+49 171 996 6699</h5>
                  </v-card-subtitle>
                </v-card>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card flat>
                  <v-card-text>
                    <v-subheader><h2>Additional infos</h2></v-subheader>
                    <section>
                      <p>
                        At imperdiet dui accumsan sit amet. Nam at lectus urna
                        duis convallis convallis tellus. Ultrices dui sapien
                        eget mi proin sed. Cursus turpis massa tincidunt dui ut
                        ornare.
                      </p>
                    </section>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header ripple>
                <v-card flat>
                  <v-card-title>
                    <h2 class="font-weight-light mb-5">Application</h2>
                  </v-card-title>
                  <v-card-subtitle>
                    <h2>Sent @ 31/02/2098</h2>
                  </v-card-subtitle>
                </v-card>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card flat>
                  <v-card-text>
                    <v-subheader><h2>Additional infos</h2></v-subheader>
                    <section>
                      <p>
                        At imperdiet dui accumsan sit amet. Nam at lectus urna
                        duis convallis convallis tellus. Ultrices dui sapien
                        eget mi proin sed. Cursus turpis massa tincidunt dui ut
                        ornare.
                      </p>
                    </section>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header ripple>
                <v-card flat>
                  <v-card-title>
                    <h2 class="font-weight-light mb-5">Interview</h2>
                  </v-card-title>
                  <v-card-subtitle>
                    <h2>Next: 31/02/2098 @ 14:30</h2>
                  </v-card-subtitle>
                </v-card>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card flat>
                  <v-card-text>
                    <v-subheader><h2>Local</h2></v-subheader>
                    <p>Porshestr, 12 Wuppertal, 12th stage, room 19</p>
                    <v-subheader><h2>Participants</h2></v-subheader>
                    <p>Michael JACKSON, Tina TURNER</p>
                    <v-subheader><h2>Additional infos</h2></v-subheader>
                    <section>
                      <p>
                        At imperdiet dui accumsan sit amet. Nam at lectus urna
                        duis convallis convallis tellus. Ultrices dui sapien
                        eget mi proin sed. Cursus turpis massa tincidunt dui ut
                        ornare.
                      </p>
                    </section>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header ripple>
                <v-card flat>
                  <v-card-title>
                    <h2 class="font-weight-light mb-5">Follow-up</h2>
                  </v-card-title>
                  <v-card flat rounded="xl" class="my-5 d-flex align-center">
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
                          color="primary"
                          disabled
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
                  <v-subheader><h2>Status</h2></v-subheader>
                  <p>In progress</p>
                </v-card>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card flat>
                  <v-card-text>
                    <h1>25 days</h1>
                    <p>Waiting a company feedback</p>
                    <v-subheader><h2>Salary</h2></v-subheader>
                    <v-simple-table>
                      <thead>
                        <tr>
                          <th class="text-left">Offer</th>
                          <th class="text-left">Proposed</th>
                          <th class="text-left">Difference</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>$52.000,00</td>
                          <td>$60.000,00</td>
                          <td class="error--text">-$8.000,00</td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                    <v-subheader><h2>Comments</h2></v-subheader>
                    <section>
                      <h5>31/02/2098</h5>
                      <p>
                        At imperdiet dui accumsan sit amet. Nam at lectus urna
                        duis convallis convallis tellus. Ultrices dui sapien
                        eget mi proin sed. Cursus turpis massa tincidunt dui ut
                        ornare.
                      </p>
                    </section>
                    <section>
                      <h5>08/02/2098</h5>
                      <p>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </section>
                    <section>
                      <h5>16/02/2098</h5>
                      <p>
                        Nulla aliquet porttitor lacus luctus accumsan tortor.
                        Vitae aliquet nec ullamcorper sit amet risus. Nisl purus
                        in mollis nunc. Egestas egestas fringilla phasellus
                        faucibus scelerisque eleifend donec.
                      </p>
                    </section>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <jm-edit-this-job
            :set-edit-item="editThisJob"
            @setCloseDialog="editThisJob = $event"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import JmEditThisJob from "@/components/JmEditThisJob/JmEditThisJob";

export default {
  name: "JmJobDetails",
  components: { JmEditThisJob },
  data() {
    return {
      editThisJob: false,
    };
  },
  methods: {
    setEditItem() {
      this.editThisJob = !this.editThisJob;
    },
  },
};
</script>

<style scoped></style>
