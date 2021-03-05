import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import expressSanitizer from 'express-sanitizer';

export default {
    setup: (config) => {
        const app = express();
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json({
            limit: '50mb',
            verify: (req, res, buf) => {
              req.rawBody = buf
            }
          }))
        app.use(cookieParser(config.app.secret));
        app.use(expressSanitizer());
        app.use(function(req, res, next) {
            res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
            next();
          });
		app.use(function (req, res, next) {
			res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
			res.header('Expires', '-1');
			res.header('Pragma', 'no-cache');
			next()
		});
        Number.prototype.pad = function (size) {
            var s = String(this);
            while (s.length < (size || 2)) { s = "0" + s; }
            return s;
        }
        
        return app;
    }
}