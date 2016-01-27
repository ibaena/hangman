module.exports = function(let){
  this.charac = let;
  this.appear = false;
  this.letterRender = function(){
    if (this.appear = false){
      console.log("_");
      return("_");
    }
    else {
      console.log(this.charac);
      return(this.charac);
    }
  };
}
