<template>
  <v-alert outlined color="grey" class="mb-8 pt-8 px-5">
    <div class="d-flex justify-space-between">
      <v-text-field
        v-model="newItem"
        :label="itemName"
        outlined
        clearable
        @blur="addNewItem"
        @keyup.enter="addNewItem"
      ></v-text-field>
      <!--      <v-btn fab plain @click="addNewItem()">-->
      <!--        <v-icon size="32">mdi-plus-box</v-icon>-->
      <!--      </v-btn>-->
    </div>
    <v-list nav dense flat class="d-flex">
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, index) in listItems" :key="index" dense>
          <v-dialog v-model="dialog" persistent max-width="290">
            <v-card>
              <v-card-title class="text-h5">
                {{ setItem }}
              </v-card-title>
              <v-card-text>
                <v-text-field
                  dense
                  :placeholder="setItem"
                  v-model="newItem"
                  @keyup.enter="updateThisItem"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="secondary" text @click="dialog = false">
                  Cancel
                </v-btn>
                <v-btn color="primary" text @click="updateThisItem">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card></v-dialog
          >
          <v-text-field
            readonly
            dense
            :value="item"
            @click.stop="selectThisItem(index)"
          ></v-text-field>
          <v-btn @click="removeThisItem(index)" fab plain>
            <v-icon>mdi-minus-box</v-icon>
          </v-btn>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <!--    <v-btn @click="updateWithEmit">update</v-btn>-->
  </v-alert>
</template>

<script>
export default {
  name: "JmMultiTextFieldList",
  props: ["itemName"],
  data() {
    return {
      newItem: "",
      editItem: "",
      listItems: [],
      setItem: "",
      setIndex: "",
      readOnly: true,
      dialog: false,
    };
  },
  methods: {
    addNewItem() {
      if (this.newItem !== "") {
        this.listItems.push(this.newItem);
        this.updateParentWithEmit();
        this.newItem = "";
      }
    },
    selectThisItem(index) {
      this.dialog = true;
      this.setItem = this.listItems[index];
      this.setIndex = index;
    },
    updateThisItem() {
      this.listItems[this.setIndex] = this.newItem;
      this.newItem = "";
      this.dialog = false;
    },
    removeThisItem(index) {
      this.listItems.splice(index, 1);
    },
    updateParentWithEmit() {
      this.$emit("getListItems", this.listItems);
    },
  },
};
</script>

<style scoped></style>
