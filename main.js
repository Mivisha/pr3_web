alert('Задание 1');
var firstRow = prompt('Введите первую строку для дальнейших подсчётов')
var secondRow = prompt('Введите вторую строку для дальнейших подсчётов')

var symbol = prompt('Введите букву которую нужно посчитать в этих строках');

var fnum = 0, snum = 0, sumnum = 0;



//Функция которая принимает 2 строки в виде элементов el1, el2 
function RowASymbol(el1,el2){

//Подсчёт 'a' в первом элементе
for (let i=0; i < el1.length; i++){
    if (el1.charAt(i) == symbol ){
        fnum++;
    }
}

//Подсчёт 'a' во втором элементе
for (let i=0; i < el2.length; i++){
    if (el2.charAt(i) == symbol){
        snum++;
    }
}

//Сумма совпадений
sumnum = fnum+snum;

//Вывод результатов подсчёта
alert(" В первой строке '"+ symbol+"' встречается " + fnum + " раз." + " Во второй строке '"+ symbol+"' встречается " + snum + " раз." + " Итог подсчёта символа '"+symbol+"' в двух строках: " + sumnum+"!");
if (fnum>snum){
    alert(" Страка в которой больше букв "+symbol+" '"+el1+"'");
}
else{
    alert(" Страка в которой больше букв "+symbol+" '"+el2+"'");
}
}

//Вызов функции с двумя строками в параметрах
RowASymbol(firstRow,secondRow);

alert('Задание 2');

var telnumber = prompt('Введите номер телефона');
var formnumber ='';
var newnumber ='';

function formattelephone(el3){
    formnumber = el3;

    if (formnumber.length == 11){
        if (formnumber.charAt(0) == '7' || formnumber.charAt(0) == '8' || formnumber.charAt(0) == '9'){
            formnumber = formnumber.substr(1);
            formnumber = '+7'+formnumber;
        }
        else{
            alert('Неверный номер');
            return;
            
        }
    }
    else if (formnumber.length != 12 || formnumber.charAt(0) != '+' || formnumber.charAt(1) != '7'){
        alert('Неверный номер');
        return;
    }

    el3 = formnumber;

    for (let i=0; i < el3.length; i++){
        newnumber+=el3.charAt(i);

        if (el3.charAt(i) == '7'){
            if (el3.charAt(i-1) == '+'){
                newnumber+=' (';
            }
        }

        if (i == '4'){
            newnumber+=') ';
        }

        if (i =='7'){
            newnumber+='-';
        } 
        
        if (i =='9'){
            newnumber+='-';
        }  
    
    }

    alert('Отформатированный новер телефона: ' + newnumber);
    
}

formattelephone(telnumber);