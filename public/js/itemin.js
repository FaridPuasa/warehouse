function checkTrackingNum(field, autoMove) {
    if (field.value.length >= field.maxLength) {

        document.getElementById("itemIn").style.display = 'none';
        document.getElementById("trackingnumberarea").style.display = 'none';
        document.getElementById("loading").style.display = 'block';
        document.getElementById("wronginput").style.display = 'none';

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
                    document.getElementById("name").value = json_responsejd.data[0].customer_username;
                    document.getElementById("address").value = json_responsejd.data[0].job_address;
                    document.getElementById("contact").value = json_responsejd.data[0].customer_phone;
                    document.getElementById("value").value = json_responsejd.data[0].job_description;
                    document.getElementById("zaloraTag").value = json_responsejd.data[0].tags;

                    let address = document.getElementById("address").value.toUpperCase();

                    if (address.includes("MANGGIS") == true) { area = "B1" }
                    else if (address.includes("LANDASAN LAMA") == true) { area = "B1" }
                    else if (address.includes("LANDASAN") == true) { area = "B1" }
                    else if (address.includes("DELIMA") == true) { area = "B1" }
                    else if (address.includes("ANGGREK DESA") == true) { area = "B1" }
                    else if (address.includes("PULAIE") == true) { area = "B1" }
                    else if (address.includes("LAMBAK") == true) { area = "B1" }
                    else if (address.includes("TERUNJING") == true) { area = "B1" }
                    else if (address.includes("MADANG") == true) { area = "B1" }
                    else if (address.includes("AIRPORT") == true) { area = "B1" }
                    else if (address.includes("ORANG KAYA BESAR IMAS") == true) { area = "B1" }
                    else if (address.includes("OKBI") == true) { area = "B1" }
                    else if (address.includes("SERUSOP") == true) { area = "B1" }
                    else if (address.includes("BURONG PINGAI") == true) { area = "B1" }
                    else if (address.includes("SETIA NEGARA") == true) { area = "B1" }
                    else if (address.includes("PASIR BERAKAS") == true) { area = "B1" }
                    else if (address.includes("MENTERI BESAR") == true) { area = "B1" }
                    else if (address.includes("KEBANGSAAN LAMA") == true) { area = "B1" }
                    else if (address.includes("BATU MARANG") == true) { area = "B2" }
                    else if (address.includes("DATO GANDI") == true) { area = "B2" }
                    else if (address.includes("KAPOK") == true) { area = "B2" }
                    else if (address.includes("KOTA BATU") == true) { area = "B2" }
                    else if (address.includes("MENTIRI") == true) { area = "B2" }
                    else if (address.includes("MERAGANG") == true) { area = "B2" }
                    else if (address.includes("PELAMBAIAN") == true) { area = "B2" }
                    else if (address.includes("PINTU MALIM") == true) { area = "B2" }
                    else if (address.includes("SALAMBIGAR") == true) { area = "B2" }
                    else if (address.includes("SALAR") == true) { area = "B2" }
                    else if (address.includes("SERASA") == true) { area = "B2" }
                    else if (address.includes("SERDANG") == true) { area = "B2" }
                    else if (address.includes("SUNGAI BASAR") == true) { area = "B2" }
                    else if (address.includes("SG BASAR") == true) { area = "B2" }
                    else if (address.includes("SUNGAI BELUKUT") == true) { area = "B2" }
                    else if (address.includes("SG BELUKUT") == true) { area = "B2" }
                    else if (address.includes("SUNGAI HANCHING") == true) { area = "B2" }
                    else if (address.includes("SG HANCHING") == true) { area = "B2" }
                    else if (address.includes("SUNGAI TILONG") == true) { area = "B2" }
                    else if (address.includes("SG TILONG") == true) { area = "B2" }
                    else if (address.includes("SUBOK") == true) { area = "B2" }
                    else if (address.includes("SUNGAI AKAR") == true) { area = "B2" }
                    else if (address.includes("SG AKAR") == true) { area = "B2" }
                    else if (address.includes("SUNGAI BULOH") == true) { area = "B2" }
                    else if (address.includes("SG BULOH") == true) { area = "B2" }
                    else if (address.includes("TANAH JAMBU") == true) { area = "B2" }
                    else if (address.includes("SUNGAI OROK") == true) { area = "B2" }
                    else if (address.includes("SG OROK") == true) { area = "B2" }
                    else if (address.includes("KATOK") == true) { area = "G1" }
                    else if (address.includes("MATA-MATA") == true) { area = "G1" }
                    else if (address.includes("RIMBA") == true) { area = "G1" }
                    else if (address.includes("TUNGKU") == true) { area = "G1" }
                    else if (address.includes("UBD") == true) { area = "G1" }
                    else if (address.includes("JIS") == true) { area = "G1" }
                    else if (address.includes("BERANGAN") == true) { area = "G2" }
                    else if (address.includes("BERIBI") == true) { area = "G2" }
                    else if (address.includes("KIULAP") == true) { area = "G2" }
                    else if (address.includes("RIPAS") == true) { area = "G2" }
                    else if (address.includes("RAJA ISTERI PENGIRAN ANAK SALLEHA") == true) { area = "G2" }
                    else if (address.includes("KIARONG") == true) { area = "G2" }
                    else if (address.includes("PUSAR ULAK") == true) { area = "G2" }
                    else if (address.includes("KUMBANG PASANG") == true) { area = "G2" }
                    else if (address.includes("MENGLAIT") == true) { area = "G2" }
                    else if (address.includes("MABOHAI") == true) { area = "G2" }
                    else if (address.includes("ONG SUM PING") == true) { area = "G2" }
                    else if (address.includes("GADONG") == true) { area = "G2" }
                    else if (address.includes("TASEK LAMA") == true) { area = "G2" }
                    else if (address.includes("BANDAR TOWN") == true) { area = "G2" }
                    else if (address.includes("BATU SATU") == true) { area = "JT1" }
                    else if (address.includes("BENGKURONG") == true) { area = "JT1" }
                    else if (address.includes("BUNUT") == true) { area = "JT1" }
                    else if (address.includes("JALAN BABU RAJA") == true) { area = "JT1" }
                    else if (address.includes("JALAN ISTANA") == true) { area = "JT1" }
                    else if (address.includes("JUNJONGAN") == true) { area = "JT1" }
                    else if (address.includes("KASAT") == true) { area = "JT1" }
                    else if (address.includes("LUMAPAS") == true) { area = "JT1" }
                    else if (address.includes("JALAN HALUS") == true) { area = "JT1" }
                    else if (address.includes("MADEWA") == true) { area = "JT1" }
                    else if (address.includes("PUTAT") == true) { area = "JT1" }
                    else if (address.includes("SINARUBAI") == true) { area = "JT1" }
                    else if (address.includes("TASEK MERADUN") == true) { area = "JT1" }
                    else if (address.includes("TELANAI") == true) { area = "JT1" }
                    else if (address.includes("BAN") == true) { area = "JT2" }
                    else if (address.includes("BATONG") == true) { area = "JT2" }
                    else if (address.includes("BATU AMPAR") == true) { area = "JT2" }
                    else if (address.includes("BEBATIK") == true) { area = "JT2" }
                    else if (address.includes("BEBULOH") == true) { area = "JT2" }
                    else if (address.includes("BEBATIK KILANAS") == true) { area = "JT2" }
                    else if (address.includes("KILANAS") == true) { area = "JT2" }
                    else if (address.includes("DADAP") == true) { area = "JT2" }
                    else if (address.includes("KUALA LURAH") == true) { area = "JT2" }
                    else if (address.includes("KULAPIS") == true) { area = "JT2" }
                    else if (address.includes("LIMAU MANIS") == true) { area = "JT2" }
                    else if (address.includes("MASIN") == true) { area = "JT2" }
                    else if (address.includes("MULAUT") == true) { area = "JT2" }
                    else if (address.includes("PANCHOR MURAI") == true) { area = "JT2" }
                    else if (address.includes("PANCHUR MURAI") == true) { area = "JT2" }
                    else if (address.includes("PANGKALAN BATU") == true) { area = "JT2" }
                    else if (address.includes("PASAI") == true) { area = "JT2" }
                    else if (address.includes("WASAN") == true) { area = "JT2" }
                    else if (address.includes("PARIT") == true) { area = "JT2" }
                    else if (address.includes("EMPIRE") == true) { area = "JT3" }
                    else if (address.includes("JANGSAK") == true) { area = "JT3" }
                    else if (address.includes("JERUDONG") == true) { area = "JT3" }
                    else if (address.includes("KATIMAHAR") == true) { area = "JT3" }
                    else if (address.includes("LUGU") == true) { area = "JT3" }
                    else if (address.includes("SENGKURONG") == true) { area = "JT3" }
                    else if (address.includes("TANJONG NANGKA") == true) { area = "JT3" }
                    else if (address.includes("TANJONG BUNUT") == true) { area = "JT3" }
                    else if (address.includes("TANJUNG BUNUT") == true) { area = "JT3" }
                    else if (address.includes("SUNGAI TAMPOI") == true) { area = "JT3" }
                    else if (address.includes("SG TAMPOI") == true) { area = "JT3" }
                    else if (address.includes("MUARA") == true) { area = "B2" }
                    else if (address.includes("TUTONG") == true) { area = "TUTONG" } //CHANGE ADDRESS TO ....
                    else if (address.includes("SENGKARAI") == true) { area = "TUTONG" }
                    else if (address.includes("PANCHOR") == true) { area = "TUTONG" }
                    else if (address.includes("PENABAI") == true) { area = "TUTONG" }
                    else if (address.includes("KUALA TUTONG") == true) { area = "TUTONG" }
                    else if (address.includes("PENANJONG") == true) { area = "TUTONG" }
                    else if (address.includes("KERIAM") == true) { area = "TUTONG" }
                    else if (address.includes("BUKIT PANGGAL") == true) { area = "TUTONG" }
                    else if (address.includes("PANGGAL") == true) { area = "TUTONG" }
                    else if (address.includes("LUAGAN") == true) { area = "TUTONG" }
                    else if (address.includes("DUDOK") == true) { area = "TUTONG" }
                    else if (address.includes("LUAGAN DUDOK") == true) { area = "TUTONG" }
                    else if (address.includes("SINAUT") == true) { area = "TUTONG" }
                    else if (address.includes("SUNGAI KELUGOS") == true) { area = "TUTONG" }
                    else if (address.includes("KELUGOS") == true) { area = "TUTONG" }
                    else if (address.includes("SG KELUGOS") == true) { area = "TUTONG" }
                    else if (address.includes("KUPANG") == true) { area = "TUTONG" }
                    else if (address.includes("KIUDANG") == true) { area = "TUTONG" }
                    else if (address.includes("PAD") == true) { area = "TUTONG" }
                    else if (address.includes("NUNOK") == true) { area = "TUTONG" }
                    else if (address.includes("PAD NUNOK") == true) { area = "TUTONG" }
                    else if (address.includes("BEKIAU") == true) { area = "TUTONG" }
                    else if (address.includes("MAU") == true) { area = "TUTONG" }
                    else if (address.includes("PENGKALAN MAU") == true) { area = "TUTONG" }
                    else if (address.includes("BATANG MITUS") == true) { area = "TUTONG" }
                    else if (address.includes("MITUS") == true) { area = "TUTONG" }
                    else if (address.includes("KEBIA") == true) { area = "TUTONG" }
                    else if (address.includes("BIRAU") == true) { area = "TUTONG" }
                    else if (address.includes("LAMUNIN") == true) { area = "TUTONG" }
                    else if (address.includes("LAYONG") == true) { area = "TUTONG" }
                    else if (address.includes("MENENGAH") == true) { area = "TUTONG" }
                    else if (address.includes("PANCHONG") == true) { area = "TUTONG" }
                    else if (address.includes("PENAPAR") == true) { area = "TUTONG" }
                    else if (address.includes("TANJONG MAYA") == true) { area = "TUTONG" }
                    else if (address.includes("MAYA") == true) { area = "TUTONG" }
                    else if (address.includes("LUBOK") == true) { area = "TUTONG" }
                    else if (address.includes("PULAU") == true) { area = "TUTONG" }
                    else if (address.includes("LUBOK PULAU") == true) { area = "TUTONG" }
                    else if (address.includes("BUKIT UDAL") == true) { area = "TUTONG" }
                    else if (address.includes("UDAL") == true) { area = "TUTONG" }
                    else if (address.includes("RAMBAI") == true) { area = "TUTONG" }
                    else if (address.includes("BENUTAN") == true) { area = "TUTONG" }
                    else if (address.includes("MERIMBUN") == true) { area = "TUTONG" }
                    else if (address.includes("UKONG") == true) { area = "TUTONG" }
                    else if (address.includes("LONG") == true) { area = "TUTONG" }
                    else if (address.includes("MAYAN") == true) { area = "TUTONG" }
                    else if (address.includes("LONG MAYAN") == true) { area = "TUTONG" }
                    else if (address.includes("TELISAI") == true) { area = "TUTONG" }
                    else if (address.includes("DANAU") == true) { area = "TUTONG" }
                    else if (address.includes("BUKIT BERUANG") == true) { area = "TUTONG" }
                    else if (address.includes("BERUANG") == true) { area = "TUTONG" }
                    else if (address.includes("BELAIT") == true) { area = "KB / SERIA" } //CHANGE ADDRESS TO ....
                    else if (address.includes("AGIS") == true) { area = "KB / SERIA" }
                    else if (address.includes("ANDALAU") == true) { area = "KB / SERIA" }
                    else if (address.includes("ANDUKI") == true) { area = "KB / SERIA" }
                    else if (address.includes("APAK") == true) { area = "KB / SERIA" }
                    else if (address.includes("BADAS") == true) { area = "KB / SERIA" }
                    else if (address.includes("BANG") == true) { area = "KB / SERIA" }
                    else if (address.includes("GARANG") == true) { area = "KB / SERIA" }
                    else if (address.includes("PUKUL") == true) { area = "KB / SERIA" }
                    else if (address.includes("TAJUK") == true) { area = "KB / SERIA" }
                    else if (address.includes("BENGERANG") == true) { area = "KB / SERIA" }
                    else if (address.includes("BIADONG") == true) { area = "KB / SERIA" }
                    else if (address.includes("ULU") == true) { area = "KB / SERIA" }
                    else if (address.includes("TENGAH") == true) { area = "KB / SERIA" }
                    else if (address.includes("BISUT") == true) { area = "KB / SERIA" }
                    else if (address.includes("BUAU") == true) { area = "KB / SERIA" }
                    else if (address.includes("KANDOL") == true) { area = "KB / SERIA" }
                    else if (address.includes("PUAN") == true) { area = "KB / SERIA" }
                    else if (address.includes("TUDING") == true) { area = "KB / SERIA" }
                    else if (address.includes("SAWAT") == true) { area = "KB / SERIA" }
                    else if (address.includes("SERAWONG") == true) { area = "KB / SERIA" }
                    else if (address.includes("CHINA") == true) { area = "KB / SERIA" }
                    else if (address.includes("DUGUN") == true) { area = "KB / SERIA" }
                    else if (address.includes("GATAS") == true) { area = "KB / SERIA" }
                    else if (address.includes("JABANG") == true) { area = "KB / SERIA" }
                    else if (address.includes("KAGU") == true) { area = "KB / SERIA" }
                    else if (address.includes("KAJITAN") == true) { area = "KB / SERIA" }
                    else if (address.includes("KELUYOH") == true) { area = "KB / SERIA" }
                    else if (address.includes("KENAPOL") == true) { area = "KB / SERIA" }
                    else if (address.includes("KUALA BALAI") == true) { area = "KB / SERIA" }
                    else if (address.includes("BALAI") == true) { area = "KB / SERIA" }
                    else if (address.includes("KUALA BELAIT") == true) { area = "KB / SERIA" }
                    else if (address.includes("KUKUB") == true) { area = "KB / SERIA" }
                    else if (address.includes("LABI") == true) { area = "KB / SERIA" }
                    else if (address.includes("LAKANG") == true) { area = "KB / SERIA" }
                    else if (address.includes("LAONG ARUT") == true) { area = "KB / SERIA" }
                    else if (address.includes("ARUT") == true) { area = "KB / SERIA" }
                    else if (address.includes("LAONG") == true) { area = "KB / SERIA" }
                    else if (address.includes("LIANG") == true) { area = "KB / SERIA" }
                    else if (address.includes("SUNGAI LIANG") == true) { area = "KB / SERIA" }
                    else if (address.includes("SG LIANG") == true) { area = "KB / SERIA" }
                    else if (address.includes("LUMUT") == true) { area = "KB / SERIA" }
                    else if (address.includes("LORONG") == true) { area = "KB / SERIA" }
                    else if (address.includes("LORONG TENGAH") == true) { area = "KB / SERIA" }
                    else if (address.includes("LORONG TIGA SELATAN") == true) { area = "KB / SERIA" }
                    else if (address.includes("LILAS") == true) { area = "KB / SERIA" }
                    else if (address.includes("LUBUK LANYAP") == true) { area = "KB / SERIA" }
                    else if (address.includes("LANYAP") == true) { area = "KB / SERIA" }
                    else if (address.includes("LUBUK TAPANG") == true) { area = "KB / SERIA" }
                    else if (address.includes("TAPANG") == true) { area = "KB / SERIA" }
                    else if (address.includes("MALAAS") == true) { area = "KB / SERIA" }
                    else if (address.includes("MALAYAN") == true) { area = "KB / SERIA" }
                    else if (address.includes("MELAYU") == true) { area = "KB / SERIA" }
                    else if (address.includes("ASLI") == true) { area = "KB / SERIA" }
                    else if (address.includes("MELAYU ASLI") == true) { area = "KB / SERIA" }
                    else if (address.includes("MELILAS") == true) { area = "KB / SERIA" }
                    else if (address.includes("MENDARAM") == true) { area = "KB / SERIA" }
                    else if (address.includes("MENDARAM BESAR") == true) { area = "KB / SERIA" }
                    else if (address.includes("MENDARAM KECIL") == true) { area = "KB / SERIA" }
                    else if (address.includes("MERANGKING") == true) { area = "KB / SERIA" }
                    else if (address.includes("MERANGKING ULU") == true) { area = "KB / SERIA" }
                    else if (address.includes("MERANGKING HILIR") == true) { area = "KB / SERIA" }
                    else if (address.includes("MUMONG") == true) { area = "KB / SERIA" }
                    else if (address.includes("PANDAN") == true) { area = "KB / SERIA" }
                    else if (address.includes("PADANG") == true) { area = "KB / SERIA" }
                    else if (address.includes("PANAGA") == true) { area = "KB / SERIA" }
                    else if (address.includes("PENGKALAN SIONG") == true) { area = "KB / SERIA" }
                    else if (address.includes("SIONG") == true) { area = "KB / SERIA" }
                    else if (address.includes("PENGALAYAN") == true) { area = "KB / SERIA" }
                    else if (address.includes("PENYRAP") == true) { area = "KB / SERIA" }
                    else if (address.includes("PERANGKONG") == true) { area = "KB / SERIA" }
                    else if (address.includes("PERUMPONG") == true) { area = "KB / SERIA" }
                    else if (address.includes("PESILIN") == true) { area = "KB / SERIA" }
                    else if (address.includes("PULAU APIL") == true) { area = "KB / SERIA" }
                    else if (address.includes("APIL") == true) { area = "KB / SERIA" }
                    else if (address.includes("RAMPAYOH") == true) { area = "KB / SERIA" }
                    else if (address.includes("RATAN") == true) { area = "KB / SERIA" }
                    else if (address.includes("SAUD") == true) { area = "KB / SERIA" }
                    else if (address.includes("SIMPANG") == true) { area = "KB / SERIA" }
                    else if (address.includes("SIMPANG TIGA") == true) { area = "KB / SERIA" }
                    else if (address.includes("SINGAP") == true) { area = "KB / SERIA" }
                    else if (address.includes("SUKANG") == true) { area = "KB / SERIA" }
                    else if (address.includes("BAKONG") == true) { area = "KB / SERIA" }
                    else if (address.includes("DAMIT") == true) { area = "KB / SERIA" }
                    else if (address.includes("BERA") == true) { area = "KB / SERIA" }
                    else if (address.includes("DUHON") == true) { area = "KB / SERIA" }
                    else if (address.includes("GANA") == true) { area = "KB / SERIA" }
                    else if (address.includes("HILIR") == true) { area = "KB / SERIA" }
                    else if (address.includes("KANG") == true) { area = "KB / SERIA" }
                    else if (address.includes("KURU") == true) { area = "KB / SERIA" }
                    else if (address.includes("LALIT") == true) { area = "KB / SERIA" }
                    else if (address.includes("LIANG") == true) { area = "KB / SERIA" }
                    else if (address.includes("LUTONG") == true) { area = "KB / SERIA" }
                    else if (address.includes("MAU") == true) { area = "KB / SERIA" }
                    else if (address.includes("MELILIT") == true) { area = "KB / SERIA" }
                    else if (address.includes("MENDARAM") == true) { area = "KB / SERIA" }
                    else if (address.includes("PETAI") == true) { area = "KB / SERIA" }
                    else if (address.includes("TALI") == true) { area = "KB / SERIA" }
                    else if (address.includes("TARING") == true) { area = "KB / SERIA" }
                    else if (address.includes("TERABAN") == true) { area = "KB / SERIA" }
                    else if (address.includes("UBAR") == true) { area = "KB / SERIA" }
                    else if (address.includes("TANAJOR") == true) { area = "KB / SERIA" }
                    else if (address.includes("TANJONG RANGGAS") == true) { area = "KB / SERIA" }
                    else if (address.includes("TANJONG SUDAI") == true) { area = "KB / SERIA" }
                    else if (address.includes("TAPANG LUPAK") == true) { area = "KB / SERIA" }
                    else if (address.includes("TARAP") == true) { area = "KB / SERIA" }
                    else if (address.includes("TEMPINAK") == true) { area = "KB / SERIA" }
                    else if (address.includes("TERAJA") == true) { area = "KB / SERIA" }
                    else if (address.includes("TERAWAN") == true) { area = "KB / SERIA" }
                    else if (address.includes("TERUNAN") == true) { area = "KB / SERIA" }
                    else if (address.includes("TUGONG") == true) { area = "KB / SERIA" }
                    else if (address.includes("TUNGULLIAN") == true) { area = "KB / SERIA" }
                    else if (address.includes("UBOK") == true) { area = "KB / SERIA" }
                    else if (address.includes("TEMBURONG") == true) { area = "TEMBURONG" } //CHANGE ADDRESS TO ....
                    else { area = "N/A" }

                    document.getElementById("area").value = area;

                    if (area == "B1") {
                        if (localStorage.getItem("lastCountB1") == null) {
                            localStorage.setItem("lastCountB1", 1);
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountB1"));
                        }
                        if (localStorage.getItem("lastCountB1") != null) {
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountB1")) + 1;
                        }
                        localStorage.setItem("lastCountB1", document.getElementById("parcelNumber").value);
                    }

                    if (area == "B2") {
                        if (localStorage.getItem("lastCountB2") == null) {
                            localStorage.setItem("lastCountB2", 1);
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountB2"));
                        }
                        if (localStorage.getItem("lastCountB2") != null) {
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountB2")) + 1;
                        }
                        localStorage.setItem("lastCountB2", document.getElementById("parcelNumber").value);
                    }

                    if (area == "G1") {
                        if (localStorage.getItem("lastCountG1") == null) {
                            localStorage.setItem("lastCountG1", 1);
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountG1"));
                        }
                        if (localStorage.getItem("lastCountG1") != null) {
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountG1")) + 1;
                        }
                        localStorage.setItem("lastCountG1", document.getElementById("parcelNumber").value);
                    }

                    if (area == "G2") {
                        if (localStorage.getItem("lastCountG2") == null) {
                            localStorage.setItem("lastCountG2", 1);
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountG2"));
                        }
                        if (localStorage.getItem("lastCountG2") != null) {
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountG2")) + 1;
                        }
                        localStorage.setItem("lastCountG2", document.getElementById("parcelNumber").value);
                    }

                    if (area == "JT1") {
                        if (localStorage.getItem("lastCountJT1") == null) {
                            localStorage.setItem("lastCountJT1", 1);
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountJT1"));
                        }
                        if (localStorage.getItem("lastCountJT1") != null) {
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountJT1")) + 1;
                        }
                        localStorage.setItem("lastCountJT1", document.getElementById("parcelNumber").value);
                    }

                    if (area == "JT2") {
                        if (localStorage.getItem("lastCountJT2") == null) {
                            localStorage.setItem("lastCountJT2", 1);
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountJT2"));
                        }
                        if (localStorage.getItem("lastCountJT2") != null) {
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountJT2")) + 1;
                        }
                        localStorage.setItem("lastCountJT2", document.getElementById("parcelNumber").value);
                    }

                    if (area == "JT3") {
                        if (localStorage.getItem("lastCountJT3") == null) {
                            localStorage.setItem("lastCountJT3", 1);
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountJT3"));
                        }
                        if (localStorage.getItem("lastCountJT3") != null) {
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountJT3")) + 1;
                        }
                        localStorage.setItem("lastCountJT3", document.getElementById("parcelNumber").value);
                    }

                    if (area == "TUTONG") {
                        if (localStorage.getItem("lastCountTUTONG") == null) {
                            localStorage.setItem("lastCountTUTONG", 1);
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountTUTONG"));
                        }
                        if (localStorage.getItem("lastCountTUTONG") != null) {
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountTUTONG")) + 1;
                        }
                        localStorage.setItem("lastCountTUTONG", document.getElementById("parcelNumber").value);
                    }

                    if (area == "KB / SERIA") {
                        if (localStorage.getItem("lastCountKBSERIA") == null) {
                            localStorage.setItem("lastCountKBSERIA", 1);
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountKBSERIA"));
                        }
                        if (localStorage.getItem("lastCountKBSERIA") != null) {
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountKBSERIA")) + 1;
                        }
                        localStorage.setItem("lastCountKBSERIA", document.getElementById("parcelNumber").value);
                    }

                    if (area == "TEMBURONG") {
                        if (localStorage.getItem("lastCountTEMBURONG") == null) {
                            localStorage.setItem("lastCountTEMBURONG", 1);
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountTEMBURONG"));
                        }
                        if (localStorage.getItem("lastCountTEMBURONG") != null) {
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountTEMBURONG")) + 1;
                        }
                        localStorage.setItem("lastCountTEMBURONG", document.getElementById("parcelNumber").value);
                    }

                    if (area == "N/A") {
                        if (localStorage.getItem("lastCountNA") == null) {
                            localStorage.setItem("lastCountNA", 1);
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountNA"));
                        }
                        if (localStorage.getItem("lastCountNA") != null) {
                            document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountNA")) + 1;
                        }
                        localStorage.setItem("lastCountNA", document.getElementById("parcelNumber").value);
                    }

                    //getSubmittedDate
                    var today = new Date();
                    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

                    var ampmhour = '';
                    var ampmmin = '';
                    var ampmNum = '';

                    if (today.getHours() < 12) {
                        ampmNum = 0;
                        ampmhour = (today.getHours());
                    }

                    if (today.getHours() >= 12) {
                        ampmNum = 1;
                        ampmhour = (today.getHours());
                    }

                    if (today.getMinutes() < 10) {
                        ampmmin = "0" + (today.getMinutes());
                    }

                    if (today.getMinutes() >= 10) {
                        ampmmin = (today.getMinutes());
                    }

                    var time = ampmhour + ":" + ampmmin;

                    let dateSubmitted = date + ' ' + time;

                    document.getElementById("dateEntry").value = dateSubmitted;

                    document.getElementById("submitButton").focus();

                    document.getElementById("loading").style.display = 'none';
                    document.getElementById("itemIn").style.display = 'block';
                    document.getElementById("trackingnumberarea").style.display = 'block';
                }

                if (json_responsejd.status == 404) {
                    document.getElementById("loading").style.display = 'none';
                    document.getElementById("itemIn").style.display = 'none';
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
    document.getElementById("itemIn").style.display = 'none';
    document.getElementById("submitButton").addEventListener("click", submitForm);



    document.getElementById("trackingNum").focus();

    function submitForm() {
        var arrivedTN = document.getElementById("trackingNumber").value;
        var parcelNum = document.getElementById("parcelNumber").value;
        var request = new XMLHttpRequest();
        request.open('POST', 'https://api.tookanapp.com/v2/update_task_status');
        request.setRequestHeader('Content-Type', 'application/json');

        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                console.log('Status:', this.status);
                console.log('Headers:', this.getAllResponseHeaders());
                console.log('Body:', this.responseText);

                var request = new XMLHttpRequest();

                request.open('POST', 'https://api.tookanapp.com/v2/edit_task');

                request.setRequestHeader('Content-Type', 'application/json');

                request.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        console.log('Status:', this.status);
                        console.log('Headers:', this.getAllResponseHeaders());
                        console.log('Body:', this.responseText);

                        document.getElementById("itemIn").submit();
                    }
                };

                var body = {
                    'customer_username': 'syahmi',
                    'custom_field_template': 'Local_Delivery',
                    'meta_data': [
                        {
                            'label': 'Parcel_Number',
                            'data': parcelNum
                        }
                    ],
                    'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                    'job_id': arrivedTN
                };

                request.send(JSON.stringify(body));
            }
        };

        var body = {
            'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
            'job_id': arrivedTN,
            'job_status': '4'
        };

        request.send(JSON.stringify(body));
    }
});
