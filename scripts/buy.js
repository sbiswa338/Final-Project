const sport ={
    name: 'Sports Car',
    shell_color: 'Black',
    prefix: '357901',
    start_number: 9753,
    price: 239.99
}

const suv ={
    name: 'SUV Car',
    shell_color: 'Grey',
    prefix: '642852',
    start_number: 8647,
    price: 210.99
}

const classic ={
    name: 'Classic Car',
    shell_color: 'Red',
    prefix: '315790',
    start_number: 7326,
    price: 599.99
}

const atv ={
    name: 'ATV Car',
    shell_color: 'Yellow',
    prefix: '113342',
    start_number: 8488,
    price: 349.99
}

const dune_buggy ={
    name: 'Dune Buggy Car',
    shell_color: 'Chrome',
    prefix: '885532',
    start_number: 7446,
    price: 449.99
}

const crawler ={
    name: 'Crawler Car',
    shell_color: 'Blue',
    prefix: '756643',
    start_number: 3398,
    price: 299.99
}

const custom = {
    military_shell: 34.99,
    truck_shell: 34.99,
    wheels_tires: 69.99,
    extra_battery: 30.99
}

const tax = 0.07;
let total = 0;
let tax_amount = 0;

let color_style = document.getElementById('car-section');
let custom_label = document.getElementById('custom-label');
let custom_section = document.getElementById('custom-options');
let purchase = document.getElementById('btn-purchase');
let order = document.getElementById('order-show');

function changeImage() {
    let img_sel = document.getElementById('car-style').value;
    let img_src = 'images/' + img_sel + '.jpg';

    const img = document.getElementById('car');
    img.src = img_src;

    displayElement(color_style, 'inline');
    displayElement(custom_label, 'block');
    displayElement(custom_section, 'flex');

}

window.onload = function() {
    displayElement(color_style, 'none');
    displayElement(order, 'none');
    displayElement(custom_label, 'none');
    displayElement(custom_section, 'none');
    displayElement(purchase, 'none');
}

function displayElement(my_element, type) {
    my_element.style.display = type; 
}

function addOrder(car) {
    displayElement(order, 'flex');
    document.getElementById('rec-car').innerHTML = car.name;
    document.getElementById('rec-car-price').innerHTML = '$'+car.price;
    total = car.price;

    let price_color;

    price_color = 'No charge for color'

    document.getElementById('rec-color').innerHTML = 'Shell color: '+car.shell_color;

    document.getElementById('rec-color-price').innerHTML = price_color;

    document.getElementById('rec-serial').innerHTML = 'Serial #'+car.prefix + (++car.start_number);

    calculateSub();
}


function calculateSub() {
    document.getElementById('rec-subtotal').innerHTML = '$'+total.toFixed(2);
    calculateTax();
    calculateTotal();
}

function calculateTax() {
    tax_amount = (total * tax).toFixed(2);
    document.getElementById('rec-tax').innerHTML = '$'+tax_amount;
}

function calculateTotal() {
    let finished = total + Number.parseFloat(tax_amount);
    document.getElementById('rec-total').innerHTML = '$'+finished.toFixed(2);
}

function updateOrder() {
    let car = document.getElementById('car-style').value;
    let color = document.getElementById('car-color-style').value;
    switch(car) {
        case 'Sport':
            sport['shell_color'] = color;
            addOrder(sport);
        break;
        case 'SUV':
            suv['shell_color'] = color;
            addOrder(suv);
        break;
        case 'Classic':
            classic['shell_color'] = color;
            addOrder(classic);
        break;
        case 'ATV':
            atv['shell_color'] = color;
            addOrder(atv);
        break;
        case 'Dune Buggy':
            dune_buggy['shell_color'] = color;
            addOrder(dune_buggy);
        break;
        case 'Crawler':
            crawler['shell_color'] = color;
            addOrder(crawler)
        break;
    }   
    displayElement(purchase, 'inline');
}

function customMilitary() {
    let military = document.querySelector('#military-shell');

    if(military.checked) {
        document.getElementById('rec-mshell').innerHTML = military.value;
        document.getElementById('rec-mshell-price').innerHTML= custom.military_shell;
        total +=custom.military_shell;
    } else {
        document.getElementById('rec-mshell').innerHTML = '';
        document.getElementById('rec-mshell-price').innerHTML = '';
        total -= custom.military_shell;
    }
    calculateSub();
}

function customTruck() {
    let truck = document.querySelector('#truck-shell');

    if(truck.checked) {
        document.getElementById('rec-tshell').innerHTML = truck.value;
        document.getElementById('rec-tshell-price').innerHTML= custom.truck_shell;
        total +=custom.truck_shell;
    } else {
        document.getElementById('rec-tshell').innerHTML = '';
        document.getElementById('rec-tshell-price').innerHTML = '';
        total -= custom.truck_shell;
    }
    calculateSub();
}

function customWheel() {
    let wheels = document.querySelector('#wheels-tires');

    if(wheels.checked) {
        document.getElementById('rec-wheels').innerHTML = wheels.value;
        document.getElementById('rec-wheels-price').innerHTML= custom.wheels_tires;
        total +=custom.wheels_tires;
    } else {
        document.getElementById('rec-wheels').innerHTML = '';
        document.getElementById('rec-wheels-price').innerHTML = '';
        total -= custom.wheels_tires;
    }
    calculateSub();
}

function customBattery() {
    let battery = document.querySelector('#extra-battery');

    if(battery.checked) {
        document.getElementById('rec-battery').innerHTML = battery.value;
        document.getElementById('rec-battery-price').innerHTML= custom.extra_battery;
        total +=custom.extra_battery;
    } else {
        document.getElementById('rec-battery').innerHTML = '';
        document.getElementById('rec-battery-price').innerHTML = '';
        total -= custom.extra_battery;
    }
    calculateSub();
}


function reserveOrder() {
    let step1 = 'The following things will be included in the box by default:';
    let step2 = 'Remote Control';
    let step3 = 'Rechargeable Battery & Charger';
    alert('Your RC Car has been customizied. We will notify you when it is ready to be shipped.\n'+ step1 + '\n' + step2 + '\n' + step3);
}