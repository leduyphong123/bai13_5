let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = prompt("nhap so phan tu thu" + (i + 1));
}
let number = prompt("nhap so phan tu can tim");
let isNumber = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == number) {
        isNumber = true;
    }
}
if (isNumber == true) {
    document.write("V is in the array");

} else {
    document.write("V is not in the array");

}