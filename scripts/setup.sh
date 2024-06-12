#!/usr/bin/env bash

BASE=./App_Data

echo "Removed all files from the App_Data folder"
if [ -d $BASE/blobs ]
then
    rm -rf $BASE/blobs
fi
if [ -d $BASE/optiheadless.mdf ]
then
    rm -rf $BASE/optiheadless.mdf
fi
if [ -d $BASE/optiheadless_log.ldf ]
then
    rm -rf $BASE/optiheadless_log.ldf
fi

echo "Created new database"
cp $BASE/db.mdf $BASE/optiheadless.mdf
