Budget
======

This is a simple command-line tool to help keep track of your expenses.  It
consists of a `b.js` command and a special file format, `*.b`.  Included in
theh repo is a vim plugin to give you syntax highlighting and filetype
detection for `.b` files.

File format
-----------

```
2013-05-08 paycheck                                                      $2000
2013-05-07 computers                                                    -$20
2013-05-05 pen and paper                                                -$20
2013-05-03 3 pizzas                                                     -$10
```

Command
-------

    $ b.js sample.b

This will add up all of your income and expenses and give you a total.

TODO
----

* Spending per month
* Show all items under/over a certain amount
* ASCII spending graph over time

How it works
------------

This started as a learning project.  The `.b` file parsing is implemented using
a PEG parser, pegjs.  You can see the grammar in `budget.pegjs`.  This grammar
is then compiled to Javascript.  The parser produces a simple AST which is then
parsed by the `b.js` file.

License
-------

BSD, short and sweet
