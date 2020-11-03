module.exports = {
    success: (req, res, data, status, render) => {
        if (render) {
            res.status(status || 200).render(render, {
                error: "",
                body: data
            })
        } else {
            res.status(status || 200).send({
                error: "",
                body: data
            })
        }
    },
    error: (req, res, data, status, detail, render) => {
        if (render) {
            console.error(detail);
            res.status(status || 400).render(render, {
                error: data,
                body: ""
            })
        }
        console.error(detail);
        res.status(status || 400).send({
            error: data,
            body: ""
        })
    }
}