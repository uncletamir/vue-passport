<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>Data Kategori</h4>
                        <hr>
                        <router-link :to="{name: 'CreateKategori'}" class="btn btn-md btn-success">Tambah Kategori</router-link>

                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Kode Kategori</th>
                                    <th scope="col">Nama Kategori</th>
                                    <th scope="col">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(kategori, index) in kategoris" :key="index">
                                    <td>{{ kategori.kode_kategori }}</td>
                                    <td>{{ kategori.nama_kategori }}</td>
                                    <td class="text-center">
                                        <router-link :to="{name: 'EditKategori', params:{id: kategori.id }}" class="btn btn-sm btn-primary mr-1">Edit</router-link>
                                        <button @click.prevent="kategoriDelete(kategori.id)" class="btn btn-sm btn-danger ml-1">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {

    setup() {

        //reactive state
        let kategoris = ref([])

        //mounted
        onMounted(() => {

            //get API from Laravel Backend
            axios.get('http://localhost:8000/api/kategori')
            .then(response => {
              
              //assign state posts with response data
              kategoris.value = response.data.data

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        //method delete
        function kategoriDelete(id) {
                    
        //delete data kategori by ID
        axios.delete(`http://localhost:8000/api/kategori/${id}`)
        .then(() => {
                    
            //splice posts 
            kategoris.value.splice(kategoris.value.indexOf(id), 1);

            }).catch(error => {
                console.log(error.response.data)
            })

        }

        //return
        return {
            kategoris,
            kategoriDelete
        }

    }

}
</script>

<style>
    body{
        background: lightgray;
    }
</style>