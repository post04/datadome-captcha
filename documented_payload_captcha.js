var a = {
    "pcso": "1110c119176708981b578523c18bc7eb", // piccasso fingerprint hash, see pcsoNumShapes and pcsoSeed
    /*
    M = document["createElement"]("canvas")["getContext"]("webgl")
    if (navigator["buildID"] && +/Firefox\/(\d+)/["exec"](navigator["userAgent"])[1] > 91) {
        a = M["VENDOR"], 
        r = M["RENDERER"]
    }else {
      var u = M["getExtension"]("WEBGL_debug_renderer_info");
      a = u["UNMASKED_VENDOR_WEBGL"],
      r = u["UNMASKED_RENDERER_WEBGL"];
    }
    M.getParameter(a)
    */
    "glvd": "Google Inc. (NVIDIA)", // WGL vendor
    "glrd": "ANGLE (NVIDIA, NVIDIA GeForce RTX 3090 Direct3D11 vs_5_0 ps_5_0, D3D11)", // WGL renderer
    "phe": false, // !!window.phantom
    "nm": false, // !!window.__nightmare
    "awe": false, // !!window.awesomium
    "geb": false, // !!window.geb
    "dat": false, // !(!window.domAutomation && !window.domAutomationController)
    "sqt": false, // window.external && window.external.toString && window.external.toString().indexOf("Sequentum") > -1
    "wdb": false, // !!window.navigator.webdriver"]
    "hl": false, // window.navigator.userAgent.indexOf.("Headless") > -1
    "ucdv": false, // typeof objectToInspect !== "undefined" && null === objectToInspect && typeof result !== "undefined" && !!result
    "hc": 32, // navigator["hardwareConcurrency"]
    "tzp": "America/New_York", // window["Intl"] && Intl["DateTimeFormat"] && Cc["ahcTJ"](typeof Intl["DateTimeFormat"]["prototype"]["resolvedOptions"], "function") && Intl["DateTimeFormat"]()["resolvedOptions"]()["timeZone"] || "NA"
    "rs_w": 1920, // window["screen"]["width"]
    "rs_h": 1080, // window["screen"]["height"]
    "isb": false, // !!navigator["brave"]
    /*
    function Zc() {
      var e = "";
      if (window["navigator"]["plugins"]) {
        if (0 == window["navigator"]["plugins"]["length"]) e = "empty";else {
          for (var o = [], n = 0; n < window["navigator"]["plugins"]["length"]; n++) o["push"](window["navigator"]["plugins"][n]["name"]);
          e = o["join"]();
        }
      } else e = "NA";
      return e;
    }
    */
    "plu": "PDF Viewer,Chrome PDF Viewer,Chromium PDF Viewer,Microsoft Edge PDF Viewer,WebKit built-in PDF",
    /*
    function Hc() {
      var e = "";
      if (window["navigator"]["mimeTypes"]) {
        if (0 == window["navigator"]["mimeTypes"]["length"]) e = "empty";else {
          for (var o = [], n = 0; n < window["navigator"]["mimeTypes"]["length"]; n++) o["push"](window["navigator"]["mimeTypes"][n]["type"]);
          e = o["join"]();
        }
      } else e = "NA";
      return e;
    }
    */
    "mmt": "application/pdf,text/pdf",
    /*
    c = Object["getOwnPropertyDescriptor"](navigator["__proto__"], "hardwareConcurrency")["get"], 
    M = Object["getOwnPropertyDescriptor"](navigator["__proto__"], "platform")["get"], 
    s = Function["prototype"].toString

    function Rc(t) {
      if (window["Object"] && typeof window["Object"]["getPrototypeOf"] === "function" && window["chrome"]) {
        var o = Object["getPrototypeOf"](t);
        try {
          Object["setPrototypeOf"](t, t).toString();
        } catch (t) {
          return t["name"] === "RangeError";
        } finally {
          Object["setPrototypeOf"](t, o);
        }
      }
      return !1;
    }

    function Gc(t) {
      if (window["Object"] && typeof window["Object"]["getPrototypeOf"] === "function" && window["chrome"]) {
        var o = Object["getPrototypeOf"](t);
        try {
          Object["setPrototypeOf"](t, t).toString();
        } catch (t) {
          if (typeof t["stack"] === "string") {
            var n = t["stack"]["split"]("\n");
            if (n["length"] > 2) return n[0]["indexOf"]("TypeError: Cyclic") === 0 && n[1]["indexOf"]("at Object.setPro") > -1;
          }
        } finally {
          Object["setPrototypeOf"](t, o);
        }
      }
      return !1;
    }
    */
    "hcovdr": false, // Rc(c)
    "plovdr": false, // Rc(M)
    "ftsovdr": false, // Rc(s)
    "hcovdr2": false, // Gc(c)
    "plovdr2": false, // Gc(M)
    "ftsovdr2": false, // Gc(s)
    /*
    var D = !!navigator["deviceMemory"],
    W = !!navigator["buildID"],
    I = !!1,
    l = 50,
    j = new RegExp("[p_]{3}up[tep]{4}er[ae_v]{4}lua[noti]{4}"),
    x = new RegExp("eval\\sat\\sevaluate|@chrome|evaluate@"),
    h = new RegExp("eval\\sat\\sexecuteScript");
    function T(r) {
      ! if not a function, don't care
      if (typeof r !== "function") return r;
      ! if not a native function, don't care
      if (!r.toString().match(/\{\s*\[native code\]\s*\}$/m) || !r.toString.toString().match(/\{\s*\[native code\]\s*\}$/m)) {
        return r;
      }
      return function () {
        ! if we've already gone thru 50 or more native functions (or exceeded 30000ms), don't care
        if (l <= 0 || !I) return r.apply(this, arguments);
        l--;
        try {
          ! this function is called with the following:
          ! document["getElementById"] = document["getElementById"]
          ! document["getElementsByTagName"] = document["getElementsByTagName"]
          ! document["querySelector"] = document["querySelector"]
          ! document["querySelectorAll"] = document["querySelectorAll"]
          ! document["evaluate"] = document["evaluate"]
          ! XMLSerializer && XMLSerializer["prototype"] && XMLSerializer["prototype"]["serializeToString"] && (XMLSerializer["prototype"]["serializeToString"] = T(XMLSerializer["prototype"]["serializeToString"])
          ! so I guess what we're doing is hooking all those functions and making cfpfe the btoa of their callee.callerr until we get to 50
          ! therefore, cfpfe is the 50th
          ! theoretically this should be the same every time?
          var e = arguments.callee.caller.toString();
          t.cfpfe = btoa(e.substring(0, 150)), 
          e.indexOf("on(selector, wit") > -1 && (t.cffrb = !0);
        } catch (e) {
          t.cfpfe = btoa("Error: " + e.message.substring(0, 150));
        }
        try {
          ! on purpose error to cause stacktrace log
          null[0];
        } catch (e) {
          if ("string" != typeof e.stack) return r.apply(this, arguments);
          t.stcfp = btoa(e.stack.substring(e.stack.length - 150));
          var o = e.stack.split("\n");
          ! D is true normally, however, none of these get set
          if (D) try {
            var n = o.length > 1 && j.test(o[2]);
            n && (t.cfpp = !0);
            var i = o.length > 2 && x.test(o[o.length - 3]);
            i && (t.cfcpw = !0);
            var c = o.length > 9 && (h.test(o[o.length - 8]) || h.test(o[o.length - 9]) || h.test(o[o.length - 10]));
            c && (t.cfse = !0);
          } catch (t) {} else if (W) try {
            var a = o.length > 2 && x.test(o[o.length - 3]);
            a && (t.cffpw = !0);
          } catch (t) {}
        }
        return r.apply(this, arguments);
      };
    */
    "cfpfe": "ZnVuY3Rpb24gKCkgewoKICAgIC8vID49IElFOCBxdWVyeVNlbGVjdG9yQWxsCgogICAgdmFyIGNvbnRhY3RTdXBwb3J0Q29tbWVudCA9ICdDb21tZW50JzsKICAgIHZhciBodW1hbkNvbW1lbnRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1hbi1jb21t",
    "stcfp": "dHRpbmdoYW0lMjUyMGZvcmVzdCUyRjIwMjItMTItMjdfMjAuMDAlMkZvbGQlMjUyMHRyYWZmb3JkJTNGaGFsbG1hcCZzPTQyMTAzJmU9NmI5M2MwMzExZjRkZjZlYWI5NmRjMDM0NTYwN2RlYTA1YTVlYTg1MDdiMDMzMDQ4OTRhNjVkM2JmMzljNWQyNjo0NDI6MTQp",
    /*
    other useful piccaso values they use:
    {
        area: {
          width: 300,
          height: 300
        },
        offsetParameter: 2001000001,
        fontSizeFactor: 1.5,
        multiplier: 15000,
        maxShadowBlur: 50
    }
    NOTE: these could be random, I did not test if the script was dynamic
    */
    "pcsoNumShapes": 5, // Math.floor(Math.random() * 9)
    "pcsoSeed": 2263, // captchaChallengeSeed.charCodeAt(index++)
    // ! START OF MOUSE EVENT STUFF !
    /*
    __coordsList is full of mouseEvents where x, y, and ts are added via:
    this[["recordEvent"]] = function (t) {
      t && "mousemove" == t.type && t.isTrusted && this[["_coordsList"]].push({
        x: t.clientX,
        y: t.clientY,
        ts: t.timeStamp
      });
    }

    this[["_getMoveWindows"]] = function (t, e) {
      for (var o = [], n = 0; n < t.length - e + 1; n++) o.push(t.slice(n, n + e));
      return o;
    }

    this[["_computeMoveCardinalDistances"]] = function (t) {
      for (var e = 0, o = 0, n = 0, i = 0, c = 0; c < t.length; c++) {
        var a = t[c],
          r = a[0],
          M = a[1],
          u = Math.abs(r.x - M.x),
          d = Math.abs(r.y - M.y);
        M.x < r.x ? e += u : o += u, M.y < r.y ? n += d : i += d;
      }
      return {
        left: e,
        right: o,
        up: n,
        down: i
      };
    }

    this[["_getDistBetweenPoints"]] = function (t, e) {
        for (var o = Math.min(t.length, e.length), n = [], i = 0; i < o; i++) n.push(e[i] - t[i]);
        return this[["_norm"]](n);
    }

    this[["_norm"]] = function (t) {
        for (var e = 0, o = 0; o < t.length; o++) e += t[o] * t[o];
        return Math.sqrt(e);
    }

    this[["_getFilteredSpeeds"]] = function (t) {
      for (var e = [], o = [], n = [], i = 0; i < t.length; i++) {
        var c = t[i],
          a = c[0],
          r = c[c.length - 1],
          M = (r.ts - a.ts) / 1000;
        e.push(this[["_getDistBetweenPoints"]]([a.x, a.y], [r.x, r.y]) / M)
        ,o.push(this[["_getDistBetweenPoints"]]([a.x], [r.x]) / M)
        ,n.push(this[["_getDistBetweenPoints"]]([a.y], [r.y]) / M);
      }
      return {
        speeds: e,
        xSpeeds: o,
        ySpeeds: n
      };
    }
    e = Date[["now"]]()
    o = this[["_getMoveWindows"]](this[["_coordsList"]], 2)
    i = this[["_getMoveWindows"]](this[["_coordsList"]], Math.min(this[["_coordsList"]].length, 5)),
    r = this[["_getFilteredSpeeds"]](i)
    c = this[["_computeMoveCardinalDistances"]](o)
    */
    "m_crdL": 0, // c.left
    "m_crdR": 136, // c.right
    "m_crdU": 9, // c.up
    "m_crdD": 1, // c.down
    /*
    this[["_computeAvg"]] = function (t) {
      if (!t || 0 == t.length) return null;
      for (var e = 0, o = 0; o < t.length; o++) e += t[o];
      return e / t.length;
    }, this[["_computeSD"]] = function (t) {
      if (!t || 0 == t.length) return null;
      for (var e = this[["_computeAvg"]](t), o = 0, n = 0; n < t.length; n++) {
        var i = e - t[n];
        o += Math.pow(i, 2);
      }
      var c = o / t.length;
      return Math.sqrt(c);
    }

    this[["_getDispersion"]] = function (t) {
      for (var e = [], o = 0; o < t.length; o++) e.push(t[o].y);
      return {
        yAvg: this[["_computeAvg"]](e),
        ySD: this[["_computeSD"]](e)
      };
    }

    a = this[["_getDispersion"]](this[["_coordsList"]])
    */
    "m_yDspA": 655.8534482758621, // a.yAvg
    "m_yDspSD": 1.9750788301370754, // a.ySD
    "m_spdA": 295.37366050013753, // this[["_computeAvg"]](r.speeds)
    "m_spdSD": 111.31145548935622, // this[["_computeSD"]](r.speeds)
    "m_xSpdA": 291.8761515093098, // this[["_computeAvg"]](r.xSpeeds)
    "m_xSpdSD": 111.35260585136403, // this[["_computeSD"]](r.xSpeeds)
    "m_ySpdA": 20.996206893651934, // this[["_computeAvg"]](r.ySpeeds)
    "m_ySpdSD": 40.04882128993993, // this[["_computeSD"]](r.ySpeeds)
    /*
    this[["_getStraigthness"]] = function (t, e) {
      for (var o = this[["_getDistBetweenPoints"]]([t[0].x, t[0].y.], [t[t.length - 1].x, t[t.length - 1].y]), n = 0, i = 0; i < e.length; i++) {
        var c = e[i][0],
          a = e[i][1];
        n += this[["_getDistBetweenPoints"]]([c.x, c.y], [a.x, a.y]);
      }
      return o / n;
    }
    */
    "m_str8": 0.9429852339820459, // this[["_getStraigthness"]](this[["_coordsList"]], o)
    /*
    this[["_getLineEq"]] = function (t, e) {
      var o = (e.y - t.y) / (e.x - t.x);
      return {
        a: o,
        b: t.y - o * t.x
      };
    }, this[["_distPointToLine"]] = function (t, e, o) {
      return Math.abs((o.x - e.x) * (e.y - t.y) - (e.x - t.x) * (o.y - e.y.)) / Math.sqrt(Math.pow(o.x - e.x, 2) + Math[["pow"]](o.y - e.y, 2));
    }, this[["_pointComparedToLine"]] = function (t, e, o) {
      return t.y - (e * t.x + o);
    }

    this[["_distancesToStraightLine"]] = function (t) {
      for (var e = t[0], o = t[t.length - 1], n = this[["_getLineEq"]](e, o), i = [], c = [], a = 0; a < t.length; a++) {
        var r = t[a],
          M = this[["_distPointToLine"]](r, e, o),
          u = this[["_pointComparedToLine"]](r, n.a, n.b);
        u >= 0 && i.push(M), u <= 0 && c.push(M);
      }
      return {
        below: i,
        above: c
      };
    }

    this[["_max"]] = function (t) {
      return Math.max.apply(null, t);
    }

    M = this[["_distancesToStraightLine"]](this[["_coordsList"]])
    */
    "m_maxDstB": 0.35233213170882205, // this[["_max"]](M.below)
    "m_maxDstA": 4.756483778069098, // this[["_max"]](M.above)
    /*
    this[["_getExtremePoints"]] = function (t) {
      for (var e = t[0], o = t[0], n = 1; n < t.length; n++) {
        var i = t[n];
        (i.x < e.x || i.x == e.x && i.y > e.y) && (e = i), (i.x > o.x || i.x == o.x && i.y < o.y) && (o = i);
      }
      return {
        left: e,
        right: o
      };
    }, this[["_getBucketsBounds"]] = function (t, e) {
      for (var o = this[["_getExtremePoints"]](t), n = (o.right.x - o.left.x) / e, i = [], c = 0; c < e; c++) i.push(o.left.x + c * n);
      return i.push(o.right.x), i;
    }, this[["_placePointsInBuckets"]] = function (t, e, o) {
      for (var n = [], i = 0; i < o; i++) n.push([]);
      for (var c = 0; c < t.length; c++) for (var a = t[c], r = 0; r < e.length; r++) if (a.x <= e[r + 1]) {
        n[r].push(a);
        break;
      }
      return n;
    }
    this[["_bucketTrajectories"]] = function (t, e) {
      for (var o = this[["_getBucketsBounds"]](t, e), n = this[["_placePointsInBuckets"]](t, o, e), i = [], c = 0; c < e; c++) {
        for (var a = n[c], r = [], M = 0; M < a.length; M++) r.push(a[M].y);
        r.length > 0 && i.push({
          x: o[c],
          y: this[["_computeAvg"]](r)
        });
      }
      return i;
    }

    this[["_getAreas"]] = function (t) {
      if (t.length < 2) return {
        lower: null,
        upper: null
      };
      for (var e = this[["_getLineEq"]](t[0], t[t.length - 1]), o = 0, n = 0, i = 0; i < t.length - 1; i++) {
        var c = t[i],
          a = t[i + 1],
          r = e.a * c.x + e.b,
          M = e.a * a.x + e.b,
          u = (a.x - c.x) * (Math.abs(r - c.y) + Math.abs(M - a.y)) / 2;
        (c.y + a.y) / 2 < e.a * (c.x + a.x) / 2 + e.b ? n += u : o += u;
      }
      return {
        lower: o,
        upper: n
      };
    }

    u = this[["_bucketTrajectories"]](this[["_coordsList"]], 30)
    d = this[["_getAreas"]](u)
    */
    "m_arL": 1.1333333333330682, // d.lower
    "m_arU": 261.2059770114989, // d.upper
    "m_csd": 3, // Date.now() - e; e can be seen line 148; time taken in ms to compute all this math
    "m_cnt": 116, // this[["_coordsList"]].length; length of mouse movements
    "log1": 30, // u.length
    // ! END OF MOUSE EVENT STUFF !
    "bAudio": false, // if it's an audio challenge or not (slider is always false)
    "xUser": 124, // parseInt(this[["block"]][["style"]][["left"]].split("px")[0]); where the left side of your puzzle piece is?
    "jst3a": 7594, // this[["displayStartTime"]] ? Date.now() - this[["displayStartTime"]] : -1; how long it took you to solve the challenge from since it was rendered
    "jstsoc": 1093 // this[["displayStartTime"]] ? Date.now() - this[["displayStartTime"]] : -1; how long it took you to solve the challenge from since you first moved the slider
}

var final = {
    // hard coded
    cid: "6aPKO53fQjRmRMe1m~A9TF2f-c~b4dbTpo5aQAuWfATB1YO1xkRWx5pytH5frvkZlSRXU43aD2jN_fwJu0Mj8oGnqBK07ztY90w~77A_98yADM-KrNbE3MZ2czX-hxMo",
    // hard coded
    icid: "AHrlqAAAAAMAb69hFMVHshoAWdi-1w==",
    // hard coded, only seen it empty
    ccid: null,
    // hard coded
    userEnd: "1153be2b8fb2b1b1d436bb6481a1db0710057966daa7064532ae393847b2a86b",
    // hard coded
    ddCaptchaChallenge: "0f928f44968c98cb9de4989504781e2f",
    // encrypted payload above
    ddCaptchaResponse: "xR0zol=QCMbXWcykomKjo5v5osWlWmWSWmLl=NL5WsWh=2Wj=M=X=-KXD90qe3y6CMbXF5pQy5hZCvZfoR7Kiv8suGF0Lu6XD90qe306CMbXLG83mvGKiv8suGF0LuzKmZy0FvZgCvJZFNpRo5GKGZFoC-WzEmaKFcZRys=jWjLhWug54S_SH2aK43=V=Y_zD9gvWjLhWu6XD90zIcGXENyke3=ZD90feuCnyNBP45GPCNBlyuCnyNBP45GPCNJZoXCnyNBP45GPCNFkJ9CnyNBP45GPCq=hJ9CnyNBP45GPCqJ6oXCnyNBP45GPCNkPCMONosh2yuzXJs=6JXCnyNBP45GPCNkMCMb2WXzXJ3OzCMbXLsSZ4NZMoupEyHJVsspRIRCPCq02Hl4XEMv8WMaPCq02H5KXEMvzE-aPCNZ2oXCnyNBP45GPCqgPJuCnCZgvFXgsIsYlyHCPL5kRe5SZCBgvFXgsIsYlyHCPL5kRe5SOJsjKGvFcCByOyHJZ4Xh=Is=Rel=QyqLKFsFqyugLFvoKYNZZJ5YRDBJZo6wOJ9gXJsZPJ9SOeXgLFvoXD90weHLXEX0k43gPIs=kJcZQeXpzycoPJcY7J9pzycoXD90bo5p5y3CXENyke3=ZD90zecp5y3CXENyke3=ZD90NJ3=QJNFRCMONosh2yuzXIc=QJNFRWXCnyNBP45GPCqgPely64MCXENyke3=ZD90NJ3=QJNFRWXCnyNBP45GPCN=N4cyZCMbXsN8sJY62GqgXWMFquj=dy5Ylejw0LjBquGW7J6Zv=-Z0Fshcmj=9xcFHYqZZY68Po6JsINF3EHZFYlk2L5JQyjZ-LsJ6eGy8uGJEJN0fGNkyWS0GyBk9J5C2uMgFWMZjoZJsJsF-LmZ0L5FvoMChJBOH=mgixq=DuG=gyjZCsNkMIG0QyB4hIc0dmqyXY2BPoN8uFN0-LmZ0FS05sm=sJBOH=mgWesFPyvYs4SOHWshXeZ0-yYYPIjw-ycp6Y2BboN6hINCRWHLXD902Jc=N49CnCNFCGqgXesFQsY4zevStYHZ=FSO5o5SsxNF-YHZuI6ZlmsO0JvSGuHF=INFNmsOgJGSvLsh=ISO5o6JFevStYHZ=uB08sYJIesC2uNwiYv83oGJc4503WskMLSOnGBFFxGSGLHOieYG8mNS0=GjRmHJ=x6Y7sNOuISOtsNhyYj6SmNSuI6SvmmgEYBZlmM0ueBZGLmByYByPsYFqWGSvycZ=FvSnmGFF=vpGGNkEIZydmm0ieGSnecOEYSB8mNOQWv8vumy=YBBzCXzX4c=2ej8SeY=boHgZ4RCnE9zX4c=2eS=ZysLXEMCh=-vPCNSVol06m9CnW9zXeYpM4NFuCMbhWMCPCNSVol06YuCnW9zXeYpM4NFvCMb2D90wHlZv4lggCMb5=mofWMCS=-6zWm65W-47=uzXeYp8F3=zGjLXEMafE-ClW2v2E-68Em6h=2G5WRzXeYp24cFgCMbR=Maf=majW2vlWmKjW2vhWmoPCNSV4lg6GjLXEMv7WR72=Maz=2C7W-W7W-al=XzXeYp7Glg6LuCnWMG8DML8W2vh=24hW-6j=mGPCNSVxB=zyB=vCMbhE-CfW26R=-C7=-GjE-ajD90wHlZm4cFgCMblDMolW2GzEm6jE-olEmKz=XzXeYp8Glg6GjLXEMC7DMoSW-G8=2vlWMKRWMW8D90wHl=j4MKXEMafEm45WM6SW-WlW242=-W5=XzXeYpwoHkv4lF9CMbhDMG7WmL7EmvjW-67WmCl=RzXeYpwoHkv4lFgCMbzDMvRWM6hW2o5W2Kz=MK2=mahD90wH5BRm9CnEmCf=2CzW-azW-azW-aRWmCPCNSVoH0YCMbzD90wH5=2y9CnWRzXeYpMeqLXEMvzWXzXecpqWuCnW2aPCN0gJsFOeRCnyNBP45GPCqkY45YRCMbhWmCPCNO2J-=kCMb2EmGlD90t4lF2e5WXEMvS=2Bp",
    // hard coded
    ddCaptchaEnv: "ea0ff9d3518864e5c9b85cb4b04877b7c2aec356ccceaa9d240ece0e810f9eea02f4df72f9f1ec9f9750a05df4cc3eb318ac4afe90998d81030204aad580b1a37e446880d377dabb410f04cfffdb59db",
    // hard coded
    ddCaptchaAudioChallenge: "4ac14b079006158f42825777f9ca1586",
    // hard coded
    hash: "60D428DD4BC75DF55D205B3DBE4AFF",
    // hard coded (in the HTML)
    ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    // hard coded (in the HTML)
    referer: "https://tickets.manutd.com/en-GB/events/manchester%20united%20v%20nottingham%20forest/2022-12-27_20.00/old%20trafford?hallmap",
    // (window.location != window.parent.location) ? document.referrer : document.location.href; this is basically the iframe URL afaik
    parent_url: "https://geo.captcha-delivery.com/captcha/?initialCid=AHrlqAAAAAMAb69hFMVHshoAWdi-1w%3D%3D&hash=60D428DD4BC75DF55D205B3DBE4AFF&cid=6aPKO53fQjRmRMe1m~A9TF6va86qWW0qwVE8119NhHK70D2wAEBOK~zaHQ_RiewXnRWt5cG1TraYh5-LARA6R8FnQpMfd9pmGU0rIpNZVsR2m4tU86IbVXyTRom6gjbE&t=fe&referer=https%3A%2F%2Ftickets.manutd.com%2Fen-GB%2Fevents%2Fmanchester%2520united%2520v%2520nottingham%2520forest%2F2022-12-27_20.00%2Fold%2520trafford%3Fhallmap&s=42103&e=6b93c0311f4df6eab96dc0345607dea05a5ea8507b03304894a65d3bf39c5d26",
    // hard coded; IP the challenge is for
    "x-forwarded-for": "xoxo",
    // see ddCaptchaChallenge.js
    captchaChallenge: "11188317",
    // hard coded
    s: "42103",
    // hard coded, only seen it empty
    ir: null
}