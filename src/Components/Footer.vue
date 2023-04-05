<template>
  <footer>
    <nav>
      <ul>
        <li class="catalogF"><a href='#'>Каталог</a></li>
        <li class="deliveryF"><a  href='#'>Доставка</a></li>
        <li class="payF"><a  href='#'>Оплата</a></li>
        <li class="contactsF"><a  href='#'>Контакты</a></li>
        <li class="companyF"><a  href='#'>О компании</a></li>
        <li class="call"><a href='#'><svg class="phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>+7 (812) 555-55-55</a></li>
        <li class="adress"><a  href='#'><svg class="location-dot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> г. Санкт-Петербург, ул. Ефимова, 3</a></li>
      </ul>
    </nav>
  </footer>
</template>
<script>
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Footer-1',
  data () {
    return {
      phoneNumber: '123-456-7890'
    }
  },
  components: {
  },
  computed: {
    phoneLink () {
      return 'tel:' + this.phoneNumber
    }
  },
  created () {
    this.$options.icons = {
      faPhone
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
.phone{
  max-width: 14px;
  max-height: 14px;
  margin-right: 9px;
}
.location-dot{
  max-width: 10,14px;
  max-height: 14px;
  margin-right: 10,86px;
}
</style>
