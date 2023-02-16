// Storing the given data points into variables
const itemWeight = [
    "0.730",
    "0.417",
    "0.583",
    "0.383",
    "0.383",
    "0.240",
    "0.834",
    "0.120",
    "0.080",
    "0.020",
    "0.015"
];

const itemName = [
    "Plastic bottles",
    "Plastic bags",
    "Food wrapping",
    "Yogurt, cream, etc. containers",
    "Take-away plastic boxes",
    "Take-away cups",
    "Plastic-wrapped packages",
    "Detergent & cleaning product bottles",
    "Shampoo, conditioner & toiletries",
    "Plastic toothbrushes",
    "Toothpaste"
]

const itemTip = [
    "Many beverages can be purchased in glass bottles. Consider to bring reusable bottles for water and hot beverages when you are out and about.",
    "Bring reusable fabric totes for shopping and refuse plastic bags when offered.",
    "Consider to buy more unpackaged food at local markets.",
    "Some places offer dairy in glass containers. You could even explore recipes to make your own yogurt.",
    "Cut down on take-out packaging by preparing more meals at home.",
    "Bring your own tumbler when ordering hot beverages to go.",
    "Try to purchase more products in shops rather than online.",
    "Explore refill stations in your neighborhood to cut down on bottles from detergents and cleaning products.",
    "Explore refill stations in your neighborhood to cut down on plastic waste from toiletries.",
    "Seriously? How often do you brush your teeth? Anyway, Did you know there are toothbrushes made from wood?",
    "Seriously? How much toothpaste do you use? Did you know there are plastic-free alternatives available?"
]
// Displaying the Tip according to the calculation 
const calculateData = () => {
    const numberSelectors = document.querySelectorAll(`input[type="number"]`);
    const peopleInHouse = parseInt(document.querySelector("select").value);

    let maxIndex = -1;
    let maxValue = 0;

    let sum = 0;

    for (let i = 0; i < numberSelectors.length; i++) {
        if(parseInt(numberSelectors[i].value) < 0 || !parseInt(numberSelectors[i].value)) {
            continue;
        }

        const value = parseInt(numberSelectors[i].value) * itemWeight[i];

        sum += value;

        console.log({ value, maxValue })
        if (value > maxValue) {
            maxValue = value;
            maxIndex = i;
        }
    }

    console.log({ maxIndex })

    const answer = sum / peopleInHouse;

    document.querySelector("#answer").innerText = answer.toFixed(3);

    if (maxIndex > -1) {
        document.querySelector("#tip").innerText = itemTip[maxIndex]
        document.querySelector("#source").innerText = itemName[maxIndex]
    } else {
        document.querySelector("#tip").innerText = "";
        document.querySelector("#source").innerText = "unknown sources";
    }
}
// loading the page when event is fired
window.onload = () => {
    calculateData();

    const numberSelectors = document.querySelectorAll(`input[type="number"]`);

    for (const numberSelector of numberSelectors) {
        numberSelector.addEventListener("change", calculateData);
    }

    document.querySelector("select").addEventListener("change", calculateData);

    document.querySelector(`button[type="reset"]`).addEventListener("click", () => {
        document.querySelector("#answer").innerText = 0;
        document.querySelector("#tip").innerText = "";
        document.querySelector("#source").innerText = "unknown sources";
    });
}