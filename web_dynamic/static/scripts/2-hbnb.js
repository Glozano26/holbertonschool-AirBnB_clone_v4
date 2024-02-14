$(document).ready(function () {
    let checkboxes = $("input[type=checkbox]");
    let idsList = [];

    checkboxes.change(function() {
        let serviceId = $(this).attr('data-id');
        let serviceName = $(this).attr('data-name');
        if ($(this).is(':checked')) {
            idsList.push(serviceId);
        } else {
            let index = idsList.indexOf(serviceId);
            if (index !== -1) {
                idsList.splice(index, 1);
            }
        }
        console.log(idsList);
        $('#divAmenities h4').text(amenitiesList.join(', '));
    });

    async function fetchStatus() {
        try {
            const response = await fetch("http://127.0.0.1:5001/api/v1/status/");
            const data = await response.json();
            if (data.status === "OK") {
                $('#api_status').addClass("available");
            } else {
                $('#api_status').removeClass("available");
            }
        } catch (error) {
            console.error(error);
        }
    }

    fetchStatus();
    // $.get("http://127.0.0.1:5001/api/v1/status/", function(data, status) {
    //     if (data.status === "OK") {
    //         $('#api_status').addClass('available');
    //     } else {
    //         $('#api_status').removeClass('available');
    //     }
    // });
});