let arr=[];
for(let i=0;i<10;i++){
    arr[i]=prompt("nhap so thu"+i);
}
let sum=0;
let value="";
for(let i=0;i<arr.length;i++){
    if(arr[i]-parseInt(arr[i])==0){
        value+=arr[i];
        sum+=arr[i];
    }
}
document.write(value+"sum"+sum);