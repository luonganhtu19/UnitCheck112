//     1. Nhập số N (N lẻ dương), yêu cầu nhập cho đến khi N thỏa mãn điều kiện
function checkNAN(number){
    if (isNaN(number)){
        alert("Input Number")
        checkNAN()
    }
}
function checkNumber() {
    let number = prompt("Input Odd Natural Numbers")
    if (isNaN(number)) {
        alert("Please input Number")
        checkNumber()
    } else if (number < 0) {
        alert("Please Positive Integers")
        checkNumber()
    } else if (number % 2 == 0) {
        alert("Not Odd Natural Numbers")
        checkNumber()
    } else {
        alert("Input number: "+number)
        document.getElementById("untilNumber").innerHTML= "Result of Unit 1 <br> Odd Natural Numbers: "+number
    }

}
// 2. Kiểm tra N có là số nguyên tố
function checkPrime(number) {
    if (number<=1) return false;
    if (number<=3) return true;
    if (number%2==0|| number%3==0) return false;
    for (let i=5;i*i<=number;i=i+6){
        if (number%i==0||number%(i+2)==0){
            return false;
        }
    }
    return true;
}
function unit2Prime() {
    let number=prompt("Input number checked")
    if (isNaN(number)){
        alert("Please input Number")
        unit2Prime()
    }else {
        number=+number
       let check= checkPrime(number);
       if (check){
           document.getElementById("untilNumber").innerHTML=`Result Unit2: ${number} is Prime`
       }else {
           document.getElementById("untilNumber").innerHTML=`Result Unit2: ${number} is not Prime`
       }
    }

}
// 3. Hiển thị danh sách N số nguyên tố đầu tiên
function uni3Prime() {
    let number=prompt("Input number ")
    if (isNaN(number)){
        alert("Please input Number")
        uni3Prime();
    }
    let arrPrime=[];
    let i=0;
    do{
        i++;
        if (checkPrime(i)){
            arrPrime.push(i);
        }
        if (arrPrime.length==number){
            document.getElementById("untilNumber").innerHTML=`Result Unit 3: <br> ${number} prime: ${arrPrime}`
            break
        }
    }while(true)
}
function reset(){
    document.getElementById("untilNumber").innerHTML="Result :"
}
// 4. Nhập vào mảng gồm N phần tử
let addArr=[]
let addArrPrime=[]
let c=document.getElementById("outPut")
function addArry() {
    addArr.push(+document.getElementById("addArr").value);
    clearScreen();
}
function displayArr() {
    document.getElementById("outPut").innerHTML= `Result Arry: ${addArr}`;
}
// 6. Liệt kê danh sách các số nguyên tố trong mảng vừa nhập
function checkPrime2() {
    clear()
    addArr.forEach(item=>{
        if (checkPrime(item))
        {
            addArrPrime.push(item);
        }
    })
    document.getElementById("outPut").innerHTML=`Result Unit6: Prime in Arry: ${addArrPrime}`
}
// 7. Kiểm tra N có tồn tại trong mảng vừa nhập, nếu có trả về vị trí của N trong mảng
function checkNumber() {
    let number=+document.getElementById("checkIndex").value;
    let index=addArr.indexOf(number);
    if (index!=-1){
        document.getElementById("outPut").innerHTML=`Result Unit7: ${number} have index: ${index} 
                                                         <br> Arr: ${addArr}`
    }else {
        document.getElementById("outPut").innerHTML=`Result Unit7: ${number} does not exist 
                                                         <br> Arr: ${addArr}`
    }
}
// 8. Xóa N khỏi mảng vừa nhập
function deleteArr() {
    clearScreen()
    let number=document.getElementById("checkIndex").value;
    let index=addArr.indexOf(number);
    if (index!=-1){
        document.getElementById("outPut").innerHTML=`Result Unit7: ${number} have index: ${index} 
                                                         <br> Arr: ${addArr}`
    }else {
        addArr.splice(index,1);
        document.getElementById("outPut").innerHTML=`new Arr: ${addArr}`
    }
    console.log(addArr);
}
// 9. Sắp xếp các phần tử của mảng vừa nhập ở 4 theo thứ tự tăng dần
function sortArr() {
    for (let i = 0; i < addArr.length-1; i++) {
        for (let j = i+1; j <addArr.length ; j++) {
            if (addArr[i]>addArr[j]){
                let temp=addArr[i];
                addArr[i]=addArr[j];
                addArr[j]=temp;
            }
        }
    }
    clearScreen();
    c.innerHTML="Result  sort Arry: "+addArr;
}
// 10. Nhập vào 1 số X, chèn X vào mảng sắp xếp ở bước 7 sao cho không làm thay đổi thứ tự sắp xếp của mảng
function inSorArr() {

    addArr.push(+document.getElementById("addSort").value);
    sortArr();
    document.getElementById("addSort").value=""
}
function clearScreen(){
    document.getElementById("outPut").innerHTML="Result Arry: ";
    document.getElementById("addArr").value="";
    if (arguments.length!=0){
        addArr=[];
    }
}

