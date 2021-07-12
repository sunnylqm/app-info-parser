const protoBuffer = require('protobufjs')
const path = require('path')

const root = protoBuffer.loadSync(path.resolve(__dirname, './proto/Resources.proto'))
const XmlNode = root.lookupType('aapt.pb.XmlNode')

module.exports = XmlNode
