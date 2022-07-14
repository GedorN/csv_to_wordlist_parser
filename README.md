# CSV to wordlist parser

Parse a csv file to wordlist with '\n' as line break

Developed in **node** version **12**. Not tested in previous node versions.

Usage:
```bash
$ node index <file_to_be_parsed.csv> <column_to_be_parsed_1> <column_to_be_parsed_2> <...> 
```

The option ```--non-verbose```  was avaliable to supress the outputs in console.

A file called ```output.txt``` will be created with de wordlist at end of proccess.