let arr=[];
let n=prompt("Nhap so arr");
let count=0;
for(let i=0;i<n;i++){
    arr[i]=prompt("nhap so thu"+(i+1));
}
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        count++;
    }
}
document.write(count);