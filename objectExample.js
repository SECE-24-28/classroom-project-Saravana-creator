// // 

// let student={sna:"sara",age:20,demo:function()
//     {
//         console.log(student)
//     }    
// }
// student.demo()

// let student2={sna:"peru",age:19,samp:()=>
// {
//     console.log("Hola this is "+this.sna)//gives the undefined name
// }
// }
// student2.samp()

// let student3=[{sna:"Praveen",age:19,sma:90,fee:true},
//               {sna:"sara",age:19,sma:100,fee:true},
//               {sna:"peru",age:20,sma:80,fee:false}  
// ]

// student3.forEach((stu)=>
//         console.log(stu.sna+" "+stu.sma)
// )

// let newstud=student3.map((stu)=>
//    { return {na:stu.sna,ma:stu.sma+2}}
// )

 let student3=[{sna:"Praveen",age:19,sma:90,fee:true},
                {sna:"sara",age:19,sma:100,fee:true},
               {sna:"peru",age:20,sma:80,fee:false}  ]
//  let res=student3.every((stu)=>{
//     return student3.fee==true
//  })
// let res=student3.some((stu)=>{
//     return stu.fee==true
// }) some()

let newstud=student3.filter((stu)=>{
    return stu.sma>=90
})
console.log(newstud)