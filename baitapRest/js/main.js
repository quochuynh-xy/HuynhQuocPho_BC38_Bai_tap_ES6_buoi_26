var getDataType1 = () => {
    subject1 = +document.getElementById('inpToan').value;
    subject2 = +document.getElementById('inpLy').value;
    subject3 = +document.getElementById('inpHoa').value;
    average(subject1, subject2, subject3);
}
var getDataType2 = () => {
    subject1 = +document.getElementById('inpVan').value;
    subject2 = +document.getElementById('inpSu').value;
    subject3 = +document.getElementById('inpDia').value;
    subject4 = +document.getElementById('inpEnglish').value;
    average(subject1, subject2, subject3, subject4);
}
var average = (...data) => {
  let input = data.length;
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  switch (input) {
    case 3: {
      document.querySelector("#tbKhoi1").innerHTML = sum / 3;
      break;
    }
    case 4: {
      document.querySelector("#tbKhoi2").innerHTML = sum / 4;
    }
    default: {
      return;
    }
  }
};
document.querySelector('#btnKhoi1').onclick = getDataType1;
document.querySelector('#btnKhoi2').onclick = getDataType2;