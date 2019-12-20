import Route from '@ember/routing/route';
export default Route.extend({

  model(params) {
    this.set('gist_id', params.gist_id);
    return params;
  },

  setupController(controller, model) {
    controller.set('gist_id', this.get('gist_id'));
    this._super(controller, model);
  }
});
