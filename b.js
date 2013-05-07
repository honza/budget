var parser = require('./budget');
var fs = require('fs');
var _ = require('underscore');

var input = process.argv[2];
input = fs.readFileSync(input, 'utf8');

var result = parser.parse(input);

var sort, calculateBalance, parseAmounts, has, parse, penniesToDollars,
    showBalance;


sort = function(list) {
    return _.sortBy(list, function(node) {
        return node.date;
    });
};

calculateBalance = function(list) {
    return _.reduce(list, function(memo, node) {
        return memo + node.amount;
    }, 0);
};

has = function(s, pattern) {
    return s.indexOf(pattern) > -1;
};



parseAmounts = function(list) {
    return _.map(list, function(node) {
        node.amount = parse(node);
        return node;
    });
};

parse = function(node) {
    var n = node.amount, negative = false, res;

    if (has(n, '-')) {
        negative = true;
    }

    if (has(n, '.')) {
        var parts = n.split('.');
        res = Math.abs(parseInt(parts[0], 10) * 100) + parseInt(parts[1], 10);
    } else {
        res =  Math.abs(parseInt(n, 10) * 100);
    }

    if (negative) {
        return res * -1;
    }

    return res;
};

penniesToDollars = function(amount) {
    return "$" + (amount / 100).toFixed(2);
};

showBalance = function(list) {
    return penniesToDollars(
        calculateBalance(
            parseAmounts(
                result
    )));
};

console.log(showBalance(result));
