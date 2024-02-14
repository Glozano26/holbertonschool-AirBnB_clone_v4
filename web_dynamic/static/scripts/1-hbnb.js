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

    function updateAmenitiesList() {
        let amenitiesNames = [];
        let count = 0;

        checkboxes.forEach(function(serviceId) {
            if (count < 3) {
                let amenityName = $('#' + amenityId).val();
                amenitiesNames.push(amenityName);
                count++;
            }
        });
  
        let amenitiesText = amenitiesNames.join(', ');
        if (checkboxes.size > 3) {
            amenitiesText += ', ...';
        }
  
        $('.amenities h4').text(amenitiesText);
    }
});