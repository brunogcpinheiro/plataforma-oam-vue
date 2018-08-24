<template>
    <div>
        <AdminHeader />
        <v-container>
            <h1>Painel Administrativo</h1>
            <div class="users-table">
              <div class="table-actions">
                <h2>Tabela de Usuários</h2>
                <v-btn color="secondary" to="/dashboard/admin/users/create"><v-icon>add</v-icon> Adicionar Usuário</v-btn>
              </div>
                <v-layout>
                    <v-flex>
                        <v-card-title>
                          <v-text-field
                            v-model="userSearch"
                            append-icon="search"
                            label="Buscar"
                            single-line
                            hide-details
                          ></v-text-field>
                        </v-card-title>
                        <v-data-table
                            :headers="usersHeaders"
                            :items="users"
                            :search="userSearch"
                        >
                        <template slot="items" slot-scope="props">
                          <td>{{ props.item.id }}</td>
                          <td>{{ props.item.username }}</td>
                          <td>{{ props.item.email }}</td>
                          <td>{{ props.item.admin }}</td>
                          <td>{{ props.item.courses }}</td>
                          <td>
                            <v-btn color="secondary" small>Editar</v-btn>
                            <v-btn color="error" small @click="deleteUserItem(props.item)">Excluir</v-btn>
                          </td>
                        </template>
                      </v-data-table>
                    </v-flex>
                </v-layout>
            </div>

            <div class="courses-table">
              <div class="table-actions">
                <h2>Tabela de Cursos</h2>
                <v-btn color="secondary" to="/dashboard/admin/courses/create"><v-icon>add</v-icon> Adicionar Curso</v-btn>
              </div>
                <v-layout>
                    <v-flex>
                        <v-card-title>
                          <v-text-field
                            v-model="courseSearch"
                            append-icon="search"
                            label="Buscar"
                            single-line
                            hide-details
                          ></v-text-field>
                        </v-card-title>
                        <v-data-table
                            :headers="coursesHeaders"
                            :items="courses"
                            :search="courseSearch"
                        >
                        <template slot="items" slot-scope="props">
                          <td>{{ props.item.id }}</td>
                          <td>{{ props.item.user_id }}</td>
                          <td>
                            <v-btn color="secondary" small>Editar</v-btn>
                            <v-btn color="error" small @click="deleteUserItem(props.item.id)">Excluir</v-btn>
                          </td>
                        </template>
                      </v-data-table>
                    </v-flex>
                </v-layout>
            </div>
        </v-container>
    </div>
</template>

<script>
import AdminHeader from '../components/AdminHeader.vue';
import { mapGetters } from 'vuex';

export default {
    name: "Admin",
    components: {
        AdminHeader
    },
    data () {
      return {
        usersHeaders: [
          { text: 'id', value: 'id' },
          { text: 'Usuário', value: 'username' },
          { text: 'E-mail', value: 'email' },
          { text: 'Admin', sortable: false, value: 'admin' },
          { text: 'Cursos ( ID - Nome )', sortable: false, value: 'courses' },
          { text: 'Ações', sortable: false, value: 'ações', align: 'right' },
        ],
        users: this.$store.getters.usersTable,
        coursesHeaders: [
          { text: 'id', value: 'id' },
          { text: 'Nome', value: 'name' },
          { text: 'Ações', sortable: false, value: 'ações', align: 'right' },
        ],
        courses: [
          {
            id: "1",
            name: 'Ortodontia Iniciante I',
          },
        ],
        userDialog: false,
        courseDialog: false,
        userSearch: '',
        courseSearch: '',
        admin: false,
        username: '',
        email: '',
        password: '',
        valid: true
      };
    },
    computed: {
      ...mapGetters([
        'usersTable'
      ])
    },
    created() {
      return this.$store.dispatch('fetchUsersTable');
    },
    methods: {
      deleteUserItem (item) {
        const index = this.users.indexOf(item);
        this.$swal({
          title: 'Você tem certeza que deseja deletar este usuário?',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sim, delete!'
        }).then((result) => {
          if (result.value) {
            this.$swal(
              'Deletado!',
              '',
              'success'
            );
            this.users.splice(index, 1);
            this.$store.dispatch('removeUser', item.id);
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            this.$swal(
              'Cancelado',
              '',
              'error'
            );
          }
        });
      },
    }
};
</script>

<style scoped>
h1 {
  margin-top: -30px;
  text-align: center;
}

.v-btn {
  margin: 20px 10px 20px 0;
  float: right;
}

.v-icon {
  margin-right: 5px;
}

.users-table,
.courses-table {
  margin: 25px 0 35px 0;
  border: 1px solid #e5e5e5;
  background: #d1d8e0;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(196, 196, 196, 1);
  -moz-box-shadow: 0px 2px 5px 0px rgba(196, 196, 196, 1);
  box-shadow: 0px 2px 5px 0px rgba(196, 196, 196, 1);
}

.table-actions,
.courses-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h2 {
  margin-left: 10px;
  color: #2d3436;
}
</style>
