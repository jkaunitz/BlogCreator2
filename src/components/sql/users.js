router.get('/users', function(req, res, next) {
    res.locals.connection.query('select * from blog users', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});