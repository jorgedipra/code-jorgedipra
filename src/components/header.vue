<template>
    <b-navbar type="is-dark">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../assets/logo.png"
                    alt="Jorgedipra"
                >
                <p class="title txt-white">Jorgedipra</p>
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#">
                <b-icon pack="fab" icon="blogger-b" type="is-navis-danger"></b-icon>    
                <label class="item-nav">Blog</label>
            </b-navbar-item>
            <b-navbar-item href="#">
                <b-icon pack="fas" icon="folder" type="is-navis-danger"></b-icon>    
                <label class="item-nav">Portafolio</label>
            </b-navbar-item>
            <b-navbar-item href="#">
                <b-icon pack="fas" icon="certificate" type="is-navis-danger"></b-icon>    
                <label class="item-nav">Certificados</label>
            </b-navbar-item>
            <b-navbar-item href="#">
                <b-icon pack="fas" icon="envelope" type="is-navis-danger"></b-icon>    
                <label class="item-nav">Contáctame</label>
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
    export default {
        name: 'CompHeader',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a {
        color: #428cc7;
    }
    .txt-white,
    .link-home{
        color: #fff;
    }
    nav{
        border-radius: 0 0 5px 5px;
        box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12);
        padding: 5px 20px;
    }
    .item-nav{
        margin-left: 10px;
    }
    span.icon.has-text-navis-danger{
        color: #E91E63;
    }
</style>