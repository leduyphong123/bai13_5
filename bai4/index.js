let arr = [];
let newArr = [];
let n = prompt("nhap so phan tu mang:");
for (let i = 0; i < n; i++) {
    arr[i] = prompt("nhap so phan tu thu " + (i + 1));
}
for (let i = 0; i <= arr.length - 1; i++) {
    newArr[i] = arr[arr.length - i - 1];
}

document.write(newArr);