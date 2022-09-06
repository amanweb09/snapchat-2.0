const {

    REACT_APP_URL,
    PORT,
    LOCAL_DB_URL,
    ACCESS_SECRET,
    COOKIE_SECRET,
    HASH_SECRET

} = process.env

module.exports.clientUrl = REACT_APP_URL
module.exports.port = PORT || '5100'
module.exports.localdb = LOCAL_DB_URL
module.exports.accessSecret = ACCESS_SECRET
module.exports.cookieSecret = COOKIE_SECRET
module.exports.hashsecret = HASH_SECRET