<template>
  <v-container>
    <jm-main-card>
      <v-card-title class="justify-center mb-5">
        <h2 class="font-weight-light">About</h2>
      </v-card-title>
      <v-card class="ma-5" flat>
        <v-container>
          <v-row>
            <v-col>
              <v-card-title class="justify-center">
                <jm-logo />
              </v-card-title>
              <v-card-subtitle class="d-flex justify-center">
                <h3 class="font-weight-regular">
                  Helps you organize your job search
                </h3>
              </v-card-subtitle>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card-title class="d-flex justify-center">
                <h5 class="font-weight-regular">Version 0.01</h5>
              </v-card-title>
              <v-card-subtitle class="d-flex justify-center"
                >Released date: 32/02/2070
              </v-card-subtitle>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-center">
            <v-col sm="12" md="10" lg="8">
              <v-card-text>
                <section>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Est sit amet facilisis magna. Cursus metus aliquam eleifend
                  mi. Pellentesque nec nam aliquam sem et tortor consequat id
                  porta. Integer eget aliquet nibh praesent tristique magna sit
                  amet purus. Tellus id interdum velit laoreet id. Porta non
                  pulvinar neque laoreet suspendisse interdum consectetur. Lacus
                  suspendisse faucibus interdum posuere lorem ipsum. Sagittis eu
                  volutpat odio facilisis mauris sit amet massa vitae. Iaculis
                  nunc sed augue lacus viverra vitae congue eu. Gravida rutrum
                  quisque non tellus orci ac. Tristique risus nec feugiat in
                  fermentum posuere urna nec.
                </section>
              </v-card-text>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-center">
            <v-col sm="12" md="6" lg="4">
              <v-card-title
                ><h5 class="font-weight-regular">
                  Main tools used for development:
                </h5>
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item-group>
                    <v-list-item v-for="(item, i) in techStacks" :key="i">
                      <v-list-item-content>{{ item }}</v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card-text>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-divider />
              <v-card-title class="d-flex justify-center">
                <h5 class="font-weight-regular">Developed by: Daniel Santos</h5>
              </v-card-title>
              <v-card-subtitle class="d-flex justify-center"
                >Find on:
              </v-card-subtitle>
              <v-card-actions class="d-flex justify-center mt-n7">
                <div v-for="(item, i) in socialMedia" :key="i">
                  <v-btn large fab plain>
                    <v-icon>{{ item }}</v-icon>
                  </v-btn>
                </div>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </jm-main-card>
  </v-container>
</template>

<script>
import JmMainCard from "@/components/JmMainCard/JmMainCard";
import JmLogo from "@/components/JmLogo/JmLogo";

export default {
  name: "About",
  components: { JmLogo, JmMainCard },
  data() {
    return {
      techStacks: [
        "VueJS",
        "Vuetify",
        "Npm (NodeJS)",
        "Java",
        "Springboot",
        "MongoDB",
      ],
      socialMedia: [
        "mdi-web",
        "mdi-linkedin",
        "mdi-xing",
        "mdi-github",
        "mdi-stack-overflow",
      ],
    };
  },
};
</script>

<style scoped></style>
