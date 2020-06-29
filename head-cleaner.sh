#!/bin/bash
# ALL HTML FILES
FILES="_site/-pdf-trade-all.html"
touch _site/-pdf-trade-all-final.html
# for loop read each file
for f in $FILES
do
INF="$f"
OUTF="_site/-pdf-trade-all-final.html"

# replace javascript
sed '/---/,/---/d' $INF > $OUTF
#sed '' $INF > $OUTF
#/bin/cp $OUTF $INF
#/bin/rm -f $OUTF
done