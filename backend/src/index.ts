import App from './app'

const app = new App().app

app.listen(app.get('port'), () => console.log('Server on Port ' + app.get('port')))
