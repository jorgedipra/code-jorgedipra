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
            <div class="column is-4">
                <div><br><br></div>
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
                    <div class="column is-narrow">
                        <div class="bd-notification is-primary has-text-centered">
                            <i class="fab fa-stack-overflow fab-5x fab-lg"></i>
                            <p class="block">
                                Jorgedipra
                            </p>
                        </div>
                    </div>
                    <div class="column is-narrow">
    <div class="bd-notification is-primary has-text-centered">
        <i class="fab fa-codepen fab-5x fab-lg"></i>
        <p class="block">
            Jorgedipra
        </p>
    </div>
</div>

                </div>

            </div>
            <div class="column is-7">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSexIeSAvhNR0FkprGsVgoO3mlRnw-y_CPy2IOh0GbV-iHfJuQ/viewform?embedded=true"
                    width="640" height="800" frameborder="0" marginheight="0" marginwidth="0"
                    style="border: none; overflow: hidden;" allow="autoplay 'self'; fullscreen 'self'"
                    data-ruffle-polyfilled="">
                    Cargando…
                </iframe>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    mounted() {
        document.addEventListener('DOMContentLoaded', function () {
            var contactoLink = document.getElementById('contactoLink');

            contactoLink.addEventListener('click', function (event) {
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