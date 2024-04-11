<template>
    <div id="portafolio" class="container is-widescreen">
        <br>
        <div class="columns">
            <div class="column is-1"></div>
            <div class="column">
                <h2 class="title">
                    <span class="icon-text">
                        <span class="icon">
                            <b-icon pack="fas" icon="folder" type="is-navis-danger"></b-icon>
                        </span>
                        <span>Portafolio</span>
                    </span>
                </h2>
            </div>
        </div>
        <hr>
        <div class="columns">
            <div class="column is-12">
                <div class="columns is-mobile is-multiline is-centered">

                    <div class="column is-narrow card-row" v-for="(articulo, index) in datos.articulos" :key="index">
                        <article class="tablet" :style="{ 'background-image': 'url(' + articulo.imageUrl + ')' }">
                            <aside class="imgLogo" :style="{ 'background-image': 'url(' + articulo.imageUrl_1 + ')' }">
                            </aside>
                            <div class="text">
                                <h5>{{ articulo.titulo }}</h5>
                                <h2><a :href="articulo.externalLink" target="_blank">{{ articulo.linkText }}</a></h2>
                                <h4><a :href="articulo.externalLink_1" target="_blank">{{ articulo.linkText_1 }}</a>
                                </h4>
                            </div>
                            <span class="fondo-1"></span>
                            <span class="fondo-4" style="background-color: #8BC34A"></span>
                            <span class="fondo-3" style="border-top: 130px solid #8BC34A"></span>
                        </article>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            datos: {}
        }
    },
    mounted() {
        fetch('./data.json')
            .then(response => response.json())
            .then(data => this.datos = data)
            .catch(error => console.error('Error al cargar los datos:', error));

        document.addEventListener('DOMContentLoaded', function () {
            var portafolioLink = document.getElementById('portafolioLink');

            portafolioLink.addEventListener('click', function (event) {
                event.preventDefault(); // Evita que el enlace realice la acción por defecto

                var portafolioSection = document.getElementById('portafolio');
                portafolioSection.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente hasta la sección de contacto
            });
        });

    }
}
</script>

<style>
div {
    border: none;
}

.fab-lg {
    font-size: 100px;
}

.tablet {
    border-radius: 1px;
    border: 1px solid #4a4a4a;

    display: grid;
    grid-template-columns: 130px auto;
    height: 132px;
    width: 330px;
}

.tablet .imgLogo {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    border: solid 1px #bdbdbd;
    -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    height: 100px;
    margin: 17px;
    position: relative;
    width: 100px;
    z-index: 1;
}

.tablet .text {
    color: #fff;
    display: grid;
    grid-column: 2;
    grid-template-rows: 17px 25px 37px 20px 25px auto;
    grid-template-columns: 200px;
    height: 130px;
    position: initial;
    width: 200px;
    z-index: 1;
}

.tablet .text h5 {
    grid-row: 2;
    color: #212121;
    font-weight: 500;
}

.tablet .text h2 {
    grid-row: 3;
    white-space: nowrap;
    width: 8.3em;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    height: 40px;
}

.tablet .text h2 a {
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    font-size: 92%;
}

.tablet .text h4 {
    grid-row: 5;
    height: 28px;
    margin-right: 15px;
    text-align: right;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 8.2em;
    overflow: hidden;
}

.tablet .text h4 a {
    color: #fff;
    font-weight: 500;
    font-size: 95%;
    padding-right: 0px;
    text-align: right;
    margin-left: 11px;
}

.tablet .fondo-1 {
    background: #212121;
    border-radius: 2px;
    -webkit-filter: sepia(100%);
    filter: sepia(100%);
    height: 130px;
    margin-left: 130px;
    opacity: 0.5;
    position: absolute;
    width: 200px;
    z-index: 0;
}

.tablet .fondo-4 {
    border-radius: 2px 0px 0px 2px;
    height: 130px;
    position: absolute;
    width: 130px;
    z-index: 0;
}

.tablet .fondo-3 {
    border-right: 120px solid transparent;
    height: 0;
    margin-left: 130px;
    position: absolute;
    width: 0;
    z-index: 0;
}

.card-row {
    padding: 5px !important;
}
</style>