<template>
    <b-navbar type="is-dark">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img src="../assets/logo.png" alt="Jorgedipra">
                <p class="title txt-white">Jorgedipra</p>
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="https://jorgedipra.blogspot.com/" target="_blank">
                <span class="icon-text">
                    <span class="icon">
                        <b-icon pack="fab" icon="blogger-b" type="is-navis-danger"></b-icon>
                    </span>
                    <span>Blog</span>
                </span>
            </b-navbar-item>
            <b-navbar-item href="#" id="portafolioLink">
                <span class="icon-text">
                    <span class="icon">
                        <b-icon pack="fas" icon="folder" type="is-navis-danger"></b-icon>
                    </span>
                    <span>Portafolio</span>
                </span>
            </b-navbar-item>
            <b-navbar-item href="https://drive.google.com/drive/folders/0ByWJai73PqMpeE1MTGZqZnJVbnc" target="_blank">
                <span class="icon-text">
                    <span class="icon">
                        <b-icon pack="fas" icon="certificate" type="is-navis-danger"></b-icon>
                    </span>
                    <span>Certificados</span>
                </span>
            </b-navbar-item>
            <b-navbar-item href="#" id="contactoLink">
                <span class="icon-text">
                    <span class="icon">
                        <b-icon pack="fas" icon="envelope" type="is-navis-danger"></b-icon>
                    </span>
                    <span>Contáctame</span>
                </span>
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
    <button @click="goToTop" id="goToTopBtn" title="Ir Arriba">
        <span class="icon is-medium">
            <i class="fas fa-arrow-up fa-2x"></i>
        </span>
    </button>
</template>

<script>
export default {
    name: 'CompHeader',
    mounted() {
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            var goToTopBtn = document.getElementById("goToTopBtn");

            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                goToTopBtn.style.display = "block";
            } else {
                goToTopBtn.style.display = "none";
            }
        }


    },
    methods: {
        goToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    color: #428cc7;
}

.txt-white,
.link-home {
    color: #fff;
}

nav {
    border-radius: 0 0 5px 5px;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    padding: 5px 20px;
}

span.icon.has-text-navis-danger {
    color: #E91E63;
}

button#goToTopBtn {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #E91E63;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    z-index: 99;
}

button#goToTopBtn:hover {
    background-color: #8bc34a;
}
</style>