const arr = [33, 14, 26, 12, 13, 7, 9, 10, 205, 379, 418, 1];

const baiA = document.querySelector("#ketQuaA");
const baiB = document.querySelector("#ketQuaB");
const baiC = document.querySelector("#ketQuaC");
const baiD = document.querySelector("#ketQuaD");
const baiE = document.querySelector("#ketQuaE");
const baiF = document.querySelector("#ketQuaF");
const baiG = document.querySelector("#ketQuaG");
const baiH = document.querySelector("#ketQuaH");
const btnT = document.querySelector("#tim");
const btnB = document.querySelector("#timB");
const btnC = document.querySelector("#timC");
const btnD = document.querySelector("#timD");
const btnE = document.querySelector("#timE");
const btnF = document.querySelector("#timF");
const btnG = document.querySelector("#timG");
const btnH = document.querySelector("#timH");

const tinhToan = () => {
  let lowToHight = [];
  lowToHight = arr.sort((a, b) => {
    return a - b;
  });
  baiA.textContent = lowToHight;
};

const tinhToanB = () => {
  let hightToLow = [];
  hightToLow = arr.sort((a, b) => {
    return b - a;
  });
  baiB.textContent = hightToLow;
};

const tinhToanC = () => {
  let soChan = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      soChan.push(arr[i]);
    }
  }
  let soChanLowHight = [];

  soChanLowHight = soChan.sort((a, b) => {
    return a - b;
  });

  baiC.textContent = soChanLowHight;
};

const tinhToanD = () => {
  let soLe = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      soLe.push(arr[i]);
    }
  }
  let soLeHightLow = [];
  soLeHightLow = soLe.sort((a, b) => {
    return b - a;
  });
  baiD.textContent = soLeHightLow;
};

const tinhToanE = () => {
  let tong = 0;
  for (i = 0; i < arr.length; i++) {
    tong += arr[i];
  }
  baiE.textContent = tong;
};

const tinhToanF = () => {
  let soBeDan = [];
  soBeDan = arr.sort((a, b) => {
    return b - a;
  });
  baiF.textContent = soBeDan[0];
};

const tinhToanG = () => {
  let soLonDan = [];
  soLonDan = arr.sort((a, b) => {
    return a - b;
  });
  baiG.textContent = soLonDan[0];
};

const tinhToanH = () => {
  let soBeDanH = [];
  soBeDanH = arr.sort((a, b) => {
    return b - a;
  });
  baiH.textContent = soBeDanH[1];
};

btnT.addEventListener("click", tinhToan);
btnB.addEventListener("click", tinhToanB);
btnC.addEventListener("click", tinhToanC);
btnD.addEventListener("click", tinhToanD);
btnE.addEventListener("click", tinhToanE);
btnF.addEventListener("click", tinhToanF);
btnG.addEventListener("click", tinhToanG);
btnH.addEventListener("click", tinhToanH);
