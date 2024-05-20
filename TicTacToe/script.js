let box = document.getElementsByClassName("box")
let reset = document.querySelector("button")
let cnt = 0;

let mat= [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]

function leftdiagonal()
{
    if(mat[0][0] == mat[1][1] && mat[1][1] == mat[2][2] && mat[1][1] != -1)
    {
        return true;
    }

    return false;
}

function rightdiagonal()
{
    if(mat[0][2] == mat[1][1] && mat[1][1] == mat[2][0] && mat[1][1] != -1)
    {
        return true;
    }

    return false;
}

function vertical(y)
{
    if(mat[0][y] == mat[1][y] && mat[1][y] == mat[2][y] && mat[0][y] != -1)
    {
        return true;
    }
    
    return false;
}
function horizontal(x)
{
    if(mat[x][0] == mat[x][1] && mat[x][1] == mat[x][2] && mat[x][0] != -1)
    {
        return true;
    }

    return false;
}

function checkWinner(x, y)
{
    if(leftdiagonal())
    {
        document.getElementById("00").style.color = "white"
        document.getElementById("11").style.color = "white"
        document.getElementById("22").style.color = "white"
        return true
    }
    if(rightdiagonal())
    {
        document.getElementById("02").style.color = "white"
        document.getElementById("11").style.color = "white"
        document.getElementById("20").style.color = "white"
        return true
    }
    if(vertical(y))
    {
        document.getElementById("0"+y).style.color = "white"
        document.getElementById("1"+y).style.color = "white"
        document.getElementById("2"+y).style.color = "white"
        return true
    }
    if(horizontal(x))
    {
        document.getElementById(x+"0").style.color = "white"
        document.getElementById(x+"1").style.color = "white"
        document.getElementById(x+"2").style.color = "white"
      
        return true
    }

    return false
}


const okay = (e) => {

    let temp = e.target
    if(temp.innerText != "")
    {
        return;
    }

    let now = e.target.getAttribute("id")
    let x = now[0];
    let y = now[1];

    if(cnt)
    {
        temp.innerText = "X"
        mat[x][y] = 1
    }
    else
    {
        temp.innerText = "O"
        mat[x][y] = 0
    }

    if(checkWinner(x,y))
    {
        for (let i = 0; i < 9; i++) {
            box[i].removeEventListener("click", okay)
        } 

        let winner = document.querySelector("h1")
        winner.innerHTML = "Player "+ temp.innerText+ " Won"
        winner.className = ""

        reset.innerHTML = "New Game"
        return
    }

    let tot = 0;
    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
        {
            if(mat[i][j] == -1)
            {
                tot++;
            }
        }
    }

    if(tot == 0)
    {
        let winner = document.querySelector("h1")
        winner.innerHTML = "It's a Draw"
        winner.className = ""
        reset.innerHTML = "New Game"
    }
    cnt^=1
}

for (let i = 0; i < 9; i++) {
    
    box[i].addEventListener("click", okay)
}

newGame = () =>{
    location.reload()
}

reset.addEventListener("click", newGame)


