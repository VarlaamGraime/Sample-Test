<template>
  <div class="app-content"  >
    <h1 class="title-shop">Картины эпохи Возрождения</h1>
    <div class="card-wrapper">
    <div class="flex-card">
      <b-card
      v-for="(card, index) in cards"
      :key="index"
      :img-src="card.image"
      :title="card.title"
      :price="card.oldPrice"
        img-alt="card.title"
        img-top
        tag="article"
        style="background-color: transparent; max-width:280px;max-height:328px; margin-top:120px; left: 18.33%; margin-right:32px;style=background:#F6F3F3 "
      >
      <div v-if="card.sales" class="sales-card"></div>
      <div class="block-price-with-butt" >
        <div  class="block-price ">
        <b-card-text v-if="card.fullprice" class="price-crossed">{{card.oldPrice}}</b-card-text>
        <b-card-text :class="{ 'special-text': card.onePrice }"  class="price-normal">{{card.price}}</b-card-text>
        <b-card-text v-if="card.sales"  class="sales-text">Продана на аукционе</b-card-text>
        </div>
        <button @click="buyCard(card.id)" :id="'buy-btn-' + card.id" :disabled="processing" href="#" v-if="!card.sales"  class="button-maket">
          Купить
        </button>
      </div>
      </b-card>
    </div>
    </div>
  </div>
</template>
<script>
import { BCard, BCardText } from 'bootstrap-vue'

export default {
  name: 'MyComponent',
  components: {
    BCard,
    BCardText
  },
  data () {
    return {
      cards: [
        {
          title: '«Рождение Венеры» Сандро Боттичелли',
          image: 'https://i.ibb.co/BBPJNLJ/painting-63186-1280-1.png',
          text: 'Описание карточки 1',
          oldPrice: '2 000 000 $',
          price: '1 000 000 $',
          fullprice: true,
          sales: false,
          id: 1
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
          id: 2
        },
        {
          title: '«Сотворение Адама» Микеланджело',
          image: 'https://i.ibb.co/0cHfgz7/image-19-1.png',
          text: 'Описание карточки 3',
          oldPrice: '6 000 000 $',
          price: '5 000 000 $',
          fullprice: true,
          sales: false,
          id: 3
        },
        {
          title: '«Урок анатомии»  Рембрандт',
          image: 'https://i.ibb.co/JC597h9/20152310142330-1.png',
          text: 'Описание карточки 3',
          oldPrice: ' ',
          price: ' ',
          fullprice: true,
          sales: true,
          id: 4
        }
      ],
      processing: false,
      purchased: false
    }
  },
  methods: {
    buyCard (cardId) {
      const buyBtn = document.getElementById('buy-btn-' + cardId)
      const checkIcon = document.createElement('span')
      checkIcon.classList.add('fa', 'fa-check')
      buyBtn.disabled = true
      buyBtn.innerText = 'Обрабатывается'
      setTimeout(() => {
        buyBtn.innerHTML = '<i class="fas fa-check"></i> В корзине'
      }, 2000)
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
</style>
