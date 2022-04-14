function checkTrackingNum(field, autoMove) {
    if (field.value.length >= field.maxLength) {
        document.getElementById("inputAgentArea").style.display = 'none';
        document.getElementById("inputTnArea").style.display = 'none';
        document.getElementById("completeTimeNotice").style.display = 'none';
        document.getElementById("loading").style.display = 'block';
        document.getElementById("wronginput").style.display = 'none';

        var jobidentitynum = '';
        jobidentitynum = document.getElementById("trackingNumber").value;
        document.getElementById("trackingNum").value = jobidentitynum;
        document.getElementById('trackingNumber').value = '';

        var assignTaskToAgent = 0;
        var assignDateTimeToTask = 0;

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

        document.getElementById("agent").value = document.getElementById("agentTemp").value;

        if (document.getElementById("agentTemp").value == "994634") {
            document.getElementById("agentName").value = "FD SOWDEQ";
        }

        if (document.getElementById("agentTemp").value == "997381") {
            document.getElementById("agentName").value = "FD RAHIM";
        }

        if (document.getElementById("agentTemp").value == "1029275") {
            document.getElementById("agentName").value = "FD AIMI";
        }

        if (document.getElementById("agentTemp").value == "1050947") {
            document.getElementById("agentName").value = "FD HASBUL";
        }

        if (document.getElementById("agentTemp").value == "1071388") {
            document.getElementById("agentName").value = "FD FADARUS";
        }

        if (document.getElementById("agentTemp").value == "1079095") {
            document.getElementById("agentName").value = "FD HAMIDIN";
        }

        if (document.getElementById("agentTemp").value == "1113078") {
            document.getElementById("agentName").value = "FD HANAFI";
        }

        if (document.getElementById("agentTemp").value == "1230427") {
            document.getElementById("agentName").value = "FD FAEZ";
        }

        if (document.getElementById("agentTemp").value == "1254189") {
            document.getElementById("agentName").value = "FDZUL";
        }

        if (document.getElementById("agentTemp").value == "1130495") {
            document.getElementById("agentName").value = "EFR HAJID";
        }

        if (document.getElementById("agentTemp").value == "1130524") {
            document.getElementById("agentName").value = "EFR FAKHRIAH";
        }

        if (document.getElementById("agentTemp").value == "1268554") {
            document.getElementById("agentName").value = "EFR GHAFUR";
        }

        if (document.getElementById("agentTemp").value == "1106491") {
            document.getElementById("agentName").value = "EFR RASHID";
        }

        if (document.getElementById("agentTemp").value == "1105549") {
            document.getElementById("agentName").value = "EFR NAZRY";
        }

        if (document.getElementById("agentTemp").value == "1124160") {
            document.getElementById("agentName").value = "EFR HANIZAN";
        }

        if (document.getElementById("agentTemp").value == "996642") {
            document.getElementById("agentName").value = "IFR ZIZAH";
        }

        if (document.getElementById("agentTemp").value == "977110") {
            document.getElementById("agentName").value = "IFR NAN";
        }

        if (document.getElementById("agentTemp").value == "1268557") {
            document.getElementById("agentName").value = "EFR KHAIRUL";
        }

        if (document.getElementById("agentTemp").value == "1311747") {
            document.getElementById("agentName").value = "FD IQBAL";
        }

        if (document.getElementById("agentTemp").value == "1166672") {
            document.getElementById("agentName").value = "FD AZRI";
        }

        if (document.getElementById("agentTemp").value == "1290342") {
            document.getElementById("agentName").value = "IFR UMAR";
        }

        if (document.getElementById("agentTemp").value == "1276415") {
            document.getElementById("agentName").value = "IFR ZUDIN";
        }

        if (document.getElementById("agentTemp").value == "1295953") {
            document.getElementById("agentName").value = "EFR ROSMAWATI";
        }

        if (document.getElementById("agentTemp").value == "1104714") {
            document.getElementById("agentName").value = "IFR AQEELAH";
        }

        if (document.getElementById("agentTemp").value == "1303254") {
            document.getElementById("agentName").value = "FD HAFIZ";
        }

        if (document.getElementById("agentTemp").value == "1140555") {
            document.getElementById("agentName").value = "EFR ASIKIN";
        }

        if (document.getElementById("agentTemp").value == "1003154") {
            document.getElementById("agentName").value = "IFR DYLAN";
        }

        var request = new XMLHttpRequest();

        if (assignTaskToAgent == 0) {
            request.open('POST', 'https://api.tookanapp.com/v2/assign_task');
            request.setRequestHeader('Content-Type', 'application/json');

            request.onreadystatechange = function () {
                if ((this.readyState === 4) && (assignTaskToAgent == 0)) {
                    console.log('Status:', this.status);
                    console.log('Headers:', this.getAllResponseHeaders());
                    console.log('Body:', this.responseText);

                    var responsetn = this.responseText;
                    var json_responsetn = JSON.parse(responsetn);

                    if (json_responsetn.status != 404) {
                        document.getElementById(autoMove).focus();

                        request.open('POST', 'https://api.tookanapp.com/v2/change_job_date');
                        request.setRequestHeader('Content-Type', 'application/json');

                        request.onreadystatechange = function () {
                            if ((this.readyState === 4) && (assignDateTimeToTask == 0)) {
                                console.log('Status:', this.status);
                                console.log('Headers:', this.getAllResponseHeaders());
                                console.log('Body:', this.responseText);

                                assignDateTimeToTask = 1;

                                document.getElementById("loading").style.display = 'none';
                                document.getElementById("inputAgentArea").style.display = 'block';
                                document.getElementById("inputTnArea").style.display = 'block';
                                document.getElementById("completeTimeNotice").style.display = 'block';

                                // Set Item
                                localStorage.setItem("lastAgent", document.getElementById("agent").value);

                                document.getElementById("itemOut").submit();
                            }
                        };

                        var body = {
                            'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                            "job_ids": [jobidentitynum],
                            'layout_type': 0,
                            'start_time': document.getElementById("dateTime").value,
                            'end_time': document.getElementById("dateTimeClose").value
                        };
                        request.send(JSON.stringify(body));

                        assignTaskToAgent = 1;
                    }

                    if (json_responsetn.status == 404) {
                        document.getElementById("trackingNumber").value = "";
                        document.getElementById("loading").style.display = 'none';
                        document.getElementById("wronginput").style.display = 'block';
                        document.getElementById("inputAgentArea").style.display = 'block';
                        document.getElementById("inputTnArea").style.display = 'block';
                        document.getElementById("completeTimeNotice").style.display = 'block';
                    }
                }
            };

            var body = {
                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                'job_id': jobidentitynum,
                'fleet_id': document.getElementById("agent").value,
                'job_status': '0'
            };
            request.send(JSON.stringify(body));
        }
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    // Retrieve
    document.getElementById("agentTemp").value = localStorage.getItem("lastAgent");

    document.getElementById("loading").style.display = 'none';
    document.getElementById("wronginput").style.display = 'none';
});
