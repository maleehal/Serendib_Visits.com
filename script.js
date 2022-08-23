// inputs
const txtname = document.getElementById("fname");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phno");
const date = document.getElementById("date");
const type = document.querySelector("#type");
const atype = document.querySelector("#atype");
const ano = document.getElementById("ano");
const ctype = document.querySelector("#ctype");
const cno = document.getElementById("cno");
const duration = document.getElementById("duration");
const food = document.getElementById("food");
const annual = document.getElementById("anuual");
const a_no = document.getElementById("a_no");

// outputs
const temporder = document.getElementById("temporder");
const order = document.getElementById("order");

//buttons
const addtoorderBtn = document.getElementById("add_to_Order");
const placeorderBtn = document.getElementById("place_order");
const addtofav = document.getElementById("add_to_fav");
const orderfav = document.getElementById("order_fav");
const lol = document.getElementById("loyal");

// add to temporary order
const add = {
    Activity: "",
    Adult: "",
    Adult_number: 0,
    Child: "",
    Child_number: 0,
    Duration: "",
    Extra: "",
    Annual: "",
    Annual_no: 0,
    totActivities: 0,
    Price:0.0
};
// temporary order
function priceadd(){
    const locadult = 1000;
    const localchild = 500;
    const intadult = 5000;
    const intchild = 2500;
    const lochalf = 250;
    const inthalf = 500;
    const locfull = 500;
    const intfull = 1000;
    const food = 500;
    let aticket = 0;
    let cticket = 0;
    let duramount = 0;
    let Pfood = 0;
    let aprice = 0;
    let temptotal = 0.0;

    if (add.Adult == "Local"){
        aticket = locadult * add.Adult_number;
    }else{
        aticket = intadult * add.Adult_number;
    }
    if (add.Child == "Local"){
        cticket = localchild * add.Child_number;
    }else{
        cticket = intchild * add.Child_number;
    }
    
    if (add.Adult == "Local" && add.Child == "Local" && add.Duration == "Half a Day"){
        duramount = (lochalf * add.Adult_number) + (lochalf * add.Child_number);
    }else if(add.Adult == "International" && add.Child == "International" && add.Duration == "Half a Day"){
        duramount = (inthalf * add.Adult_number) + (inthalf * add.Child_number);
    }else if(add.Adult == "Local" && add.Child == "International" && add.Duration == "Half a Day"){
        duramount = (lochalf * add.Adult_number) + (inthalf * add.Child_number);
    }else if(add.Adult == "International" && add.Child == "Local" && add.Duration == "Half a Day"){
        duramount = (inthalf * add.Adult_number) + (lochalf * add.Child_number);
    }else if (add.Adult == "Local" && add.Child == "Local" && add.Duration == "Full Day"){
        duramount = (locfull * add.Adult_number) + (locfull * add.Child_number);
    }else if(add.Adult == "International" && add.Child == "International" && add.Duration == "Full Day"){
        duramount = (intfull * add.Adult_number) + (intfull * add.Child_number);
    }else if(add.Adult == "Local" && add.Child == "International" && add.Duration == "Full Day"){
        duramount = (locfull * add.Adult_number) + (intfull * add.Child_number);
    }else if(add.Adult == "International" && add.Child == "Local" && add.Duration == "Full Day"){
        duramount = (intfull * add.Adult_number) + (locfull * add.Child_number);
    }else{
        duramount = 0;
    }
    
    if (add.Extra == "YES"){
        Pfood = food * ((parseInt(add.Adult_number)) + (parseInt(add.Child_number)));
    }else{
        Pfood = 0;
    }

    if (add.Annual == "Local Annual Pass"){
        aprice = 4500 * add.Annual_no;
    }else if (add.Annual == "International Annual Pass"){
        aprice = 15000 * add.Annual_no;
    }else{
        aprice = 0;
    }

    return temptotal = aticket + cticket + duramount + Pfood + aprice;

}
// Adding to the temporary basket
function act(){
    
    add.Activity = type.options[type.selectedIndex].text;   
    add.Adult = atype.options[atype.selectedIndex].text; 
    add.Adult_number = ano.value;
    add.Child = ctype.options[ctype.selectedIndex].text; 
    add.Child_number = cno.value;
    add.Annual = annual[annual.selectedIndex].text;
    add.Annual_no = a_no.value;
    add.Duration = duration[duration.selectedIndex].text; 
    add.Extra = food[food.selectedIndex].text; 
    add.Price = priceadd();
    
    temporder.innerText = 
    "Activity: " + add.Activity + "\n" + 
    "Adults: " + add.Adult + " " + add.Adult_number + "\n" +
    "Children: " + add.Child + " " + add.Child_number + "\n" +
    "Duration: " + add.Duration + "\n" +
    "Extra: " + add.Extra + "\n" +
    "Annual Tickets: " + add.Annual + "\n" +
    "Annual ticket numbers: " + add.Annual_no + "\n" +
    "Price: " + add.Price;
};

//finding and setting today as min value for date
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}
today = yyyy + '-' + mm + '-' + dd;
date.setAttribute("min", today);

// order added to the basket
const place = {
    Name: "",
    Email: "",
    Phone: "",
    Date: "",
    Activity: "",
    Adult: "",
    Adult_number: 0,
    Child: "",
    Child_number: 0,
    Duration: "",
    Extra: "",
    Annual: "",
    Annual_no: 0,
    cost: 0,
    Total: 0.0,
    
    loyal: 0
};
// loyalty points
let cart_items = 0;

addtoorderBtn.onclick = function(){
    cart_items += 1;

    if (txtname.value == "" || email.value == "" || date.value == "" || phonenumber.value == 0 || ano.value == 0 ) {
        alert("Please fill out the required fields")
    }else {  
        place.Name = txtname.value;
        place.Email = email.value;
        place.Phone = phonenumber.value;
        place.Date = date.value;
        place.Activity = add.Activity;
        place.Adult = add.Adult;
        place.Adult_number = parseInt(add.Adult_number);
        place.Child = add.Child;
        place.Child_number = parseInt(add.Child_number);
        place.Duration = add.Duration;
        place.Extra = add.Extra;
        place.Annual = add.Annual;
        place.Annual_no = add.Annual_no;
        place.cost = add.Price;
        place.Total += add.Price;   
        
        temporder.innerText = "No temporary Order";
        order.innerText = 
        "Customer Name: " + place.Name + "\n" + 
        "E-mail Address: " + place.Email + "\n" + 
        "Phone Number: " + place.Phone + "\n" +
        "Date: " + place.Date + "\n" +
        "Total Price: LKR" + place.Total;
        tablePut();
    }       
}
// Put values in a table
function tablePut(){
    let table = document.getElementById("ftable");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);
    let cell9 = row.insertCell(8);
    let cell10 = row.insertCell(9);

    cell1.innerHTML = place.Activity;
    cell2.innerHTML = place.Adult;
    cell3.innerHTML = place.Adult_number;
    cell4.innerHTML = place.Child;
    cell5.innerHTML = place.Child_number;
    cell6.innerHTML = place.Duration;
    cell7.innerHTML = place.Extra;
    cell8.innerHTML = place.Annual;
    cell9.innerHTML = place.Annual_no;
    cell10.innerHTML = place.cost;
}

let fav = localStorage.setItem("fav", "false");
// Add to favourites in local storage
let addString = document.getElementById('add_to_fav');
addString.addEventListener('click', function(addtofav){
    addtofav.preventDefault();
    
    let fav = localStorage.setItem("fav", "true");

    if (txtname.value == "" || email.value == "" || date.value == "" || phonenumber.value == 0 || ano.value == 0) {
        alert("Please fill out the required fields")
    }else {
        let activity = localStorage.setItem("activity",add.Activity);
        let adult = localStorage.setItem("Adult", add.Adult);
        let adnu = localStorage.setItem("adnu", add.Adult_number);
        let child = localStorage.setItem("Child", add.Child);
        let chnu = localStorage.setItem("chnu", add.Child_number);
        let duration = localStorage.setItem("duration", add.Duration);
        let food = localStorage.setItem("Food", add.Extra);
        let amount = localStorage.setItem("amount", add.Price);
        let annual = localStorage.setItem("anuual", add.Annual);
        let an_am = localStorage.setItem("a_no", add.Annual_no);
    

        alert("Your order has been added to favourites")
    }
});

// get the saved favourites in the local storage
let ofav = document.getElementById("order_fav");
ofav.addEventListener('click', function(orderfav){
    orderfav.preventDefault();

    if (txtname.value == "" || email.value == "" || date.value == "" || phonenumber.value == 0 || ano.value == 0){
        localStorage.getItem("fav") == true
        alert("No favourites added")  
    }else{
        cart_items += 1;
        let activity = localStorage.getItem("activity");
        let adult = localStorage.getItem("Adult");
        let adnu = localStorage.getItem("adnu");
        let child = localStorage.getItem("Child");
        let chnu = localStorage.getItem("chnu");
        let duration = localStorage.getItem("duration");
        let food = localStorage.getItem("Food");
        let amount = localStorage.getItem("amount");
        let annual = localStorage.getItem("anuual");
        let an_am = localStorage.getItem("a_no");

        place.Name = txtname.value;
        place.Email = email.value;
        place.Phone = phonenumber.value;
        place.Activity = activity;
        place.Adult = adult;
        place.Adult_number = adnu;
        place.Child = child;
        place.Child_number = chnu;
        place.Duration = duration;
        place.Extra = food;
        place.Annual = annual;
        place.Annual_no = an_am;
        place.cost = add.Price;
        place.Total += amount;

        
        order.innerText = 
        "Customer Name: " + place.Name + "\n" + 
        "E-mail Address: " + place.Email + "\n" + 
        "Phone Number: " + place.Phone + "\n" +
        "Total Price: LKR" + place.Total;
        tablePut();
    }
    
});
//loyalty calculation
function loyal(){
    if(cart_items > 3){
        let loyal = localStorage.setItem("loy",cart_items * 20);
    }else{
        let loyal = localStorage.setItem("loy", 0);
    }
}
let l = document.getElementById("lol");
lol.addEventListener('click', function(lol){
    lol.preventDefault();
    loyal();
    let lo = localStorage.getItem("loy");

    alert("You have currently earned " + lo + " loyalty points for the booked activities.")
});
// order confirmation
let finalorder = document.getElementById("placeorderBtn");
placeorderBtn.addEventListener('click', function(placeorderBtn){
    placeorderBtn.preventDefault();

    alert("Your order is successful. \n Thank you for shopping with Serendib Visits")
});
