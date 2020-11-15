export var randomString = (len, charSet) => {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
}
export var timeInAgoFormat= (date)=> {
    if (typeof date !== 'object') {
      date = new Date(date);
    }
  
    var seconds = Math.floor((new Date() - date) / 1000);
    var intervalType;
  
    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
      intervalType = 'year';
    } else {
      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        intervalType = 'month';
      } else {
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
          intervalType = 'day';
        } else {
          interval = Math.floor(seconds / 3600);
          if (interval >= 1) {
            intervalType = "hour";
          } else {
            interval = Math.floor(seconds / 60);
            if (interval >= 1) {
              intervalType = "minute";
            } else {
              interval = seconds;
              intervalType = "second";
            }
          }
        }
      }
    }
  
    if (interval > 1 || interval === 0) {
      intervalType += 's';
    }
  
    return interval + ' ' + intervalType;
}
export var validateEmail = function (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function secondsToTime(secs) {
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    return hours.pad() + ":" + minutes.pad() + ":" + seconds.pad();
}

export function getDomainName(hostname) {
    var domain = hostname;
    if (hostname != null) {
        var parts = hostname.split('.').reverse();

        if (parts != null && parts.length > 1) {
            domain = parts[1] + '.' + parts[0];

            if (hostname.toLowerCase().indexOf('.co.uk') != -1 && parts.length > 2) {
                domain = parts[2] + '.' + domain;
            }
        }
    }
    return domain;
}
export function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export function generateQueryString(data){
	let keys = Object.keys(data);
	let values = [];
	for(var i=0;i<keys.length;i++){
		values.push(keys[i] + '=' + encodeURIComponent(data[keys[i]]) );
	}
	return values.join('&');
}

global.json = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

export function findEmails(string){
    var wordArray = string.split(',').join(', ').split(' ').join(', ').split(':').join(', ').split(' ');
    var result = [];
    var resultSet = new Set();
   for(var i=0;i<wordArray.length;i++) {
    var word=wordArray[i];
    word = word.replace('>',"");
    word = word.replace(',',"");
    word = word.replace('<',"");

        if (word.match(/[@]/) !== null) {
            if (word[word.length - 1].match(/[,:;.!?]/)) {
                word = word.slice(0, -1);
            }

            if (validateEmail(word) && !resultSet.has(word) ) {
                result.push(word);
                resultSet.add(word);
            }
        }
    };
    return result;
}