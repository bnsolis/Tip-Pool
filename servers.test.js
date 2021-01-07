// NOTE (bsolis): To Do List:
// submitServerInfo --> Test provided by Springboard.
// updateServerTable --> Created test to verify values added correctly to #serverTable.
// afterEach --> Created a "reset" to run after each test. This just cleared all values.


describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a new server to the server table on updateServerTable()', function(){
    // NOTE (bsolis): After the submitSeverInfo and updateServerTable functions are ran, we should add a new server to the table.
    submitServerInfo();
    updateServerTable();

    // NOTE (bsolis): Here we assign a var to equal the data within the table to check and make sure that once the function runs, we get 'Alice' and her corresponding information.
    let curTable = document.querySelectorAll('#serverTable tbody tr td')

    expect(curTable.length).toEqual(3);
    expect(curTable[0].innerText).toEqual('Alice')
    expect(curTable[1].innerText).toEqual('$0.00')
    expect(curTable[2].innerText).toEqual('X')
  });

  afterEach(function() {
    // teardown logic
    // NOTE (bsolis): This code ensures that the page does not always load with an Alice value.
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
    });
});
