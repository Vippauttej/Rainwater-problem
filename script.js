let btnGet = document.querySelector('button');
let myTable= document.querySelector('#table');
let myTablef= document.querySelector('#table2');
let inputData=document.getElementById('inputValues');
let ansTable=document.getElementById('tablef');

function fillTable1(inputArray,noOfColumns,noOfRows){
    let table=document.createElement('table');
  
    for(var i=0;i<noOfRows;++i){
        let rows=document.createElement('tr');
        for(var j=0;j<noOfColumns;++j){
            let header = document.createElement('td');
            if(inputArray[j] && i>=(noOfRows-inputArray[j])){
                header.classList.add('fill');
                p=1;
            }       
            rows.appendChild(header)
        }
        table.appendChild(rows);
    }
    myTable.appendChild(table);
}

function fillTable2(temp,noOfColumns,noOfRows){
    let table=document.createElement('table');
    for(var i=0;i<noOfRows;++i){
        let rows=document.createElement('tr');
        for(var j=0;j<noOfColumns;++j){
            var p=0;
            let header = document.createElement('td');
            if(temp[j]>0 && i>=(noOfRows-temp[j]) && (p!=1 ) ){
                header.classList.add('fillBlue')
                kk=1;
            }
            rows.appendChild(header)
        }
         table.appendChild(rows);
    }
    myTablef.appendChild(table);
}

function rainTrap(n,arr,temp){

    let left = new Array(n);
    let right = new Array(n);

    let water = 0;
    left[0] = arr[0];
    for (let i = 1; i < n; i++)
        left[i] = Math.max(left[i - 1], arr[i]);

    let rh=0;
    for(let i=n-1;i>=0;--i){
        if(arr[i]>=rh){
             rh=arr[i];
             right[i]=arr[i];
        }
        else
            right[i]=rh;
    }

    for(let i = 0; i < n; i++){
      let m = Math.min(left[i],right[i])
      //if((m-arr[i])>0)
        temp[i] =m-arr[i];
    }
    
    console.log(temp)
}

btnGet.addEventListener('click',()=>{
    let inputArray=String(inputData.value).split("").map(Number)
    let noOfColumns=inputArray.length;
    let noOfRows=Math.max.apply(Math, inputArray);  
    let temp =new Array(5)

    rainTrap(noOfColumns,inputArray,temp);
    console.log(temp);
    fillTable1(inputArray,noOfColumns,noOfRows);
    //  fillTable(temp,noOfColumns,noOfRows);
});


ansTable.addEventListener('click',()=>{
    let inputArray=String(inputData.value).split("").map(Number)
    let noOfColumns=inputArray.length;
    let noOfRows=Math.max.apply(Math, inputArray);  
    let temp =new Array(5)

    rainTrap(noOfColumns,inputArray,temp);
    console.log(temp)
    fillTable2(temp,noOfColumns,noOfRows);
    //  fillTable(temp,noOfColumns,noOfRows);
});

