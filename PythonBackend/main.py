from flask import Flask, jsonify, request
from flask_cors import CORS
import predict
app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/chatai', methods=['POST'])
def aichatbot():
    try: 
        data = request.get_json()
        query = data.get('query')
        #query = request.form['uinput']
        result = predict.ask_ai(query)
        parts = result.response.split(":")
        result = parts[1].strip()
        response_data = {
            'result': result
        }
        return jsonify(response_data)
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)