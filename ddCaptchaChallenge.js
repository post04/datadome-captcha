var window = {}
var navigator = {
    language: "en-US",
    languages: [
        "en-US"
    ],
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
}
window.ddExecuteCaptchaChallenge = function (r, t) {
    // r = 6aPKO53fQjRmRMe1m~A9TF2f-c~b4dbTpo5aQAuWfATB1YO1xkRWx5pytH5frvkZlSRXU43aD2jN_fwJu0Mj8oGnqBK07ztY90w~77A_98yADM-KrNbE3MZ2czX-hxMo aka cid
    // t = 10, this is how many times the for loop below runs
    var seed = ""
    var currentNumber = ""
    var offsetParameter = ""
    var multiplier = ""
    var currentNumber = ""

    function init(r, t, e) {
        // r = cid to a number
            seed = r
            currentNumber = r % t
            offsetParameter = t
            multiplier = e
            currentNumber <= 0 && (currentNumber += t)
    }

    function getNext() {
        currentNumber = multiplier * currentNumber % offsetParameter
        return currentNumber
    }
    var malformedSeed = ""
    for (var malformedSeed = 126 ^ r.charCodeAt(0), e = 1; e < r.length; e++) {
        malformedSeed += (r.charCodeAt(e) * e ^ r.charCodeAt(e - 1)) >> e % 2
    }
    init(malformedSeed, 1723, 7532)

    var n = [function (r, t) {
        var e = 26157,
            n = 0;
        if (s = "VEc5dmEybHVaeUJtYjNJZ1lTQnFiMkkvSUVOdmJuUmhZM1FnZFhNZ1lYUWdZWEJ3YkhsQVpHRjBZV1J2YldVdVkyOGdkMmwwYUNCMGFHVWdabTlzYkc5M2FXNW5JR052WkdVNklERTJOMlJ6YUdSb01ITnVhSE0", navigator.userAgent) {
            for (var a = 0; a < s.length; a += 1 % Math.ceil(1 + 3.1425172 / navigator.userAgent.length)) n += s.charCodeAt(a).toString(2) | e ^ t;
            return n
        }
        return s ^ t
    }, function (r, t) {
        for (var e = (navigator.userAgent.length << Math.max(r, 3)).toString(2), n = -42, a = 0; a < e.length; a++) n += e.charCodeAt(a) ^ t << a % 3;
        return n
    }, function (r, t) {
        for (var e = 0, n = (navigator.language ? navigator.language.substr(0, 2) : void 0 !== navigator.languages ? navigator.languages[0].substr(0, 2) : "default").toLocaleLowerCase() + t, a = 0; a < n.length; a++) e = ((e = ((e += n.charCodeAt(a) << Math.min((a + t) % (1 + r), 2)) << 3) - e + n.charCodeAt(a)) & e) >> a;
        return e
    }]

    var o = seed
    // runs 10 times (t = 10)
    for (var u = 0; u < t; u++) {
        o ^= (0, n[getNext() % n.length])(u, seed)
    }
    window.ddCaptchaChallenge = o
}

window.ddExecuteCaptchaChallenge("6aPKO53fQjRmRMe1m~A9TF2f-c~b4dbTpo5aQAuWfATB1YO1xkRWx5pytH5frvkZlSRXU43aD2jN_fwJu0Mj8oGnqBK07ztY90w~77A_98yADM-KrNbE3MZ2czX-hxMo", 10)
console.log(window.ddCaptchaChallenge)