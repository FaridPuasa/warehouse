function checkTrackingNum(field, autoMove) {
    if (field.value.length >= field.maxLength) {

        document.getElementById("itemIn").style.display = 'none';
        document.getElementById("trackingnumberarea").style.display = 'none';
        document.getElementById("dateEntryArea").style.display = 'none';
        document.getElementById("areaCodeArea").style.display = 'none';
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

                    document.getElementById("trackingNumber").readOnly = false;
                    document.getElementById("name").readOnly = false;
                    document.getElementById("address").readOnly = false;

                    document.getElementById("trackingNumber").value = json_responsejd.data[0].job_id;
                    document.getElementById("name").value = json_responsejd.data[0].customer_username;
                    document.getElementById("address").value = json_responsejd.data[0].job_address;
                    document.getElementById("contact").value = json_responsejd.data[0].customer_phone;
                    document.getElementById("value").value = json_responsejd.data[0].job_description;
                    document.getElementById("zaloraTag").value = json_responsejd.data[0].tags;

                    document.getElementById("dateArrive").value = document.getElementById("dateArriveTemp").value;
                    document.getElementById("area").value = document.getElementById("areaCodeTemp").value;

                    var area = document.getElementById("area").value;

                    /* let address = document.getElementById("address").value.toUpperCase();

                    var kampong = "";
                    var area = "";

                    if (address.includes("MANGGIS") == true) { area = "B1", kampong = "MANGGIS" }
                    else if (address.includes("DELIMA") == true) { area = "B1", kampong = "DELIMA" }
                    else if (address.includes("ANGGREK DESA") == true) { area = "B1", kampong = "ANGGREK DESA" }
                    else if (address.includes("ANGGREK") == true) { area = "B1", kampong = "ANGGREK DESA" }
                    else if (address.includes("PULAIE") == true) { area = "B1", kampong = "PULAIE" }
                    else if (address.includes("LAMBAK") == true) { area = "B1", kampong = "LAMBAK" }
                    else if (address.includes("TERUNJING") == true) { area = "B1", kampong = "TERUNJING" }
                    else if (address.includes("MADANG") == true) { area = "B1", kampong = "MADANG" }
                    else if (address.includes("AIRPORT") == true) { area = "B1", kampong = "AIRPORT" }
                    else if (address.includes("ORANG KAYA BESAR IMAS") == true) { area = "B1", kampong = "OKBI" }
                    else if (address.includes("OKBI") == true) { area = "B1", kampong = "OKBI" }
                    else if (address.includes("SERUSOP") == true) { area = "B1", kampong = "SERUSOP" }
                    else if (address.includes("BURONG PINGAI") == true) { area = "B1", kampong = "BURONG PINGAI" }
                    else if (address.includes("SETIA NEGARA") == true) { area = "B1", kampong = "SETIA NEGARA" }
                    else if (address.includes("PASIR BERAKAS") == true) { area = "B1", kampong = "PASIR BERAKAS" }
                    else if (address.includes("MENTERI BESAR") == true) { area = "B1", kampong = "MENTERI BESAR" }
                    else if (address.includes("KEBANGSAAN LAMA") == true) { area = "B1", kampong = "KEBANGSAAN LAMA" }
                    else if (address.includes("BATU MARANG") == true) { area = "B2", kampong = "BATU MARANG" }
                    else if (address.includes("DATO GANDI") == true) { area = "B2", kampong = "DATO GANDI" }
                    else if (address.includes("KAPOK") == true) { area = "B2", kampong = "KAPOK" }
                    else if (address.includes("KOTA BATU") == true) { area = "B2", kampong = "KOTA BATU" }
                    else if (address.includes("MENTIRI") == true) { area = "B2", kampong = "MENTIRI" }
                    else if (address.includes("MERAGANG") == true) { area = "B2", kampong = "MERAGANG" }
                    else if (address.includes("PELAMBAIAN") == true) { area = "B2", kampong = "PELAMBAIAN" }
                    else if (address.includes("PINTU MALIM") == true) { area = "B2", kampong = "PINTU MALIM" }
                    else if (address.includes("SALAMBIGAR") == true) { area = "B2", kampong = "SALAMBIGAR" }
                    else if (address.includes("SALAR") == true) { area = "B2", kampong = "SALAR" }
                    else if (address.includes("SERASA") == true) { area = "B2", kampong = "SERASA" }
                    else if (address.includes("SERDANG") == true) { area = "B2", kampong = "SERDANG" }
                    else if (address.includes("SUNGAI BASAR") == true) { area = "B2", kampong = "SUNGAI BASAR" }
                    else if (address.includes("SG BASAR") == true) { area = "B2", kampong = "SUNGAI BASAR" }
                    else if (address.includes("SUNGAI BELUKUT") == true) { area = "B2", kampong = "SUNGAI BELUKUT" }
                    else if (address.includes("SG BELUKUT") == true) { area = "B2", kampong = "SUNGAI BELUKUT" }
                    else if (address.includes("SUNGAI HANCHING") == true) { area = "B2", kampong = "SUNGAI HANCHING" }
                    else if (address.includes("SG HANCHING") == true) { area = "B2", kampong = "SUNGAI HANCHING" }
                    else if (address.includes("SUNGAI TILONG") == true) { area = "B2", kampong = "SUNGAI TILONG" }
                    else if (address.includes("SG TILONG") == true) { area = "B2", kampong = "SUNGAI TILONG" }
                    else if (address.includes("SUBOK") == true) { area = "B2", kampong = "SUBOK" }
                    else if (address.includes("SUNGAI AKAR") == true) { area = "B2", kampong = "SUNGAI AKAR" }
                    else if (address.includes("SG AKAR") == true) { area = "B2", kampong = "SUNGAI AKAR" }
                    else if (address.includes("SUNGAI BULOH") == true) { area = "B2", kampong = "SUNGAI BULOH" }
                    else if (address.includes("SG BULOH") == true) { area = "B2", kampong = "SUNGAI BULOH" }
                    else if (address.includes("TANAH JAMBU") == true) { area = "B2", kampong = "TANAH JAMBU" }
                    else if (address.includes("SUNGAI OROK") == true) { area = "B2", kampong = "SUNGAI OROK" }
                    else if (address.includes("SG OROK") == true) { area = "B2", kampong = "SUNGAI OROK" }
                    else if (address.includes("KATOK") == true) { area = "G1", kampong = "KATOK" }
                    else if (address.includes("MATA-MATA") == true) { area = "G1", kampong = "MATA-MATA" }
                    else if (address.includes("MATA MATA") == true) { area = "G1", kampong = "MATA-MATA" }
                    else if (address.includes("RIMBA") == true) { area = "G1", kampong = "RIMBA" }
                    else if (address.includes("TUNGKU") == true) { area = "G1", kampong = "TUNGKU" }
                    else if (address.includes("UBD") == true) { area = "G1", kampong = "UBD" }
                    else if (address.includes("UNIVERSITI BRUNEI DARUSSALAM") == true) { area = "G1", kampong = "UBD" }
                    else if (address.includes("JIS") == true) { area = "G1" }
                    else if (address.includes("JERUDONG INTERNATIONAL SCHOOL") == true) { area = "G1", kampong = "JIS" }
                    else if (address.includes("BERANGAN") == true) { area = "G2", kampong = "BERANGAN" }
                    else if (address.includes("BERIBI") == true) { area = "G2", kampong = "BERIBI" }
                    else if (address.includes("KIULAP") == true) { area = "G2", kampong = "KIULAP" }
                    else if (address.includes("RIPAS") == true) { area = "G2", kampong = "RIPAS" }
                    else if (address.includes("RAJA ISTERI PENGIRAN ANAK SALLEHA") == true) { area = "G2", kampong = "RIPAS" }
                    else if (address.includes("KIARONG") == true) { area = "G2", kampong = "KIARONG" }
                    else if (address.includes("PUSAR ULAK") == true) { area = "G2", kampong = "PUSAR ULAK" }
                    else if (address.includes("KUMBANG PASANG") == true) { area = "G2", kampong = "KUMBANG PASANG" }
                    else if (address.includes("MENGLAIT") == true) { area = "G2", kampong = "MENGLAIT" }
                    else if (address.includes("MABOHAI") == true) { area = "G2", kampong = "MABOHAI" }
                    else if (address.includes("ONG SUM PING") == true) { area = "G2", kampong = "ONG SUM PING" }
                    else if (address.includes("GADONG") == true) { area = "G2", kampong = "GADONG" }
                    else if (address.includes("TASEK LAMA") == true) { area = "G2", kampong = "TASEK LAMA" }
                    else if (address.includes("BANDAR TOWN") == true) { area = "G2", kampong = "BANDAR TOWN" }
                    else if (address.includes("BATU SATU") == true) { area = "JT1", kampong = "BATU SATU" }
                    else if (address.includes("BENGKURONG") == true) { area = "JT1", kampong = "BENGKURONG" }
                    else if (address.includes("BUNUT") == true) { area = "JT1", kampong = "BUNUT" }
                    else if (address.includes("JALAN BABU RAJA") == true) { area = "JT1", kampong = "JALAN BABU RAJA" }
                    else if (address.includes("JALAN ISTANA") == true) { area = "JT1", kampong = "JALAN ISTANA" }
                    else if (address.includes("JUNJONGAN") == true) { area = "JT1", kampong = "JUNJONGAN" }
                    else if (address.includes("KASAT") == true) { area = "JT1", kampong = "KASAT" }
                    else if (address.includes("LUMAPAS") == true) { area = "JT1", kampong = "LUMAPAS" }
                    else if (address.includes("JALAN HALUS") == true) { area = "JT1", kampong = "JALAN HALUS" }
                    else if (address.includes("MADEWA") == true) { area = "JT1", kampong = "MADEWA" }
                    else if (address.includes("PUTAT") == true) { area = "JT1", kampong = "PUTAT" }
                    else if (address.includes("SINARUBAI") == true) { area = "JT1", kampong = "SINARUBAI" }
                    else if (address.includes("TASEK MERADUN") == true) { area = "JT1", kampong = "TASEK MERADUN" }
                    else if (address.includes("TELANAI") == true) { area = "JT1", kampong = "TELANAI" }
                    else if (address.includes("BAN 1") == true) { area = "JT2", kampong = "BAN" }
                    else if (address.includes("BAN 2") == true) { area = "JT2", kampong = "BAN" }
                    else if (address.includes("BAN 3") == true) { area = "JT2", kampong = "BAN" }
                    else if (address.includes("BAN 4") == true) { area = "JT2", kampong = "BAN" }
                    else if (address.includes("BAN 5") == true) { area = "JT2", kampong = "BAN" }
                    else if (address.includes("BAN 6") == true) { area = "JT2", kampong = "BAN" }
                    else if (address.includes("BATONG") == true) { area = "JT2", kampong = "BATONG" }
                    else if (address.includes("BATU AMPAR") == true) { area = "JT2", kampong = "BATU AMPAR" }
                    else if (address.includes("BEBATIK") == true) { area = "JT2", kampong = "BEBATIK KILANAS" }
                    else if (address.includes("BEBULOH") == true) { area = "JT2", kampong = "BEBULOH" }
                    else if (address.includes("BEBATIK KILANAS") == true) { area = "JT2", kampong = "BEBATIK KILANAS" }
                    else if (address.includes("KILANAS") == true) { area = "JT2", kampong = "BEBATIK KILANAS" }
                    else if (address.includes("DADAP") == true) { area = "JT2", kampong = "DADAP" }
                    else if (address.includes("KUALA LURAH") == true) { area = "JT2", kampong = "KUALA LURAH" }
                    else if (address.includes("KULAPIS") == true) { area = "JT2", kampong = "KULAPIS" }
                    else if (address.includes("LIMAU MANIS") == true) { area = "JT2", kampong = "LIMAU MANIS" }
                    else if (address.includes("MASIN") == true) { area = "JT2", kampong = "MASIN" }
                    else if (address.includes("MULAUT") == true) { area = "JT2", kampong = "MULAUT" }
                    else if (address.includes("PANCHOR MURAI") == true) { area = "JT2", kampong = "PANCHOR MURAI" }
                    else if (address.includes("PANCHUR MURAI") == true) { area = "JT2", kampong = "PANCHOR MURAI" }
                    else if (address.includes("PANGKALAN BATU") == true) { area = "JT2", kampong = "PANGKALAN BATU" }
                    else if (address.includes("PASAI") == true) { area = "JT2", kampong = "PASAI" }
                    else if (address.includes("WASAN") == true) { area = "JT2", kampong = "WASAN" }
                    else if (address.includes("PARIT") == true) { area = "JT2", kampong = "PARIT" }
                    else if (address.includes("EMPIRE") == true) { area = "JT3", kampong = "EMPIRE" }
                    else if (address.includes("JANGSAK") == true) { area = "JT3", kampong = "JANGSAK" }
                    else if (address.includes("JERUDONG") == true) { area = "JT3", kampong = "JERUDONG" }
                    else if (address.includes("KATIMAHAR") == true) { area = "JT3", kampong = "KATIMAHAR" }
                    else if (address.includes("LUGU") == true) { area = "JT3", kampong = "LUGU" }
                    else if (address.includes("SENGKURONG") == true) { area = "JT3", kampong = "SENGKURONG" }
                    else if (address.includes("TANJONG NANGKA") == true) { area = "JT3", kampong = "TANJONG NANGKA" }
                    else if (address.includes("TANJONG BUNUT") == true) { area = "JT3", kampong = "TANJONG BUNUT" }
                    else if (address.includes("TANJUNG BUNUT") == true) { area = "JT3", kampong = "TANJONG BUNUT" }
                    else if (address.includes("SUNGAI TAMPOI") == true) { area = "JT3", kampung = "SUNGAI TAMPOI" }
                    else if (address.includes("SG TAMPOI") == true) { area = "JT3", kampong = "SUNGAI TAMPOI" }
                    else if (address.includes("MUARA") == true) { area = "B2", kampong = "MUARA" }
                    //TU
                    else if (address.includes("SENGKARAI") == true) { area = "TUTONG", kampong = "SENGKARAI" }
                    else if (address.includes("PANCHOR") == true) { area = "TUTONG", kampong = "PANCHOR" }
                    else if (address.includes("PENABAI") == true) { area = "TUTONG", kampong = "PENABAI" }
                    else if (address.includes("KUALA TUTONG") == true) { area = "TUTONG", kampong = "KUALA TUTONG" }
                    else if (address.includes("PENANJONG") == true) { area = "TUTONG", kampong = "PENANJONG" }
                    else if (address.includes("KERIAM") == true) { area = "TUTONG", kampong = "KERIAM" }
                    else if (address.includes("BUKIT PANGGAL") == true) { area = "TUTONG", kampong = "BUKIT PANGGAL" }
                    else if (address.includes("PANGGAL") == true) { area = "TUTONG", kampong = "BUKIT PANGGAL" }
                    else if (address.includes("LUAGAN") == true) { area = "TUTONG", kampong = "LUAGAN DUDOK" }
                    else if (address.includes("DUDOK") == true) { area = "TUTONG", kampong = "LUAGAN DUDOK" }
                    else if (address.includes("LUAGAN DUDOK") == true) { area = "TUTONG", kampong = "LUAGAN DUDOK" }
                    else if (address.includes("SINAUT") == true) { area = "TUTONG", kampong = "SINAUT" }
                    else if (address.includes("SUNGAI KELUGOS") == true) { area = "TUTONG", kampong = "SUNGAI KELUGOS" }
                    else if (address.includes("KELUGOS") == true) { area = "TUTONG", kampong = "SUNGAI KELUGOS" }
                    else if (address.includes("SG KELUGOS") == true) { area = "TUTONG", kampong = "SUNGAI KELUGOS" }
                    else if (address.includes("KUPANG") == true) { area = "TUTONG", kampong = "KUPANG" }
                    else if (address.includes("KIUDANG") == true) { area = "TUTONG", kampong = "KIUDANG" }
                    else if (address.includes("PAD") == true) { area = "TUTONG", kampong = "PAD NUNOK" }
                    else if (address.includes("NUNOK") == true) { area = "TUTONG", kampong = "PAD NUNOK" }
                    else if (address.includes("PAD NUNOK") == true) { area = "TUTONG", kampong = "PAD NUNOK" }
                    else if (address.includes("BEKIAU") == true) { area = "TUTONG", kampong = "BEKIAU" }
                    else if (address.includes("MAU") == true) { area = "TUTONG", kampong = "PENGKALAN MAU" }
                    else if (address.includes("PENGKALAN MAU") == true) { area = "TUTONG", kampong = "PENGKALAN MAU" }
                    else if (address.includes("BATANG MITUS") == true) { area = "TUTONG", kampong = "BATANG MITUS" }
                    else if (address.includes("MITUS") == true) { area = "TUTONG", kampong = "BATANG MITUS" }
                    else if (address.includes("KEBIA") == true) { area = "TUTONG", kampong = "KEBIA" }
                    else if (address.includes("BIRAU") == true) { area = "TUTONG", kampong = "BIRAU" }
                    else if (address.includes("LAMUNIN") == true) { area = "TUTONG", kampong = "LAMUNIN" }
                    else if (address.includes("LAYONG") == true) { area = "TUTONG", kampong = "LAYONG" }
                    else if (address.includes("MENENGAH") == true) { area = "TUTONG", kampong = "MENENGAH" }
                    else if (address.includes("PANCHONG") == true) { area = "TUTONG", kampong = "PANCHONG" }
                    else if (address.includes("PENAPAR") == true) { area = "TUTONG", kampong = "PANAPAR" }
                    else if (address.includes("TANJONG MAYA") == true) { area = "TUTONG", kampong = "TANJONG MAYA" }
                    else if (address.includes("MAYA") == true) { area = "TUTONG", kampong = "MAYA" }
                    else if (address.includes("LUBOK") == true) { area = "TUTONG", kampong = "LUBOK PULAU" }
                    else if (address.includes("PULAU") == true) { area = "TUTONG", kampong = "LUBOK PULAU" }
                    else if (address.includes("LUBOK PULAU") == true) { area = "TUTONG", kampong = "LUBOK PULAU" }
                    else if (address.includes("BUKIT UDAL") == true) { area = "TUTONG", kampong = "BUKIT UDAL" }
                    else if (address.includes("UDAL") == true) { area = "TUTONG", kampong = "BUKIT UDAL" }
                    else if (address.includes("RAMBAI") == true) { area = "TUTONG", kampong = "RAMBAI" }
                    else if (address.includes("BENUTAN") == true) { area = "TUTONG", kampong = "BENUTAN" }
                    else if (address.includes("MERIMBUN") == true) { area = "TUTONG", kampong = "MERIMBUN" }
                    else if (address.includes("UKONG") == true) { area = "TUTONG", kampong = "UKONG" }
                    else if (address.includes("LONG") == true) { area = "TUTONG", kampong = "LONG MAYAN" }
                    else if (address.includes("MAYAN") == true) { area = "TUTONG", kampong = "LONG MAYAN" }
                    else if (address.includes("LONG MAYAN") == true) { area = "TUTONG", kampong = "LONG MAYAN" }
                    else if (address.includes("TELISAI") == true) { area = "TUTONG", kampong = "TELISAI" }
                    else if (address.includes("DANAU") == true) { area = "TUTONG", kampong = "DANAU" }
                    else if (address.includes("BUKIT BERUANG") == true) { area = "TUTONG", kampong = "BUKIT BERUANG" }
                    else if (address.includes("BERUANG") == true) { area = "TUTONG", kampong = "BUKIT BERUANG" }
                    else if (address.includes("TUTONG") == true) { area = "TUTONG", kampong = "TUTONG" }
                    //KB
                    else if (address.includes("AGIS") == true) { area = "LUMUT", kampong = "AGIS" }
                    else if (address.includes("ANDALAU") == true) { area = "LUMUT", kampong = "ANDALAU" }
                    else if (address.includes("ANDUKI") == true) { area = "LUMUT", kampong = "ANDUKI" }
                    else if (address.includes("APAK") == true) { area = "KB / SERIA", kampong = "APAK" }
                    else if (address.includes("BADAS") == true) { area = "LUMUT", kampong = "BADAS" }
                    else if (address.includes("BANG") == true) { area = "KB / SERIA", kampong = "BANG" }
                    else if (address.includes("GARANG") == true) { area = "KB / SERIA", kampong = "GARANG" }
                    else if (address.includes("PUKUL") == true) { area = "KB / SERIA", kampong = "PUKUL" }
                    else if (address.includes("TAJUK") == true) { area = "KB / SERIA", kampong = "TAJUK" }
                    else if (address.includes("BENGERANG") == true) { area = "KB / SERIA", kampong = "BENGERANG" }
                    else if (address.includes("BIADONG") == true) { area = "KB / SERIA", kampong = "BIADONG" }
                    else if (address.includes("ULU") == true) { area = "KB / SERIA", kampong = "ULU" }
                    else if (address.includes("TENGAH") == true) { area = "KB / SERIA", kampong = "TENGAH" }
                    else if (address.includes("BISUT") == true) { area = "KB / SERIA", kampong = "BISUT" }
                    else if (address.includes("BUAU") == true) { area = "KB / SERIA", kampong = "BUAU" }
                    else if (address.includes("KANDOL") == true) { area = "KB / SERIA", kampong = "KANDOL" }
                    else if (address.includes("PUAN") == true) { area = "KB / SERIA", kampong = "PUAN" }
                    else if (address.includes("TUDING") == true) { area = "LUMUT", kampong = "TUDING" }
                    else if (address.includes("SAWAT") == true) { area = "KB / SERIA", kampong = "SAWAT" }
                    else if (address.includes("SERAWONG") == true) { area = "KB / SERIA", kampong = "SERAWONG" }
                    else if (address.includes("CHINA") == true) { area = "KB / SERIA", kampong = "CHINA" }
                    else if (address.includes("DUGUN") == true) { area = "KB / SERIA", kampong = "DUGUN" }
                    else if (address.includes("GATAS") == true) { area = "KB / SERIA", kampong = "GATAS" }
                    else if (address.includes("JABANG") == true) { area = "KB / SERIA", kampong = "JABANG" }
                    else if (address.includes("KAGU") == true) { area = "KB / SERIA", kampong = "KAGU" }
                    else if (address.includes("KAJITAN") == true) { area = "KB / SERIA", kampong = "KAJITAN" }
                    else if (address.includes("KELUYOH") == true) { area = "KB / SERIA", kampong = "KELUYOH" }
                    else if (address.includes("KENAPOL") == true) { area = "KB / SERIA", kampong = "KENAPOL" }
                    else if (address.includes("KUALA BALAI") == true) { area = "KB", kampong = "KUALA BALAI" }
                    else if (address.includes("BALAI") == true) { area = "KB", kampong = "KUALA BALAI" }
                    else if (address.includes("KUALA BELAIT") == true) { area = "KB", kampong = "KUALA BELAIT" }
                    else if (address.includes("KUKUB") == true) { area = "KB / SERIA", kampong = "KUKUB" }
                    else if (address.includes("LABI") == true) { area = "LUMUT", kampong = "LABI" }
                    else if (address.includes("LAKANG") == true) { area = "KB / SERIA", kampong = "LAKANG" }
                    else if (address.includes("LAONG ARUT") == true) { area = "KB / SERIA", kampong = "LAONG ARUT" }
                    else if (address.includes("ARUT") == true) { area = "KB / SERIA", kampong = "LAONG ARUT" }
                    else if (address.includes("LAONG") == true) { area = "KB / SERIA", kampong = "LAONG ARUT" }
                    else if (address.includes("LIANG") == true) { area = "LUMUT", kampong = "SUNGAI LIANG" }
                    else if (address.includes("SUNGAI LIANG") == true) { area = "LUMUT", kampong = "SUNGAI LIANG" }
                    else if (address.includes("SG LIANG") == true) { area = "LUMUT", kampong = "SUNGAI LIANG" }
                    else if (address.includes("LUMUT") == true) { area = "LUMUT", kampong = "LUMUT" }
                    else if (address.includes("LORONG") == true) { area = "SERIA", kampong = "LORONG" }
                    else if (address.includes("LORONG TENGAH") == true) { area = "SERIA", kampong = "LORONG TENGAH" }
                    else if (address.includes("LORONG TIGA SELATAN") == true) { area = "SERIA", kampong = "LORONG TIGA SELATAN" }
                    else if (address.includes("LILAS") == true) { area = "KB / SERIA", kampong = "LILAS" }
                    else if (address.includes("LUBUK LANYAP") == true) { area = "KB / SERIA", kampong = "LUBUK LANYAP" }
                    else if (address.includes("LANYAP") == true) { area = "KB / SERIA", kampong = "LUBUK LANYAP" }
                    else if (address.includes("LUBUK TAPANG") == true) { area = "KB / SERIA", kampong = "LUBUK TAPANG" }
                    else if (address.includes("TAPANG") == true) { area = "KB / SERIA", kampong = "LUBUK TAPANG" }
                    else if (address.includes("MALA'AS") == true) { area = "KB / SERIA", kampong = "MALA'AS" }
                    else if (address.includes("MALAAS") == true) { area = "KB / SERIA", kampong = "MALA'AS" }
                    else if (address.includes("MALAYAN") == true) { area = "KB / SERIA", kampong = "MELAYAN" }
                    else if (address.includes("MELAYU") == true) { area = "KB / SERIA", kampong = "MELAYU ASLI" }
                    else if (address.includes("ASLI") == true) { area = "KB / SERIA", kampong = "MELAYU ASLI" }
                    else if (address.includes("MELAYU ASLI") == true) { area = "KB / SERIA", kampong = "MELAYU ASLI" }
                    else if (address.includes("MELILAS") == true) { area = "LUMUT", kampong = "MELILAS" }
                    else if (address.includes("MENDARAM") == true) { area = "KB / SERIA", kampong = "MENDARAM" }
                    else if (address.includes("MENDARAM BESAR") == true) { area = "KB / SERIA", kampong = "MENDARAM" }
                    else if (address.includes("MENDARAM KECIL") == true) { area = "KB / SERIA", kampong = "MENDARAM" }
                    else if (address.includes("MERANGKING") == true) { area = "KB / SERIA", kampong = "MERANGKING" }
                    else if (address.includes("MERANGKING ULU") == true) { area = "KB / SERIA", kampong = "MERANGKING" }
                    else if (address.includes("MERANGKING HILIR") == true) { area = "KB / SERIA", kampong = "MERANGKING" }
                    else if (address.includes("MUMONG") == true) { area = "KB", kampong = "MUMONG" }
                    else if (address.includes("PANDAN") == true) { area = "KB", kampong = "PANDAN" }
                    else if (address.includes("PADANG") == true) { area = "KB", kampong = "PADANG" }
                    else if (address.includes("PANAGA") == true) { area = "SERIA", kampong = "PANAGA" }
                    else if (address.includes("PENGKALAN SIONG") == true) { area = "KB / SERIA", kampong = "PENGKALAN SIONG" }
                    else if (address.includes("SIONG") == true) { area = "KB / SERIA", kampong = "PENGKALAN SIONG" }
                    else if (address.includes("PENGALAYAN") == true) { area = "KB / SERIA", kampong = "PENGALAYAN" }
                    else if (address.includes("PENYRAP") == true) { area = "KB / SERIA", kampong = "PENYRAP" }
                    else if (address.includes("PERANGKONG") == true) { area = "KB / SERIA", kampong = "PERANGKONG" }
                    else if (address.includes("PERUMPONG") == true) { area = "LUMUT", kampong = "PERUMPONG" }
                    else if (address.includes("PESILIN") == true) { area = "KB / SERIA", kampong = "PESILIN" }
                    else if (address.includes("PULAU APIL") == true) { area = "KB / SERIA", kampong = "PULAU APIL" }
                    else if (address.includes("APIL") == true) { area = "KB / SERIA", kampong = "PULAU APIL" }
                    else if (address.includes("RAMPAYOH") == true) { area = "KB / SERIA", kampong = "RAMPAYOH" }
                    else if (address.includes("RATAN") == true) { area = "KB / SERIA", kampong = "RATAN" }
                    else if (address.includes("SAUD") == true) { area = "KB / SERIA", kampong = "SAUD" }
                    //else if (address.includes("SIMPANG") == true) {area = "KB / SERIA", kampong = "SIMPANG TIGA"}
                    else if (address.includes("SIMPANG TIGA") == true) { area = "LUMUT", kampong = "SIMPANG TIGA" }
                    else if (address.includes("SINGAP") == true) { area = "KB / SERIA", kampong = "SINGAP" }
                    else if (address.includes("SUKANG") == true) { area = "KB / SERIA", kampong = "SUKANG" }
                    else if (address.includes("BAKONG") == true) { area = "LUMUT", kampong = "BAKONG" }
                    else if (address.includes("DAMIT") == true) { area = "KB / SERIA", kampong = "DAMIT" }
                    else if (address.includes("BERA") == true) { area = "KB / SERIA", kampong = "BERA" }
                    else if (address.includes("DUHON") == true) { area = "KB / SERIA", kampong = "DUHON" }
                    else if (address.includes("GANA") == true) { area = "LUMUT", kampong = "GANA" }
                    else if (address.includes("HILIR") == true) { area = "KB / SERIA", kampong = "HILIR" }
                    else if (address.includes("KANG") == true) { area = "LUMUT", kampong = "KANG" }
                    else if (address.includes("KURU") == true) { area = "LUMUT", kampong = "KURU" }
                    else if (address.includes("LALIT") == true) { area = "LUMUT", kampong = "LALIT" }
                    else if (address.includes("LUTONG") == true) { area = "KB / SERIA", kampong = "LUTONG" }
                    else if (address.includes("MAU") == true) { area = "KB / SERIA", kampong = "MAU" }
                    else if (address.includes("MELILIT") == true) { area = "KB / SERIA", kampong = "MELILIT" }
                    else if (address.includes("PETAI") == true) { area = "KB / SERIA", kampong = "PETAI" }
                    else if (address.includes("TALI") == true) { area = "LUMUT", kampong = "TALI" }
                    else if (address.includes("TARING") == true) { area = "LUMUT", kampong = "TARING" }
                    else if (address.includes("TERABAN") == true) { area = "KB", kampong = "TERABAN" }
                    else if (address.includes("UBAR") == true) { area = "KB / SERIA", kampong = "UBAR" }
                    else if (address.includes("TANAJOR") == true) { area = "KB / SERIA", kampong = "TANAJOR" }
                    else if (address.includes("TANJONG RANGGAS") == true) { area = "KB / SERIA", kampong = "TANJONG RANGGAS" }
                    else if (address.includes("RANGGAS") == true) { area = "KB / SERIA", kampong = "TANJONG RANGGAS" }
                    else if (address.includes("TANJONG SUDAI") == true) { area = "KB / SERIA", kampong = "TANJONG SUDAI" }
                    else if (address.includes("SUDAI") == true) { area = "KB / SERIA", kampong = "TANJONG SUDAI" }
                    else if (address.includes("TAPANG LUPAK") == true) { area = "KB / SERIA", kampong = "TAPANG LUPAK" }
                    else if (address.includes("TARAP") == true) { area = "KB / SERIA", kampong = "TARAP" }
                    else if (address.includes("TEMPINAK") == true) { area = "KB / SERIA", kampong = "TEMPINAK" }
                    else if (address.includes("TERAJA") == true) { area = "KB / SERIA", kampong = "TERAJA" }
                    else if (address.includes("TERAWAN") == true) { area = "KB / SERIA", kampong = "TERAWAN" }
                    else if (address.includes("TERUNAN") == true) { area = "KB / SERIA", kampong = "TERUNAN" }
                    else if (address.includes("TUGONG") == true) { area = "KB / SERIA", kampong = "TUGONG" }
                    else if (address.includes("TUNGULLIAN") == true) { area = "LUMUT", kampong = "TUNGULLIAN" }
                    else if (address.includes("UBOK") == true) { area = "KB / SERIA", kampong = "UBOK" }
                    else if (address.includes("BELAIT") == true) { area = "KB / SERIA", kampong = "BELAIT" }
                    //TE
                    else if (address.includes("AMO") == true) { area = "TEMBURONG", kampong = "AMO" }
                    else if (address.includes("AYAM-AYAM") == true) { area = "TEMBURONG", kampong = "AYAM-AYAM" }
                    else if (address.includes("AYAM AYAM") == true) { area = "TEMBURONG", kampong = "AYAM-AYAM" }
                    else if (address.includes("BAKARUT") == true) { area = "TEMBURONG", kampong = "BAKARUT" }
                    else if (address.includes("BATANG DURI") == true) { area = "TEMBURONG", kampong = "BATANG DURI" }
                    else if (address.includes("BATANG TUAU") == true) { area = "TEMBURONG", kampong = "BATANG TUAU" }
                    else if (address.includes("BATU APOI") == true) { area = "TEMBURONG", kampong = "BATU APOI" }
                    else if (address.includes("APOI") == true) { area = "TEMBURONG", kampong = "BATU APOI" }
                    else if (address.includes("BATU BEJARAH") == true) { area = "TEMBURONG", kampong = "BATU BEJARAH" }
                    else if (address.includes("BEJARAH") == true) { area = "TEMBURONG", kampong = "BATU BEJARAH" }
                    else if (address.includes("BELABAN") == true) { area = "TEMBURONG", kampong = "BELABAN" }
                    else if (address.includes("BELAIS") == true) { area = "TEMBURONG", kampong = "BELAIS" }
                    else if (address.includes("BELINGOS") == true) { area = "TEMBURONG", kampong = "BELINGOS" }
                    else if (address.includes("BIANG") == true) { area = "TEMBURONG", kampong = "BIANG" }
                    else if (address.includes("BOKOK") == true) { area = "TEMBURONG", kampong = "BOKOK" }
                    else if (address.includes("BUDA BUDA") == true) { area = "TEMBURONG", kampong = "BUDA-BUDA" }
                    else if (address.includes("BUDA-BUDA") == true) { area = "TEMBURONG", kampong = "BUDA-BUDA" }
                    else if (address.includes("GADONG BARU") == true) { area = "TEMBURONG", kampong = "GADONG BARU" }
                    else if (address.includes("KENUA") == true) { area = "TEMBURONG", kampong = "KENUA" }
                    else if (address.includes("LABU ESTATE") == true) { area = "TEMBURONG", kampong = "LABU" }
                    else if (address.includes("LABU") == true) { area = "TEMBURONG", kampong = "LABU" }
                    else if (address.includes("LAGAU") == true) { area = "TEMBURONG", kampong = "LAGAU" }
                    else if (address.includes("LAKIUN") == true) { area = "TEMBURONG", kampong = "LAKIUN" }
                    else if (address.includes("LAMALING") == true) { area = "TEMBURONG", kampong = "LAMALING" }
                    else if (address.includes("LEPONG") == true) { area = "TEMBURONG", kampong = "LEPONG" }
                    else if (address.includes("LUAGAN") == true) { area = "TEMBURONG", kampong = "LUAGAN" }
                    else if (address.includes("MANIUP") == true) { area = "TEMBURONG", kampong = "MANIUP" }
                    else if (address.includes("MENENGAH") == true) { area = "TEMBURONG", kampong = "MENGENGAH" }
                    else if (address.includes("NEGALANG") == true) { area = "TEMBURONG", kampong = "NEGALANG" }
                    else if (address.includes("NEGALANG ERING") == true) { area = "TEMBURONG", kampong = "NEGALANG" }
                    else if (address.includes("NEGALANG UNAT") == true) { area = "TEMBURONG", kampong = "NEGALANG" }
                    else if (address.includes("PARIT") == true) { area = "TEMBURONG", kampong = "PARIT" }
                    else if (address.includes("PARIT BELAYANG") == true) { area = "TEMBURONG", kampong = "PARIT BELAYANG" }
                    else if (address.includes("PAYAU") == true) { area = "TEMBURONG", kampong = "PAYAU" }
                    else if (address.includes("PELIUNAN") == true) { area = "TEMBURONG", kampong = "PELIUNAN" }
                    else if (address.includes("PERDAYAN") == true) { area = "TEMBURONG", kampong = "PERDAYAN" }
                    else if (address.includes("PIASAU-PIASAU") == true) { area = "TEMBURONG", kampong = "PIASAU-PIASAU" }
                    else if (address.includes("PIASAU PIASAU") == true) { area = "TEMBURONG", kampong = "PIASAU-PIASAU" }
                    else if (address.includes("PIUNGAN") == true) { area = "TEMBURONG", kampong = "PIUNGAN" }
                    else if (address.includes("PUNI") == true) { area = "TEMBURONG", kampong = "PUNI" }
                    else if (address.includes("RATAIE") == true) { area = "TEMBURONG", kampong = "RATAIE" }
                    else if (address.includes("REBADA") == true) { area = "TEMBURONG", kampong = "REBADA" }
                    else if (address.includes("SEKUROP") == true) { area = "TEMBURONG", kampong = "SEKUROP" }
                    else if (address.includes("SELANGAN") == true) { area = "TEMBURONG", kampong = "SELANGAN" }
                    else if (address.includes("SELAPON") == true) { area = "TEMBURONG", kampong = "SELAPON" }
                    else if (address.includes("SEMABAT") == true) { area = "TEMBURONG", kampong = "SEMABAT" }
                    else if (address.includes("SEMAMAMNG") == true) { area = "TEMBURONG", kampong = "SEMAMANG" }
                    else if (address.includes("SENUKOH") == true) { area = "TEMBURONG", kampong = "SENUKOH" }
                    else if (address.includes("SERI TANJONG BELAYANG") == true) { area = "TEMBURONG", kampong = "SERI TANJONG BELAYANG" }
                    else if (address.includes("BELAYANG") == true) { area = "TEMBURONG", kampong = "SERI TANJONG BELAYANG" }
                    else if (address.includes("SIBULU") == true) { area = "TEMBURONG", kampong = "SIBULU" }
                    else if (address.includes("SIBUT") == true) { area = "TEMBURONG", kampong = "SIBUT" }
                    else if (address.includes("SIMBATANG BATU APOI") == true) { area = "TEMBURONG", kampong = "BATU APOI" }
                    else if (address.includes("SIMBATANG BOKOK") == true) { area = "TEMBURONG", kampong = "BOKOK" }
                    else if (address.includes("SUBOK") == true) { area = "TEMBURONG", kampong = "SUBOK" }
                    else if (address.includes("SUMBILING") == true) { area = "TEMBURONG", kampong = "SUMBILING" }
                    else if (address.includes("SUMBILING BARU") == true) { area = "TEMBURONG", kampong = "SUMBILING" }
                    else if (address.includes("SUMBILING LAMA") == true) { area = "TEMBURONG", kampong = "SUMBILING LAMA" }
                    else if (address.includes("SUNGAI RADANG") == true) { area = "TEMBURONG", kampong = "SUNGAI RADANG" }
                    else if (address.includes("SG RADANG") == true) { area = "TEMBURONG", kampong = "SUNGAI RADANG" }
                    else if (address.includes("SUNGAI SULOK") == true) { area = "TEMBURONG", kampong = "SUNGAI SULOK" }
                    else if (address.includes("SG SULOK ") == true) { area = "TEMBURONG", kampong = "SUNGAI SULOK" }
                    else if (address.includes("SUNGAI TANAM") == true) { area = "TEMBURONG", kampong = "SUNGAI TANAM" }
                    else if (address.includes("SG TANAM") == true) { area = "TEMBURONG", kampong = "SUNGAI TANAM" }
                    else if (address.includes("SUNGAI TANIT") == true) { area = "TEMBURONG", kampong = "SUNGAI TANIT" }
                    else if (address.includes("SG TANIT") == true) { area = "TEMBURONG", kampong = "SUNGAI TANIT" }
                    else if (address.includes("TANJONG BUNGAR") == true) { area = "TEMBURONG", kampong = "TANJONG BUNGAR" }
                    else if (address.includes("TEMADA") == true) { area = "TEMBURONG", kampong = "TEMADA" }
                    else if (address.includes("UJONG JALAN") == true) { area = "TEMBURONG", kampong = "UJONG JALAN" }
                    else if (address.includes("BANGAR") == true) { area = "TEMBURONG", kampong = "BANGAR" }
                    else if (address.includes("TEMBURONG") == true) { area = "TEMBURONG" }
                    else { area = "N/A" }

                    document.getElementById("areaLoc").value = kampong;

                    document.getElementById("area").value = area; */

                    if (area == "B1") {
                        document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountB1")) + 1;
                    }

                    if (area == "B2") {
                        document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountB2")) + 1;
                    }

                    if (area == "G1") {
                        document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountG1")) + 1;
                    }

                    if (area == "G2") {
                        document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountG2")) + 1;
                    }

                    if (area == "JT1") {
                        document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountJT1")) + 1;
                    }

                    if (area == "JT2") {
                        document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountJT2")) + 1;
                    }

                    if (area == "JT3") {
                        document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountJT3")) + 1;
                    }

                    if (area == "TUTONG") {
                        document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountTUTONG")) + 1;
                    }

                    if (area == "KB / SERIA") {
                        document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountKBSERIA")) + 1;
                    }

                    if (area == "LUMUT") {
                        document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountLUMUT")) + 1;
                    }

                    if (area == "SERIA") {
                        document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountSERIA")) + 1;
                    }

                    if (area == "KB") {
                        document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountKB")) + 1;
                    }

                    if (area == "TEMBURONG") {
                        document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountTEMBURONG")) + 1;
                    }

                    if (area == "N/A") {
                        document.getElementById("parcelNumber").value = parseInt(localStorage.getItem("lastCountNA")) + 1;
                    }

                    //getSubmittedDate
                    var today = new Date();
                    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

                    var ampmhour = '';
                    var ampmmin = '';

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

                    document.getElementById("trackingNumber").readOnly = true;
                    document.getElementById("name").readOnly = true;
                    document.getElementById("address").readOnly = true;

                    document.getElementById("loading").style.display = 'none';
                    document.getElementById("itemIn").style.display = 'block';
                    document.getElementById("trackingnumberarea").style.display = 'block';
                    document.getElementById("dateEntryArea").style.display = 'block';
                    document.getElementById("areaCodeArea").style.display = 'block';

                    document.getElementById("trackingNum").focus();
                }

                if (json_responsejd.status == 404) {
                    document.getElementById("loading").style.display = 'none';
                    document.getElementById("itemIn").style.display = 'none';
                    document.getElementById("wronginput").style.display = 'block';
                    document.getElementById("trackingnumberarea").style.display = 'block';
                    document.getElementById("dateEntryArea").style.display = 'block';
                    document.getElementById("areaCodeArea").style.display = 'block';
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

    if (localStorage.getItem("lastArea") == null) {
        localStorage.setItem("lastArea", "");
        document.getElementById("areaCodeTemp").value = localStorage.getItem("lastArea");
    }
    if (localStorage.getItem("lastArea") != null) {
        document.getElementById("areaCodeTemp").value = localStorage.getItem("lastArea");
    }

    if (localStorage.getItem("lastCountB1") == null) {
        localStorage.setItem("lastCountB1", 0);
        document.getElementById("lastCountB1").innerText = "B1: " + parseInt(localStorage.getItem("lastCountB1"));
    }
    if (localStorage.getItem("lastCountB1") != null) {
        document.getElementById("lastCountB1").innerText = "B1: " + parseInt(localStorage.getItem("lastCountB1"));
    }

    if (localStorage.getItem("lastCountB2") == null) {
        localStorage.setItem("lastCountB2", 0);
        document.getElementById("lastCountB2").innerText = "B2: " + parseInt(localStorage.getItem("lastCountB2"));
    }
    if (localStorage.getItem("lastCountB2") != null) {
        document.getElementById("lastCountB2").innerText = "B2: " + parseInt(localStorage.getItem("lastCountB2"));
    }

    if (localStorage.getItem("lastCountG1") == null) {
        localStorage.setItem("lastCountG1", 0);
        document.getElementById("lastCountG1").innerText = "G1: " + parseInt(localStorage.getItem("lastCountG1"));
    }
    if (localStorage.getItem("lastCountG1") != null) {
        document.getElementById("lastCountG1").innerText = "G1: " + parseInt(localStorage.getItem("lastCountG1"));
    }

    if (localStorage.getItem("lastCountG2") == null) {
        localStorage.setItem("lastCountG2", 0);
        document.getElementById("lastCountG2").innerText = "G2: " + parseInt(localStorage.getItem("lastCountG2"));
    }
    if (localStorage.getItem("lastCountG2") != null) {
        document.getElementById("lastCountG2").innerText = "G2: " + parseInt(localStorage.getItem("lastCountG2"));
    }

    if (localStorage.getItem("lastCountJT1") == null) {
        localStorage.setItem("lastCountJT1", 0);
        document.getElementById("lastCountJT1").innerText = "JT1: " + parseInt(localStorage.getItem("lastCountJT1"));
    }
    if (localStorage.getItem("lastCountJT1") != null) {
        document.getElementById("lastCountJT1").innerText = "JT1: " + parseInt(localStorage.getItem("lastCountJT1"));
    }

    if (localStorage.getItem("lastCountJT2") == null) {
        localStorage.setItem("lastCountJT2", 0);
        document.getElementById("lastCountJT2").innerText = "JT2: " + parseInt(localStorage.getItem("lastCountJT2"));
    }
    if (localStorage.getItem("lastCountJT2") != null) {
        document.getElementById("lastCountJT2").innerText = "JT2: " + parseInt(localStorage.getItem("lastCountJT2"));
    }

    if (localStorage.getItem("lastCountJT3") == null) {
        localStorage.setItem("lastCountJT3", 0);
        document.getElementById("lastCountJT3").innerText = "JT3: " + parseInt(localStorage.getItem("lastCountJT3"));
    }
    if (localStorage.getItem("lastCountJT3") != null) {
        document.getElementById("lastCountJT3").innerText = "JT3: " + parseInt(localStorage.getItem("lastCountJT3"));
    }

    if (localStorage.getItem("lastCountTUTONG") == null) {
        localStorage.setItem("lastCountTUTONG", 0);
        document.getElementById("lastCountTUTONG").innerText = "TUTONG: " + parseInt(localStorage.getItem("lastCountTUTONG"));
    }
    if (localStorage.getItem("lastCountTUTONG") != null) {
        document.getElementById("lastCountTUTONG").innerText = "TUTONG: " + parseInt(localStorage.getItem("lastCountTUTONG"));
    }

    if (localStorage.getItem("lastCountKBSERIA") == null) {
        localStorage.setItem("lastCountKBSERIA", 0);
        document.getElementById("lastCountKBSERIA").innerText = "KBSERIA: " + parseInt(localStorage.getItem("lastCountKBSERIA"));
    }
    if (localStorage.getItem("lastCountKBSERIA") != null) {
        document.getElementById("lastCountKBSERIA").innerText = "KBSERIA: " + parseInt(localStorage.getItem("lastCountKBSERIA"));
    }

    if (localStorage.getItem("lastCountLUMUT") == null) {
        localStorage.setItem("lastCountLUMUT", 0);
        document.getElementById("lastCountLUMUT").innerText = "LUMUT: " + parseInt(localStorage.getItem("lastCountLUMUT"));
    }
    if (localStorage.getItem("lastCountLUMUT") != null) {
        document.getElementById("lastCountLUMUT").innerText = "LUMUT: " + parseInt(localStorage.getItem("lastCountLUMUT"));
    }

    if (localStorage.getItem("lastCountSERIA") == null) {
        localStorage.setItem("lastCountSERIA", 0);
        document.getElementById("lastCountSERIA").innerText = "SERIA: " + parseInt(localStorage.getItem("lastCountSERIA"));
    }
    if (localStorage.getItem("lastCountSERIA") != null) {
        document.getElementById("lastCountSERIA").innerText = "SERIA: " + parseInt(localStorage.getItem("lastCountSERIA"));
    }

    if (localStorage.getItem("lastCountKB") == null) {
        localStorage.setItem("lastCountKB", 0);
        document.getElementById("lastCountKB").innerText = "KB: " + parseInt(localStorage.getItem("lastCountKB"));
    }
    if (localStorage.getItem("lastCountKB") != null) {
        document.getElementById("lastCountKB").innerText = "KB: " + parseInt(localStorage.getItem("lastCountKB"));
    }

    if (localStorage.getItem("lastCountTEMBURONG") == null) {
        localStorage.setItem("lastCountTEMBURONG", 0);
        document.getElementById("lastCountTEMBURONG").innerText = "TEMBURONG: " + parseInt(localStorage.getItem("lastCountTEMBURONG"));
    }
    if (localStorage.getItem("lastCountTEMBURONG") != null) {
        document.getElementById("lastCountTEMBURONG").innerText = "TEMBURONG: " + parseInt(localStorage.getItem("lastCountTEMBURONG"));
    }

    if (localStorage.getItem("lastCountNA") == null) {
        localStorage.setItem("lastCountNA", 0);
        document.getElementById("lastCountNA").innerText = "NA: " + parseInt(localStorage.getItem("lastCountNA"));
    }
    if (localStorage.getItem("lastCountNA") != null) {
        document.getElementById("lastCountNA").innerText = "NA: " + parseInt(localStorage.getItem("lastCountNA"));
    }

    if (localStorage.getItem("lastArriveDate") == null) {
        localStorage.setItem("lastArriveDate", "");
        document.getElementById("dateArriveTemp").value = localStorage.getItem("lastArriveDate");
    }
    if (localStorage.getItem("lastArriveDate") != null) {
        document.getElementById("dateArriveTemp").value = localStorage.getItem("lastArriveDate");
    }

    document.getElementById("trackingNum").focus();

    /* // Get the input field
    var pressEnter = document.getElementById("trackingNum");

    // Execute a function when the user presses a key on the keyboard
    pressEnter.addEventListener("keypress", function (event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("submitButton").click();
        }
    }); */

    document.addEventListener("submit", function (event) {
        event.preventDefault();

        $(document).ready(function () {
            var arrivedTN = document.getElementById("trackingNumber").value;
            var parcelNum = document.getElementById("parcelNumber").value;
            var arriveDate = document.getElementById("dateArrive").value;

            if (document.getElementById("area").value == "B1") {
                localStorage.setItem("lastCountB1", document.getElementById("parcelNumber").value);
            }

            if (document.getElementById("area").value == "B2") {
                localStorage.setItem("lastCountB2", document.getElementById("parcelNumber").value);
            }

            if (document.getElementById("area").value == "G1") {
                localStorage.setItem("lastCountG1", document.getElementById("parcelNumber").value);
            }

            if (document.getElementById("area").value == "G2") {
                localStorage.setItem("lastCountG2", document.getElementById("parcelNumber").value);
            }

            if (document.getElementById("area").value == "JT1") {
                localStorage.setItem("lastCountJT1", document.getElementById("parcelNumber").value);
            }

            if (document.getElementById("area").value == "JT2") {
                localStorage.setItem("lastCountJT2", document.getElementById("parcelNumber").value);
            }

            if (document.getElementById("area").value == "JT3") {
                localStorage.setItem("lastCountJT3", document.getElementById("parcelNumber").value);
            }

            if (document.getElementById("area").value == "TUTONG") {
                localStorage.setItem("lastCountTUTONG", document.getElementById("parcelNumber").value);
            }

            if (document.getElementById("area").value == "KB / SERIA") {
                localStorage.setItem("lastCountKBSERIA", document.getElementById("parcelNumber").value);
            }

            if (document.getElementById("area").value == "LUMUT") {
                localStorage.setItem("lastCountLUMUT", document.getElementById("parcelNumber").value);
            }

            if (document.getElementById("area").value == "SERIA") {
                localStorage.setItem("lastCountSERIA", document.getElementById("parcelNumber").value);
            }

            if (document.getElementById("area").value == "KB") {
                localStorage.setItem("lastCountKB", document.getElementById("parcelNumber").value);
            }

            if (document.getElementById("area").value == "TEMBURONG") {
                localStorage.setItem("lastCountTEMBURONG", document.getElementById("parcelNumber").value);
            }

            if (document.getElementById("area").value == "N/A") {
                localStorage.setItem("lastCountNA", document.getElementById("parcelNumber").value);
            }

            localStorage.setItem("lastArriveDate", document.getElementById("dateArrive").value);
            localStorage.setItem("lastArea", document.getElementById("area").value);

            var inventoryStatus = "IN WAREHOUSE[" + document.getElementById("area").value + "]";

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
                'custom_field_template': 'Local_Delivery',
                'meta_data': [
                    { "label": "Parcel_Number", "data": parcelNum },
                    { "label": "Inventory_Status", "data": inventoryStatus },
                    { "label": "Arrive_Date", "data": arriveDate }
                ],
                'api_key': '51676580f24b091114132d38111925401ee4c2f328d978375e1f03',
                'job_id': arrivedTN
            };
            request.send(JSON.stringify(body));
        });
    });
});
