# EvidationHealth
==================================================
:microscope: Angular Form and Multiple State Assignment :microscope:
--------------------------------------

Must have these components prior to starting:
1) [Node.js](https://nodejs.org/) (to run our server)
2) [Bower](http://bower.io/) (handle front-end packages such as bootstrap and angular)
3) [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm) (handle back-end packages)

Getting Started
--------------------------------------
1) Install Express (server side framework) 
    `npm install express`
2) Install nodemon (if make any changes to server code, it will automatically restart) 
    `npm install -g nodemon` 
    Example: `nodemon server.js`
3) Install angular-route 
    `bower install angular-route`
4) Install angular-resource (connect back-end with front-end) 
    `bower install angular-resource`

Unsolved Problems
--------------------------------------
1) Have not finished $http post json data for userForm submission
    Solution: In our JS file, include in the $http({ method: 'POST'}) command to save the data after user submits, then have a redirectTo template after .success
2) Progress bar 
    Solution: Use angular ui bootstrap "progressbar" element
    In HTML file,
    ```
    <progressbar class='progress-striped active' animate='true' max='100' 
                 value='progress' type='success'>
        <span count-to="{{statusTo}}" duration="1" count-from="{{statusFrom}}"> / 100
        </span>
    </progressbar>
    ```
    In JS file, 
    ```
    var myApp = angular.module("myApp", ["ui.bootstrap","statusTo"])
        .controller("progressBar",function($scope,$timeout){
            var status = 31;
              $scope.statusTo = status;
              $scope.statusFrom = 0;
              $timeout(function(){
              $scope.progress = status;
      }, 500);
    });
    ```
3) Search 
    Solution: In HTML file, add `<input ng-model="search.$">`
    This allows us to be able to search through any properties for example first name, last name, zip or npi