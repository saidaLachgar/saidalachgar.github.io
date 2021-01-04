(function($) {

  $.fn.glitch = function(options) {
    return this.each(function(key, element) {
      let settings = $.extend({
        chars: 'XYZRGPQEETUFSN',
        charTime: 5,
        finalText: undefined,
        done: function(){console.log('done!');}
      }, options );
      let dfd = $.Deferred();

      let that = '';
     
      element = $(element);
     
      let originalText = element.text();
      
      let TextScramble = (function(){
        let that = {};
        function TextScramble (elementRefrence,chars) {
          if(chars === undefined){
            that.chars = settings.chars;
          }
          that.element = elementRefrence;
          that.originalText = settings.finalText || elementRefrence.text();
          that.scrambledText = initalizeScramble();
        }
       
        function initalizeScramble(){
          let scrambleSet = []
          for (var i = 0; i < that.originalText.length; i++) {
            scrambleSet.push(randomChar())
          }
          return scrambleSet;
        }
      
        function randomChar() {
          return that.chars[Math.floor(Math.random() * that.chars.length)];
        }
       
        function setCharAt(str,index,chr) {
          if(index > str.length-1) return str;
          return str.substr(0,index) + chr + str.substr(index+1);
        }
        
        function animateChar(index){
          let dfd = $.Deferred();
          let timeDiff = Math.floor(Math.random() * 40) + 10;
          let animateAmount = Math.floor(Math.random() * 2) + settings.charTime;

          let intervalSignit = setInterval(function(){
            if(animateAmount === 0){
              clearInterval(intervalSignit);
              dfd.resolve();
              that.element.text(
                setCharAt(
                  that.element.text(),
                  index,
                  that.originalText.charAt(index)
                )
              );
            }
            else{
              that.element.text(
                setCharAt(
                  that.element.text(),
                  index,
                  randomChar()
                )
              );
              animateAmount--;
            }
          }, timeDiff);


          return dfd.promise();
        }
       
        TextScramble.prototype.getScrambledText = function(){
          return that.scrambledText.join("");
        }
       
        TextScramble.prototype.animate = function(){
          let dfd = $.Deferred();
          let promiseChain = [];

          for (var i = 0; i < element.text().length; i++) {
            promiseChain.push(animateChar(i));
          }
          Promise.all(promiseChain)
            .then(function(){
              dfd.resolve();
            });
          return dfd.promise();
        }
        return TextScramble;
      })();
    
      let effect = new TextScramble(element)
     
      element.text(effect.getScrambledText());
     
      effect.animate()
        .then(function(){
          settings.done(element);
        })

    });
  };
})(jQuery);
