#! usr/bin/env node 
import inquirer from 'inquirer'
console.log('welcome to our currency change')
let exchangeRate:any=
{
    "usd":1,
    "euro":0.9,
    "franc":1.10,
    "SAR":0.27,
    "pkr":277,
    "qtr":0.27,
    "yuan":0.14,
    "rubel":0.011,
}
let selectCurrency=await inquirer.prompt([
    {
    type:'list',
    name:'from',
    message:'please select from the following currencies',
    choices:['usd',"euro","franc","SAR","pkr","qtr","qtr","yuan","rubel"]
    },
    {
        type:'list',
        name:'to',
        message:'please select currency to convert',
        choices:['usd',"euro","franc","SAR","pkr","qtr","qtr","yuan","rubel"]
        },
        {
            type:'number',
            name:'amount',
            message:'plese enter the amount you want to convert'
        }
])
let from=exchangeRate[selectCurrency.from]
let to=exchangeRate[selectCurrency.to]
let amount=selectCurrency.amount
let base=amount/from
let converted=base*to
console.log(`conerted currency is ${converted.toFixed(2)}`)