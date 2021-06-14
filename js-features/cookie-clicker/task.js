const cookies = document.getElementById("cookie");
      clickCounter = document.getElementById("clicker__counter");

cookies.onclick = function() {
    clickCounter.textContent = Number(clickCounter.textContent) + 1;
    if(clickCounter.textContent % 2 === 0){
        this.width -= 10;
        this.height -= 10;
    }else {
        this.width += 10;
        this.height += 10;
    }
}