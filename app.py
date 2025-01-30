from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/sortapp')
def sortapp():
    return render_template('sortapp.html')


@app.route('/landest')
def landest():
    return render_template('landest.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003, debug=True)
