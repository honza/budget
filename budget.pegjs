start
  = main:line* { return main; }

description
  = letters:[\&\.,\(\)'\":0-9a-zA-Z ]+ { return letters.join("").trim(); }

line
  = when:date " " desc:description d:amount "\n" { return {
        amount: d,
        description: desc,
        date: when
    };}

amount
  = neg:"-"? "$" dollars:[0-9\.]+ { return (neg? "-" : "") + dollars.join("");}

date
  = year:[0-9]+ "-" month:[0-9]+ "-" day:[0-9]+ { return new Date(
    parseInt(year.join(""), 10),
    parseInt(month.join(""), 10) - 1,
    parseInt(day.join(""), 10))}
