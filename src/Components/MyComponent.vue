<template>
  <div class="app-content"  >
    <h1 class="title-shop">Картины эпохи Возрождения</h1>
    <div class="card-wrapper">
      <div class="flex-card">
        <b-card
        v-for="(card, index) in cards"
        :key="index"
        :img-src="card.image"
        :price="card.oldPrice"
        img-alt="card.title"
        img-top
        tag="article"
        style="background-color: transparent; max-width:280px;max-height:328px; margin-top:120px; left: 18.33%; margin-right:32px;style=background:#F6F3F3 "
      >
        <a class="title-card" @click.stop="showModal(card)">{{ card.title }}</a>

            <div v-if="card.sales" class="sales-card"></div>
            <div class="block-price-with-butt" >
              <div  class="block-price ">
              <b-card-text v-if="card.fullprice" class="price-crossed">{{card.oldPrice}}</b-card-text>
              <b-card-text :class="{ 'special-text': card.onePrice }"  class="price-normal">{{card.price}}</b-card-text>
              <b-card-text v-if="card.sales"  class="sales-text">Продана на аукционе</b-card-text>
              </div>

              <button
                      @click.stop.passive="showModal(card)"
                      @click="buyCard(card.id); addToCart(index)"
                      :id="'buy-btn-' + card.id"
                      :disabled="processing || card.inCart"
                      href="#"
                      v-bind:class="{'button-maket': !card.inCart, 'button-maket-ok': card.inCart}"
                      v-if="!card.sales" class="button-maket" >

                <span v-if="card.inCart" >
                  <i  class="fas fa-check"></i> В корзине
                </span>
                <span  v-else >
                  <i></i> Купить
                </span>
              </button>
            </div>
        </b-card>
        <b-modal v-model="showModalFlag" title="Карточка товара">
          <b-card>
            <b-img :src="selectedItem.imgSrc" fluid></b-img>
            <h5>{{ selectedItem.title }}</h5>
            <b-carousel id="carousel1" ref="carousel" controls>
              <b-carousel-slide   :key="index" :img-src="selectedItem.image"></b-carousel-slide>
              <b-carousel-slide   :key="index + '2'" :img-src="selectedItem.image1"></b-carousel-slide>
            </b-carousel>
            <p>{{ selectedItem.text }}</p>
            <p>{{ selectedItem.price }}</p>
          </b-card>
        </b-modal>
      </div>
    </div>
  </div>
</template>
<script>
import { BCard, BCardText, BModal, BImg, BCarousel, BCarouselSlide } from 'bootstrap-vue'
export default {
  props: {
    image: {
      type: String,
      required: true
    }
  },
  name: 'MyComponent',
  components: {
    BCard,
    BCardText,
    BModal,
    BImg,
    BCarousel,
    BCarouselSlide
  },
  data () {
    return {
      showCarousel: true,
      cards: [
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
          oldPrice: ' ',
          price: ' ',
          fullprice: true,
          sales: true,
          id: 4,
          inCart: false,
          image1: 'https://via.placeholder.com/600x400/7CFC00/000000'
        }
      ],
      selectedItem: {},
      showModalFlag: false,
      processing: false,
      purchased: false,
      selectedCard: null
    }
  },
  mounted () {
    const cart = localStorage.getItem('cart')
    if (cart) {
      this.cards = JSON.parse(cart)
    }
  },
  methods: {
    addToCart (index) {
      const card = this.cards[index]
      card.inCart = true
      localStorage.setItem('cart', JSON.stringify(this.cards))
    },
    buyCard (cardId) {
      const buyBtn = document.getElementById('buy-btn-' + cardId)
      const checkIcon = document.createElement('span')
      checkIcon.classList.add('fa', 'fa-check')
      buyBtn.disabled = true
      buyBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Обрабатывается'
      setTimeout(() => {
        buyBtn.innerHTML = '<i class="fas fa-check"></i> В корзине'
      }, 2000)
    },
    showModal (card) {
      this.selectedItem = card
      this.showModalFlag = true
    }
  }
}
</script>
<style>
.title-shop{
position: absolute;
left: 18.33%;
right: 61.35%;
top: 14.69%;
bottom: 81.56%;
white-space: nowrap;
color: #343030;
font-family: 'Merriweather';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 150%;
display: flex;
transform: translate(0, +50%);
}
.block-price{
  display: flex;
  flex-direction: column;
}
.block-price-with-butt{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.price-crossed{
font-family: 'Merriweather';
font-style: normal;
font-weight: 300;
font-size: 14px;
text-decoration-line: line-through;
color: #A0A0A0;
display: flex;
align-items: center;
position: absolute;
left: 8.57%;
right: 62.5%;
top: 78.35%;
white-space: nowrap;
}
.price-normal{
display: flex;
align-items: center;
font-family: 'Merriweather';
font-style: normal;
font-weight: 700;
font-size: 16px;
color: #343030;
position: absolute;
left: 8.57%;
right: 58.21%;
top: 84.76%;
bottom: 7.93%;
white-space: nowrap;

}
.special-text{
  display: flex;
align-items: center;
font-family: 'Merriweather';
font-style: normal;
font-weight: 700;
font-size: 16px;
color: #343030;
position: absolute;
top: 81.71%;
white-space: nowrap;

}
.sales-text{
  position: absolute;
  left: 8.57%;
  right: 25%;
  top: 81.71%;
  bottom: 10.98%;
  white-space: nowrap;
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #343030;
}
.flex-card{
  display: flex;
  flex-direction: row;
}
.sales-card{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(225,225,225,.5);
}
.card-wrapper {
  position: relative;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.title-card{
  font-family: 'Merriweather';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 150%;
display: flex;
align-items: center;
text-decoration: none;
color: #343030;
cursor: pointer;
}
</style>
