document.addEventListener("DOMContentLoaded", () => {
    const billingSwitch = document.getElementById("billing-switch");
    const proPrice = document.getElementById("pro-price");
    const premiumPrice = document.getElementById("premium-price");
    
    const monthlyLabel = document.getElementById("monthly-label");
    const yearlyLabel = document.getElementById("yearly-label");

    if(billingSwitch) {
        billingSwitch.addEventListener("change", () => {
            if (billingSwitch.checked) {
                // Yearly Pricing (20% off roughly)
                proPrice.innerHTML = "$39<span>/mo</span>";
                premiumPrice.innerHTML = "$159<span>/mo</span>";
                
                monthlyLabel.classList.remove("active");
                yearlyLabel.classList.add("active");
            } else {
                // Monthly Pricing
                proPrice.innerHTML = "$49<span>/mo</span>";
                premiumPrice.innerHTML = "$199<span>/mo</span>";
                
                yearlyLabel.classList.remove("active");
                monthlyLabel.classList.add("active");
            }
        });
    }
});