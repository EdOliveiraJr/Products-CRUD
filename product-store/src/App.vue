<template>  
  <Button @click="this.visible = !this.visible">Cadastrar Produtos</Button>
  <Button @click="mostraProdutos">Visualizar Produtos</Button>
  <br>
  <hr>
  <h2>Produtos Ativos</h2>
  <div v-if="productsActives.length > 0 ">
    <ul v-for="(product, index) in productsActives" 
      :key="index"
      >
      <li>
        Id: {{ product.id }} Produto: {{ product.name }} 
        <button @click="deletarProduto(product.id)" > X </button>
        <button @click="inativarProduto(product.id)">Inativar</button>
      </li>  
    </ul>
  </div>
  <hr>
  <h2>Produtos Inativos</h2>
  <div v-if="productsInactives.length > 0 ">
    <ul v-for="(product, index) in productsInactives" 
      :key="index"
      >
      <li>
        Id: {{ product.id }} Produto: {{ product.name }} 
        <button @click="deletarProduto(product.id)" > X </button>
        <button @click="ativarProduto(product.id)">Ativar</button>
      </li>  
    </ul>
  </div>

  <Dialog 
    modal header="Cadastro de Produto" 
    v-model:visible="visible" 
    :style="{ width: '50rem' }"
  >
            <span class="p-text-secondary block mb-5">Insira os dados do novo produto</span>
            <div class="flex align-items-center gap-3 mb-3">
                <label for="name" class="font-semibold w-6rem">Nome</label>
                <InputText 
                  autocomplete="off"
                  class="flex-auto" 
                  id="name"
                  v-model="product.name" 
                />
            </div>
            <div class="flex align-items-center gap-3 mb-5">
                <label for="price" class="font-semibold w-6rem">Preço</label>
                <InputText 
                  autocomplete="off" 
                  class="flex-auto" 
                  id="price"
                  v-model="product.price" 
                />
            </div>
            <div class="flex align-items-center gap-3 mb-5">
                <label for="description" class="font-semibold w-6rem">Descrição</label>
                <InputText 
                  autocomplete="off" 
                  class="flex-auto" 
                  id="description"
                  v-model="product.description" 
                />
            </div>
            <div class="flex justify-content-end gap-2">
                <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
                <Button type="button" label="Save" @click="adicionarProduto(this.product)"></Button>
            </div>
  </Dialog>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
</template>

<script>
import api from './plugins/axios';

  export default {
    
    data() {
      return {
        visible: false,
        productsActives: [],
        productsInactives: [],
        product: {
          name: '',
          price: '',
          description: ''
        }

      }
    },
    methods: {
      limparCadastro(){
        this.product = {
          name: '',
          price: '',
          description: ''
        }
      },
      mostraProdutos() {
          api.get('/products?isActive=true')
          .then(resp => {
             this.productsActives = resp.data.data
          })
          .catch(error => {
            console.log(error);
          });
          api.get('/products?isActive=false')
          .then(resp => {
             this.productsInactives = resp.data.data
          })
          .catch(error => {
            console.log(error);
          });
        },
      adicionarProduto(product){
        api.post('/products/', product)
          .then(resp => {
            this.visible = false
            this.mostraProdutos()
            this.limparCadastro()
        })
        .catch(error => {
            console.log(error);
        });
      },
      deletarProduto(id){
        api.delete(`/products/${id}`)
          .then(resp => {
            this.mostraProdutos()
          })
          .catch(error => {
            console.log(error);
          });
      },
      ativarProduto(id){
        api.patch(`/products/${id}/active/`)
        .then(resp =>{
          this.mostraProdutos()
        })
        .catch(error => {
            console.log(error);
          });
      },
      inativarProduto(id){
        api.patch(`/products/${id}/inactive/`)
        .then(resp =>{
          this.mostraProdutos()
        })
        .catch(error => {
            console.log(error);
          });
      },
    },
    created(){
      this.mostraProdutos()
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

li {
  list-style: none
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
