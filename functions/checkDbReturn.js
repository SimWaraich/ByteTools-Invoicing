function checkDbReturn(xml) {
    if (xml && xml["results"].length > 0) {
        return true;
    }
    return false;
}

module.exports = checkDbReturn