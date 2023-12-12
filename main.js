// Variable Declarations
const singleroom = 25000;
const doubleroom = 35000;
const tripleroom = 40000;
const extrabed = 8000;
const kidsmealvalue = 5000;
const localadultrate = 5000;
const localkidrate = 2000;
const foreignadultrate = 10000;
const foreignkidrate = 5000;
const adultguiderate = 1000;
const kidguiderate = 500;

//Referencing DOM elements
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
//Booking Details
const checkinInput = document.getElementById("check-in")
const checkoutInput = document.getElementById("check_out")
const noAdultsInput = document.getElementById("Number-of-Adults")
const noChildrenInput = document.getElementById("Number-of-children")
const kidsMealInput = document.getElementById("Meals-Kids")

const loyaltyOut = document.getElementById("loyalty")

//Room Type
const singleInput = document.getElementById("single-rooms")
const doubleInput = document.getElementById("double-rooms")
const tripleInput = document.getElementById("triple-room")

//Add Ons
const wifiCheck = document.getElementById("WiFi")
const poolCheck = document.getElementById("Pool-view")
const gardenCheck = document.getElementById("Garden-view")
const extrabedCheck = document.getElementById("extra-bed")


//Adventures
const nameAdventure = document.getElementById("nameadv")
const adventureDrop = document.getElementById("adventuredrop")
const diving = document.getElementById("diving")
const noLAdult = document.getElementById("Number-of-LAdults")
const noLChildren = document.getElementById("Number-of-Lchildren")
const noFAdults = document.getElementById("Number-of-FAdults")
const noFChildren = document.getElementById("Number-of-Fchildren")
const AdultGuide = document.getElementById("diveAdults")
const KidsGuide = document.getElementById("diveKids")
const diveAdultscheck = document.getElementById("diveAdults")
const diveKidscheck = document.getElementById("diveKids")


//Code
const promocodeInput = document.getElementById("promo-code")
const loyalpointsInput = document.getElementById("check-loyalty")

//Buttons
const advBookBtn = document.getElementById("bookadvbtn")
const bookBtn = document.getElementById("book_btn")
const add2favbtn1 = document.getElementById("add2fav1")
const add2favbtn2 = document.getElementById("add2fav2")

//Output
const booknowOutput = document.getElementById("booknowOutput");
const AdventurebookingOutput = document.getElementById("adventurebookingOutput");
const overallbooking = document.getElementById("totbookOutput")

//customerOutput
const NameOutput = document.getElementById("name");
const EmailOuput = document.getElementById("email");


//Check in and out Output
const CheckInOutput = document.getElementById("check-in");
const CheckoutOutput = document.getElementById("check_out");

//Guest Output
const AdultsOutput = document.getElementById("Number-of-Adults");
const ChildrenOutput = document.getElementById("Number-of-children");
const KidsMealOutput = document.getElementById("Meals-Kids");

//RoomType Output
const SingleOutput = document.getElementById("single-rooms");
const DoubleOutput = document.getElementById("double-rooms");
const TripleOutput = document.getElementById("triple-room");

//AddOns Output
const WifiOutput = document.getElementById("WiFi");
const PoolOutput = document.getElementById("Pool-view");
const GardenOutput = document.getElementById("Garden-view");
const BedOutput = document.getElementById("extra-bed");

//Table
const BookTable = document.getElementById("booktable");

//Adventure Table
const AdvBookTable = document.getElementById("advbooktable");


// Event Listeners
singleInput.addEventListener('input', bookingdetails);
doubleInput.addEventListener('input', bookingdetails);
tripleInput.addEventListener('input', bookingdetails);
kidsMealInput.addEventListener('input', bookingdetails);
extrabedCheck.addEventListener('change', bookingdetails);
noLAdult.addEventListener('input', adventuredetails);
noLChildren.addEventListener('input', adventuredetails);
noFAdults.addEventListener('input', adventuredetails);
noFChildren.addEventListener('input', adventuredetails);
AdultGuide.addEventListener('change', adventuredetails);
KidsGuide.addEventListener('change', adventuredetails);
loyalpointsInput.addEventListener('click',displayLoyaltyPoints);
add2favbtn1.addEventListener('click', saveAdventureBookingToFavorites)
add2favbtn2.addEventListener('click', saveRoomBookingToFavorites)

//Table Additon
bookBtn.addEventListener('click', () => {
    updateLoyaltyPoints();
    addbook();
    resetbooking(); 
});

advBookBtn.addEventListener('click', () => {
    advaddbook();
    resetbooking(); 
});

// Functions
// Booking Details
function bookingdetails() {
    let totalbookingCost = 0;

    // Room Prices
    const singleroom = 25000;
    const doubleroom = 35000;
    const tripleroom = 40000;

    // Extra Bed
    const extrabed = 8000;

    // Kids Meal
    const kidsmealvalue = 5000;

    // Values for Rooms
    const Singleroom = parseInt(singleInput.value) || 0;
    const Doubleroom = parseInt(doubleInput.value) || 0;
    const Tripleroom = parseInt(tripleInput.value) || 0;

    // Value for Kids Meal
    const kidsMeal = parseInt(kidsMealInput.value) || 0;

    // Check-in and Check-out values
    const checkin = new Date(checkinInput.value);
    const checkout = new Date(checkoutInput.value);

    const timeDifference = checkout - checkin;
    const numberofdays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    totalbookingCost =
        (singleroom * Singleroom + doubleroom * Doubleroom + tripleroom * Tripleroom + kidsmealvalue * kidsMeal) * numberofdays;

    // Extra Bed checking
    if (extrabedCheck.checked) {
        totalbookingCost += extrabed;
    }

    // Promo Code
    const promocode = promocodeInput.value;
    const discountedvalue = totalbookingCost * 0.05;

    if (promocode === "Promo123") {
        totalbookingCost -= discountedvalue;
    }

    // Output
    booknowOutput.innerHTML = `LKR ${totalbookingCost.toFixed(2)}`;
    
    return totalbookingCost;
}

// Adventure Booking
function adventuredetails() {
    // Adventure Rates
    const localadultrate = 5000;
    const localkidrate = 2000;
    const foreignadultrate = 10000;
    const foreignkidrate = 5000;

    let totaladventurecost = 0;

    const localAdult = parseInt(noLAdult.value) || 0;
    const localKid = parseInt(noLChildren.value) || 0;
    const foreignAdult = parseInt(noFAdults.value) || 0;
    const foreignKid = parseInt(noFChildren.value) || 0;

    totaladventurecost =
        localAdult * localadultrate +
        localKid * localkidrate +
        foreignAdult * foreignadultrate +
        foreignKid * foreignkidrate;


    if (diveAdultscheck.checked){
        totaladventurecost += 1000;
    }if(diveKidscheck.checked){
        totaladventurecost += 500;
    }

    // Output
    AdventurebookingOutput.innerHTML = `LKR ${totaladventurecost.toFixed(2)}`;

    return totaladventurecost;
}


// Function to add booking details to the table
function addbook(){
    const name = nameInput.value;
    const checkInDate = checkinInput.value;
    const checkOutDate = checkoutInput.value;
    const AdultsInput = noAdultsInput.value || 0;
    const ChildrenInput = noChildrenInput.value || 0;
    const KidsInput = kidsMealInput.value || 0;
    const singleinput = singleInput.value || 0;
    const doubleinput = doubleInput.value || 0;
    const triple = tripleInput.value || 0;
    const wifi = wifiCheck.checked ? 'Yes' : 'No';
    const pool = poolCheck.checked ? 'Yes' : 'No';
    const garden = gardenCheck.checked ? 'Yes' : 'No';
    const extrabed = extrabedCheck.checked ? 'Yes' : 'No';
    const promocode = promocodeInput.value ? 'Yes' : 'No';
    const totalcost = bookingdetails();

    const details = {
        name: name,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        adults: AdultsInput,
        children: ChildrenInput,
        kids: KidsInput,
        single: singleinput,
        double: doubleinput,
        triple: triple,
        wifi: wifi,
        pool: pool,
        garden: garden,
        extraBed: extrabed,
        promocode: promocode,
        totalCost: totalcost,
    };

    const labels = {
        name: 'Name',
        checkInDate: 'Check-in Date',
        checkOutDate: 'Check-Out Date',
        adults: 'No. of Adults',
        children: 'No. of Children',
        kids: 'Above 5 Years',
        single: 'Single Rooms',
        double: 'Double Rooms',
        triple: 'Triple Rooms',
        wifi: 'WiFi',
        pool: 'Pool View',
        garden: 'Garden View',
        extraBed: 'Extra Bed',
        promocode: 'Promo Code',
        totalCost: 'Total Cost',
    };

    const newRow = BookTable.insertRow(-1);
    for (const detail in details) {
        const cell = newRow.insertCell();
        cell.textContent = details[detail];
        cell.setAttribute('data-label', labels[detail]);
    };
    
}

// Function to add adventure details to the table
function advaddbook() {
    const name = nameAdventure.value;
    const dropdown =  adventureDrop.value;
    const Ladult = noLAdult.value || 0;
    const Lchildren = noLChildren.value || 0;
    const Fadult = noFAdults.value || 0;
    const Fchildren = noFChildren.value || 0;
    const adultGuide = AdultGuide.checked ? 'Yes' : 'No';
    const kidsGuide = KidsGuide.checked ? 'Yes' : 'No';
    const totalcost = adventuredetails();
    
    const details = {
        name: name,
        dropdown: dropdown,
        localadults: Ladult,
        localkids: Lchildren,
        foreignadults: Fadult,
        foreignkids: Fchildren,
        DiveAdult: adultGuide,
        DiveKids: kidsGuide,
        totalcost: totalcost,
    };

    const labels = {
        name: 'Name',
        dropdown: 'Adventures',
        localadults: 'Local Adults',
        localkids: 'Local Kids',
        foreignadults: 'Foreign Adults',
        foreignkids: 'Foreign Kids',
        DiveAdult: 'Guide for Diving (Adults)',
        DiveKids: 'Guide for Diving (Kids)',
        totalcost: 'Total Cost',
    };

    const newRow = AdvBookTable.insertRow(-1);
    for (const detail in details) {
        const cell = newRow.insertCell();
        cell.textContent = details[detail];
        cell.setAttribute('data-label', labels[detail]);
    };
}


//room booking popup
let popupbook = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}

//adventure booking popup
let popupadv = document.getElementById("popupadv");

function openPopupadv(){
    popupadv.classList.add("open-popup");
}

function closePopupadv(){
    popupadv.classList.remove("open-popup");
}

// Function to validate form inputs
// function validateForm() {
//     const fnameInputValue = nameInput.value.trim();
//     const emailInputValue = emailInput.value.trim();

//     // Check if any of the required fields are empty
//     if (fnameInputValue === '') {
//         alert("Please enter your name.");
//         return false;
//     }
//     if (emailInputValue === '') {
//         alert("Please enter your email.");
//         return false;
//     }

//     // Validation for email format (optional)
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(emailInputValue)) {
//         alert("Please enter a valid email address.");
//         return false;
//     }

//     return true; // Allow form submission if all validations pass
// }


function resetbooking() {
    document.getElementById('booking_form').reset();

    booknowOutput.innerHTML = `<u>LKR</u> 0.00`;
    AdventurebookingOutput.innerHTML = `<u>LKR</u> 0.00`;
    totbookOutput.innerHTML = `<u>LKR</u> 0.00`;
}

//loyalty points
// Function to update loyalty points
function updateLoyaltyPoints() {
    // Fetch the table row containing the last room details
    // const roomRows = document.querySelectorAll('#overallTable tbody tr');
    // const lastRoomRow = roomRows[roomRows.length - 1];

    // // Calculate the total number of rooms from the last row of the table
    const singleRooms = parseInt(singleInput.value) || 0;
    const doubleRooms = parseInt(doubleInput.value) || 0;
    const tripleRooms = parseInt(tripleInput.value) || 0;

    const totalRooms = singleRooms + doubleRooms + tripleRooms;

    // // Fetch existing loyalty points from local storage
    let existingLoyaltyPoints = parseInt(localStorage.getItem('check-loyalty')) || 0;

    // // Check if the total number of rooms is greater than 3
    // let loyaltyPointsEarned;
    if (totalRooms > 3) {
        // Award 20 loyalty points per room
        loyaltyPointsEarned = totalRooms * 20;
        loyaltyPointsEarned += existingLoyaltyPoints;

        // Store loyalty points in local storage
        localStorage.setItem('check-loyalty', loyaltyPointsEarned);
    }
    console.log("Loyl")
    console.log(singleRooms)
    console.log(doubleRooms)
    console.log(tripleRooms)
}

// Function to display loyalty points from local storage
function displayLoyaltyPoints () {
    let loyaltyPoints = parseInt(localStorage.getItem('check-loyalty')) || 0;

    // Display loyalty points to the user
    loyaltyOut.value = loyaltyPoints;
}

//add to favourites
// Function to save room booking details with all input field data to local storage
function saveRoomBookingToFavorites() {
    const roomBookingDetails = {
            checkInDate: checkinInput.value,
            checkOutDate: checkoutInput.value,
            singleRooms: singleInput.value || 0,
            doubleRooms: doubleInput.value || 0,
            tripleRooms: tripleInput.value || 0,
            adults: noAdultsInput.value || 0,
            children: noChildrenInput.value || 0,
            meals: kidsMealInput.value || 0,
            wifi: wifiCheck.checked  ? 'Yes' : 'No',
            extraBed:  extrabedCheck.checked ? 'Yes' : 'No',
            poolView: poolCheck.checked ? 'Yes' : 'No',
            promoCode: promocodeInput.value,
        }
    
    alert("Your choices have been favorited!");
    localStorage.setItem('favoriteRoomBooking', JSON.stringify(roomBookingDetails));
};

// // Function to save adventure booking details to local storage
function saveAdventureBookingToFavorites() {
    const adventureBookingDetails = {
        localAdults: noLAdult.value || 0,
        localChildren: noLChildren.value || 0,
        foreignAdults: noFAdults.value || 0,
        foreignChildren: noFChildren.value || 0,
        adultGuide: AdultGuide.checked ? 'Yes' : 'No',
        kidsGuide: KidsGuide.checked ? 'Yes' : 'No',
    };

    alert("Your choices for adventure have been favorited!");
    localStorage.setItem('favoriteAdventureBooking', JSON.stringify(adventureBookingDetails));
}

//overall booking
// Function to calculate the total prices from both tables
function calculateTotalcost() {
    // Get all rows from overallTable and advOverallTable
    const overallRows = document.querySelectorAll('#bookoverall tbody tr');
    const advOverallRows = document.querySelectorAll('#adventureoverall tbody tr');

    let totalRoomcost  = 0;
    let totalAdvcost = 0;

    // Calculate total cost from overallTable
    overallRows.forEach(row => {
        const totalCostCell = row.querySelector('[data-label="Total Cost"]');
        const totalcostText = totalCostCell.textContent.trim().replace('LKR', '').trim();
        const totalPrice = parseFloat(totalcostText.replace(',', '')); // Remove commas and convert to float
        if (!isNaN(totalPrice)) {
            totalRoomcost += totalPrice;
        }
    });

    // Calculate total price from advOverallTable
    advOverallRows.forEach(row => {
        const totalCostCell = row.querySelector('[data-label="Total Cost"]');
        const totalPriceText = totalCostCell.textContent.trim().replace('LKR', '').trim();
        const totalPrice = parseFloat(totalPriceText.replace(',', '')); // Remove commas and convert to float
        if (!isNaN(totalPrice)) {
            totalAdvcost += totalPrice;
        }
    });

    // Calculate total of both prices
    const totalBothCost = totalRoomcost + totalAdvcost;
    overallbooking.textContent = `LKR ${totalBothCost}.00`

    return totalBothCost;
}

