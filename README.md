# CSV to wordlist parser

Parse a csv file to wordlist with '\n' as line break

Developed in **python 3**. Not tested in previous python versions.

Usage:
```bash
python3 index.py --f [file_to_be_parsed.csv] --c [column_to_be_parsed_1], [column_to_be_parsed_2],[...] 
```

### Params:
```--f, --file``` &nbsp; &nbsp;File name of csv to be parsed. Ex: names.csv

```--c, --columns``` &nbsp;&nbsp; Column names to be used in wordlist


The option ```--non-verbose```  was avaliable to supress the outputs in console.

A file called ```output.txt``` will be created with de wordlist at end of proccess.