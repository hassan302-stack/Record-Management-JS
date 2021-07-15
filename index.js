

// Destructring

//  arr =["hassan",23,"BSCS"]

//   let [first,second,thrid,test="test value",four=arr[1]]=arr
//   console.log(four)
//   console.log(arr)
// obj={
//     nam :'hassan',
//     age:23,
//     degree:'bscs'
// }
// let {nam,second,thrid,test="test value"}=obj
// console.log(nam)
//    console.log(obj)

//***************************** / object properties ***********************

//we can use dynamic variable/properties

//    var nam ='hassan'
//    var last= 'kazmi'
//    obj={
       
//      bio:{  [nam] :'How are you',
//             [last]:`your age is 28`
//     }
//    }
//    console.log(obj.bio)
//    console.log(obj)

//**************************** ******Spread Operator********************** *

//   arr1 =['yellow','red']
//   arr2 = ['pink','orange','blue','voilet']
//   let arr3 = [...arr1, ...arr2]
//     let arr4 = arr1.concat(arr2)
//     let map =
//   console.log(arr3)
//   console.log(arr4)

//********************************* ES 2019 ************************************
 //  return array = Object.entries(object)  Arr.flat(), return object = Array.fromEntries()  

//  ****************Converting Object into Array usinf object.entries()
//   obj = {
//         name:'Hassan Ali',
//         age: 26,
//         Degree:"BSCS"
//   }
//      let arr=Object.entries(obj)
//      let newobj=Object.fromEntries(obj);
//           console.log(arr.flat(Infinity));
//           console.log(newobj)
//***************Converting Array into object  in Spread operator */

//    arr =['hassan', 25,'waqas','geo']
//     var newobj={name:'ali',...arr}
//     console.log(newobj);

  
 var nam =document.getElementById('name')
 var model =document.getElementById('model')
 var stat =document.getElementById('stat')
 var price =document.getElementById('price')
 var sellbtn =document.getElementById('sellbtn')
 var nametbl =document.getElementById('nametbl')
 var modeltbl =document.getElementById('modeltbl')
 var statustbl =document.getElementById('statustbl')
 var pricetbl =document.getElementById('pricetbl')
 var tbl =document.getElementById('tbl')
 var child =document.getElementById('child')
 var buble =document.getElementById('buble')

 sellbtn.addEventListener('click',(event)=>{
     var newhtml
   alert(`you select ${nam.value} ${model.value} ${stat.value} ${price.value}`)   
  
   var newhtml ='<tr id="child"><td id="nametbl">%nametbl%</td><td id="modeltbl">%modeltbl%</td><td id="statustbl">%statustbl%</td><td id="pricetbl">%pricetbl% <Button id="dele" value="del">Delete</Button></td></tr></div>'     
   newhtml= newhtml.replace('%nametbl%',nam.value)
   newhtml= newhtml.replace('%modeltbl%',model.value) 
   newhtml= newhtml.replace('%pricetbl%',price.value) 
   newhtml= newhtml.replace('%statustbl%',stat.value)
  
   tbl.insertAdjacentHTML('beforeend', newhtml)
    nam.value =" "
    price.value=" "
   console.log(newhtml)
   console.log(event.target)
})

tbl.addEventListener('click',(event)=>{
     
   if(event.target.value=='del'){
  
      // tbl.parentNode.removeChild(event.target.parentNode.parentNode) mistake
      
      alert("clicking child")
      let n=  tbl.removeChild(event.target.parentNode.parentNode.parentNode)
    
   }
 
 },)
 






















































