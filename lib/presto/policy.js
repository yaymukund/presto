import request from 'ic-ajax';

export default Ember.Object.extend(Ember.PromiseProxyMixin, {
  init: function() {
    this._super();

    var promise = request({
      type: 'GET',
      url: this.get('policyUrl'),
      dataType: 'json'
    });

    this.set('promise', promise);
  }
});
