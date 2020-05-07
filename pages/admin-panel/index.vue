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
                <th>Titre</th>
                <th>Photo</th>
                <th>Description</th>
                <th>Prix</th>
                <th>Auteur</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="estate in estatesList" :key="estate._id">
                <td>{{ estate.title }}</td>
                <td class="td-img">
                  <img class="img" :src="estate.img" />
                </td>
                <td>{{ estate.description }}</td>
                <td>{{ estate.price }}€</td>
                <td>{{ estate.author.name }}</td>
                <td class="actions-td">
                  <router-link to="/">
                    <!-- <router-link :to="'/site/estate/' + estate._id"> -->
                    <a href="#" class="view" title="View" data-toggle="tooltip">
                      <i class="material-icons">&#xE417;</i>
                    </a>
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
            <b-form-group label="Nom de l'objet" invalid-feedback="Name is required">
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
                Selected file: {{ file ? file.name : "" }}
                <button
                  v-if="file"
                  @click="(file = ''), (stateModify = false)"
                >X</button>
              </div>
            </b-form-group>

            <b-form-group label="Nombre de pièces" invalid-feedback="Rooms is required">
              <b-form-input @keydown.enter="handleOk" v-model="estate.rooms" required></b-form-input>
            </b-form-group>

            <b-form-group label="Description" invalid-feedback="Description is required">
              <b-form-input @keydown.enter="handleOk" v-model="estate.description" required></b-form-input>
            </b-form-group>

            <b-form-group label="Prix" invalid-feedback="Price is required">
              <b-form-input @keydown.enter="handleOk" v-model="estate.price" required></b-form-input>
            </b-form-group>
          </form>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

interface Estate {
  title: string;
  rooms: number;
  type: string;
  description: string;
  price: number;
}

export default Vue.extend({
  name: "admin-panel",
  layout: "admin",
  middleware: "adminAuth",
  data() {
    return {
      id: "",
      estate: {
        title: "test title",
        rooms: "5",
        type: "house",
        description: "string",
        price: 120000
      } /* as Estate */,
      file: "",
      image: "",
      typeOption: [
        { value: "house", text: "Maison" },
        { value: "apartment", text: "Appartement" }
      ],
      state: "",
      stateModify: false
    };
  },
  async fetch({ store }) {
    await store.dispatch("estates/fetchEstates");
  },
  methods: {
    resetModal() {
      this.id = "";
      //this.estate = {} as Estate;
      this.file = "";
      this.image = "";
      this.state = "";
      this.stateModify = false;
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
        //Si on ajoute un bien
        let estate = {
          title: this.estate.title,
          description: this.estate.description,
          author: {
            adminId: this.$store.state.admin.adminId,
            name: this.$store.state.admin.name
          },
          price: this.estate.price,
          rooms: this.estate.rooms,
          type: this.estate.type
        };
        formData.append("estate", JSON.stringify(estate));
        formData.append("image", this.file);

        this.addSubmit(formData);
      } /* else if (this.state === "modify") {
        if (this.stateModify === false) {
          //si on modifie un bien sans image
          let estate = {
            title: this.estate.title,
            description: this.estate.description,
            image: this.image,
            userId: this.$store.state.userId,
            price: this.estate.price
          };
          formData.append("estate", JSON.stringify(estate));
          this.modifySubmit(formData);
        } else if (this.stateModify === true) {
          //si on modifie un bien avec nouvelle image
          let estate = {
            title: this.estate.title,
            description: this.estate.description,
            userId: this.$store.state.userId,
            price: this.estate.price
          };
          formData.append("estate", JSON.stringify(estate));
          formData.append("image", this.file, estate.title);

          this.modifySubmit(formData);
        }
      } */

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

    handleModify(id: any, e: any) {
      /* e.preventDefault();

      this.state = "modify";
      this.id = id;

      let estate;

      this.items.forEach(elt => {
        if (id === elt._id) {
          estate = elt;
        }
      });

      this.title = estate.title;
      this.image = estate.image;
      this.description = estate.description;
      this.price = estate.price; */
    },

    modifySubmit(estate: any) {
      /* ItemService.modify(this.id, estate, this.$store.state.token).then(() =>
        this.refresh()
      ); */
    },
    changeFile() {
      /* if (this.state == "modify") {
        this.stateModify = true;
      } */
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

/* Link actions */
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
</style>
