<template>
  <div class="wrapper " style="background:#F6F3F3">
    <Header @filter-items="filterItems" />
    <MyComponent :items="items"/>
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
      items: [
        {
          title: '«Рождение Венеры» Сандро Боттичелли',
          image: 'https://i.ibb.co/BBPJNLJ/painting-63186-1280-1.png',
          text: 'Описание карточки 1',
          oldPrice: '2 000 000 $',
          price: '1 000 000 $',
          fullprice: true,
          sales: false,
          id: 1,
          inCart: false,
          image1: 'https://via.placeholder.com/600x400/7CFC00/000000'
        },
        {
          title: '«Тайная вечеря»  Леонардо да Винчи',
          image: 'https://i.ibb.co/k4L9LJG/ae973f6678e037cd297053384aa7dca0-1.png',
          text: 'Описание карточки 2',
          oldPrice: 'test',
          price: '3 000 000 $',
          fullprice: false,
          sales: false,
          onePrice: false,
          id: 2,
          inCart: false,
          image1: 'https://via.placeholder.com/600x400/FFD700/000000'
        },
        {
          title: '«Сотворение Адама» Микеланджело',
          image: 'https://i.ibb.co/0cHfgz7/image-19-1.png',
          text: 'Описание карточки 3',
          oldPrice: '6 000 000 $',
          price: '5 000 000 $',
          fullprice: true,
          sales: false,
          id: 3,
          inCart: false,
          image1: 'https://via.placeholder.com/600x400/FF6347/000000'
        },
        {
          title: '«Урок анатомии»  Рембрандт',
          image: 'https://i.ibb.co/JC597h9/20152310142330-1.png',
          text: 'Описание карточки 4',
          oldPrice: '  ',
          price: '  ',
          fullprice: true,
          sales: true,
          id: 4,
          inCart: false,
          image1: 'https://via.placeholder.com/600x400/7CFC00/000000'
        }
      ]
    }
  },
  methods: {
    filterItems (search) {
      this.$children[1].filteredItems = this.items.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
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
