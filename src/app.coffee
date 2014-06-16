Vue = require('Vue')
_ = require('lodash')

demo = new Vue
  el: '#demo'

  data:
    count: 0
    message: 'Hello, Vue.js'

  methods:
    refresh: ->
      @message = ''

  computed: ->
    countPlus:
      $get: -> @count + 1
      $set: (v) -> @count = v - 1

  paramAttributes: ['param']

  created: ->
    console.log @param
