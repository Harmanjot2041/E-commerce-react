import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   quantity=5;
   minus(){
     this.quantity--;
   }
   plus(){
    this.quantity++;
  }
  products=[
    {
      code:101,
      description:"Fritolay Doritos Cool Ranch",
      unit:"198 gm",
      Cost:"$14.99",
      rsp:"$31",
      Margin:"30%",
      category:"Bagged Sweets",
      date:"25-aug-2020",
      qty:"9",
      color:"red",
      img:"../../assets/kurkre1.jfif"
 
    },
    {
     code:102,
     description:"Ruffies Doritos Cool Ranch",
     unit:"158 gm",
     Cost:"$13.99",
     rsp:"$37",
     Margin:"50%",
     category:"Bagged Sweets",
     date:"16-jul-2020",
     qty:"10",
     color:"blue",
     img:"../../assets/kurkre3.jfif"
 
   },
   {
     code:103,
     description:"Lay's Doritos Cool Ranch",
     unit:"198 gm",
     Cost:"$14.99",
     rsp:"$31",
     Margin:"60%",
     category:"Bagged Sweets",
     date:"45-mar-2020",
     qty:"9",
     color:"green",
     img:"../../assets/kurkre2.jfif"
 
   },
   {
     code:104,
     description:"sour's Doritos Cool Ranch",
     unit:"138 gm",
     Cost:"$24.99",
     rsp:"$41",
     Margin:"60%",
     category:"Bagged Sweets",
     date:"22-mar-2020",
     qty:"71",
     color:"yellow",
     img:"../../assets/kurkre4.jfif"
 
   },
   {
     code:105,
     description:"Fritolay Doritos Cool Ranch",
     unit:"498 gm",
     Cost:"$34.99",
     rsp:"$35",
     Margin:"60%",
     category:"Bagged Sweets",
     date:"27-mar-2020",
     qty:"01",
     color:"silver",
     img:"../../assets/kurkre5.jfif"
 
   },
   {
     code:106,
     description:"sunChips Doritos Cool Ranch",
     unit:"168 gm",
     Cost:"$17.99",
     rsp:"$37",
     Margin:"37%",
     category:"Bagged Sweets",
     date:"25-aug-2020",
     qty:"91",
     color:"red",
     img:"../../assets/kurkre6.jfif"
 
   },
   {
     code:107,
     description:"fav Doritos Cool Ranch",
     unit:"198 gm",
     Cost:"$14.99",
     rsp:"$37",
     Margin:"60%",
     category:"Bagged Sweets",
     date:"25-mar-2020",
     qty:"9",
     color:"green",
     img:"../../assets/kurkre3.jfif"
 
   }
  ]
}
