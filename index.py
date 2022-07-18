#!/usr/bin/env python
# Developed by Gedor Neto
# Email: gedor.silvaneto@gmail.com

import csv
import optparse
import sys


def set_up():
    parser = optparse.OptionParser()
    parser.add_option("--nv", "--non-verbose", dest="non_verbose", help="Use for no output in terminal", action='store_true')
    parser.add_option("--c", "--columns", dest="columns", help="The name of the columns to parse in wordlist.txt separarated by comma. Ex: python index --c column1,column2,columnN")
    parser.add_option("--f", "--file", dest="file", help="CSV file name with extension")
    return parser.parse_args(), parser

(options, arguments), parser = set_up()
print(options.non_verbose)
input_file = None
try:
    input_file = csv.DictReader(open(options.file))
except:
    print("[-] Cannot open " + str(options.file) + " file.")
    sys.exit()
        
f = open("output.txt", "w")


if not options.columns:
    parser.error("parameter [columns] required. Use --help for more info.")

columns = options.columns.split(",")
print("[+]Starting process.")
for (index, row) in enumerate(input_file):
    if options.non_verbose:
        print(f'[{index + 1}] Processing...')
    for column in columns:
        f.write(row[column])
        f.write("\n")
print("[+] output.txt successfully processed")

f.close()
    
