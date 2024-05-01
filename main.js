

function screenTop() {
     scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
     })
}


let clic = document.querySelectorAll(".clic");
let privte = document.getElementById("privte");
let bk = document.getElementById("bk");


clic.forEach(eo => {
     eo.addEventListener("click", () => {

          let photo = eo.getElementsByTagName("img")[0].src
          let nam = eo.getElementsByClassName("name")[0].innerText
          let text = eo.getElementsByTagName("p")[0].innerText
          let div_1 = eo.getElementsByClassName("div_1")[0].innerText
          let div_2 = eo.getElementsByClassName("div_2")[0].innerText

          // console.log(iframe);
          let x =
               `
                 <div class="to_privte">
               <b onclick="back(this)" id="bk"><i class="fa-solid fa-xmark"></i></b>
                    <img src="${photo}" class="w-100 h-75">
                    <div class="ms-3 mt-4 text-light">
                         <strong class="fw-bold fs-3">${nam}</strong>
                         <p class="fs-5 my-3">${text}</p>
                         <div class="fs-5 my-3">${div_1} </div>
                         <div class="fs-5 my-3">${div_2}</div>
                         
                    </div>



                    <footer>
                         <div class="abute">
                              <div>
                                   <i class="me-2 fa-brands fa-facebook"></i>
                                   <i class="fa-brands fa-twitter"></i>
                              </div>
                              <p>fushaar © 2024 - V10.0</p>
                              <p>Movie Cinema</p>
                         </div>
                    </footer>
               </div>
          
          `;

          privte.innerHTML = x;
          privte.style.display = "block";

     })
});

function back() {
     privte.style.display = "none";

}
