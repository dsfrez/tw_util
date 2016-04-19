///////////////////////////////////////////////////////
// user_input.js - 사용자 입력
// - 사용자 장비 옵션 입력
// - 사용자 스탯 입력
///////////////////////////////////////////////////////

function sumDeviceOption() {
    // 초기화 및 계산
    for (i = 0; i < deviceStatSum.length; i++)
        deviceStatSum[i] = 0;
    for (i = 0; i < deviceList.length; i++)
        for (j = 0; j < deviceStatSum.length; j++)
            deviceStatSum[j] += validValue(document.getElementById(getInputDeviceId(i, j)).value);
    // 결과 출력
    for (i = 0; i < deviceStatSum.length; i++)
        document.getElementById(getSumDevice(i)).innerHTML = deviceStatSum[i];
}

function sumStat() {
    for (i = 0; i < statList.length; i++) {
        // 1. 버프 / 퇴마사에 중첩되는 스탯
        // 원본 스탯 + 신뢰의 물약 + 축복의 물약 + 몬스터 카드
        baseStat = validValue(document.getElementById(getInputStatId(i)).value);
        baseStat += valStatFriend;
        baseStat += isStatBless ? 20 : 0;
        baseStat += validValue(document.getElementById(getInputCardId(i)).value);
        // 와블/법스 적용
        baseStat += isStatBuff ? Math.floor(baseStat*0.1) : 0;
        // 퇴마사 적용
        baseStat += isStatExorcist ? Math.floor(baseStat*0.1) : 0;
        
        // 2. 기타 스탯 - 합연산
        // 클럽 효과 + 룬 스탯 + 아티팩트 + 기타(ex: 기합)
        etcStat = valArtifact;
        etcStat += validValue(document.getElementById(getInputClubId(i)).value);
        etcStat += validValue(document.getElementById(getInputRuneId(i)).value);
        etcStat += validValue(document.getElementById(getInputEtcId(i)).value);
        
        // 3. 최종 스탯 - 법스/퇴마사 중첩 스탯 + 기타 스탯
        charStatSum[i] = baseStat + etcStat;
        
        // 4. 결과 출력
        diff = charStatSum[i] - validValue(document.getElementById(getInputStatId(i)).value);
        document.getElementById(getStatResultId(i)).innerHTML =
            charStatSum[i] + " (+" + diff + ")";
    }
}

///////////////////////////////////////////////////////

// 장비 옵션 입력
function showDeviceInput() {
    deviceInput = document.createElement("div");
    deviceInput.id = idInputDevice;
    
    tableMain = document.createElement("table");
    tableMain.className += classInput;
    
    deviceInput.appendChild(tableMain);
    document.getElementById(idInputMain).appendChild(deviceInput);
    
    // 장비 옵션 리스트 출력
    dlist = document.createElement("tr");
    tableMain.appendChild(dlist);
    dlist.appendChild(document.createElement("th"));
    for (i = 0; i < deviceStatList.length; i++) {
        th = document.createElement("th");
        th.innerHTML = deviceStatList[i];
        dlist.appendChild(th);
    }
    
    // 장비 욥션 입력메뉴 출력
    for (i = 0; i < deviceList.length; i++) {
        tr = document.createElement("tr");
        trName = document.createElement("th");
        trName.innerHTML = deviceList[i];
        tr.appendChild(trName);
        tableMain.appendChild(tr);

        for (j = 0; j < deviceStatList.length; j++) {
            // 장비 입력 칸
            td = document.createElement("td");
            tr.appendChild(td);
            addInputNumberElement
                (td, getInputDeviceId(i, j), getInputDeviceName(i, j), sumDeviceOption);
        }
    }
    
    // 장비 옵션 합산 결과 출력
    dresult = document.createElement("tr");
    dresult_tag = document.createElement("th");
    dresult_tag.innerHTML = "합계";
    dresult.appendChild(dresult_tag);
    for (i = 0; i < deviceStatList.length; i++) {
        th = document.createElement("th");
        th.id = getSumDevice(i);
        th.innerHTML = "";
        dresult.appendChild(th);
    }
    tableMain.appendChild(dresult);

    // 계산하기
    sumDeviceOption();
}

// 스탯 입력
function showStatInput() {
    statusInput = document.createElement("div");
    statusInput.id = idInputStatus;
    document.getElementById(idInputMain).appendChild(statusInput);

    // 전체 적용 효과 ///////////////////////////////////
    statusGlobal = document.createElement("div");
    statusInput.appendChild(statusGlobal);

    statusGlobal.className += clDivSmallFont;
    // 신뢰의 물약
    friend_text = document.createElement("span");
    statusGlobal.appendChild(friend_text);
    friend_text.innerHTML = " 신뢰의 물약 ";
    addInputNumberElementNoTheme(statusGlobal, id_friend, name_friend, sumStat);
    // 축복의 물약 사용 여부
    bless_text = document.createElement("span");
    statusGlobal.appendChild(bless_text);
    bless_text.innerHTML = " | 축복의 물약 ";
    addInputCheckBox(statusGlobal, id_bless, name_bless, sumStat);
    // 법스/와블
    buff_text = document.createElement("span");
    statusGlobal.appendChild(buff_text);
    buff_text.innerHTML = "| 블레스(버프 스크롤) ";
    addInputCheckBox(statusGlobal, id_buff, name_buff, sumStat);
    // 퇴마사의 은총
    exorcist_text = document.createElement("span");
    statusGlobal.appendChild(exorcist_text);
    exorcist_text.innerHTML = "| 퇴마사의 은총 ";
    addInputCheckBox(statusGlobal, id_exorcist, name_exorcist, sumStat);
    // 아티팩트 - TODO: 목록으로 변경할 것
    artifact_text = document.createElement("span");
    statusGlobal.appendChild(artifact_text);
    artifact_text.innerHTML = " | 아티팩트 ";
    addInputNumberElementNoTheme(statusGlobal, id_artifact, name_artifact, sumStat);

    // 입력 테이블 /////////////////////////////////////
    // 리스트 출력
    tableMain = document.createElement("table");
    statusInput.appendChild(tableMain);
    document.getElementById(idInputMain).appendChild(statusInput);
    
    list1 = document.createElement("tr");
    tableMain.appendChild(list1);
    
    list1.appendChild(document.createElement("td"));
    list1.appendChild(document.createElement("td"));
    list1_td1 = document.createElement("th");
    list1_td1.innerHTML = "버프/퇴마사에 중첩됨";
    list1_td1.colSpan = "3";
    list1_td2 = document.createElement("th");
    list1_td2.innerHTML = "최종 추가 스탯 (합연산)";
    list1_td2.colSpan = "4";
    list1.appendChild(list1_td1);
    list1.appendChild(list1_td2);
    list1.appendChild(document.createElement("td"));
    
    list2 = document.createElement("tr");
    tableMain.appendChild(list2);
    list2.appendChild(document.createElement("td"));
    
    for (i = 0; i < statMenuList.length; i++) {
        td = document.createElement("th");
        td.innerHTML = statMenuList[i];
        list2.appendChild(td);
    }
    
    valStatFriend = validValue(readGETvalue(name_friend));
    isStatBless = (readGETvalue(name_bless) == name_bless);
    isStatBuff = (readGETvalue(name_buff) == name_buff);
    isStatExorcist = (readGETvalue(name_exorcist) == name_exorcist);
    valArtifact = validValue(readGETvalue(name_artifact)); // TODO: 이거 목록으로..
    
    // status 입력 메뉴 출력
    for (i = 0; i < statList.length; i++) {
        row = document.createElement("tr");
        tableMain.appendChild(row);
        // 스탯
        stat = document.createElement("th");
        stat.innerHTML = statList[i];
        row.appendChild(stat);
        // 원본 스탯 - input
        orig_stat = document.createElement("td");
        row.appendChild(orig_stat);
        addInputNumberElement(orig_stat, getInputStatId(i), getInputStatName(i), sumStat);
        // 신뢰의 물약
        friend = document.createElement("td");
        friend.innerHTML = (valStatFriend != 0) ? valStatFriend : "";
        row.appendChild(friend);
        // 축복의 물약 - 와블이 아니다
        bless = document.createElement("td");
        bless.innerHTML = isStatBless ? "20" : "";
        row.appendChild(bless);
        // 몬스터 카드 - input
        card = document.createElement("td");
        row.appendChild(card);
        addInputNumberElement(card, getInputCardId(i), getInputCardName(i), sumStat);
        // 클럽 효과 - input
        club = document.createElement("td");
        row.appendChild(club);
        addInputNumberElement(club, getInputClubId(i), getInputClubName(i), sumStat);
        // 룬 스탯 - input
        rune = document.createElement("td");
        row.appendChild(rune);
        addInputNumberElement(rune, getInputRuneId(i), getInputRuneName(i), sumStat);
        // 아티팩트 // TODO - 목록으로
        artifact = document.createElement("td");
        artifact.innerHTML = (valArtifact != 0) ? valArtifact : "";
        row.appendChild(artifact);
        // 기타 (ex: 기합) - input
        etc = document.createElement("td");
        row.appendChild(etc);
        addInputNumberElement(etc, getInputEtcId(i), getInputEtcName(i), sumStat);
        // 합계
        result = document.createElement("th");
        result.id = getStatResultId(i);
        result.innerHTML = "TODO";
        row.appendChild(result);
    }
    
    sumStat();
}