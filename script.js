function clearScreen() {
    document.getElementById("result").value = "";
   }
   
   // This function display values
   function display(value) {
    document.getElementById("result").value += value;
   }
   // This function evaluates the expression and return result
   function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }

 
    function removeCharacter(){
     let original = document.getElementById("result").value;
     let str = ""
     let newStr = str + original;
     newStr = newStr.slice( 0,-1)
     let newNum = Number(newStr)

     if(newNum == 0){
         newNum = ""
     }

     document.getElementById("result").value = newNum;
     
     
}

 //This function deletes characters

 let switches = document.getElementsByClassName('switch');

 let style = localStorage.getItem('theme');


    if (style == null) {
    setTheme('styles');
    } else {
    setTheme(style);
    }

 for (let i of switches) {
    i.addEventListener('click', function () {
      let theme = this.dataset.theme;
      setTheme(theme);
    });
  }

  function setTheme(theme) {
    if (theme == 'original') {
      document.getElementById('switcher-id').href = "";
    } else if (theme == 'neon') {
      document.getElementById('switcher-id').href = "neon.css";
    } else if (theme == 'white') {
      document.getElementById('switcher-id').href = "white.css";
    }
    localStorage.setItem('style', theme);
  }







