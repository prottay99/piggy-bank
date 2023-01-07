document.getElementById('depositeBtn').addEventListener('click', function () {
    const depositeMoney = document.getElementById('depositeMoney');
    const depMoney = depositeMoney.value;
    const depAM = document.getElementById('depAm');
    const totalDeposite = depAM.innerText;

    const toAm = document.getElementById('totAm')
    const totalAmount = toAm.innerText;

    depAM.innerText = parseFloat('depMoney')+parseFloat('depAM');
    toAm.innerText = parseFloat('depAm')+parseFloat('totalAmount');


})



document.getElementById('widthdrawBtn').addEventListener('click', function () {
    const widthdrawMoney = document.getElementById('widthdrawMoney');
    const widMoney = widthdrawMoney.value;
    const widAm = document.getElementById('widAm');
    widAm.innerText = parseFloat('depMoney')+parseFloat('depAM');
})