function calculate() {
    let rng1 = document.getElementById('customRange1'); //rng - это ползунок
    let rng2 = document.getElementById('customRange2');

    let i1 = document.getElementById('i1'); // i1 - input
    let i2 = document.getElementById('i2');


    i1.value = rng1.value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    i2.value = rng2.value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

    let selectValue = document.getElementById('credit_type').value;

    if(selectValue == 1) {
        let pepcent1 = 1.08923;
    }
    else if(selectValue == 2) {
        let pepcent1 = 1.06513;
    }
    else if(selectValue == 3) {
        let pepcent1 = 1.07115;
    };






    let pepcent1 = 1.08923;
    let minPercent = (rng2.value - 6) * 0.0123 + 1;

    if (minPercent == 0) {
        minPercent = 1;
    };

    let t3Value = Math.round(rng1.value * pepcent1 * minPercent);
    // console.log(minPercent);
    let t2Value = t3Value - rng1.value;
    let t1Value = Math.round(t3Value / rng2.value);

    t3.textContent = t3Value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    t2.textContent = t2Value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    t1.textContent = t1Value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
};

function change() {
    let selectVal = document.getElementById('credit_type').value;
    let rng1 = document.getElementById('customRange1'); //rng - это ползунок
    let rng2 = document.getElementById('customRange2');
    let maxSumValue = document.getElementById('maxSumValue');
    let maxTerm = document.getElementById('maxTerm');
    let tPercent = document.getElementById('t-percent');

    if(selectVal == 1) {
        rng1.setAttribute("min", 5000000);
        rng1.setAttribute("max", 20000000);
        rng2.setAttribute("max", 12);
        maxSumValue.textContent = '20 млн.';
        maxTerm.textContent = '1 год';
        tPercent.textContent = '30';
    }
    else if(selectVal == 2) {
        rng1.setAttribute("min", 5000000);
        rng1.setAttribute("max", 560000000);
        rng2.setAttribute("max", 180);

        maxSumValue.textContent = '560 млн.';
        maxTerm.textContent = '15 лет';
        tPercent.textContent = '22';

    }
    else if(selectVal == 3) {
        rng1.setAttribute("min", 5000000);
        rng1.setAttribute("max", 400000000);
        rng2.setAttribute("max", 48);
        maxSumValue.textContent = '400 млн.';
        maxTerm.textContent = '4 года';
        tPercent.textContent = '24';

    }


};

