<template>
  <div class="card">
    <div class="card-image">
      <figure class="image banner">
        <img src="../assets/baner.png">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img class="is-rounded" src="../assets/avatar.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">Jorge Diaz</p>
          <p class="subtitle is-6">@jorgedipra</p>
        </div>
        <p class="is-4">
            <b-icon pack="fas" icon="briefcase" type="is-navis-danger"></b-icon>
            Desarrollador Master en Cerlalc- Unesco. <br>
            <b-icon pack="fas" icon="street-view" type="is-navis-danger"></b-icon>  
            Bogotá, Colombia<br>
            <span class="is-right">
              <b-button type="is-dark" size="is-medium" tag="a"
                href="https://github.com/jorgedipra/jorgedipra.github.io"
                target="_blank" expanded>
              <b-icon pack="fab" icon="github" type="is-navis-danger"></b-icon>
              &nbsp;Repositorio
            </b-button> 
            </span>
            
        </p>
      </div>
      <hr>
      <div class="content">
        <div class="card">
          <div class="card-content">
            <p class="title">
              “La mayoría de la gente piensa que el diseño es una chapa, es una simple decoración. Para mí, nada es más importante en el futuro que el diseño. El diseño es el alma de todo lo creado por el hombre.”
            </p>
            <p class="subtitle">
              Steve Jobs
            </p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                View on <a href="https://twitter.com/jorgedipra" target="_blank">Twitter</a>
              </span>
            </p>
            <p class="card-footer-item">
              <span>
                Contact on <a href="https://www.linkedin.com/in/jorgedipra/" target="_blank">Linkedin</a>
              </span>
            </p>
            <p class="card-footer-item">
              <span>
                Develop on <a href="https://github.com/jorgedipra" target="_blank">Github</a>
              </span>
            </p>
          </footer>
        </div>
        <br>Desarrollada en: <a>@bulmaio</a>, <a>@vuejs</a>,
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">Actulizado: 11:09 PM - 19 Marzo 2024</time>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompHome',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.image img.is-rounded{
  background: #2196F3;
}
</style>
