let arr=[];

let n=prompt("nhap so phan tu mang");
for(let i=0;i<n;i++){
    arr[i]=prompt("nhap phan tu thu "+(i+1));
}
let max=arr[0];
let sum=0;
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
    sum+=arr[i];
}
let tb=sum/arr.length;
document.write("max="+max);
document.write("<br/> tb="+tb);