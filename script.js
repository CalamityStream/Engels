function hidetext1() {
    let x = document.getElementById("main1");
    let y = document.getElementById("nav1");
    if(x.classList.contains("active")) {}
    else {
        let currActive = document.getElementsByClassName("hidden active");
        currActive[0].classList.remove("active");
        x.classList.add("active"); 
    }

    if(!y.classList.contains("actief")) {
        let currActief = document.getElementsByClassName("nav actief");
        currActief[0].classList.remove("actief");
        y.classList.add("actief");
    }

}

function hidetext2() {
    let x = document.getElementById("main2");
    let y = document.getElementById("nav2");
    if(x.classList.contains("active")) {}
    else {
        let currActive = document.getElementsByClassName("hidden active");
        currActive[0].classList.remove("active");
        x.classList.add("active"); 
    }

    if(!y.classList.contains("actief")) {
        let currActief = document.getElementsByClassName("nav actief");
        currActief[0].classList.remove("actief");
        y.classList.add("actief");
    }
}

function hidetext3() {
    let x = document.getElementById("main3");
    let y = document.getElementById("nav3");
    if(x.classList.contains("active")) {}
    else {
        let currActive = document.getElementsByClassName("active");
        currActive[0].classList.remove("active");
        x.classList.add("active"); 
    }

    if(!y.classList.contains("actief")) {
        let currActief = document.getElementsByClassName("nav actief");
        currActief[0].classList.remove("actief");
        y.classList.add("actief");
    }
}

function hidetext4() {
    let x = document.getElementById("main4");
    let y = document.getElementById("nav4");
    if(x.classList.contains("active")) {}
    else {
        let currActive = document.getElementsByClassName("active");
        currActive[0].classList.remove("active");
        x.classList.add("active"); 
    }

    if(!y.classList.contains("actief")) {
        let currActief = document.getElementsByClassName("nav actief");
        currActief[0].classList.remove("actief");
        y.classList.add("actief");
    }
}

function clearInput() {
    document.getElementById('name').value = '';
    document.getElementById('type').value = '';
    document.getElementById('amount').value = '';
}