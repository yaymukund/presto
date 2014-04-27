import request from 'ic-ajax';
import { requireProperty } from 'presto/util';

export default Ember.Object.extend(Ember.PromiseProxyMixin, {
  init: function() {
    this._super();

    requireProperty(this, 'policyUrl');

    var promise = request({
      type: 'GET',
      url: this.get('policyUrl'),
      dataType: 'json'
    });

    this.set('promise', promise);
  }
});
