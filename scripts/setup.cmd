@ECHO OFF
SETLOCAL

SET BASE=.\App_Data

ECHO Removed all files from the App_Data folder
IF EXIST %BASE%\blobs\ RMDIR %BASE%\blobs\ /S/Q || EXIT /B 1
IF EXIST %BASE%\optiheadless.mdf DEL %BASE%\optiheadless.mdf /F/Q || EXIT /B 1
IF EXIST %BASE%\optiheadless_log.ldf DEL %BASE%\optiheadless_log.ldf /F/Q || EXIT /B 1

ECHO Created new database
XCOPY %BASE%\db.mdf %BASE%\optiheadless.mdf* /Y/C || EXIT /B 1

EXIT /B %ERRORLEVEL%
