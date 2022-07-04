let X =  document.getElementById('press');
X.addEventListener('click', ()=>{
  let Number = document.getElementById('numbers').value
  localStorage.setItem('IMEI', Number);
  if(Number !=""){
    if(Number.length > 15){
document.getElementById('container').style.display = 'none'
document.getElementById('loading').innerHTML = '<img id="loadingimg" src="/Media/load.gif" alt="Loading Image">'
document.getElementById('loading').style.display = 'flex'
setTimeout(()=>{
  const XHR = new XMLHttpRequest();
let url = 'https://kelpom-imei-checker1.p.rapidapi.com/api?imei='+Number
XHR.open('GET', url);
XHR.setRequestHeader('x-rapidapi-host', 'kelpom-imei-checker1.p.rapidapi.com');
XHR.setRequestHeader('x-rapidapi-key', 'aa14e9021emshec6160dde6d5ff8p149571jsn688f13038174')
XHR.responseType = 'json';
XHR.onload = ()=>{
  let Result = XHR.response
  console.log(Result);
  let IMEi = "IMEI Number is : "+Result.imei
  let BRAND = "Mobile Brand is : "+Result.model.brand
  let Device = "Device Brand is : "+Result.model.device
  let Model_Number = "Model Number is : "+Result.model.model_nb
  console.log(IMEi, BRAND, Device, Model_Number);

  // Printing Result on Page
  document.getElementById('resultshow1').innerText = IMEi
  document.getElementById('resultshow2').innerText = BRAND
  document.getElementById('resultshow3').innerText = Device
  document.getElementById('resultshow4').innerText = Model_Number
  document.getElementById('loading').style.display = 'none'
  document.getElementById('result').style.display = 'flex'
}
XHR.send();
}, 4000)
// End of first Service

    }
    // Service repeatition
    else if(Number.length == 15){
      document.getElementById('container').style.display = 'none'
document.getElementById('loading').innerHTML = '<img id="loadingimg" src="/Media/load.gif" alt="Loading Image">'
document.getElementById('loading').style.display = 'flex'
setTimeout(()=>{
  const XHR = new XMLHttpRequest();
let url = 'https://kelpom-imei-checker1.p.rapidapi.com/api?imei='+Number
XHR.open('GET', url);
XHR.setRequestHeader('x-rapidapi-host', 'kelpom-imei-checker1.p.rapidapi.com');
XHR.setRequestHeader('x-rapidapi-key', 'aa14e9021emshec6160dde6d5ff8p149571jsn688f13038174')
XHR.responseType = 'json';
XHR.onload = ()=>{
  let Result = XHR.response
  console.log(Result);
  let IMEi = "IMEI Number is : "+Result.imei
  let BRAND = "Mobile Brand is : "+Result.model.brand
  let Device = "Device Brand is : "+Result.model.device
  let Model_Number = "Model Number is : "+Result.model.model_nb
  console.log(IMEi, BRAND, Device, Model_Number);

  // Printing Result on Page
  document.getElementById('resultshow1').innerText = IMEi
  document.getElementById('resultshow2').innerText = BRAND
  document.getElementById('resultshow3').innerText = Device
  document.getElementById('resultshow4').innerText = Model_Number
  document.getElementById('loading').style.display = 'none'
  document.getElementById('result').style.display = 'flex'
}
XHR.send();
}, 4000)

    }
    else if(Number.length < 15){
      alert('please Emter At least 15 Digit IMEI Number')
    }
    }
  else if(Number ==""){
    alert('Please Enter IMEI Number');
  }
});

document.getElementById('logo').addEventListener('click', ()=>{
 let ImEi = "Privious Searched IMEI : "+localStorage.getItem('IMEI');
 document.getElementById('privious').innerText = ImEi
 document.getElementById('privious').style.display = 'block'
})

// Editable Command
document.body.contentEditable = true
