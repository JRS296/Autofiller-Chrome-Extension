chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        try {
            //These are the IDs of the form to be filled
            document.getElementById("order_billing_name").value = request.name;
            document.getElementById("order_billing_name").value = request.regnum;
            document.getElementById("order_email").value = request.email;
            document.getElementById("order_tel").value = request.telephone;
            document.getElementById("order_billing_address").value = request.address1;
            document.getElementById("order_billing_address").value = request.workemail;
            document.getElementById("order_billing_address").value = request.course;
            
            sendResponse({status: "Success!"});
        } catch (error) {
            console.log(error)
            sendResponse({status: "Exception occurred!"});
        }
    }
);