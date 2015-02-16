angular.module('starter.categories',[])
.factory("Category", function (RESOURCES, $resource) {
    console.log("factory: Category");
    //return $resource("http://www.planificaciondeportiva.es/bmoll-app/api/web/v1/countries/:id");
    return $resource(RESOURCES.CATEGORIES + "/:id", null,
        {

            query: {method: 'GET', isArray: true},
            get: {method: 'GET', isArray: true},
            add: {method: 'POST'},
            delete: {method: 'DELETE'},
            update: {method: 'PUT'} /*,params:{id:'@code'}*/
        });
})

.factory("Item", function (RESOURCES, $resource) {
    console.log("factory: Item");
    //return $resource("http://www.planificaciondeportiva.es/bmoll-app/api/web/v1/countries/:id");
    return $resource(RESOURCES.ITEMS + "/:id", null,
        {
            
            query: {method: 'GET', isArray: true},
            get: {method: 'GET', isArray: true},
            add: {method: 'POST'},
            delete: {method: 'DELETE'},
            update: {method: 'PUT'} /*,params:{id:'@code'}*/
        });
})

.factory("Images", function (RESOURCES, $resource) {
    console.log("factory: Images");
    //return $resource("http://www.planificaciondeportiva.es/bmoll-app/api/web/v1/countries/:id");
    return $resource(RESOURCES.IMAGES + "/:id", null,
        {
            
            query: {method: 'GET', isArray: true},
            get: {method: 'GET', isArray: true},
            add: {method: 'POST'},
            delete: {method: 'DELETE'},
            update: {method: 'PUT'} /*,params:{id:'@code'}*/
        });
})

.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
}]);

