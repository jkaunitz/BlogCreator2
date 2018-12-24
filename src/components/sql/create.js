router.post('/new', function(req, res, next) {
    res.locals.connection.query('insert into blog users(name, email) values("+req.body.name+","+req.body.email+")', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
})