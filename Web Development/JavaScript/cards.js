var heroes = [
{
    "HeroImage" : "../Nani.jpeg",
    "Name"  : "NANI",
    "Age"   : "35"
},

{
    "HeroImage" : "../Chaitanya.jpeg",
    "Name"  : "Naga Chaitanya",
    "Age"   : "35"
},


]

// var cards = heroes.map((ele) => {
  

//    return `<div class="card">

//         <div class="image-section">
//             <img src=${ele.HeroImage} alt="">
//         </div>

//         <div class="content-section">
//             <div class="hero-name">Name : ${ele.Name}</div>
//             <div class="hero-age">Age : ${ele.Age}</div>
//         </div>

//     </div>`
// })

// cards = cards.join(" ")
// console.log(cards)
// var parent = document.getElementsByClassName("card-parent")[0]
// parent.innerHTML = cards

heroes.map((ele) => {
    var hero = `<div class="card">

        <div class="image-section">
            <img src=${ele.HeroImage} alt="">
        </div>

        <div class="content-section">
            <div class="hero-name">Name : ${ele.Name}</div>
            <div class="hero-age">Age : ${ele.Age}</div>
        </div>

    </div>`

    var parent = document.getElementsByClassName("card-parent")[0]
    parent.innerHTML += hero

})