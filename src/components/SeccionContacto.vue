<template>
    <div id="contacto" class="container is-widescreen">
        <br>
        <div class="columns">
            <div class="column is-1"></div>
            <div class="column">
                <h1 class="title">
                    <span class="icon-text">
                        <span class="icon">
                            <b-icon pack="fas" icon="envelope" type="is-navis-danger"></b-icon>
                        </span>
                        <span>Contáctame</span>
                    </span>
                </h1>
            </div>
        </div>
        <hr>
        <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-5">
                <div class="columns is-mobile is-multiline is-centered">
                    <div class="column is-narrow">
                        <div class="bd-notification is-primary has-text-centered">
                            <i class="fab fa-facebook fab-lg"></i>
                            <p class="block">
                                Jorgedipra
                            </p>
                        </div>
                    </div>
                    <div class="column is-narrow">
                        <div class="bd-notification is-primary has-text-centered">
                            <i class="fab fa-twitter fab-5x fab-lg"></i>
                            <p class="block">
                                @Jorgedipra
                            </p>
                        </div>
                    </div>
                    <div class="column is-narrow">
                        <div class="bd-notification is-primary has-text-centered">
                            <i class="fab fa-github-alt fab-5x fab-lg"></i>
                            <p class="block">
                                Jorgedipra
                            </p>
                        </div>
                    </div>
                    <div class="column is-narrow">
                        <div class="bd-notification is-primary has-text-centered">
                            <i class="fab fa-linkedin fab-5x fab-lg"></i>
                            <p class="block">
                                Jorgedipra
                            </p>
                        </div>
                    </div>
                    <div class="column is-narrow">
                        <div class="bd-notification is-primary has-text-centered">
                            <i class="fab fa-youtube fab-5x fab-lg"></i>
                            <p class="block">
                                Jorgedipra
                            </p>
                        </div>
                    </div>
                    <div class="column is-narrow">
                        <div class="bd-notification is-primary has-text-centered">
                            <i class="fab fa-bitbucket fab-5x fab-lg"></i>
                            <p class="block">
                                Jorgedipra
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="column is-1"></div>
            <div class="column is-5">
                <h2 class="subtitle">Enviame un Mensaje</h2>
                <iframe src="http://es.foxyform.com/form.php?id=327257&amp;sec_hash=9479aa9f756" width="350px"
                    height="427px" style="border: none;" frameborder="0" allow="autoplay 'self'; fullscreen 'self'"
                    data-ruffle-polyfilled=""></iframe>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  mounted() {
    document.addEventListener('DOMContentLoaded', function() {
    var contactoLink = document.getElementById('contactoLink');

    contactoLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace realice la acción por defecto

        var contactoSection = document.getElementById('contacto');
        contactoSection.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente hasta la sección de contacto
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
</style>