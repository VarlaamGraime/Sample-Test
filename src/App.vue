<template>
  <div class="wrapper " style="background:#F6F3F3">
    <Header />
    <MyComponent/>
    <Footer />
  </div>
</template>

<script>
import Header from './Components/Header.vue'
import Footer from './Components/Footer.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import MyComponent from './Components/MyComponent.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    MyComponent
  },
  data () {
    return {
    }
  }

}
</script>

<style>
h1 {
  font-family: Merriweather;
  font-size: 24px;
  font-weight: bold;
  line-height: 36px
}

h2 {
  font-family: Merriweather;
  font-size: 18px;
  font-weight: normal;
  line-height: 27px
}

h3 {
  font-family: Merriweather;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px
}

h4 {
  font-family: Merriweather;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px
}

h5 {
  font-family: Merriweather;
  font-size: 14px;
  font-weight: normal;
  line-height: 21px
}

h6 {
  font-family: Merriweather;
  font-size: 14px;
  font-weight: lighter;
  line-height: 21px
}

p {
  font-size: 16px;
  margin-top: 16px;
}

.wrapper{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
