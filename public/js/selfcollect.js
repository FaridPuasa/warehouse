function checkTrackingNum(field, autoMove) {
    endLoop = 0;
    if (field.value.length >= field.maxLength) {

        document.getElementById("selfCollect").style.display = 'none';
        document.getElementById("trackingnumberarea").style.display = 'none';
        document.getElementById("wronginput").style.display = 'none';
        document.getElementById("loading").style.display = 'block';

        var jobidentitynum = '';
        jobidentitynum = document.getElementById("trackingNum").value;
        document.getElementById('trackingNum').value = '';

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
                    document.getElementById(autoMove).focus();

                    document.getElementById("trackingNumber").value = json_responsejd.data[0].job_id;

                    document.getElementById("loading").style.display = 'none';
                    document.getElementById("selfCollect").style.display = 'block';
                    document.getElementById("trackingnumberarea").style.display = 'block';
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
            'job_ids': [jobidentitynum],
            'include_task_history': 0
        };
        request.send(JSON.stringify(body));
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("selfCollect").style.display = 'none';
    document.getElementById("submitButton").addEventListener("click", submitForm);

    function submitForm() {
        document.getElementById("selfCollect").submit();
    }
});
