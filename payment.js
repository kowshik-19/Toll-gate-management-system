
document.addEventListener("DOMContentLoaded", function () {
    const calculateFareButton = document.getElementById("calculate-fare");
    const journeyTypeSelect = document.getElementById("journey-type");
    const vehicleTypeSelect = document.getElementById("vehicle-type");
    const fareDetails = document.getElementById("fare-details");

    calculateFareButton.addEventListener("click", function () {
        const selectedJourneyType = journeyTypeSelect.value;
        const selectedVehicleType = vehicleTypeSelect.value;

        let fare = 0;
        if (selectedJourneyType === "single") {
            if (selectedVehicleType === "car") {
                fare = 110;
            } else if (selectedVehicleType === "lcv") {
                fare = 175;
            } else if (selectedVehicleType === "bus") {
                fare = 365;
            } else if (selectedVehicleType === "4-6-axle") {
                fare = 570;
            } else if (selectedVehicleType === "hcm-eme") {
                fare = 570;
            } else if (selectedVehicleType === "7-more-axle") {
                fare = 695;
            }
        } else if (selectedJourneyType === "return") {
            if (selectedVehicleType === "car") {
                fare = 160;
            } else if (selectedVehicleType === "lcv") {
                fare = 260;
            } else if (selectedVehicleType === "bus") {
                fare = 545;
            } else if (selectedVehicleType === "4-6-axle") {
                fare = 860;
            } else if (selectedVehicleType === "hcm-eme") {
                fare = 860;
            } else if (selectedVehicleType === "7-more-axle") {
                fare = 1045;
            }
        } else if (selectedJourneyType === "monthly") {
            if (selectedVehicleType === "car") {
                fare = 3590;
            } else if (selectedVehicleType === "lcv") {
                fare = 5800;
            } else if (selectedVehicleType === "bus") {
                fare = 12155;
            } else if (selectedVehicleType === "4-6-axle") {
                fare = 19065;
            } else if (selectedVehicleType === "hcm-eme") {
                fare = 19065;
            } else if (selectedVehicleType === "7-more-axle") {
                fare = 23210;
            }
        }

        fareDetails.textContent = `Fare: $${fare}`;
    });
});