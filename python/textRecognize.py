# Get tesseract from here: https://github.com/UB-Mannheim/tesseract/wiki

import os
import cv2
import pytesseract
import sys
pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'

print(os.path.exists("./test.png"))
encode = sys.getdefaultencoding()
print(encode)
print('the file exist: ', os.path.exists("./python/test.png"))

image = cv2.imread(r"./python/test.png")
text = pytesseract.image_to_string(image)
#text = 'hello I´am python :)'

file = open('./python/bridge.txt', 'w', encoding='utf-8')
file.write(text)
file.close()
