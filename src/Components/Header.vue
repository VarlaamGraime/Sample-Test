<template>
  <header>
    <nav>
      <ul>
        <li class="catalog"><a href='#'>Каталог</a></li>
        <li class="delivery"><a  href='#'>Доставка</a></li>
        <li class="pay"><a  href='#'>Оплата</a></li>
        <li class="contacts"><a  href='#'>Контакты</a></li>
        <li class="company"><a  href='#'>О компании</a></li>
      </ul>
      <div>
        <form>
          <div class="form-group">
            <input  class="form-for-find" v-model="search" @input="filterItems" type="text" placeholder="Поиск по названию картины">
          </div>
          <button class="button-find button-maket">Найти</button>
        </form>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Header-1',
  data () {
    return {
      name: '',
      search: ''
    }
  },
  methods: {
    filterItems () {
      this.$emit('filter-items', this.search)
    }
  }
}
</script>
<style>
header {
  background-color: #E5E5E5;
  width: 1920px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  border-bottom: 1px solid #E1E1E1;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
  margin-right: 10px;

}

nav a {
  color: #343030;
  text-decoration: none;
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

}

.catalog{
  position: absolute;
  left: 23.33%;
  right: 73.59%;
  top: 3.85%;
  bottom: 93.96%;
}

.delivery{
  position: absolute;
  left: 28.91%;
  right: 67.5%;
  top: 3.85%;
  bottom: 93.96%;
}

.pay{
position: absolute;
left: 35%;
right: 62.19%;
top: 3.85%;
bottom: 93.96%;
}

.contacts{
  position: absolute;
left: 40.31%;
right: 55.73%;
top: 3.85%;
bottom: 93.96%;
}

.company{
position: absolute;
left: 46.77%;
right: 48.44%;
top: 3.85%;
bottom: 93.96%;
white-space: nowrap;
}

.form-for-find{
width: 294px;
height: 48px;
border: solid 1px #E1E1E1;
box-sizing: border-box;
position: absolute;
height: 48px;
left: 60%;
right: 18.33%;
top: 24px;
padding-left: 16px;
color: #343030;
margin-left: 68px;
}

.button-find{
position: absolute;
height: 48px;
left: 75.31%;
right: 18.33%;
top: 24px;
background: #403432;
border-radius: 0px;
color: #FFFFFF;
margin-left: 68px;
}

.button-maket{
background: #403432;
border-radius: 0px;
color: #FFFFFF;
width: 118px;
height: 48px;
}
.button-maket-ok{
  background: #5B3A32;
  border-radius: 0px;
  color: #FFFFFF;
  width: 118px;
  height: 48px;
  }
.button-maket:hover{
  background: #776763;
  border-radius: 0px;
  color: #FFFFFF;
  width: 118px;
  height: 48px;
  transition: .3s;
  }

.form-for-find::placeholder {
  padding-left: 16px;
  color:#9f9f9f;
}

.form-for-find:focus {
  border: solid 1px #B5B5B5;
  outline: none;
}
</style>
