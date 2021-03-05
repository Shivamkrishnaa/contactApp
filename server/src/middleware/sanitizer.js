var sanitizeObj = function(obj, ignore, req){
    if(obj != null && ignore.indexOf(obj) == -1 && typeof obj === 'object'){
        for(var i=0;i<Object.keys(obj).length;i++){
            obj[Object.keys(obj)[i]] = sanitizeObj(obj[Object.keys(obj)[i]], ignore, req);
        }
    }else if(obj != null && ignore.indexOf(obj) == -1 && typeof obj === 'array'){
        for(var i=0;i<obj.length;i++){
            obj[i] = sanitizeObj(obj[i], ignore, req);
        }
    }else if(obj != null && ignore.indexOf(obj) == -1 && typeof obj == 'string' && obj != ''){
        obj = req.sanitize(obj).trim();
    }
    return obj;
}

export var sanitize = function(ignore=[]){
    return (req, res, next) => {
        var data = [];
        if(req.body){
            req.body = sanitizeObj(req.body, ignore, req);
        }
        if(req.params){
            req.params = sanitizeObj(req.params, ignore, req);
        }
        if(req.query){
            req.query = sanitizeObj(req.query, ignore, req);
        } 
        next();
    }
}; 