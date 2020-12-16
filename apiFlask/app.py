from ConexionDB import app
import Rutes_arquetipos
import Rutes_historiales
from flask import Flask,render_template

app = Flask(__name__, template_folder='template')

@app.route('/', methods=['GET'])
def root():
    return render_template('index.html')

if __name__ == '__main__': 
    app.config["COMPRESS_REGISTER"] = False  # disable default compression of all eligible requests
    app.run(debug=True) 
