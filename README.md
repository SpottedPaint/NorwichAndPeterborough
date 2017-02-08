# Norwich and Peterborough

Quick bodge to grab your transaction content from Norwich and Peterborough account pages, run from browser Scratchpad / console

##Source tables rows look like this
    date, what, out, in, balance
    01 Feb 2017, Burger King, 5, , 123
    , Whopper, ,
    02 Feb 2017, Employer, , 100, 223

Replaces page content with data you can copy paste to a csv file for eventual import to spreadsheet

    '01 Feb 2017','Burger King Re:Whopper','5','','123'
    '02 Feb 2017','Employer','', '100', '223'

Bit yawny as they only let you do 3 months at a time, and then have to go back and resubmit form data to go to next period.
Not great JavaScript but it worked for me and might be some use to someone else.
