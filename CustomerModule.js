var CustomerModule= (function(){function Customer(){
    var name="";
    var address="";
    var amount=0;

    function setname(_name){
        name=_name;
    }
    
    function getname(){
      return name;
    }
    function setaddress(_address){
        address=_address;
    }
    
    function getaddress(){
     return address;
    }
    function setamount(_amount){
        amount=_amount;
    }
    
    function getamount(){
     return amount;
    }
    return{
        setname,
        getname,
        setaddress,
        getaddress,
        setamount,
        getamount
    }

}
return {
    Customer
}
})();