
   let info = document.querySelector("#info");
    let result = document.querySelector("#result");
   
    
    let weight = document.querySelector("#weight"); //inputlarin deyerleri weight
    let heival = (document.querySelector("#height").value)*1; //inputlarin deyerleri   height
    let calc = document.querySelector("#calc");
    let back = document.querySelector("#back");



    let weival=(weight.value)/100;
      console.log(weival)
  



    // if (output<18.5)
    // document.getElementById("comment").value = "Underweight";
    // if (output>=18.5 && output<=25)
    // document.getElementById("comment").value = "Normal";
    // if (output>=25 && output<=30)
    // document.getElementById("comment").value = "Obese";
    // if (output>30)
    // document.getElementById("comment").value = "Overweight";


    window.onload = function () {
        info.style.display = "block"
        result.style.display = "none";
        let restitle = '<div class="restitle">\
                            <div class="row">\
                                <div class="col-md-12">\
                                    <div class="part">\
                                        <span>Result</span>\
                                        <div style="margin-top:50px" class="image text-center">\
                                            <img src="img/5.png" alt="">\
                                            <img src="img/6.png" alt="">\
                                            <img src="img/7.png" alt="">\
                                            <img src="img/8.png" alt="">\
                                            <span style="top: 350px;left: 196px;position: absolute;" ></span>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>'

        $("#result").append(restitle);

    }



    calc.onclick = function () {
        let ageval =(document.querySelector("#age").value)*1; //inputlarin deyerleri age
        console.log(ageval)
        info.style.display = "none";
        result.style.display = "block";
        back.style = "position: absolute;bottom: 76px;left: 80px;"
      
          let bmi = weival / (heival* heival)



    }

    back.onclick = function () {

        info.style.display = "block";
        result.style.display = "none";




    }