// {
//         // 1 masala
//         function myFunction(array){
//             let musbat = 0, manfiy = 0
//             for(let i = 0; i < array.length; i++){
//                 if(array[i] > 0){
//                     musbat += array[i]
//                 }else{
//                     manfiy += array[i]
//                 }
//             }
//             return `${musbat} ${manfiy}`
//         }
//             console.log(myFunction([3, 2, 2, 5, -2, -2 ]));
//       }    
      
//       {
//         // 1 while
//         function myFunction(array){
//             let musbat = 0, manfiy = 0;
//             let i = 0;
//             while(i < array.length){
//                 if(array[i] > 0){
//                     musbat += array[i]
//                 }else{
//                     manfiy += array[i]
//                 }
                
//                 i++
//             }
//             return `${musbat} ${manfiy}`
//         }
//         console.log(myFunction([3, 2, 2, 5, -2, -2 ]));
//       }
         
//     {
//         // 1 do while
//         function myFunction(array){
//             let musbat = 0, manfiy = 0
//             let i = 0
//             do{
//                 if(array[i] > 0){
//                  musbat += array[i]
//                 }else{
//                 manfiy += array[i]
//                 }
//                 i++
//             }while(i < array.length)
//                 return `${musbat} ${manfiy}`
//         }
//         console.log(myFunction([3, 2, 2, 5, -2, -2 ]));
//     }
//     {
//         // 2 masala
//         function myFunction(array){
//             let sum = 0
//             for(let i = 0; i <= array; i += 2){
//                 sum = sum + i
//             }
//             return ` juft sonlar yigindisi${sum}`
//         }
//         console.log(myFunction(20));
//     }
//     // 2 while
//     { 
//         function myFunction(array){
//             let sum = 0
//             let i = 0
//             while(i <= array){
//                 sum = sum + i
//                 i += 2
//             }
//             return ` juft sonlar yigindisi ${sum}`
//         }
//         console.log(myFunction(20));
//     }
//     //  2 do while 
//     {
//         function myFunction(array){
//             let sum = 0
//             let i = 0
//             do{
//                 sum = sum + i
//                 i += 2
//             }while(i <= array)
//                 return ` juft sonlar yigindisi ${sum}`
//         }
//         console.log(myFunction(20));
//     }
//     {
//         // 3 masala
//         function myFunction(a, b) {
//             let sum = 0
//             for (let i = a; i <= b; i++) {
//                 sum = sum + i
//             }
//             return sum
//         }
//         console.log(myFunction(10, 18));
//     }
//     {
//         // 3 masal while 
//         function myFunction(a, b) {
//                 let i = a
//                 let sum = 0
//             while (i <= b){
//               sum = sum + i
//               i++
              
//             }
//             return sum
           
//         }
//         console.log(myFunction(10, 18));
//     }
//     {
//         // 3 masala do while 
//         function myFunction(a, b){
//             let sum = 0
//             let i = a
//             do{
//                 sum = sum + i
//                 i++
//             }while(i <= b)
//                 return sum
//         }
//         console.log(myFunction(10, 18));
//     }
//     {
//         // 4 masal
//         function myFunction(n){
//             for(let i = n; i >= 0; i -= 2){
//                 console.log(i);
//             }
//         }
//         console.log(myFunction(19));
//     }
    // {
    //     // 4 masalani while 
    //    function myFunction(n){
    //     let i = n
    //     while(i >= 0){
    //         console.log(i);
    //         i -= 2
    //     }
    //    }
    //    console.log(myFunction(19));
    // }
    // {
    //     // 4 masala do while 
    //     function myFunction(n){
    //         let i = n
    //         do{
    //             console.log(i);
    //             i -= 2
    //         }while(i >= 0)
    //             return "raxmat"
    //     }
    //     console.log(myFunction(19));
    // }




    // 10 ta masala
// {
//     // 1 masala

//     function myFunction( a, b){
//         let i = 0
//         while(a > b){
//             a -= b
//             i++
//         }
//         return `a kesmaga b dan ${a} ta joy ortadi`
//     }
//     console.log(myFunction(10, 3));
// } 
      
// {
//     // 2 masala
//     function myFunction( a, b){
//         let i = 0
//         while(a < b){
//             a -= b
//             i++
//         }
//         return `a kesmaga b dan ${i} ta kesma joylashdo`
//             }
//             console.log(myFunction(10, 2));
// }
             
   
// {
//     // 3 masala
//     function myFunction( a, b){
//         let i = 0
//         while(a <= b){
//             a -= b
//             i++
//         }
//         return `shuncha joy ortadi ${i} shuncha sigadi ${b}`
//             }
//             console.log(myFunction(10, 4));
//         }
      