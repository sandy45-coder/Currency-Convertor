function convert(event) {
    event.preventDefault();
    let amt = document.getElementById("amt").value;
    let msg = document.getElementById("msg");
    if (amt === "") {
        alert("Please Enter the Amount");
        msg.innerHTML = "";
        document.getElementById("amt").focus();
        return;
    } else if (amt < 0) {
        alert("Please Enter a Positive Amount");
        msg.innerHTML = "";
        document.getElementById("amt").focus();
        return;
    }
    let url = "https://api.exchangerate-api.com/v4/latest/USD";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let rate = data.rates.INR;
            let convertedAmount = (amt * rate).toFixed(2);
            msg.innerHTML = "₹ " + convertedAmount;
        })
        .catch(err => msg.innerHTML = "Issue: " + err);
}