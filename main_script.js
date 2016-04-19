///////////////////////////////////////////////////////
// main_script.js
///////////////////////////////////////////////////////
  
// 시작 함수 -> 페이지 로딩 시 호출 됨.
function startTwStatus() {
    // tales weave 정보 초기화
    init_tw_info();
    
    // print test url
    testLink = document.createElement("a");
    testLink.href = test_url;
    testLink.innerHTML = "input test value";
    document.getElementsByTagName("BODY")[0].appendChild(testLink);

    /////////////////////////////////////////////////////////////////////
    
    // form 생성 - GET을 통해서 사용자 입력 정보 넘길거임
    mainForm = document.createElement("form");
    mainForm.action = "";
    mainForm.id = "main_form"; // idFormElement 변수 왜 안되지..
    mainForm.name = "main_form";
    mainForm.method = "GET";
    document.getElementsByTagName("BODY")[0].appendChild(mainForm);

    /////////////////////////////////////////////////////////////////////
    
    idShowResult = "id_show_result";
    idShowInput = "id_show_input";
    nameShowResult = "ShowResultWindow";
    nameShowInput = "ShowInputWindow";
    
    // 기본 설정 (입출력 모드 on/off, 상태 저장)
    mainSelectOption = document.createElement("div");
    appendElementToMainForm(mainSelectOption);

    addInputCheckBox(mainSelectOption, idShowResult, nameShowResult, function() {});
    show_result_text = document.createElement("span");
    mainSelectOption.appendChild(show_result_text);
    show_result_text.innerHTML = " 대미지 계산 결과 보기 | ";
    
    addInputCheckBox(mainSelectOption, idShowInput, nameShowInput, function() {});
    show_input_text = document.createElement("span");
    mainSelectOption.appendChild(show_input_text);
    show_input_text.innerHTML = " 입력창 보기";
    
    // TODO: 이거 어차피 enter치면 submit 되는데 필요할까? 클립보드 복사 기능이라도 넣을까?
    saveButton = document.createElement("input");
    saveButton.type = "submit";
    saveButton.value = "현재 상태 저장하기";
    appendElementToMainForm(saveButton);
    
    // 입력 / 출력 레이아웃
    mainResult = document.createElement("div");
    mainResult.id = idResultMain;
    mainResult.style.display = 
        (document.getElementById(idShowResult).checked) ? "visible" : "none";
    appendElementToMainForm(mainResult);

    // TODO: null space 추가

    mainInput = document.createElement("div");
    mainInput.id = idInputMain;
    mainInput.style.display = 
        (document.getElementById(idShowInput).checked) ? "visible" : "none";
    appendElementToMainForm(mainInput);
    
    // 사용자 입력 및 중간 계산 - user_input.js
    showDeviceInput();
    showStatInput();
    
    // 계산 결과 - TODO
    inputDamageCalcOption();
}
