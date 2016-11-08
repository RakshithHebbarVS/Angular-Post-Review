angular.module('flapperNews', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.posts = [
  {title: 'postsdfisfoijf', upvotes: 5},
  {title: 'postbvibniwdjowj', upvotes: 2},
  {title: 'postbvsdnvidn', upvotes: 15},
  {title: 'postccsdmfp', upvotes: 9},
  {title: 'postfdisf', upvotes: 4}
];

$scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
  $scope.posts.push({title: $scope.title,link: $scope.link, upvotes: 0});
  $scope.title='';
  $scope.link = '';
};

$scope.deletePost = function(post){
   $scope.posts.pop(post);
}

$scope.incrementUpvotes = function(post) {
  post.upvotes += 1;
};

}]);