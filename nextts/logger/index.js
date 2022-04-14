const template = `{"level":"{errorName}","msg":"{msg}","time":"{time}"}`

const error = (msg) => {
    const datetime = new Date();
    const templateOut = template.replace("{errorName}", "error").replace("{msg}", msg.message + " - " + msg.stack).replace("{time}", datetime.toISOString())
    console.error(templateOut)
}
const info = (msg) => {
    var datetime = new Date();
    const templateOut = template.replace("{errorName}", "info").replace("{msg}", msg).replace("{time}", datetime.toISOString())
    console.info(templateOut)
}


module.exports = {
    error,
    info
}