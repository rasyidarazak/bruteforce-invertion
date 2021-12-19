// Brute force algorithm
function getInvCount(arr){
    let inv_count = 0;
    $('#inversion-value').html("");
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]) {
                $('#inversion-value').append("<span class='text-success my-2'> (" + arr[i] + "," +arr[j] + ")</span>");
                inv_count++;
            }  
        }
    }
    return inv_count;
}

// Add value to array & show result
arr = [];
$("#addArr").on("click", function () {
    let val = document.getElementById("val").value;
    if (!isNaN(val)){
        arr.push(parseInt(val));
    }

    $("#arr").html("");
    $('#arr').append("<p class='text-success my-2'>{ " + arr + " }</p>");

    if (arr.length > 0){
        $("#inversion-btn").html("<button type='button' class='btn btn-sm btn-primary mb-2' id='inversion-calculate'>Calculate Inversion</button>");
    }

    $("#inversion-calculate").on("click", function () {
        $("#inversion-result").html("<div class='alert alert-success mt-3'>Inversion Result = " + getInvCount(arr) + "</div>");
    });
});

// Reset button
$("#reset").click(function(){
    location.reload(true);
});

// Card navigation
$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})