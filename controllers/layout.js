'use strict'

const Layout = require('../models/layout')

const getLayouts = (req, res) => {
  Layout.find({ }, (err, layouts) => {
    if (err) {
      return res.status(500).send({
        status: 500,
        message: `Server error: ${err}`
      })
    }
    if (layouts.length <= 0) {
      return res.status(404).send({
        status: 404,
        message: `There are no layouts`
      })
    }

    res.status(200).send({
      status: 200,
      layouts
    })
  })
}

const getLayout = (req, res) => {
  const { layoutId } = req.params
  Layout.findById(layoutId, (err, layout) => {
    if (err) {
      return res.status(500).send({
        status: 500,
        message: `Server error: ${err}`
      })
    }
    if (!layout) {
      return res.status(404).send({
        status: 404,
        message: `Layout not found`
      })
    }

    res.status(200).send({
      status: 200,
      message: `The layout was found`,
      layout
    })
  })
}

const generateLayout = (req, res) => {
  const layout = new Layout({
    ot: req.body.ot,
    dOp: req.body.dOp
  })

  layout.save(err => {
    if (err) {
      return res.status(500).send({
        status: 500,
        message: `Server error: ${err}`
      })
    }

    res.status(201).send({
      status: 201,
      message: `The layout was generated successfully`,
      layout
    })
  })
}

module.exports = {
  getLayouts,
  getLayout,
  generateLayout
}
