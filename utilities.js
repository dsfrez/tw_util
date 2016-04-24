///////////////////////////////////////////////////////
// utilities.js - 자주 사용하는 api
///////////////////////////////////////////////////////

// device
function getInputDeviceId(i, j)     { return "input_D"+i+"_"+j; }
function getInputDeviceName(i, j)   { return "D"+i+"_"+j; }
function getSumDevice(i)            { return "sum_D"+i; }

// stat
function getInputStatId(i)          { return "input_S"+i; }
function getInputStatName(i)        { return "S"+i; }
function getInputCardId(i)          { return "input_SCard"+i; }
function getInputCardName(i)        { return "SCard"+i; }
function getInputClubId(i)          { return "input_SClub"+i; }
function getInputClubName(i)        { return "SClub"+i; }
function getInputRuneId(i)          { return "input_SRune"+i; }
function getInputRuneName(i)        { return "SRune"+i; }
function getInputEtcId(i)           { return "input_SEtc"+i; }
function getInputEtcName(i)         { return "SEtc"+i; }
function getStatResultId(i)         { return "stat_result_"+i; }

// damage 계산용 custom input - 기존 input name과 매치되면 안됨 !!
function getUserInputStatSumId(i)   { return "user_input_S"+i; }
function getUserInputStatSumName(i) { return "S_"+i; }
function getUserInputDevSumId(i)    { return "user_input_D"+i; }
function getUserInputDevSumName(i)  { return "D_"+i; }

///////////////////////////////////////////////////////

function Round(n, pos) {
	var digits = Math.pow(10, pos);
    var sign = (n < 0) ? -1 : 1;

	n = n * sign;
	var num = Math.round(n * digits) / digits;
	num = num * sign;

	return Number(num.toFixed(pos));
}

function Floor(n, pos) {
	var digits = Math.pow(10, pos);
	var num = Math.floor(n * digits) / digits;

	return Number(num.toFixed(pos));
}

function Ceiling(n, pos) {
	var digits = Math.pow(10, pos);
	var num = Math.ceil(n * digits) / digits;

	return Number(num.toFixed(pos));
}

///////////////////////////////////////////////////////

function refreshPage() {
    document.getElementById(idFormElement).submit();
}

function appendElementToMainForm(element) {
    document.getElementById(idFormElement).appendChild(element);
}

// GET을 통해 입력한 value 구하기
function readGETvalue(name) {
    search = location.search;
    if (!search) return "";
    search = search.split("?")[1];
    idx = search.indexOf(name);
    if (idx == -1) return "";
    search = search.substring(idx).split("&")[0];
    return search.split("=")[1];
}

// 입력 받은 수의 유효성 체크
function validValue(value) {
    // 숫자가 아닐 경우
    if (value == "")
        return 0;
    if (isNaN(value))
        return 0; 
    // 0 보다 작을 경우
    else if (value < 0)
        return 0;
    // TODO: 255보다 큰 경우를 제한해야 할까 ?
    else
        return parseInt(value);
}

function setInputValue(input) {
    // GET으로 입력 받음 값 적용 - 근데 이거 너무 무식하지 않나.
    input.value = validValue(readGETvalue(input.name));
    // 값이 0이면 보기 귀찮아서 지워버림
    if (input.value == 0) input.value = "";
}

function addInputNumberElementNoTheme(target, id, name, calc_func) {
    // CAUTION: 반드시 target이 render tree에 등록된 상태여야 함 !!
    input = document.createElement("input");
    input.type = "text"; // number only로 인식이 잘 안됨
    input.id = id;
    input.name = name;
    setInputValue(input);
    target.appendChild(input);

    input.onchange = function () {
        if (!isNaN(this.value)) {
            calc_func();
            return; // Do nothing
        }
        else if (this.value != "")
            alert("숫자만 입력 가능합니다.");
        this.value = "";
        calc_func();
        refreshPage();  // 이거 너무 비효율적인거 같은데 다른 방식 없을까? (TODO)
                        // GET으로 변수 저장하려고 해서 form element를 사용 중.. 이 때문에 enter를 치면 항상 submit이 된다.
                        // 그러면 그냥 이렇게 하는게 맞나.
    }
}

// for table input
function addInputNumberElement(target, id, name, calc_func) {
    addInputNumberElementNoTheme(target, id, name, calc_func);
    target.className += clTableInput;
    document.getElementById(id).className += clTableInput;
}
function addInputNumberElement2(target, id, name, calc_func) {
    addInputNumberElementNoTheme(target, id, name, calc_func);
    target.className += clTableInput2;
    document.getElementById(id).className += clTableInput2;
}

// checkbox input
function addInputCheckBox(target, id, name, func) {
    // CAUTION: 반드시 target이 render tree에 등록된 상태여야 함 !!
    input = document.createElement("input");
    input.type = "checkbox"; // number only로 인식이 잘 안됨
    input.id = id;
    input.name = name;
    input.value = name;
    target.appendChild(input);
    
    input.checked = (readGETvalue(input.name) == input.name);

    input.onchange = function () {
        func();
        refreshPage();
    }
}

function addSelelctOption(selectElem, value, isDefault) {
    option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    selectElem.appendChild(option);
}