router.get('/delete', function(req, res, next) {
    res.locals.connection.query('DELETE from blog users where id = '+req.body.id+'', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    })
})