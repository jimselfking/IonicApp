angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('CategoryListCtrl', function ($location, $scope, Category) {
    Category.query(function (data) {
        $scope.categories = data;
    });
    $scope.insert = function (currentCategory) {
        console.log("llega ok." + currentCategory.code);
        Category.add({}, currentCategory);
        $location.path('/categories');
    };
    $scope.remove = function (currentCategory) {
        Category.remove({id: id}, {}, function (data) {
            $location.path('/');
        });
    };

})
.controller('CategoryDetailCtrl', ['$location', '$scope', '$stateParams', 'Category'
    , function ($location, $scope, $stateParams, Category) {
        $scope.Category = Category.get({id: $stateParams.id}, function (Category) {
            //$scope.mainImageUrl = phone.images[0];
            console.log($scope.Category);
        });
        $scope.update = function (currentCategory) {
            Category.update({id: $scope.Category.code}, currentCategory, function (data) {
                $location.path('/');
            });
        };

    }])

.controller('ItemListCtrl', function ($location, $scope, Item) {
  console.log(Item);
    Item.query(function (data) {
        $scope.items = data;
    });
    $scope.insert = function (currentItem) {
        console.log("llega ok." + currentItem.code);
        Item.add({}, currentItem);
        $location.path('/items');
    };
    $scope.remove = function (currentItem) {
        Item.remove({id: id}, {}, function (data) {
            $location.path('/');
        });
    };

})


.controller('ItemDetailCtrl', function($location, $scope, $stateParams, Item) {
   var items = Item.query({category_id: $stateParams.category_id}, function (data) {
          console.log(items);
          $scope.Category = $stateParams;
          $scope.Item = [];
         for(x=0; x<items.length; x++) {
              if (items[x].category_id == $stateParams.category_id ){
                 $scope.Item.push(items[x]);
              }
         }
           });

        $scope.update = function (currentItem) {
            Item.update({id: $scope.Item.code}, currentItem, function (data) {
                $location.path('/');
            });
        };

    })

.controller('ImagesListCtrl', function ($location, $scope, Images) {
  console.log(Images);
    Images.query(function (data) {
        $scope.images = data;
    });
    $scope.insert = function (currentImages) {
        console.log("llega ok." + currentImages.code);
        Images.add({}, currentImages);
        $location.path('/images');
    };
    $scope.remove = function (currentImages) {
        Images.remove({id: id}, {}, function (data) {
            $location.path('/');
        });
    };

})

.controller("CallCam", function($scope, $cordovaCamera) {
 
    $scope.takePicture = function() {
        var options = {
            quality : 75,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
    }
 
})

.controller('ImageDetailCtrl', function($location, $scope, $stateParams, Images) {
        var images = Images.query({item_id: $stateParams.item_id}, function (data) {
          $scope.Images = [];
          for(x=0; x<images.length; x++) {
               if (images[x].item_id == $stateParams.item_id ){
                  $scope.Images.push(images[x]);
               }
          }
        });
        $scope.update = function (currentItem) {
            Item.update({id: $scope.Item.code}, currentItem, function (data) {
                $location.path('/');
            });
        };
    });

;












