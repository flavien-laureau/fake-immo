<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-body">
        <div class="table-wrapper">
          <div class="table-title b-row">
            <b-button v-b-modal.addModal @click="state = 'add'" variant="primary">Ajouter un bien</b-button>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th id="row-title">Titre</th>
                <th id="row-img">Photo</th>
                <th id="row-address">Adresse</th>
                <th id="row-description">Description</th>
                <th id="row-price">Prix</th>
                <th id="row-author">Auteur</th>
                <th id="row-actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="estate in estatesList" :key="estate._id">
                <td>{{ estate.title }}</td>
                <td class="td-img">
                  <img class="img" :src="estate.img" />
                </td>
                <td>{{ estate.location.line + ", " + estate.location.postalCode + ", " + estate.location.city }}</td>
                <td>{{ estate.description }}</td>
                <td>{{ estate.price }}€</td>
                <td>{{ estate.author.name }}</td>
                <td class="actions-td">
                  <router-link
                    :to="'/acheter/propriété/' + estate._id"
                    class="view"
                    title="View"
                    data-toggle="tooltip"
                  >
                    <i class="material-icons">&#xE417;</i>
                  </router-link>
                  <a
                    href="#"
                    class="edit"
                    @click="
                      handleModify(estate._id, $event),
                        $bvModal.show('addModal')
                    "
                    title="Edit"
                    data-toggle="tooltip"
                  >
                    <i class="material-icons">&#xE254;</i>
                  </a>
                  <a
                    href="#"
                    class="delete"
                    @click="handleDelete(estate._id, $event)"
                    title="Delete"
                    data-toggle="tooltip"
                  >
                    <i class="material-icons">&#xE872;</i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <b-modal
          id="addModal"
          ref="addModal"
          title="Ajoutez votre objet"
          @hidden="resetModal"
          @ok="handleOk($event)"
        >
          <form>
            <b-form-group label="Nom du bien" invalid-feedback="Name is required">
              <b-form-input @keydown.enter="handleOk" v-model="estate.title" required></b-form-input>
            </b-form-group>

            <b-form-group label="Type" invalid-feedback="Type is required">
              <b-form-select v-model="estate.type" :options="typeOption"></b-form-select>
            </b-form-group>

            <b-form-group label="Image" invalid-feedback="Image is required">
              <b-form-file
                name="image"
                v-model="file"
                @change="changeFile"
                accept=".jpg, .jpeg, .png"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              ></b-form-file>
              <div class="mt-3">
                Selected file: {{ file ? file.name : null }}
                <button
                  v-if="file"
                  @click="(file = ''), (stateModify = false)"
                >X</button>
              </div>
            </b-form-group>

            <b-form-group label="Numéro et rue" invalid-feedback="Street is required">
              <b-form-input @keydown.enter="handleOk" v-model="estate.location.line" required></b-form-input>
            </b-form-group>
            <div class="form-groupe-postalCode-city">
              <b-form-group
                class="form-postalCode"
                label="Code postal"
                invalid-feedback="PostalCode is required"
              >
                <b-form-input
                  @keydown.enter="handleOk"
                  v-model="estate.location.postalCode"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group class="form-city" label="Ville" invalid-feedback="City is required">
                <b-form-input @keydown.enter="handleOk" v-model="estate.location.city" required></b-form-input>
              </b-form-group>
            </div>
            <b-form-group label="Pays" invalid-feedback="Country is required">
              <b-form-input @keydown.enter="handleOk" v-model="estate.location.country" required></b-form-input>
            </b-form-group>

            <b-form-group label="Description" invalid-feedback="Description is required">
              <b-form-textarea
                id="textarea"
                @keydown.enter="handleOk"
                v-model="estate.description"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
                required
              ></b-form-textarea>
            </b-form-group>

            <div class="form-group-end">
              <b-form-group
                class="form-rooms"
                label="Nombre de pièces"
                invalid-feedback="Rooms are required"
              >
                <b-form-input @keydown.enter="handleOk" v-model="estate.rooms" required></b-form-input>
              </b-form-group>
              <b-form-group
                class="form-square"
                label="Mètres carrés"
                invalid-feedback="Square meters are required"
              >
                <b-form-input @keydown.enter="handleOk" v-model="estate.squareMeters" required></b-form-input>
              </b-form-group>
              <b-form-group class="form-price" label="Prix" invalid-feedback="Price is required">
                <b-form-input @keydown.enter="handleOk" v-model="estate.price" required></b-form-input>
              </b-form-group>
            </div>
          </form>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

/* title: "test title",
        rooms: "5",
        type: "house",
        description: "string",
        price: 120000
       */

interface Location {
  line: string;
  city: string;
  postalCode: number;
  country: string;
}

interface Estate {
  title: string;
  rooms: number;
  squareMeters: number;
  type: string;
  location: Location;
  description: string;
  price: number;
}

interface State {
  id: string;
  estate: Estate;
  file: null | File | (string | Blob);
  image: string;
  typeOption: [
    { value: "house"; text: "Maison" },
    { value: "apartment"; text: "Appartement" }
  ];
  state: string;
  isFileModify: boolean;
}

export default Vue.extend({
  name: "admin-panel",
  layout: "admin",
  middleware: "adminAuth",
  data(): State {
    return {
      id: "",
      estate: {
        title: "",
        rooms: 0,
        squareMeters: 0,
        type: "",
        location: {
          line: "",
          city: "",
          postalCode: 0,
          country: ""
        },
        description: "",
        price: 0
      } as Estate,
      file: null,
      image: "",
      typeOption: [
        { value: "house", text: "Maison" },
        { value: "apartment", text: "Appartement" }
      ],
      state: "",
      isFileModify: false
    };
  },
  async fetch({ store }) {
    await store.dispatch("estates/fetchEstates");
  },
  methods: {
    resetModal() {
      this.id = "";
      //this.estate = {} as Estate;
      this.file = null;
      this.image = "";
      this.state = "";
      this.isFileModify = false;
    },
    handleOk(e: any) {
      /* const require = () => {
        if (
          this.title != "" &&
          (this.file != "" || this.image != "") &&
          this.description != "" &&
          this.price != ""
        ) {
          return true;
        } else {
          return false;
        }
      };

      if (require()) { */
      let formData = new FormData();

      if (this.state === "add") {
        console.log(this.estate.location);
        //Si on ajoute un bien
        let estate = {
          title: this.estate.title,
          description: this.estate.description,
          author: {
            adminId: this.$store.state.admin.adminId,
            name: this.$store.state.admin.name
          },
          location: {
            line: this.estate.location.line,
            city: this.estate.location.city,
            postalCode: this.estate.location.postalCode,
            country: this.estate.location.country
          },
          price: this.estate.price,
          rooms: this.estate.rooms,
          squareMeters: this.estate.squareMeters,
          type: this.estate.type
        };
        formData.append("estate", JSON.stringify(estate));
        formData.append("image", this.file as any);

        this.addSubmit(formData);
      } else if (this.state === "modify") {
        const estate = {
          title: this.estate.title,
          description: this.estate.description,
          author: {
            adminId: this.$store.state.admin.adminId,
            name: this.$store.state.admin.name
          },
          location: {
            line: this.estate.location.line,
            city: this.estate.location.city,
            postalCode: this.estate.location.postalCode,
            country: this.estate.location.country
          },
          price: this.estate.price,
          rooms: this.estate.rooms,
          squareMeters: this.estate.squareMeters,
          type: this.estate.type
        };

        if (this.isFileModify === false) {
          //si on modifie un bien sans image
          formData.append("estate", JSON.stringify(estate));
          this.modifySubmit(formData);
        } else if (this.isFileModify === true) {
          //si on modifie un bien avec nouvelle image
          formData.append("estate", JSON.stringify(estate));
          formData.append("image", this.file as any, estate.title);

          this.modifySubmit(formData);
        }
      }

      //Close modal
      this.$nextTick(() => {
        (this.$refs.addModal as Vue & { hide: () => boolean }).hide();
      });
      /* } else {
        e.preventDefault();
        alert("Veuillez remplir tout les champs");
      } */
    },

    addSubmit(estate: any) {
      // Push the formdata to DB

      this.$store.dispatch("estates/createEstate", {
        estate: estate,
        token: this.$store.state.admin.token
      });
    },

    handleDelete(id: string, e: any) {
      e.preventDefault();

      const confirm = window.confirm("Êtes-vous sure ?");

      if (confirm) {
        this.$store.dispatch("estates/deleteEstate", {
          id: id,
          token: this.$store.state.admin.token
        });
      }
    },

    handleModify(id: string, e: any) {
      e.preventDefault();

      this.state = "modify";
      this.id = id;

      let estate: any;

      this.estatesList.forEach((elt: any) => {
        if (id === elt._id) {
          estate = elt;
        }
      });

      this.estate.title = estate.title;
      this.estate.type = estate.type;
      this.image = estate.img;
      this.estate.location.line = estate.location.line;
      this.estate.location.city = estate.location.city;
      this.estate.location.postalCode = estate.location.postalCode;
      this.estate.location.country = estate.location.country;
      this.estate.description = estate.description;
      this.estate.rooms = estate.rooms;
      this.estate.squareMeters = estate.squareMeters;
      this.estate.price = estate.price;
    },

    modifySubmit(estate: any) {
      this.$store
        .dispatch("estates/modifyEstate", {
          id: this.id,
          estate: estate,
          token: this.$store.state.admin.token
        })
        .then(() => {
          this.$store.dispatch("estates/fetchEstates");
        });
    },
    changeFile() {
      if (this.state == "modify") {
        this.isFileModify = true;
      }
    }
  },
  computed: {
    ...mapState("estates", ["estatesList"])
  } /* ,
  watch: {
    file() {
      console.log(this.file);
    }
  } */
});
</script>

<style scoped>
.container-fluid {
  padding: 0 30px;
}
.card {
  width: 100%;
  margin-bottom: 24px;
  overflow-x: auto;
}

.table {
  font-size: 1.2em;
  margin-top: 20px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.15);
}

/* Button add */
.table-title {
  padding-bottom: 10px;
  min-height: 45px;
}
.table-title .btn {
  font-size: 1.5em;
}

/* Row Links actions */
.table td a.view {
  color: #03a9f4;
}
.table td a.edit {
  color: #ffc107;
}
.table td a.delete {
  color: #e34724;
}
.table .actions-td {
  text-align: center;
}
.table td a {
  margin: 0 5px;
}
/* picture in the table */
.td-img {
  text-align: center;
}
.img {
  max-height: 100px;
}

/* form / input */
.form-groupe-postalCode-city {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.form-city {
  grid-column: 2 / 4;
}

.form-postalCode,
.form-rooms,
.form-square {
  margin-right: 5px;
}

.form-group-end {
  display: flex;
}
</style>
