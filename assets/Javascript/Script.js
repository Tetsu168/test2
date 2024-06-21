var arr=[
    {
        //"data member": "value";
        "img": "https://img.flawlessfiles.com/_r/300x400/100/1f/06/1f06eb0baf5520aa639b546fc189400d/1f06eb0baf5520aa639b546fc189400d.jpg",
        "name": "01 Demon Slayer: Kimetsu no Yaiba Hashira Training Arc"
    },
    {
        //"data member": "value";
        "img": "https://img.flawlessfiles.com/_r/300x400/100/bc/d8/bcd84731a3eda4f4a306250769675065/bcd84731a3eda4f4a306250769675065.jpg",
        "name": "02 One Piece"
    },
    {
        //"data member": "value";
        "img": "https://img.flawlessfiles.com/_r/300x400/100/af/49/af4938d7388aad3438e443e74b02531e/af4938d7388aad3438e443e74b02531e.jpg",
        "name": "03 My Hero Academia Season 7"
    },
    {
        //"data member": "value";
        "img": "https://img.flawlessfiles.com/_r/300x400/100/ed/fc/edfc7fe935b6eac2d704cf5b0a60e356/edfc7fe935b6eac2d704cf5b0a60e356.jpg",
        "name": "04 Kaiju No. 8"
    },
    {
        //"data member": "value";
        "img": "https://img.flawlessfiles.com/_r/300x400/100/d9/bb/d9bb23228e5a641b5a3e9386382dae3a/d9bb23228e5a641b5a3e9386382dae3a.jpg",
        "name": "05 Wind Breaker"
    },
    {
        //"data member": "value";
        "img": "https://img.flawlessfiles.com/_r/300x400/100/e1/22/e12209bde810deb434f0325b945a886f/e12209bde810deb434f0325b945a886f.jpg",
        "name": "06 The New Gate"
    },
    {
        //"data member": "value";
        "img": "https://img.flawlessfiles.com/_r/300x400/100/a7/ab/a7ab15fb2281cce25179cd739112f426/a7ab15fb2281cce25179cd739112f426.jpg",
        "name": "07 Re:Monster"
    },
    {
        //"data member": "value";
        "img": "https://img.flawlessfiles.com/_r/300x400/100/f9/b5/f9b501458823539b6a2004f2cdb98a4a/f9b501458823539b6a2004f2cdb98a4a.jpg",
        "name": "08 That Time I Got Reincarnated as a Slime Season 3"
    }
];

var add=0;

function Next(){
    add++;
    if(add >= 4){
        alert('Out of data');
        return 0;
    }else{
        var img = document.getElementsByClassName('img');
        var name= document.getElementsByTagName('p');
        for(var i=0; i<5; i++){
            img[i].src= arr[i+add].img;
            name[i].innerText=arr[i+add].name;
        }
    }
    
}
function Prev(){
    add--;
    if(add <=-1){
        alert('Out of data');
        return 0;
    }else{
        var img = document.getElementsByClassName('img');
        var name= document.getElementsByTagName('p');
        for(var i=5; i>=0; i--){
            img[i].src= arr[i+add].img;
            name[i].innerText= arr[i+add].name;
        }
    }
    
}