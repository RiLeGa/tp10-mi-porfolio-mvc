
const path = require('path');

module.exports = {
    home : (req,res) => {
        return res.sendFile(path.resolve(__dirname,"../","views","home.html"))
    },
    about : (req,res) => {
      return res.sendFile(path.resolve(__dirname,"../","views","about.html"))
    }
}