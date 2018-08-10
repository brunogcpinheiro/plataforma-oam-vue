<template>
    <div class="login-form">
        <v-form @submit.prevent="onSubmit">
            <img src="../assets/logo.png" alt="Logo" />
            <v-text-field
              label="E-mail"
              v-model="email"
              name="email"
            ></v-text-field>
            <v-text-field
              label="Senha"
              v-model="password"
              name="password"
              type="password"
            ></v-text-field>
            <v-btn type="submit" color="primary">Entrar</v-btn>
        </v-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        onSubmit (e) {
            const formData = {
                email: this.email,
                password: this.password
            };
        console.log(formData);
        this.$store.dispatch('login');
        }
    }
};
</script>

<style scoped>
    .login-form {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    
    .v-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -50px;
    }
    
    img {
        width: 300px;
        height: 200px;
    }
    
    label {
        align-self: flex-start;
        margin-left: 4;
    }
    
    .v-text-field {
        padding: 10px;
        margin: 10px;
        width: 350px;
        border-radius: 10px;
    }
    
    .v-btn:last-child {
        background: #842e41;
        color: #fff;
        cursor: pointer;
    }
</style>