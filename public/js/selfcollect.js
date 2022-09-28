function checkTrackingNum(field, autoMove) {
    if (field.value.length >= field.maxLength) {
        document.getElementById("inputCSArea").style.display = 'none';
        document.getElementById("inputTnArea").style.display = 'none';
        document.getElementById("loading").style.display = 'block';
        document.getElementById("wronginput").style.display = 'none';

        if (document.getElementById("csNameTemp").value == "1477192") {
            document.getElementById("csName").value = "CS FATHIN";
        }

        if (document.getElementById("csNameTemp").value == "1368849") {
            document.getElementById("csName").value = "CS KEE";
        }

        var request = new XMLHttpRequest();
        request.open('POST', 'https://api.tookanapp.com/v2/get_job_details');
        request.setRequestHeader('Content-Type', 'application/json');

        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                console.log('Status:', this.status);
                console.log('Headers:', this.getAllResponseHeaders());
                console.log('Body:', this.responseText);

                responsejd = this.responseText;
                json_responsejd = JSON.parse(responsejd);

                if (json_responsejd.status != 404) {
                    request.open('POST', 'https://api.tookanapp.com/v2/assign_task');
                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            console.log('Status:', this.status);
                            console.log('Headers:', this.getAllResponseHeaders());
                            console.log('Body:', this.responseText);

                            document.getElementById("trackingNum").value = document.getElementById("trackingNumber").value;

                            localStorage.setItem("lastCS", document.getElementById("csNameTemp").value);
                            document.getElementById("selfCollect").submit();
                        }
                    };

                    var body = {
                        'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                        'job_id': document.getElementById("trackingNumber").value,
                        'fleet_id': document.getElementById("csNameTemp").value,
                        'job_status': '2'
                    };
                    request.send(JSON.stringify(body));
                }

                if (json_responsejd.status == 404) {
                    document.getElementById('trackingNumber').value = '';
                    document.getElementById("inputCSArea").style.display = 'block';
                    document.getElementById("inputTnArea").style.display = 'block';
                    document.getElementById("loading").style.display = 'none';
                    document.getElementById("wronginput").style.display = 'block';
                    document.getElementById("trackingNumber").focus();
                }
            }
        };

        var body = {
            'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
            'job_ids': [document.getElementById("trackingNumber").value],
            'include_task_history': 0
        };
        request.send(JSON.stringify(body));
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    // Retrieve
    document.getElementById("csNameTemp").value = localStorage.getItem("lastCS");
    document.getElementById("loading").style.display = 'none';
    document.getElementById("wronginput").style.display = 'none';
    document.getElementById("trackingNumber").focus();
});
