<template>
    <div>
        <AdminHeader />
        <v-container>
            <h1>Painel Administrativo</h1>
            <div class="users-table">
              <div class="table-actions">
                <h2>Tabela de Usuários</h2>
                <v-form>
                <v-dialog v-model="userDialog" max-width="500px">
                    <v-btn slot="activator" color="secondary"><v-icon>add</v-icon> Adicionar Usuário</v-btn>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Adicionar Usuário</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout wrap>
                            <v-flex xs12>
                              <v-text-field 
                                  label="Usuário *"
                                  hint="Nome completo"
                                  v-model="username"
                                  required
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field 
                                  label="Email *" 
                                  hint="E-mail de compra"
                                  v-model="email"
                                  required
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field 
                                  label="Senha *" 
                                  type="password"
                                  v-model="password"
                                  required
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-checkbox
                                v-model="admin"
                                label="Administrador"
                                color="secondary"
                                value="admin"
                                hide-details
                              ></v-checkbox>
                            </v-flex>
                            <v-flex xs12>
                              <v-autocomplete
                                :items="['Ortodontia Iniciante I', 'Ortodontia Iniciante II', 'Ortodontia Intermediária I', 'Ortodontia Avançada I', 'Ortodontia Avançada IV']"
                                label="Cursos *"
                                multiple
                                chips
                              ></v-autocomplete>
                            </v-flex>
                          </v-layout>
                        </v-container>
                        <small>* Campos obrigatórios</small>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="secondary" @click.native="userDialog = false" type="submit">Salvar</v-btn>
                        <v-btn color="error" @click.native="userDialog = false" type="submit">Fechar</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  </v-form>
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
                          <td>{{ props.item.name }}</td>
                          <td>{{ props.item.email }}</td>
                          <td>{{ props.item.admin }}</td>
                          <td>{{ props.item.cursos }}</td>
                          <td>
                            <v-btn color="secondary">Editar</v-btn>
                            <v-btn color="error">Excluir</v-btn>
                          </td>
                        </template>
                      </v-data-table>
                    </v-flex>
                </v-layout>
            </div>
            
            <div class="courses-table">
              <div class="courses-actions">
                <h2>Tabela de Cursos</h2>
                <v-dialog v-model="courseDialog" max-width="500px">
                    <v-btn slot="activator" color="secondary"><v-icon>add</v-icon> Adicionar Curso</v-btn>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Adicionar Curso</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout wrap>
                            <v-flex xs12>
                              <v-text-field 
                                  label="Nome do curso *"
                                  required
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-container>
                        <small>* Campos obrigatórios</small>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="secondary" @click.native="courseDialog = false">Salvar</v-btn>
                        <v-btn color="error" @click.native="courseDialog = false">Fechar</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
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
                          <td>{{ props.item.name }}</td>
                          <td>
                            <v-btn color="secondary">Editar</v-btn>
                            <v-btn color="error">Excluir</v-btn>
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

export default {
    name: "Admin",
    components: {
        AdminHeader
    },
    data () {
      return {
        usersHeaders: [
          { text: 'id', value: 'id' },
          { text: 'Usuário', value: 'name' },
          { text: 'E-mail', sortable: false, value: 'email' },
          { text: 'Admin', sortable: false, value: 'admin' },
          { text: 'Cursos (id)', sortable: false, value: 'courses' },
          { text: 'Ações', sortable: false, value: 'ações', align: 'right' },
        ],
        users: [
          {
            id: "1",
            name: 'Admin',
            email: 'admin@admin.com.br',
            admin: true,
            cursos: '1, 2',
          },
        ],
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
    methods: {
      onSubmit() {
        const registerData = {
          username: this.username,
          email: this.email,
          password: this.password,
          admin: this.admin,
        };
      console.log(registerData);
        
      this.$store.dispatch('register', registerData);
      }
    },
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

.users-table, .courses-table {
  margin: 25px 0 35px 0;
  border: 1px solid #e5e5e5;
  background: #d1d8e0;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(196,196,196,1);
  -moz-box-shadow: 0px 2px 5px 0px rgba(196,196,196,1);
  box-shadow: 0px 2px 5px 0px rgba(196,196,196,1);
}

.table-actions, .courses-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h2 {
  margin-left: 10px;
  color: #182C61;
}
</style>