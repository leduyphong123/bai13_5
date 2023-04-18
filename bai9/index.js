let arrOne=[],arrTrue=[];
for(let i=0;i<10;i++){
    arrOne[i]=prompt("nhap mang thu 1 so thu "+(i+1));
}
for(let i=0;i<10;i++){
    arrTrue[i]=prompt("nhap mang thu 2 so thu "+(i+1));
}
let c=arrOne.concat(arrTrue);
document.write(c);