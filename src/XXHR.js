var XXHR = function()
{
    var NO_XHR_MSG = 'No XHR, no more fun.',
        XHR_FAILED_MSG = 'The XHR failed :(',
        createXHR = function ()
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
                throw new Error(this.NO_XHR_MSG);
            }
        };
    return {
        request: function(url, fn, bool, params)
        {
            if (typeof url != 'string')
                throw new Error('XXHR.getText function requires at least 1 parameter (string).');
            var xhr = createXHR(),
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
                        throw new Error(this.XHR_FAILED_MSG 
                            + ' [status:'+xhr.status+']');
                    }
                }
            }
            xhr.open(type, url, bool);
            xhr.send(params);
        }
    };
}
