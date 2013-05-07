if exists("b:current_syntax")
    finish
endif

let b:current_syntax = "budget"

syntax match budgetDate "\v^[0-9-]+"
syntax match budgetDesc "\v\s[&0-9a-zA-Z\.,'\(\):]+"
syntax match budgetAmount "\v-?\$[0-9.]+"

highlight link budgetDate Keyword
highlight link budgetDesc String
highlight link budgetAmount Function
