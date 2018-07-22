<template>
  <v-slide-y-transition mode="out-in">
    <v-container align-center justify-center grid-list-md>
      <h3>Get in touch</h3>
      <!-- <v-btn @click.native="showDialogNow('success', 'message sent')">show GOOD</v-btn> -->
      <!-- <v-btn @click.native="showDialogNow('error', 'all failed')">show BAD</v-btn> -->
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-form v-model="valid">
            <v-select :disabled="formBusy" :items="personData()" v-model="whoToContact" :rules="contactRules" item-text="text" item-value="email"
              label="Who to contact?" multi-line prepend-icon="contacts" required></v-select>
            <v-textarea :disabled="formBusy" prepend-icon="label" label="Your Name" v-model="name" :rules="nameRules" :counter="50"
              required></v-textarea>
            <v-textarea :disabled="formBusy" prepend-icon="email" label="E-mail" v-model="email" :rules="emailRules" required></v-textarea>
            <v-textarea :disabled="formBusy" prepend-icon="message" name="input-7-1" label="Message" v-model="message" :rules="messageRules"
              :counter="500" multi-line></v-textarea>
            <v-checkbox v-show="!formBusy" label="I am human" v-model="checkbox" :rules="[v => !!v || 'You must check this if you are not a robot!']"
              required></v-checkbox>
            <v-progress-linear v-show="formBusy" :indeterminate="true"></v-progress-linear>
            <v-btn color="secondary" @click="sendContactForm" :disabled="!valid || formBusy">
              <v-icon>send</v-icon>
            </v-btn>
          </v-form>

        </v-flex>
        <v-flex xs12 sm6>
          <v-layout column fill-height class="pa-2">
            <h5 class="title">Find us here:</h5>
            <gmap-map class="d-flex" :center="addressConfig.mapCenter" :zoom="addressConfig.mapZoom" map-type-id="terrain" style="flex:3 1 auto; background-color:primary; min-height:200px;">
              <gmap-marker :key="index" v-for="(m, index) in addressConfig.pins" :position="m.position" :clickable="true" :draggable="false"
                :label="`★${m.name[0]}`" @click="center=m.position">
                <gmap-infoWindow :position="m.position" :opened="true" :options="{content: getInfoWindowHtml(m) }">
                </gmap-infoWindow>

              </gmap-marker>

            </gmap-map>
          </v-layout>
        </v-flex>
      </v-layout>
      <modal-dialog :visible="modalDialog.showDialog" :title="modalDialog.dialogInfo.title" :message="modalDialog.dialogInfo.message"
        :buttons="modalDialog.dialogInfo.buttons" @close="modalDialog.showDialog=false"></modal-dialog>
    </v-container>
  </v-slide-y-transition>
</template>

<script>
  // {
  //         lat: "-25.8199672",
  //         lon: "28.2866643",
  //         name: "Pretoria Office",
  //         addressText: "673 Rubenstein Street, Moreleta Park, Pretoria"
  //       }
  import config from "@/appConfig/config";
  import personData from "@/appConfig/PersonData";
  import ModalDialog from "@/components/ModalDialog";

  export default {
    components: { ModalDialog },
    props: ["homepageView", "contactEmail"],
    data() {
      return {
        formBusy: false,
        modalDialog: {
          showDialog: false,
          dialogInfo: {
            title: "hello",
            message: "somethingggggg here",
            buttons: {
              ok: { color: "success", show: false, text: "Ok" },
              cancel: { color: "error", show: true, text: "Close" }
            }
          }
        },
        whoToContact: null,
        addressConfig: config.googleMaps,
        personData() {
          let pData = personData.persons.map(p => {
            return {
              text: `${p.name} ${p.surname} - ${p.position}`,
              email: `${p.contact.email}`
            };
          });
          let contacts = personData.contacts.map(p => {
            return {
              text: `Office: ${p.display}`,
              email: `${p.contact.email}`
            };
          });
          return new Array(...contacts, ...pData);
        },
        valid: false,
        name: "",
        message: "",
        checkbox: false,
        contactRules: [v => !!v || "Please choose one"],
        nameRules: [
          v => !!v || "Name is required",
          v => v.length <= 50 || "Name must be less than 50 characters"
        ],
        messageRules: [
          v => !!v || "Message is required",
          v =>
            v.length > 20 ||
            "Please enter a real sentence (minimum 20 characters)",
          v => v.length <= 500 || "Your message must be less than 500 characters"
        ],
        email: "",
        emailRules: [
          v => !!v || "E-mail is required",
          v =>
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "E-mail must be valid"
        ]
      };
    },
    methods: {
      showDialogNow(type, title, message) {
        if (type == "error") {
          this.modalDialog.dialogInfo.title = title || "ERROR occurred";
          this.modalDialog.dialogInfo.message = message || "?";
          this.modalDialog.dialogInfo.buttons.ok.show = false;
          this.modalDialog.dialogInfo.buttons.cancel.show = true;
        } else {
          this.modalDialog.dialogInfo.title = title || "SUCCESS!!";
          this.modalDialog.dialogInfo.message = message || "?";
          this.modalDialog.dialogInfo.buttons.ok.show = true;
          this.modalDialog.dialogInfo.buttons.cancel.show = false;
        }
        this.modalDialog.showDialog = true;
      },
      getInfoWindowHtml(m) {
        let gDirectionsLink = `https://www.google.com/maps?saddr=My+Location&daddr=${m.addressText.replace(/ /g,'+')}`;
        // https://www.google.co.za/maps/dir/-26.0023425,27.9817217/5+Frank+May+St,+Aqua+Park,+Tzaneen,+0850
        return `<strong>${m.name}</strong><br/>
        ${m.addressText}<br/>
        <a href=${gDirectionsLink} target="_blank">Get directions</a>`;
      },
      resetForm() {
        this.whoToContact = null;
        this.message = "";
        this.checkbox = false;
      },
      sendContactForm() {
        this.formBusy = true;
        let url = config.awsConfig.apiGatewayUrl;
        let contactEmail = this.whoToContact;
        let contactObj = personData.persons.find(o => {
          return o.contact.email === contactEmail;
        });
        contactObj =
          contactObj ||
          personData.contacts.find(o => {
            return o.contact.email === contactEmail;
          });
        let displayName =
          contactObj.display || `${contactObj.name} ${contactObj.surname}`;
        let payload = {
          t: { n: displayName, e: contactEmail },
          f: { n: this.name, e: this.email },
          m: this.message
        };
        let props = {
          method: "POST",
          mode: "cors",
          redirect: "follow",
          body: JSON.stringify(payload)
        };
        props.headers = new Headers({
          "x-api-key": config.awsConfig.apiGatewayKey,
          "Content-Type": "application/json"
        });
        console.info(`send email with props `, props);
        fetch(url, props)
          .then(promise => {
            return promise.json();
          })
          .then(json => {
            console.info(`send email result..  is now`, json);
            this.showDialogNow(
              "success",
              "Message Sent",
              "Thank you, your message was sent successfully! We'll be in contact soon."
            );
            this.formBusy = false;
            this.resetForm();
          })
          .catch(err => {
            console.error(`send email result::: Error fetching: `, err);
            this.showDialogNow(
              "error",
              "Message Failed",
              "Oops, your message could not be sent at this time. Please try again later."
            );
            this.formBusy = false;
          });

      }
    },
    computed: {
    },
    watch: {
      contactEmail() {
        // Parent property changed; update internal variables
        this.whoToContact = this.contactEmail;
      },
      '$route'(to, from) {
        // Call resizePreserveCenter() on all maps
        Vue.$gmapDefaultResizeBus.$emit('resize')
      }
    },
    mounted() {
      // console.info("PROPERTY THAT CAME IN............... ", this.contactEmail);
      this.whoToContact = this.contactEmail || "";
      // if (this.contact) this.whoToContact = this.contact;
    }
  };
</script>

<style scoped>
h3 {
  font-family: Helvetica, sans-serif;
  color: #414042;
  font-size: 40px;
  text-align: left;
  margin: 50px 0px 50px 0px;
  top: 15%;
}
</style>