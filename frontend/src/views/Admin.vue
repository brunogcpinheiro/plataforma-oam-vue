<template>
    <div>
        <AdminHeader />
        <v-container>
            <h1>Painel Administrativo</h1>
            <v-dialog v-model="dialog" max-width="500px" color="secondary">
              <v-btn slot="activator" color="secondary" dark><v-icon>add</v-icon> Adicionar Usuário</v-btn>
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
                            required
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field 
                            label="Email *" 
                            hint="E-mail de compra"
                            required
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field 
                            label="Senha *" 
                            type="password" 
                            required
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-checkbox
                          v-model="adminCB"
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
                  <v-btn color="error" @click.native="dialog = false">Fechar</v-btn>
                  <v-btn color="secondary" @click.native="dialog = false">Salvar</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-layout>
                <v-flex>
                    <v-data-table
                        :headers="headers"
                        :items="users"
                        class="elevation-1"
                    >
                    <template slot="items" slot-scope="props">
                      <td>{{ props.item.id }}</td>
                      <td>{{ props.item.name }}</td>
                      <td>{{ props.item.email }}</td>
                      <td>{{ props.item.admin }}</td>
                      <td>{{ props.item.cursos }}</td>
                    </template>
                  </v-data-table>
                </v-flex>
            </v-layout>
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
        headers: [
          { text: 'id', value: 'id' },
          { text: 'Usuário', value: 'name' },
          { text: 'E-mail', sortable: false, value: 'email' },
          { text: 'Admin', sortable: false, value: 'admin' },
          { text: 'Cursos (id)', sortable: false, value: 'courses' },
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
        dialog: false,
        adminCB: false,
      };
    }
};
</script>

<style scoped>
h1 {
    margin-top: -30px;
    text-align: center;
}

.v-btn {
    margin: 10px 0 20px 0;
}

.v-icon {
    margin-right: 5px;
}
</style>