document.addEventListener("DOMContentLoaded", function (event) {
    // Retrieve
    if (localStorage.getItem("lastAgent") == null) {
        localStorage.setItem("lastAgent", "");
    }
    if (localStorage.getItem("lastAgent") != null) {
        document.getElementById("agentTemp").value = localStorage.getItem("lastAgent");
    }
    document.getElementById("loading").style.display = 'none';
    document.getElementById("wronginput").style.display = 'none';

    document.getElementById("trackingNumber").focus();

    document.getElementById("submitTN").addEventListener("click", checkTrackingNum);

    function checkTrackingNum() {
        document.getElementById("inputAgentArea").style.display = 'none';
        document.getElementById("inputTnArea").style.display = 'none';
        document.getElementById("completeTimeNotice").style.display = 'none';
        document.getElementById("loading").style.display = 'block';
        document.getElementById("wronginput").style.display = 'none';

        var jobidentitynum = '';
        jobidentitynum = document.getElementById("trackingNumber").value;
        document.getElementById("trackingNum").value = jobidentitynum;
        document.getElementById('trackingNumber').value = '';

        var request = new XMLHttpRequest();
        request.open('POST', 'https://api.tookanapp.com/v2/get_job_details_by_order_id');
        request.setRequestHeader('Content-Type', 'application/json');

        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                console.log('Status:', this.status);
                console.log('Headers:', this.getAllResponseHeaders());
                console.log('Body:', this.responseText);

                responsejd = this.responseText;
                json_responsejd = JSON.parse(responsejd);

                if (json_responsejd.status != 404) {
                    var today = new Date();
                    var todayDate = "";
                    var todayMonth = "";

                    var nextMonth = (today.getMonth()) + 1;

                    if (today.getDate() < 10) {
                        todayDate = "0" + (today.getDate());
                    }

                    if (today.getDate() >= 10) {
                        todayDate = (today.getDate());
                    }

                    if (nextMonth < 10) {
                        todayMonth = "0" + (nextMonth);
                    }

                    if (nextMonth >= 10) {
                        todayMonth = (nextMonth);
                    }

                    var date = today.getFullYear() + '-' + todayMonth + '-' + todayDate;
                    var time = "01:00:00";
                    var timeClose = "23:00:00";
                    document.getElementById("dateTime").value = date + ' ' + time;
                    document.getElementById("dateTimeClose").value = date + ' ' + timeClose;

                    document.getElementById("agentName").value = document.getElementById("agentTemp").value;

                    localStorage.setItem("lastAgent", document.getElementById("agentName").value);
                    document.getElementById("itemOut").submit();
                }

                if (json_responsejd.status == 404) {
                    document.getElementById("inputAgentArea").style.display = 'block';
                    document.getElementById("inputTnArea").style.display = 'block';
                    document.getElementById("completeTimeNotice").style.display = 'block';
                    document.getElementById("loading").style.display = 'none';
                    document.getElementById("wronginput").style.display = 'block';

                    document.getElementById("trackingNumber").focus();
                }
            }
        };

        var body = {
            'api_key': '53626885f0400f401d527c6514516c471ae7cdfe2fdf7c38591403c4',
            'order_ids': [jobidentitynum],
            'include_task_history': 0
        };
        request.send(JSON.stringify(body));
    }
});
