var playerred="R";
var playeryellow="Y"
var currplayer=playerred;
var gameover=false;
var board;
var currcolumns;
var rows=6;
var colums=7;

window.onload=function()
{
    setgame();
}

function setgame()
{
    board=[];
    currcolumns=[5,5,5,5,5,5,5];
    for(let r=0;r<rows;r++)
    {
        let row=[]
        for(let c=0;c<colums;c++)
        {
            row.push(' ')
            let tile=document.createElement("div");
            tile.id=r.toString()+"-"+c.toString();
            tile.classList.add("tile");
            tile.addEventListener('click',setplace);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

function setplace()
{
    if(gameover)
    {
        return;
    }
    let coords=this.id.split("-");
    let r=parseInt(coords[0]);
    let c=parseInt(coords[1]);
    r=currcolumns[c];
    if(r<0)
    {
        return 0;
    }
    board[r][c]=currplayer;
    let tile=document.getElementById(r.toString()+"-"+c.toString());
    if(currplayer==playerred)
    {
        tile.classList.add("red-place");
        currplayer=playeryellow;

    }
    else
    {
        tile.classList.add("yellow-place");
        currplayer=playerred;
    }
    r-=1;
    currcolumns[c]=r;
    //checkwinner();
}

function checkwinner()
{
    for(let r=0;r<rows;r++)
    {
        for(let c=0;c<colums-3;c++)
        {
            if(board[r][c]!=' ')
            {
                if(board[r][c]==board[r][c+1] && board[r][c+1]==board[r][c+2] &&board[r][c+2]==board[r][c+3] )
                {
                    setwinner(r,c);
                    return;
                }
            }
        }
    }

    for(let c=0;c<colums;c++)
    {
        for(let r=0;r<rows-3;r++)
        {
            if(board[r][c]!=' ')
            {
                if(board[r][c]==board[r+1][c] && board[r+1][c]==board[r+2][c] && board[r+2][c]==board[r+3][c])
                {
                    setwinner(r,c);
                    return;
                }
            }
        }
    }

    for(let r=0;r<row-3;r++)
    {
        for(let c=0;c<colums-3;c++)
        {
            if(board[r][c]!=' ')
            {
                if(board[r][c]==board[r+1][c+1] && board[r+1][c+1]==board[r+2][c+2] && board[r+2][c+2]==board[r+3][c+3])
                {
                    setwinner(r,c);
                    return;
                }
            }
        }
    }

    for(let r=3;r<rows;r++)
    {
        for(let c=0;c<colums-3;c++)
        {
            if(board[r][c]!=' ')
            {
                if(board[r][c]==board[r-1][c+1] &&board[r-1][c+1]==board[r-2][c+2] &&board[r-2][c+2]==board[r-3][c+3])
                {
                    setwinner(r,c);
                    return;
                }
            }
        }
    }
}
function setwinner(r,c)
{
    let winner=document.getElementById("winner");
    if(board[r][c]==playerred)
    {
        winner.innerText="red wins";
    }
    else
    {
        winner.innerText="yellow wins";
    }
    gameover=true;
}