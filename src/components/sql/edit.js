router.get('/edit', function(req, res, next) {
    res.locals.connection.query('update blog users set name = "+req.body.name+", email = "+req.body.email+" where id =  "+req.body.id+"', function (error, results, fields) {
        if(error) throw error;
        releaseEvents.send(JSON.stringify(results));
    })
})