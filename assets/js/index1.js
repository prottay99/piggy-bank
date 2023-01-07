document.getElementById('depositeBtn').addEventListener('click', function () {
    const depositeMoney = document.getElementById('depositeMoney');
    const depMoney = depositeMoney.value;
    const depAM = document.getElementById('depAm');
    const depSum = parseFloat(depAM) + parseFloat(depMoney);
    console.log('depMoney');
})



document.getElementById('widthdrawBtn').addEventListener('click', function () {
    console.log("done done");
})