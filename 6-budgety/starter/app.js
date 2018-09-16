// BUDGET CONTROLLER
var budgetController = (function () {
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description
        this.value = value
    }
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description
        this.value = value
    }
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }
    return {
        addItem: function(type, des, val) {
            var newItem;
            var ID = 0;
            if (type == 'exp') {
            new Expensve(ID, des, val)
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val)
            }

            data.allItems[type].push(newItem)
        }
    }
})()
// UI CONTROLLER
var UIController = (function () {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add_description',
        inputValue: '.add_value',
        inputBtn: 'add__btn'
    }
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },
        getDOMstrings: function () {
            return DOMstrings;
        }
    }
})();

var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {
        // 1. Get the input data
        // 2. Add item to budget controller
        // 3. Add item to UI
        // 4. Calc budget
        // 5. Display the budget on the UI.
    }
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)
    if (e.target.keyCode === 13 || e.target.which === 13) {

    }

    document.addEventListener('keypress', function (event) {

    })
})(budgetController, UIController);


















