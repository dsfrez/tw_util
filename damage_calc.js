function calcDamageMain() {
    resultOutput = document.createElement("div");
    document.getElementById(idResultMain).appendChild(resultOutput);
    
}

// 사용자의 대미지 정보를 계산하기 위해서 기초 정보를 입력 받음
// 직접 입력한 장비 정보와 스탯 정보를 기반으로도 계산할 수 있지만 여기서 직접 원하는 값을 입력하는 것도 가능
function inputDamageCalcOption() {
    // 1. 실제 계산할 장비합 입력
    resultInput = document.createElement("div");
    
    tableMain = document.createElement("table");
    tableMain.className += classInput;
    
    resultInput.appendChild(tableMain);
    document.getElementById(idResultMain).appendChild(resultInput);

    line = document.createElement("tr");
    tableMain.appendChild(line);
    line.appendChild(document.createElement("th"));
    for (i = 0; i < deviceStatList.length; i++) {
        th = document.createElement("th");
        th.innerHTML = deviceStatList[i];
        line.appendChild(th);
    }
    
    line = document.createElement("tr");
    tableMain.appendChild(line);
    tag = document.createElement("th");
    tag.innerHTML = "계산된 장비합";
    line.appendChild(tag);
    for (i = 0; i < deviceStatList.length; i++) {
        th = document.createElement("th");
        th.innerHTML = deviceStatSum[i];
        line.appendChild(th);

        cDeviceStatSum[i] = validValue(readGETvalue(getUserInputDevSumName(i)));
    }
    
    line = document.createElement("tr");
    tableMain.appendChild(line);
    tag = document.createElement("th");
    tag.innerHTML = "사용자 입력";
    line.appendChild(tag);
    for (i = 0; i < deviceStatList.length; i++) {
        td = document.createElement("td");
        line.appendChild(td);
        addInputNumberElement2
            (td, getUserInputDevSumId(i), getUserInputDevSumName(i), calcDamageMain);

        cCharStatSum[i] = validValue(readGETvalue(getUserInputStatSumName(i)));
    }
    
    // 2. 실제 계산할 스탯 입력
    line = document.createElement("tr");
    tableMain.appendChild(line);
    line.appendChild(document.createElement("th"));
    tag = document.createElement("th");
    tag.innerHTML = "계산 스탯";
    line.appendChild(tag);
    tag = document.createElement("th");
    tag.innerHTML = "사용자 입력";
    line.appendChild(tag);
        // 이 cell 공간이 큰데 활용좀 할 수 있을까
        // 캐릭터 info, 대상 몬스터 고르는 부분을 추가하도록 하자.
    info_space = document.createElement("th");
    info_space.colSpan = 7;
    info_space.rowSpan = statList.length+1;
    line.appendChild(info_space);
    
    info_space_div = document.createElement("div");
    info_space.appendChild(info_space_div);
    info_space_div.style.textAlign = "left";

    char_info_cell = document.createElement("span");
    info_space_div.appendChild(char_info_cell);
    char_info_cell.innerHTML = "캐릭터 정보 입력";
    
    monster_info_cell = document.createElement("span");
    info_space_div.appendChild(monster_info_cell);
    monster_info_cell.innerHTML = "대상 몬스터 정보";

    
    for (i = 0; i < statList.length; i++) {
        row = document.createElement("tr");
        tableMain.appendChild(row);
        
        stat = document.createElement("th");
        stat.innerHTML = statList[i];
        row.appendChild(stat);
        
        stat = document.createElement("th");
        stat.innerHTML = charStatSum[i];
        row.appendChild(stat);

        user_input = document.createElement("td");
        row.appendChild(user_input);
        addInputNumberElement2
            (user_input, getUserInputStatSumId(i), getUserInputStatSumName(i), calcDamageMain);
    }
}