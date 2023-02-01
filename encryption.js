var options = {
    id: 'ddv1-captcha-container',
    audioId: 'captcha__audio',
    repeatIcon: 'fa fa-redo',
    captchaChallengeSeed: '6ac0b2acbab095c4799c234ed538cf57',
    captchaChallengePath: 'https://dd.prod.captcha-delivery.com/image/2023-01-06/6ac0b2acbab095c4799c234ed538cf57.png',
    captchaAudioChallenge: 'd399f41a18abc1b558855512801e57d8',
    captchaAudioChallengePath: 'https://dd.prod.captcha-delivery.com/audio/2023-01-06/en/d399f41a18abc1b558855512801e57d8.wav',
    width: 280,
    height: 155,
    sliderL: 42,
    sliderR: 9,
    offset: 5.0,
    maxLoadCount: 3,
    rt: 15,
    imagePath: "/images-encoded",
    labels: {
        title: 'Complete the CAPTCHA.',
        puzzleLoading: 'Loading...',
        puzzleIntro: 'Slide right to complete the puzzle.',
        puzzleFailure: 'The position of the slider is not correct.',
        puzzleSuccess: 'Puzzle solved in ## seconds.',
        puzzleRetry: 'Retry',
        audioIntro: 'Please type the numbers you hear.',
        audioPlay: 'Play',
        audioVerify: 'Verify',
        audioFailure: 'Incorrect response.',
        audioSuccess: 'Audio challenge solved.',
        switchToPuzzle: 'Switch to image CAPTCHA.',
        switchToAudio: 'Switch to audio CAPTCHA.',
        reload: 'Reload CAPTCHA.'
    }
}

function encryptPayload (t, e) {
  // encrypt payload
  // t = payload
  // e = char set "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_="["split"]("")
  var f = "";
  var x, h, T, p, A, z, y;
  var k = 0;
  for(; k < t.length; ) {
    x = t["charCodeAt"](k++);
    h = t["charCodeAt"](k++);
    T = t["charCodeAt"](k++);
    p = x>>2;
    A = (3 & x) << 4 | h >> 4;
    z = ((h&15)<< 2)| (T>>6);
    y = T & 63;
    isNaN(h) ? z = y = 64 : isNaN(T) && (y = 64);
    f = ((f + e[p] + e[A])+ e[z])+ e[y];
  }
  return f
}

function s(t, e) {
  var I,
    l,
    x = t["length"];
  e = e || 1;
  for (var T; 0 !== x;) l = Math["floor"]((T = void 0, (T = e++ / 3 * 10000) - Math["floor"](T)) * x), I = t[x -= 1], t[x] = t[l], t[l] = I;
  return t;
}

function createSeed(t, e) {
    // t = original charset (normal base64 charset)
    // e = options passed into var captcha = sliderCaptcha({
    var C = e["captchaChallengeSeed"];
    var k = 0;
    for (var A = 0; A < C["length"]; A++) {
      k = (k << 5) - k + C["charCodeAt"](A), k &= k;
    }
    var f = Math["floor"](e["offset"]/ C["length"]);
    for (var z = 0; z < C["length"]- 2; z++) f += C["charAt"](z + 1)["charCodeAt"]() % 370;
    var w = f["toString"]()["split"](".")[0];
    var y = -3;
    for (var O = 0; O < w["length"]; O++) y += parseInt(w[O]) % C["length"];
    t = s(t, y);
    return t
  }

var unc = JSON.stringify(require("./captcha_payload_example.json"))
var charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_="["split"]("")
charset = createSeed(charSet, options)
console.log(encryptPayload(unc, charSet))
