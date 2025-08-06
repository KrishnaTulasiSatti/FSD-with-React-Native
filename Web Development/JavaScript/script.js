var dLeft = 0;
var dTop = 0;

var i = 0 , j = 0;

function moveleft() {
    var image1 = document.getElementsByTagName("img")[0]
    console.log(image1)

    if(j-1 < 0) {
        alert('Exceeded')
    }
    
    j-=1;
    dLeft-=100;

    image1.style.left = dLeft + 'px';
    

    // image1.setAttribute("style","position:relative; left:-50px")
    
}

function moveright() {
    var image1 = document.getElementsByTagName("img")[0]
    console.log(image1)

    if(j+1 >= 5) alert('Exceeded')
    else {
 dLeft+=100;
    j+=1;

    image1.style.left = dLeft + 'px';

    // image1.setAttribute("style","position:relative; left:-50px")
    }
}

function movetop() {
    var image1 = document.getElementsByTagName("img")[0]
    console.log(image1)

    if(i-1 < 0) {
        alert('Exceeded')
    }
    else {
        i-=1;
    dTop-=100;

    image1.style.top = dTop + 'px';
    }

    // image1.setAttribute("style","position:relative; left:-50px")
    
}

function movebottom() {
    var image1 = document.getElementsByTagName("img")[0]
    console.log(image1)

    if(i+1 >= 5) alert('Exceeded')
    else {
i+=1;

    dTop+=100;

    image1.style.top = dTop + 'px';}

    // image1.setAttribute("style","position:relative; left:-50px")
    
}

function createTable() {
    
    var rows = document.getElementsByTagName("input")[0].value
    var cols = document.getElementsByTagName("input")[1].value

   
    let newTable = document.createElement("table")
    newTable.setAttribute("border","1")
    newTable.setAttribute("cellspacing","0")

    var parentOfTable = document.getElementsByTagName("body")[0]
    parentOfTable.appendChild(newTable)

    for(var i = 0 ; i < rows ; i++) {

        let newRow = document.createElement("tr")
        var parentOfRow = document.getElementsByTagName("table")[0]
        parentOfRow.appendChild(newRow)

        for(var j = 0 ; j < cols ; j++) {
            let newCell = document.createElement("td")
            // newCell.innerText = "Hello"
            newCell.setAttribute("width","100px")
            newCell.setAttribute("height","100px")
            newCell.setAttribute("style","background-color:skyblue")
            

            var parentOfCell = document.getElementsByTagName("tr")[i]
            parentOfCell.appendChild(newCell)
        }  
    }

    var firstCell = document.getElementsByTagName("td")[0]


    var image1 = document.createElement("img")
    image1.setAttribute("src","./bubu-walk.gif")

    image1.setAttribute("width","100%")
    image1.setAttribute("height","100%")

    image1.style.position = "relative"
    var currpos = 0

    image1.style.left = dLeft + 'px'
    image1.style.top = dTop + 'px'

    firstCell.appendChild(image1)

    
    var leftButton = document.createElement("button")
    leftButton.innerText = "Left"

    parentOfTable.appendChild(leftButton)

    var rightButton = document.createElement("button")
    rightButton.innerText = "right"

    parentOfTable.appendChild(rightButton)

    var topButton = document.createElement("button")
    topButton.innerText = "top"

    parentOfTable.appendChild(topButton)

    var bottomButton = document.createElement("button")
    bottomButton.innerText = "bottom"

    parentOfTable.appendChild(bottomButton)

    leftButton.setAttribute("onclick","moveleft()")
    rightButton.setAttribute("onclick","moveright()")
    topButton.setAttribute("onclick","movetop()")
    bottomButton.setAttribute("onclick","movebottom()")
    console.log(leftButton)
}