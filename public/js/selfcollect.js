function checkTrackingNum(field, autoMove) {
    if (field.value.length >= field.maxLength) {
        document.getElementById("inputCSArea").style.display = 'none';
        document.getElementById("inputTnArea").style.display = 'none';
        document.getElementById("loading").style.display = 'block';
        document.getElementById("wronginput").style.display = 'none';

        var jobidentitynum = '';
        jobidentitynum = document.getElementById("trackingNumber").value;
        document.getElementById("trackingNum").value = jobidentitynum;
        document.getElementById('trackingNumber').value = '';

        document.getElementById("csName").value = document.getElementById("csNameTemp").value;

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
                    if (assignTaskToAgent == 0) {
                        request.open('POST', 'https://api.tookanapp.com/v2/assign_task');
                        request.setRequestHeader('Content-Type', 'application/json');

                        request.onreadystatechange = function () {
                            if (this.readyState === 4) {
                                console.log('Status:', this.status);
                                console.log('Headers:', this.getAllResponseHeaders());
                                console.log('Body:', this.responseText);

                                localStorage.setItem("lastCS", document.getElementById("csName").value);
                                document.getElementById("selfCollect").submit();
                            }
                        };

                        var body = {
                            'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                            'job_id': document.getElementById("trackingNum").value,
                            'fleet_id': document.getElementById("csName").value,
                            'job_status': '2'
                        };
                        request.send(JSON.stringify(body));
                    }
                }

                if (json_responsejd.status == 404) {
                    document.getElementById("loading").style.display = 'none';
                    document.getElementById("selfCollect").style.display = 'none';
                    document.getElementById("wronginput").style.display = 'block';
                    document.getElementById("trackingnumberarea").style.display = 'block';
                }
            }
        };

        var body = {
            'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
            'job_ids': [document.getElementById("trackingNum").value],
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
