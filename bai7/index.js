let arr = [];
for (let i = 0; i < 4; i++) {
    arr[i] = prompt("nhap so phan tu thu" + (i + 1));
}
let number = prompt("nhap so phan tu can tim");
let newArr=[];
let arrIndex;
for (let i = 0; i < arr.length; i++) {
    newArr[i]=arr[i];
    if (arr[i] == number) {
        newArr[i]=arr[i+1];
        arrIndex=i;
        break;
    }
}
for(let i=arrIndex+1;i<arr.length;i++){
    newArr[i]=arr[i+1];
    if(i==arr.length-1){
        newArr[i]=0;
    }
}
document.write(newArr);