console.log("JavaScript loaded");

var expression = document.getElementById("expression");
var result = document.getElementById("result");

var buttons = document.querySelectorAll(".buttons button");

var input = "";
var previousInput = "";
var opr = null;

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var value = button.textContent;
        // console.log(value);
        if (value >= "0" && value <= "9") {
            // console.log(value);
            handleNum(value);

        }
        else if (value === "+" || value === "-" || value === "*" || value === "/") {
            handleOpr(value);
        }
        else if (value === "=") {
            calculate();
        }
        else if (value === "C") {
            clear();
        }
        else if (value === ".") {
            handleDecimal();
        }
        else if (value === "❎") {
            del();
        }
        else if (value === "%") {
            handlePercentage();
        }


    })

    function handleNum(value) {
        input = input + value;
        result.textContent = input;

        if (previousInput != "" && opr != null) {
            expression.textContent = previousInput + " " + opr + " " + input;
        }
    }

    function handleOpr(operator) {
        if (previousInput != "" && input != "" && opr != null) {
            calculate();
        }

        if (input != "") {
            opr = operator;
            previousInput = input;
            input = "";
            expression.textContent = previousInput + " " + operator;
            result.textContent = "";
        }
    }

    function calculate() {
        if (input == "" || previousInput == "") {
            return;
        }
        var num1 = parseFloat(previousInput);
        var num2 = parseFloat(input);
        var ans;

        if (opr == "+") {
            ans = num1 + num2;
        }
        else if (opr == "-") {
            ans = num1 - num2;
        }
        else if (opr == "*") {
            ans = num1 * num2;
        }
        else if (opr == "/") {
            ans = num1 / num2;
        }

        expression.textContent = previousInput + " " + opr + " " + input;
        result.textContent = "= " + ans;
        input = ans.toString();
        previousInput = "";
        opr = null;
    }

    function clear() {
        input = "";
        opr = null;
        previousInput = "";

        expression.textContent = "";
        result.textContent = "";
    }

    function del() {
        // input = input.slice(0, -1);

        // result.textContent = input;
        // if (previousInput != "" && opr != null) {
        //     expression.textContent = previousInput + " " + opr + " " + input;
        // }
        // expression.textContent = previousInput + "" + opr + "" + input;

        if (input != "") {
            input = input.slice(0, -1);
            result.textContent = input || "0";

            if (previousInput != "" && opr != null) {
                if (input != "") {
                    expression.textContent = previousInput + " " + opr + " " + input;
                } else {
                    expression.textContent = previousInput + " " + opr;
                }
            } else {
                expression.textContent = "";
            }
        }
        else if (opr != null) {
            opr = null;
            input = previousInput;
            previousInput = "";
            expression.textContent = "";
            result.textContent = input || "0";
        }
    }

    function handleDecimal() {
        if (input == "") {
            input = "0.";
        }
        else if (!input.includes('.')) {
            input = input + '.';
        }

        result.textContent = input;

        if (previousInput != "" && opr != null) {
            expression.textContent = previousInput + " " + opr + " " + input;
        }
    }
    function handlePercentage() {
        if (input != "") {
            input = (parseFloat(input) / 100).toString();
            result.textContent = input;
        }
    }

})