from backend import app

app.run(host='0.0.0.0', port=5000, debug=True)  # 127.0.0.1だとDockerで外部に公開されない
