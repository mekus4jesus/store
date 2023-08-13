window.addEventListener('load',()=>{

const dashboard = document.querySelector('#dashboard')
const billing = document.querySelector('#sales')
const middle = document.querySelector('.middle')
const middleSales = document.querySelector('.middle-sales')
const addItem = document.querySelector('#add')
const container = document.querySelector('.container-input')
const removeItem = document.querySelector('#remove')
const parentContainer = document.querySelector('.container')
const sidebar = document.querySelector('.side')
const inputTextId = document.querySelector('#input-text')
const qtyInputId = document.querySelector('#qty-input')
const priceInputId = document.querySelector('#price-input')
const subTotal = document.querySelector('#sub-numb')




dashboard.addEventListener('click',()=>{
    middle.style.display = 'block'
    middleSales.style.display = 'none'
    billing.style.background = '#95969F'
    billing.style.padding = '0'
    billing.style.paddingTop = '0.5rem'
    billing.style.paddingLeft = '2rem'
    billing.style.borderRadius = '0'
    billing.style.textTransform = 'capitalize'
})


billing.addEventListener('click',()=>{
    middle.style.display = 'none'
    middleSales.style.display = 'block'
    
})
 const confectionery = {bread :{ quatity:2000, price: 200},
 cake:{
    quatity : 5000, price: 700 }

 }
 

 let totalQuantityB = confectionery.bread.quatity
 let totalQuantityC = confectionery.cake.quatity
 let  priceB = confectionery.bread.price
 let priceC = confectionery.cake.price


addItem.addEventListener('click',()=>{
  var textItem = inputTextId.value,
    qtyItem = qtyInputId.value,
    priceItem = priceInputId.value
    if(!textItem || !qtyItem || !priceItem){
      alert('Value must not be empty')
      return
    }
    const myInput = document.createElement('div')
   myInput.classList.add('input-list')

   const deleted = document.createElement("button")
   deleted.classList.add('del')
   deleted.innerText='Delete'

   const itemInput = document.createElement('input')
   itemInput.classList.add('item-input')
   itemInput.type='text'
   itemInput.readOnly = true

   const qtyInput = document.createElement('input')
   qtyInput.classList.add('qty-input')
   qtyInput.type = 'number'
   qtyInput.readOnly = true

   const priceInput =document.createElement('input')
   priceInput.classList.add('price-input')
   priceInput.type = 'number'
   priceInput.readOnly = true
   
   const total = document.createElement('input')
   total.classList.add('total-order')
   total.type = 'number'
   total.readOnly =true

   const edit = document.createElement('button')
   edit.classList.add('edit')
   edit.innerText = 'Edit'

   const save = document.createElement('button')
   save.classList.add('save')
   save.innerText ='Save'



 

  


  //  totalOrder = document.querySelector('.total-order')

  container.appendChild(myInput)
  myInput.appendChild(deleted)
   myInput.appendChild(itemInput)
  myInput.appendChild(qtyInput)
   myInput.appendChild(priceInput)
   myInput.appendChild(total)
   myInput.appendChild(edit)
   myInput.appendChild(save)
   

  inputTextId.value = ''
  qtyInputId.value =''
  priceInputId.value = ''
    
  itemInput.value = textItem
  qtyInput.value = qtyItem
  priceInput.value = priceItem
  total.value = qtyItem*priceItem
   sidebar.style.height = 'auto'
   
  deleted.addEventListener('click',()=>{
    myInput.remove()
    sidebar.style.height= '87.5vh'

   })

   edit.addEventListener('click',()=>{
    if(itemInput.readOnly == true || qtyInput.readOnly == true || priceInput.readOnly == true ){
        itemInput.readOnly = false
        qtyInput.readOnly = false
        priceInput.readOnly = false
        myInput.appendChild(save).style.display = 'block'
        myInput.appendChild(save).style.backgroundColor = '#FFBF00'
        myInput.appendChild(save).style.color = 'white'
        myInput.appendChild(edit).style.display = 'none'
        myInput.appendChild(edit).style.marginTop = '-1.93rem'
        myInput.appendChild(edit).style.marginLeft = '42rem'
        myInput.appendChild(save).style.marginTop = '-1.95rem'
        myInput.appendChild(save).style.marginLeft = '42rem'
        // editDel.appendChild(imgEdit).style.display ='none'
        // editDel.appendChild(imgSave).style.display ='block'
    }
    save.addEventListener('click',()=>{
      itemInput.readOnly = true
          qtyInput.readOnly = true
          priceInput.readOnly = true
          total.value = qtyInput.value*priceInput.value
          myInput.appendChild(edit).style.display ='block'
          myInput.appendChild(save).style.display ='none'
          myInput.appendChild(edit).backgroundColor= '#00C0EF'
          myInput.appendChild(edit).color = 'white'
          
  txt = document.querySelector('.item-input').value
          quatity = document.querySelector('.qty-input').value
          price = document.querySelector('.price-input').value
          totalOrder = quatity*price

          
          const totalFields = document.querySelectorAll('.total-order')
          const inputValues = []
          for (let i = 0; i < totalFields.length; i++) {
             inputValues.push(parseInt(totalFields[i].value))
                }
                let sum = inputValues.reduce(function(a, b){
                        return a + b;
                      })
                      console.log(sum)
                      subTotal.value = sum 

    })
   
  })
  subTotal.style.display = 'block'

   const totalFields = document.querySelectorAll('.total-order')
  const inputValues = []
  for (let i = 0; i < totalFields.length; i++) {
     inputValues.push(parseInt(totalFields[i].value))
        }
        let sum = inputValues.reduce(function(a, b){
                return a + b;
              })
              console.log(sum)
              subTotal.value = sum

})

// totalAmount.addEventListener('click',()=>{
//   // console.log(input)
// //   txt = document.querySelectorAll('.item-input').value
// //   quatity = document.querySelectorAll('.qty-input').value
// // price = document.querySelectorAll('.price-input').value
// // // saveOrder = document.querySelector('.save')
// //   totalOrder = quatity*price

 
//     // Find input fields, store them in a constant
//     const inputFields = document.querySelectorAll(".item-input");
//     // Create empty inputValues array
//     const qtyFields = document.querySelector('.qty-input').value
//     const priceFields = document.querySelector('.price-input').value
//     const totalField = document.querySelectorAll('.total-order')
//     const inputValues = [];
//     // Loop through input fields
//     // for (let i = 0; i < inputFields.length; i++) {
//     //   // Push values of each input field into an array
//     //   inputValues.push(inputFields[i].value);
//     // }
//     for (let i = 0; i < totalField.length; i++) {
//       // Push values of each input field into an array
//  inputValues.push(parseInt(totalField[i].value))
//     // let sum = 0
//     // inputValues.push(totalField[i].value)
//     // add.map(x=> sum+=x )
//     }
//     let sum = inputValues.reduce(function(a, b){
//       return a + b;
//     })
//     // let subTotal = 0
       
//     console.log(sum)
//     subTotal.value = sum
//     // Log array in the console
    
    


//   // console.log(Array.from(txt))
//   // console.log(txt)
//   // saveOrder.addEventListener('click',()=>{
//   //   quatity = document.querySelector('.qty-input').value
//   //   price = document.querySelector('.price-input').value
//   //   totalOrder = quatity*price
//   //   console.log(totalOrder)
//   // })


  
// })


 })







 








