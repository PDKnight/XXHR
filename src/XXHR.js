var XXHR = function()
{
    var ss = [':(', ':[', '._.', '(O.o)', 'd[O_O]b', ';(', ':\'('],
        NO_XHR_MSG = 'No XHR, no more fun.',
        XHR_FAILED_MSG = 'The XHR failed',
        createXHR = function (errfn)
        {
            if (typeof XMLHttpRequest != 'undefined')
                return new XMLHttpRequest();
            else if (typeof ActiveXObject != 'undefined')
            {
                if (typeof arguments.callee.activeXString != 'string')
                {
                    var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                                    "MSXML2.XMLHttp"];
                                    
                    for (var i = 0, len = versions.length; i < len; i++)
                    {
                        try
                        {
                            var xhr = new ActiveXObject(versions[i]);
                            arguments.callee.activeXString = versions[i];
                            return xhr;
                        } catch (ex) {
                            //skip
                        }
                    }
                }
                return new ActiveXObject(arguments.callee.activeXString);
            } else
            {
                if (typeof errfn == 'function')
                    errfn(NO_XHR_MSG);
                throw new Error(NO_XHR_MSG);
            }
        };
    return {
        request: function(url, fn, errfn, bool, params)
        {
            if (typeof url != 'string')
                throw new Error('XXHR.getText function requires at least 1 parameter (string).');
            var xhr = createXHR(errfn),
                bool = bool || true,
                type = params ? 'post' : 'get',
                params = params ? params : null;
            xhr.onreadystatechange = function()
            {
                if (xhr.readyState == 4)
                {
                    if ((xhr.status >= 200 && xhr.status < 300)
                            || xhr.status == 304)
                    {
                        var allText = xhr.responseText;
                        if (typeof fn == 'function')
                            fn(allText);
                    } else
                    {
                        var status = XHR_FAILED_MSG + ' ' + ss[Math.floor(Math.random()*ss.length)]
                            + ' [status:'+xhr.status+']';
                        if (typeof errfn == 'function')
                            errfn(status, xhr.status);
                        throw new Error(status);
                    }
                }
            }
            xhr.open(type, url, bool);
            xhr.send(params);
        }
    };
};
