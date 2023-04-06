Vue.component('product-modal', {
  props: {
    card: Object
  },
  template: `
    <b-modal :title="card.title" :ok-only="true">
      <b-card :img-src="card.image" img-alt="Card image" img-top>
        <b-card-text>{{ card.text }}</b-card-text>
        <b-card-text v-if="card.fullprice">
          <del>{{ card.oldPrice }}</del>
          <b>{{ card.price }}</b>
        </b-card-text>
        <b-card-text v-else>
          <b>{{ card.price }}</b>
        </b-card-text>
      </b-card>
      <template v-slot:modal-footer="{ ok }">
        <button @click="ok()">Закрыть</button>
      </template>
    </b-modal>
  `
});
