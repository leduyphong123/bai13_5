let arr=[];
for(let i=0;i<10;i++){
    arr[i]=prompt("nhap so thu"+i);
}
let max=arr[0];
let maxIndex;
for(let i=1;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
        maxIndex=i;
    }
}
document.write("max="+max+"&#160;"+"index="+maxIndex);