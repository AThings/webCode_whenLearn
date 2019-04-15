@IF EXIST "%~dp0\bash.exe" (
  "%~dp0\bash.exe"  "%~dp0\node_modules\n\bin\n" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  bash  "%~dp0\node_modules\n\bin\n" %*
)