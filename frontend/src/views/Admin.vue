<template>
    <div>
        <AdminHeader />
        <v-container>
            <h1>Painel Administrativo</h1>
            <div class="users-table elevation-1">
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
                          <td v-if="props.item.courses.length == 0">
                            <small>Sem cursos atribuídos. Adicione ao lado em "Editar" <v-icon color="secondary" :style="{verticalAlign: 'middle'}">arrow_right_alt</v-icon></small>
                          </td>
                          <td class="courses-list" v-for="course in props.item.courses" :key="course.id" v-else>
                            <p><strong>ID.:</strong> {{course.id}} <v-icon>minimize</v-icon> <strong>Nome.:</strong> {{course.title}}</p>
                          </td>
                          <td>
                            <v-btn color="secondary" small @click="editUser(props.item)">Editar</v-btn>
                            <v-btn color="error" small @click="deleteUserItem(props.item)">Excluir</v-btn>
                          </td>
                        </template>
                      </v-data-table>
                    </v-flex>
                </v-layout>
            </div>

            <div class="courses-table elevation-1">
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
                            class="elevation-1"
                        >
                        <template slot="items" slot-scope="props">
                          <td>{{ props.item.id }}</td>
                          <td>{{ props.item.title }}</td>
                          <td>{{ props.item.author }}</td>
                          <td>{{ props.item.description }}</td>
                          <td v-if="props.item.modules.length == 0">
                            <small>Sem módulos atribuídos. Adicione ao lado <v-icon color="secondary" :style="{verticalAlign: 'middle'}">arrow_right_alt</v-icon></small>
                          </td>
                          <div class="modules-lectures" v-else>
                            <td class="courses-list" v-for="module in props.item.modules" :key="module.id">
                              <ul class="module-list">
                                <li>
                                  <strong>{{ module.moduleTitle }}</strong>
                                  <a @click="lecturePage(module)">Adicionar/visualizar aulas</a>
                                </li>
                              </ul>
                            </td>
                          </div>
                          <td class="actions">
                            <v-btn color="secondary" small @click="editCourse(props.item)">Editar</v-btn>
                            <v-btn color="error" small @click="deleteCourseItem(props.item)">Excluir</v-btn>
                            <v-btn color="warning" small @click="addContent(props.item)"><v-icon>add</v-icon> módulos</v-btn>
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
          { text: 'Admin', value: 'admin', sortable: false },
          { text: 'Cursos ( ID - Nome )', sortable: false, value: 'cursos' },
          { text: 'Ações', sortable: false, align: 'right' },
        ],
        users: this.$store.getters.usersTable,
        coursesHeaders: [
          { text: 'id', value: 'id', },
          { text: 'Nome', value: 'title', sortable: false },
          { text: 'Autor', value: 'author', sortable: false },
          { text: 'Descrição', value: 'description', sortable: false },
          { text: 'Conteúdo (Módulos)', value: 'content', sortable: false },
          { text: 'Ações', sortable: false, align: 'right' },
        ],
        courses: this.$store.getters.coursesTable,
        userSearch: '',
        courseSearch: '',
        admin: false,
        username: '',
        email: '',
        password: '',
        valid: true,
        editedUser: {
          username: '',
          email: '',
          password: '',
          admin: null,
          courses: []
        }
      };
    },
    computed: {
      ...mapGetters([
        'usersTable',
        'coursesTable',
        'modulesTable'
      ])
    },
    mounted() {
      this.$store.dispatch('fetchUsersTable');
      this.$store.dispatch('fetchCoursesTable');
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
      deleteCourseItem (item) {
        const index = this.courses.indexOf(item);
        this.$swal({
          title: 'Você tem certeza que deseja deletar este curso?',
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
            this.courses.splice(index, 1);
            this.$store.dispatch('removeCourse', item.id);
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            this.$swal(
              'Cancelado',
              '',
              'error'
            );
          }
        });
      },
      editCourse(item) {
        const editedCourseData = {
          title: item.title,
          url: item.url,
          author: item.author,
          description: item.description,
        };
        this.$store.dispatch('editedCourseInfo', editedCourseData);
        this.$router.replace(`/dashboard/admin/courses/${item.id}`);
      },
      editUser(item) {
        const editedUserData = {
          username: item.username,
          email: item.email,
          password: item.password,
          admin: item.admin,
          courses: item.courses,
        };
        this.$store.dispatch('editedUserInfo', editedUserData);
        this.$router.replace(`/dashboard/admin/users/${item.id}`);
      },
      addContent(item) {
        this.$store.dispatch('addContent', item);
        this.$router.replace(`/dashboard/admin/courses/${item.id}/module/create`);
      },
      lecturePage(module) {
        this.$store.dispatch('addLectureContent', module);
        this.$router.replace(`/dashboard/admin/courses/${module.id}/lecture/create`);
      }
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
}

.table-actions,
.courses-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.courses-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 100%;
}

.courses-list > p {
  margin: 0;
  padding: 0;
}

h2 {
  margin-left: 10px;
  color: #2d3436;
}

small {
  font-style: italic;
  color: #ff7675;
}

</style>
