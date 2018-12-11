from app import app
from flask import render_template


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/galeria')
def getGalary():
    # Ten kod bedzie pomocniczy tak sie nie robi
    obrazki = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiKSmuISvOrC3rELVcZxm2YSmb3sQ8gbfJQdDs72pyu4u3UJk0',
        'http://www.koty.pl/wp-content/uploads/2017/11/shutterstock_589722092-e1510059950350.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiKSmuISvOrC3rELVcZxm2YSmb3sQ8gbfJQdDs72pyu4u3UJk0'
    ]
    return render_template('galeria.html', obrazki=obrazki)

@app.route('/memy')
def memy():
    return render_template('memy.html')

@app.route('/alexa')
def alexa():
    return render_template('/alexa.html')