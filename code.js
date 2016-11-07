app.controller("ReviewController", function(){
this.review={};
this.addReview=function(product){
product.reviews.push(this.review);
this.review={};
}
})

this.addReview=function(product){
    this.review.createdOn=Date.now();
    product.review.push(this.review);
    this.review={};
}


Reviews:[
{
stars:5,
body:"i really liked the gem",
author:"elliot_luke@live.co.uk"
}];