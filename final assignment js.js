{
  if(document.getElementById("same").checked){
 var a= document.getElementById("shippingName");
 var b= document.getElementById("shippingZip");
    var c= document.getElementById("billingName");
 var d= document.getElementById("billingZip");
     c.value=a.value;
    d.value=b.value;
}
  else{
    var c= document.getElementById("billingName");
 var d= document.getElementById("billingZip");
    c.value="";
   d.value="";
  }
}