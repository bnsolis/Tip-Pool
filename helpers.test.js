describe('Helpers test (with setup and tear-down)', function() {
    // NOTE (bsolis): Adding in random values to test with.
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should add together all payment amounts on sumPaymentTotal()', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 300;
        tipAmtInput.value = 60;

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(400);
    })

    it('should add together all tip amounts on sumPaymentTotal()', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmtInput.value = 300;
        tipAmtInput.value = 60;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(80);
    })

    it('should accept the tip amount and calculate a percentage on calculateTipPercent', function(){
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        expect(calculateTipPercent(200, 40)).toEqual(20);

        expect(calculateTipPercent(300, 60)).toEqual(20);

    })

    it('should add the new values to #paymentTable on appendTd()', function(){
        
        let curTable = document.querySelectorAll('#paymentTable tbody tr td')

        expect(curTable.length).toEqual(4);
        expect(curTable[0].innerText).toEqual('$100');
        expect(curTable[1].innerText).toEqual('$20');
        expect(curTable[2].innerText).toEqual('20%');
        expect(curTable[3].innerText).toEqual('X');

    })

    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');
    
        appendRemoveBtn(newTr);
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
      });

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
})