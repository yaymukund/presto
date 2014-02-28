// http://caolanmcmahon.com/posts/writing_for_node_and_the_browser/
(function(exports, $, RSVP) {
  exports.create = function(options) {
    return Object.create(this);
  };

  exports.uploadFile = function(file) {
    var deferred = RSVP.defer();
    return deferred.promise;
  };

  return exports;
})(typeof exports === 'undefined' ? this['Presto'] = {} : exports, jQuery, RSVP);
