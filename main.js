const {app, BrowserWindow, Notification} = require('electron');

app.on('ready', async () => {
    const myWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            allowRendererProcessReuse: true
        }
    })

    myWindow.setTitle('yerd');

    await myWindow.loadFile('index.html')

    let myNotification = new Notification('Title', {
        body: 'Lorem Ipsum Dolor Sit Amet'
    })

    myNotification.emit();
})