<template>
<div v-for="property of properties" :key="property.id">
     <router-link :to="{name:'singleproperty',params:{id: property.id}}">
        <img :src="property.image" alt="">
        <div class="card-body">
                <h5>{{property.address.region}}/ {{property.address.neighbourhood}}/ {{property.address.street}}</h5>
                <h6>${{property.price}}</h6>
                <p> Bedrooms: {{property.rooms.bedrooms}}</p>
                <p> Bathrooms: {{property.rooms.bathrooms}}</p>
                <p> Land Size: {{property.size}} Sqr Metre</p>
            </div>
     </router-link>
     </div>
</template>

<script>
    export default{
        data(){
            return{
                properties:[]
            }
        },
        mounted(){
            fetch('http://localhost:3000/properties')
            .then((res)=> res.json())
            .then((data)=> console.log(this.properties = data))
            .catch(error => console.log(error.message))
        }
    }
</script>

