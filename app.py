from flask import Flask, render_template
import datetime
import os
import random
import sys
import uuid
import base64
import yaml
import re
import en
import time
import poet
from nocache import nocache






app = Flask(__name__)




@app.route('/')
@nocache

def index():
    return render_template('index.html')
    
#######################################################

@app.route('/about')
@nocache
def about():
    return render_template('about.html')
    
    
#######################################################

@app.route('/display')
@nocache
def display():
    
    poem = poet.main()

    split = poem.splitlines(True)
    
    print(split)
    

    return render_template('/display.html', poem=split)




if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8081, debug=True)
