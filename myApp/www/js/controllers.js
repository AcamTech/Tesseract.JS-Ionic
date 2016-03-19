angular.module('starter.controllers', [])

.controller('PhotoCtrl', function ($scope, Camera) {


    
    $scope.summary;
    $scope.text;

    $scope.getPhoto = function () {
        Camera.getPicture().then(function (imageURI) {
            $scope.status = "get picture";
            //console.log(imageURI);
            $scope.lastPhoto = imageURI;
            var temp = $scope.convertToCanvas(imageURI);
            $scope.convertToCanvas(imageURI);
            console.log("called the convertToCanvas Function")

        }, function (err) {
            console.err(err);
        }, {
            quality: 100,
            targetWidth: 320,
            targetHeight: 320,
            saveToPhotoAlbum: false
        });
    };
    
$scope.lastPhoto = "../img/text.png";
    $scope.convertToCanvas = function (lastPhoto) {
        console.log("reached last photo")
        lastPhoto.src = lastPhoto;
        console.log("processed last photo")

        $scope.status = "STARTED REACHED THIS PLACE 1" + lastPhoto;

        var canvas2 = document.getElementById("canvas2");
        $scope.status = "STARTED REACHED THIS PLACE 2" + lastPhoto;

        canvas2.width = lastPhoto.width;
        $scope.status = "STARTED REACHED THIS PLACE 3" + lastPhoto;

        canvas2.height = lastPhoto.height;
        $scope.status = "STARTED REACHED THIS PLACE 4" + lastPhoto;

        canvasbanana = canvas2.getContext("2d");
        $scope.status = "STARTED REACHED THIS PLACE 5" + lastPhoto;

        var img = new Image();
        img.src = lastPhoto;
        img.width = "1000";
        img.height = "1000";
        canvas2.width = img.width;
        canvas2.height = img.height;
        console.log(img.width + " " + img.height);
        img.onload = function () {
            canvasbanana.drawImage(img, 0, 0);
        }
        $scope.status = "STARTED REACHED THIS PLACE 6" + lastPhoto;
        $scope.picText();
        return canvasbanana;
        

        $scope.status = "finish convert to canvas";
    }

    $scope.picText = function () {

        var canvas = document.getElementById('canvas2');
        $scope.status = "reaced picText" ;

        Tesseract.recognize(canvas, {
            tessedit_char_blacklist: 'zzbp',
            progress: function (zzbp) {
                //$scope.text = zzbp.reconized
                console.log(zzbp);
                //$scope.summary = zzbp;
            }
        }).then(function (d) {
            console.log(d.text);
            $scope.text = d.text;
            //$scope.text = d.text
        }, function (err) {
            console.log(err);
            alert(err);
        });
    }


    //    $scope.getPhoto = function(){
    //        console.log('Getting camera');
    //        Camera.getPicture().then(function(imageURI) {
    //            console.log(imageURI);
    //
    //            $scope.lastPhoto = imageURI;
    //            $scope.text = imageURI
    //            var canvas = document.getElementById('c');
    //            canvas.height = window.innerHeight;
    //            canvas.width = window.innerWidth;
    //
    //            var ctx = canvas.getContext('2d');
    //
    //            var img = new Image ();
    //            img.src = imageURI;
    //            img.onload = function(){
    //                var ptrn = ctx.createPatter(img, 'no-repeat');
    //                ctx.fillStyle = ptrn;
    //                ctx.fillRect(0,0,canvas.width,canvas.height);
    //
    //
    //            }
    //            $scope.text = "test"
    //            $scope.picText();
    //        }, function (err){
    //            console.log(err);
    //            alert(err);
    //
    //        });
    //    }

//
//    //Select photo testing here 
//    // 1
//    $scope.images = [];
//
//    $scope.addImage = function () {
//        // 2
//        var options = {
//            destinationType: Camera.DestinationType.FILE_URI,
//            sourceType: Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
//            allowEdit: false,
//            encodingType: Camera.EncodingType.JPEG,
//            popoverOptions: CameraPopoverOptions,
//        };
//
//        // 3
//        $cordovaCamera.getPicture(options).then(function (imageData) {
//
//            // 4
//            onImageSuccess(imageData);
//
//            function onImageSuccess(fileURI) {
//                createFileEntry(fileURI);
//            }
//
//            function createFileEntry(fileURI) {
//                window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
//            }
//
//            // 5
//            function copyFile(fileEntry) {
//                var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
//                var newName = makeid() + name;
//
//                window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (fileSystem2) {
//                        fileEntry.copyTo(
//                            fileSystem2,
//                            newName,
//                            onCopySuccess,
//                            fail
//                        );
//                    },
//                    fail);
//            }
//
//            // 6
//            function onCopySuccess(entry) {
//                $scope.$apply(function () {
//                    $scope.images.push(entry.nativeURL);
//                });
//            }
//
//            function fail(error) {
//                console.log("fail: " + error.code);
//            }
//
//            function makeid() {
//                var text = "";
//                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//
//                for (var i = 0; i < 5; i++) {
//                    text += possible.charAt(Math.floor(Math.random() * possible.length));
//                }
//                return text;
//            }
//
//        }, function (err) {
//            console.log(err);
//        });
//    }
//
//    $scope.urlForImage = function (imageName) {
//        var name = imageName.substr(imageName.lastIndexOf('/') + 1);
//        var trueOrigin = cordova.file.dataDirectory + name;
//        return trueOrigin;
//    }
})


.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});