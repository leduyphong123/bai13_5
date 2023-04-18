let arr=[];
for(let i=0;i<10;i++){
    arr[i]=parseInt(prompt("nhap so thu"+(i+1)));
}
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let value=arr[j];
            arr[j]=arr[i];
            arr[i]=value;
        }
    }
}
document.write(arr);