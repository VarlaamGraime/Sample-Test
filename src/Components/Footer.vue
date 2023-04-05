<template>
  <footer>
    <nav>
      <ul>
        <li class="catalogF"><a href='#'>Каталог</a></li>
        <li class="deliveryF"><a  href='#'>Доставка</a></li>
        <li class="payF"><a  href='#'>Оплата</a></li>
        <li class="contactsF"><a  href='#'>Контакты</a></li>
        <li class="companyF"><a  href='#'>О компании</a></li>
        <li class="call"><a href='#'><font-awesome-icon :icon="['fas', 'phone']" />+7 (812) 555-55-55</a></li>
        <!-- <li class="adress"><a  href='#'>г. Санкт-Петербург, ул. Ефимова, 3</a></li> -->
      </ul>
    </nav>
  </footer>
</template>
<script>
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'Footer-1',
  data () {
    return {
      name: '',
      components: {
        FontAwesomeIcon
      },
      phoneNumber: '123-456-7890',
      icons: {
        faPhone
      }
    }
  },
  computed: {
    phoneLink () {
      return 'tel:' + this.phoneNumber
    }
  }
}
</script>
<style>
footer {
  background-color: #ECEAEA;
  width: 1920px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  border-bottom: 1px solid #E1E1E1;
  margin-top: auto;
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

.catalogF{
  position: absolute;
  left: 23.33%;
  right: 73.59%;
  top: 93.96%;
  bottom: 3.85%;
}

.deliveryF{
  position: absolute;
  left: 28.91%;
  right: 67.5%;
  top: 93.96%;
  bottom: 3.85%;
}

.payF{
  position: absolute;
  left: 35%;
  right: 62.19%;
  top: 93.96%;
  bottom: 3.85%;
}

.contactsF{
  position: absolute;
  left: 40.31%;
  right: 55.73%;
  top: 93.96%;
  bottom: 3.85%;
}

.companyF{
  position: absolute;
  left: 46.77%;
  right: 48.28%;
  top: 93.96%;
  bottom: 3.85%;
white-space: nowrap;
}

.call{
  position: absolute;
  left: 59.53%;
  right: 33.39%;
  top: 93.85%;
  bottom: 3.96%;
white-space: nowrap;

}

.adress{
  position: absolute;
  left: 70.52%;
  right: 15.89%;
  top: 93.96%;
  bottom: 3.85%;
white-space: nowrap;

}
</style>
