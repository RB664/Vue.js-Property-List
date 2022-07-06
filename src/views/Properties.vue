<template>
<div class="projects-container">
     <div v-for="property of properties" :key="property.id" class="card">
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

<style>
body{
    background-color: black;
}

.projects-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 25px;
    margin: 35px 35px 35px 35px;
}
.card p{
    margin-bottom: 0;
    border-radius: 0;
}
.card{
    margin-top: 50px;
    height: 475px;
    width: 250px;
    box-shadow: 15px 15px 15px red;
    border-radius: 15%;
}
.card img{
    width:  250px;
    height: 200px;
    border-radius: 10%;
}
.card a{
    text-decoration: none;
}
</style>