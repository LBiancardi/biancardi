var like = document.querySelectorAll("#like-button");
var qtdLikes = document.querySelectorAll("#qtdLikes");
var codePos = document.querySelectorAll(".code-organizer");
// var codePos = document.querySelectorAll(".flex-container");
var likes = document.querySelectorAll('#display-details');
initialLikes = 0;
// color = 'white';
// var click = false;


      function createLikes() {
        for (var i = 0; i < like.length; i++) {
            like[i].style.color = 'white';
            like[i].innerText = initialLikes;
        }
      }

        function clickLike(){
            if(this.style.color != 'DodgerBlue' && this.style.borderColor != 'red') {
              this.style.color = 'DodgerBlue';
              this.style.borderColor = 'red';
              this.innerText++;
            } else {
              this.style.color = 'white';
              this.style.borderColor = 'white';
              this.innerText--;
            }
        };

        function hoverLike(){
            this.style.color = 'Aquamarine';
        };

        function mouseOutLike() {
          if(this.style.borderColor === 'red') {
            this.style.color = 'DodgerBlue';
          } else {
            this.style.color = 'white';
          }
        }

        for (var i = 0; i < like.length; i++) {
            if(like[i].addEventListener('click', clickLike)){
            }
          }
        
          for (var i = 0; i < like.length; i++) {
            if(like[i].addEventListener('mouseover', hoverLike)){
            }
          }

          for (var i = 0; i < like.length; i++) {
            if(like[i].addEventListener('mouseout', mouseOutLike)){
            }
          }

      // FUTURE FUNCTION TO HIDE AND DISPLAY QTD LIKES AND COMMENTS

      // function showLikes() {
      //   for (var i = 0; i < codePos.length; i++) {
      //     codePos[i].style.display = '';
      //     console.log("create first block");
      //     likes[i].style.display = '';
      //     console.log("create first likes details");
      //   }
      // }
          
      // function hideLikes() {
      //   likes[0].style.display = 'none';
      // }

      // function displayLikes() {
      //   likes[0].style.display = 'block';
      //   }

      // for (var i = 0; i < codePos.length; i++) {
      //   if(codePos[i].addEventListener('mouseover', displayLikes)){
      //   } else if (codePos[i].addEventListener('mouseout', hideLikes)) {
      //   }
      // }


        document.addEventListener("DOMContentLoaded", createLikes);
      // document.addEventListener("DOMContentLoaded", showLikes);
      // document.addEventListener("DOMContentLoaded", hideLikes);


