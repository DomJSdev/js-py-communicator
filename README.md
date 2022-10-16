# das ist ein kleines Script die Kommunikation zwischen Python und JavaScript erlaubt  


**1) dieses programm startet einen `watcher` von der Lib `fs` der auf die Datei: `"bridge.txt"` lauscht ob es ein `change event gibt`** 

**2) nach 6 sec wird von der index.js ein Terminal Commando gesendet das mittels `execFile` von der der Lib `child_process`**

**3) das python programm liest mittels `cv2` von `opencv-python` ein Bild ein `pytesseract` wandelt dann das Bild in einen String um und schreibt den Text in die Datai `"bridge.txt"`**

**4) Javascript bekommt das change event von der Datei `"bridge.txt"` und list den inhalt aus**

## installiern

`pip3` install opencv-python

`pip3` install pytesseract 

