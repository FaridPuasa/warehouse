function checkTrackingNum(field, autoMove) {
    if (field.value.length >= field.maxLength) {

        document.getElementById("reEntry").style.display = 'none';
        document.getElementById("wronginput").style.display = 'none';
        document.getElementById("trackingnumberarea").style.display = 'none';
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
                    document.getElementById("trackingNumber").value = json_responsejd.data[0].job_id;
                    document.getElementById("name").value = json_responsejd.data[0].customer_username;
                    document.getElementById("address").value = json_responsejd.data[0].job_address;
                    document.getElementById("contact").value = json_responsejd.data[0].customer_phone;
                    document.getElementById("value").value = json_responsejd.data[0].job_description;
                    document.getElementById("zaloraTag").value = json_responsejd.data[0].tags;

                    var counttaskhistory = json_responsejd.data[0].task_history["length"];

                    for (let i = 0; i < counttaskhistory; i++) {
                        if (json_responsejd.data[0].task_history[i].description.includes('Failed at')) {
                            document.getElementById("remark").value = json_responsejd.data[0].task_history[i].reason;
                        }
                    }

                    let address = document.getElementById("address").value.toUpperCase();
                    if (address.includes("MANGGIS") == true) { area = "B1"; }
                    else if (address.includes("DELIMA") == true) { area = "B1"; }
                    else if (address.includes("ANGGREK DESA") == true) { area = "B1"; }
                    else if (address.includes("PULAIE") == true) { area = "B1"; }
                    else if (address.includes("LAMBAK") == true) { area = "B1"; }
                    else if (address.includes("TERUNJING") == true) { area = "B1"; }
                    else if (address.includes("MADANG") == true) { area = "B1"; }
                    else if (address.includes("AIRPORT") == true) { area = "B1"; }
                    else if (address.includes("ORANG KAYA BESAR IMAS") == true) { area = "B1"; }
                    else if (address.includes("OKBI") == true) { area = "B1"; }
                    else if (address.includes("SERUSOP") == true) { area = "B1"; }
                    else if (address.includes("BURONG PINGAI") == true) { area = "B1"; }
                    else if (address.includes("SETIA NEGARA") == true) { area = "B1"; }
                    else if (address.includes("PASIR BERAKAS") == true) { area = "B1"; }
                    else if (address.includes("MENTERI BESAR") == true) { area = "B1"; }
                    else if (address.includes("KEBANGSAAN LAMA") == true) { area = "B1"; }
                    else if (address.includes("BATU MARANG") == true) { area = "B2"; }
                    else if (address.includes("DATO GANDI") == true) { area = "B2"; }
                    else if (address.includes("KAPOK") == true) { area = "B2"; }
                    else if (address.includes("KOTA BATU") == true) { area = "B2"; }
                    else if (address.includes("MENTIRI") == true) { area = "B2"; }
                    else if (address.includes("MERAGANG") == true) { area = "B2"; }
                    else if (address.includes("PELAMBAIAN") == true) { area = "B2"; }
                    else if (address.includes("PINTU MALIM") == true) { area = "B2"; }
                    else if (address.includes("SALAMBIGAR") == true) { area = "B2"; }
                    else if (address.includes("SALAR") == true) { area = "B2"; }
                    else if (address.includes("SERASA") == true) { area = "B2"; }
                    else if (address.includes("MUARA") == true) { area = "B2"; }
                    else if (address.includes("SERDANG") == true) { area = "B2"; }
                    else if (address.includes("SUNGAI BASAR") == true) { area = "B2"; }
                    else if (address.includes("SG BASAR") == true) { area = "B2"; }
                    else if (address.includes("SUNGAI BELUKUT") == true) { area = "B2"; }
                    else if (address.includes("SG BELUKUT") == true) { area = "B2"; }
                    else if (address.includes("SUNGAI HANCHING") == true) { area = "B2"; }
                    else if (address.includes("SG HANCHING") == true) { area = "B2"; }
                    else if (address.includes("SUNGAI TILONG") == true) { area = "B2"; }
                    else if (address.includes("SG TILONG") == true) { area = "B2"; }
                    else if (address.includes("SUBOK") == true) { area = "B2"; }
                    else if (address.includes("SUNGAI AKAR") == true) { area = "B2"; }
                    else if (address.includes("SG AKAR") == true) { area = "B2"; }
                    else if (address.includes("SUNGAI BULOH") == true) { area = "B2"; }
                    else if (address.includes("SG BULOH") == true) { area = "B2"; }
                    else if (address.includes("TANAH JAMBU") == true) { area = "B2"; }
                    else if (address.includes("SUNGAI OROK") == true) { area = "B2"; }
                    else if (address.includes("SG OROK") == true) { area = "B2"; }
                    else if (address.includes("KATOK") == true) { area = "G1"; }
                    else if (address.includes("MATA-MATA") == true) { area = "G1"; }
                    else if (address.includes("RIMBA") == true) { area = "G1"; }
                    else if (address.includes("TUNGKU") == true) { area = "G1"; }
                    else if (address.includes("UBD") == true) { area = "G1"; }
                    else if (address.includes("JIS") == true) { area = "G1"; }
                    else if (address.includes("BERANGAN") == true) { area = "G2"; }
                    else if (address.includes("BERIBI") == true) { area = "G2"; }
                    else if (address.includes("KIULAP") == true) { area = "G2"; }
                    else if (address.includes("RIPAS") == true) { area = "G2"; }
                    else if (address.includes("RAJA ISTERI PENGIRAN ANAK SALLEHA") == true) { area = "G2"; }
                    else if (address.includes("KIARONG") == true) { area = "G2"; }
                    else if (address.includes("PUSAR ULAK") == true) { area = "G2"; }
                    else if (address.includes("KUMBANG PASANG") == true) { area = "G2"; }
                    else if (address.includes("MENGLAIT") == true) { area = "G2"; }
                    else if (address.includes("MABOHAI") == true) { area = "G2"; }
                    else if (address.includes("ONG SUM PING") == true) { area = "G2"; }
                    else if (address.includes("GADONG") == true) { area = "G2"; }
                    else if (address.includes("TASEK LAMA") == true) { area = "G2"; }
                    else if (address.includes("BANDAR TOWN") == true) { area = "G2"; }
                    else if (address.includes("BATU SATU") == true) { area = "JT1"; }
                    else if (address.includes("BENGKURONG") == true) { area = "JT1"; }
                    else if (address.includes("BUNUT") == true) { area = "JT1"; }
                    else if (address.includes("JALAN BABU RAJA") == true) { area = "JT1"; }
                    else if (address.includes("JALAN ISTANA") == true) { area = "JT1"; }
                    else if (address.includes("JUNJONGAN") == true) { area = "JT1"; }
                    else if (address.includes("KASAT") == true) { area = "JT1"; }
                    else if (address.includes("LUMAPAS") == true) { area = "JT1"; }
                    else if (address.includes("JALAN HALUS") == true) { area = "JT1"; }
                    else if (address.includes("MADEWA") == true) { area = "JT1"; }
                    else if (address.includes("PUTAT") == true) { area = "JT1"; }
                    else if (address.includes("SINARUBAI") == true) { area = "JT1"; }
                    else if (address.includes("TASEK MERADUN") == true) { area = "JT1"; }
                    else if (address.includes("TELANAI") == true) { area = "JT1"; }
                    else if (address.includes("BAN") == true) { area = "JT2"; }
                    else if (address.includes("BATONG") == true) { area = "JT2"; }
                    else if (address.includes("BATU AMPAR") == true) { area = "JT2"; }
                    else if (address.includes("BEBATIK") == true) { area = "JT2"; }
                    else if (address.includes("BEBULOH") == true) { area = "JT2"; }
                    else if (address.includes("BEBATIK KILANAS") == true) { area = "JT2"; }
                    else if (address.includes("KILANAS") == true) { area = "JT2"; }
                    else if (address.includes("DADAP") == true) { area = "JT2"; }
                    else if (address.includes("KUALA LURAH") == true) { area = "JT2"; }
                    else if (address.includes("KULAPIS") == true) { area = "JT2"; }
                    else if (address.includes("LIMAU MANIS") == true) { area = "JT2"; }
                    else if (address.includes("MASIN") == true) { area = "JT2"; }
                    else if (address.includes("MULAUT") == true) { area = "JT2" }
                    else if (address.includes("PANCHOR MURAI") == true) { area = "JT2"; }
                    else if (address.includes("PANCHUR MURAI") == true) { area = "JT2"; }
                    else if (address.includes("PANGKALAN BATU") == true) { area = "JT2"; }
                    else if (address.includes("PASAI") == true) { area = "JT2"; }
                    else if (address.includes("WASAN") == true) { area = "JT2"; }
                    else if (address.includes("PARIT") == true) { area = "JT2"; }
                    else if (address.includes("EMPIRE") == true) { area = "JT3"; }
                    else if (address.includes("JANGSAK") == true) { area = "JT3"; }
                    else if (address.includes("JERUDONG") == true) { area = "JT3"; }
                    else if (address.includes("KATIMAHAR") == true) { area = "JT3"; }
                    else if (address.includes("LUGU") == true) { area = "JT3"; }
                    else if (address.includes("SENGKURONG") == true) { area = "JT3"; }
                    else if (address.includes("TANJONG NANGKA") == true) { area = "JT3"; }
                    else if (address.includes("TANJONG BUNUT") == true) { area = "JT3"; }
                    else if (address.includes("TANJUNG BUNUT") == true) { area = "JT3"; }
                    else if (address.includes("SUNGAI TAMPOI") == true) { area = "JT3"; }
                    else if (address.includes("SG TAMPOI") == true) { area = "JT3"; }
                    else { area = "N/A"; }
                    document.getElementById("area").value = area;

                    document.getElementById("loading").style.display = 'none';
                    document.getElementById("reEntry").style.display = 'block';
                    document.getElementById("trackingnumberarea").style.display = 'block';

                    document.getElementById("reason").focus();
                }

                if (json_responsejd.status == 404) {
                    document.getElementById("loading").style.display = 'none';
                    document.getElementById("reEntry").style.display = 'none';
                    document.getElementById("wronginput").style.display = 'block';
                    document.getElementById("trackingnumberarea").style.display = 'block';
                }
            }
        };

        var body = {
            'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
            'job_ids': [jobidentitynum],
            'include_task_history': 1
        };
        request.send(JSON.stringify(body));
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("reEntry").style.display = 'none';
    document.getElementById("trackingNum").focus();

    document.getElementById("submitButton").addEventListener("click", submitForm);

    function submitForm() {
        function declineTask() {
            var request = new XMLHttpRequest();
            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
            request.setRequestHeader('Content-Type', 'application/json');
            request.onreadystatechange = function () {
                if (this.readyState === 4) {
                    console.log('Status:', this.status);
                    console.log('Headers:', this.getAllResponseHeaders());
                    console.log('Body:', this.responseText);
                }
            };
            var body = {
                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                'job_id': document.getElementById("trackingNumber").value,
                'job_status': '8'
            };
            request.send(JSON.stringify(body));
        }

        function cancelDelivery() {
            var request = new XMLHttpRequest();
            request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
            request.setRequestHeader('Content-Type', 'application/json');
            request.onreadystatechange = function () {
                if (this.readyState === 4) {
                    console.log('Status:', this.status);
                    console.log('Headers:', this.getAllResponseHeaders());
                    console.log('Body:', this.responseText);
                }
            };
            var body = {
                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                'job_id': document.getElementById("trackingNumber").value,
                'job_status': '9'
            };
            request.send(JSON.stringify(body));
        }

        function assignWarehouse() {
            var request = new XMLHttpRequest();
            request.open('POST', 'https://api.tookanapp.com/v2/assign_task');
            request.setRequestHeader('Content-Type', 'application/json');
            request.onreadystatechange = function () {
                if (this.readyState === 4) {
                    console.log('Status:', this.status);
                    console.log('Headers:', this.getAllResponseHeaders());
                    console.log('Body:', this.responseText);
                }
            };
            var body = {
                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                'job_id': document.getElementById("trackingNumber").value,
                'fleet_id': '1125101',
                'team_id': '921691',
                'job_status': '7'
            };
            request.send(JSON.stringify(body));
        }

        if (document.getElementById("reason").value == "Cancelled Delivery") {
            cancelDelivery();
        }

        if ((document.getElementById("reason").value == "Failed Delivery") || (document.getElementById("reason").value == "Unattempted Delivery")) {
            assignWarehouse();
        }

        if ((document.getElementById("reason").value == "Change Address") || (document.getElementById("reason").value == "Reschedule Delivery") ||
            (document.getElementById("reason").value == "Change to Self Collect")) {
            declineTask();
            assignWarehouse();
        }
        document.getElementById("reEntry").submit();
    }
});
