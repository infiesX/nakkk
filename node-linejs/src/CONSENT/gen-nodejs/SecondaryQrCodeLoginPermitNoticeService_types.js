//
// Autogenerated by Thrift Compiler (0.14.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;
var Int64 = require('node-int64');

var SecondaryQrCodeLoginService_ttypes = require('./SecondaryQrCodeLoginService_types');


var ttypes = module.exports = {};
var CheckQrCodeVerifiedResponse = module.exports.CheckQrCodeVerifiedResponse = function(args) {
};
CheckQrCodeVerifiedResponse.prototype = {};
CheckQrCodeVerifiedResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CheckQrCodeVerifiedResponse.prototype.write = function(output) {
  output.writeStructBegin('CheckQrCodeVerifiedResponse');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CheckQrCodeVerifiedRequest = module.exports.CheckQrCodeVerifiedRequest = function(args) {
  this.authSessionId = null;
  if (args) {
    if (args.authSessionId !== undefined && args.authSessionId !== null) {
      this.authSessionId = args.authSessionId;
    }
  }
};
CheckQrCodeVerifiedRequest.prototype = {};
CheckQrCodeVerifiedRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.authSessionId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CheckQrCodeVerifiedRequest.prototype.write = function(output) {
  output.writeStructBegin('CheckQrCodeVerifiedRequest');
  if (this.authSessionId !== null && this.authSessionId !== undefined) {
    output.writeFieldBegin('authSessionId', Thrift.Type.STRING, 1);
    output.writeString(this.authSessionId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CheckPinCodeVerifiedResponse = module.exports.CheckPinCodeVerifiedResponse = function(args) {
};
CheckPinCodeVerifiedResponse.prototype = {};
CheckPinCodeVerifiedResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CheckPinCodeVerifiedResponse.prototype.write = function(output) {
  output.writeStructBegin('CheckPinCodeVerifiedResponse');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CheckPinCodeVerifiedRequest = module.exports.CheckPinCodeVerifiedRequest = function(args) {
  this.authSessionId = null;
  if (args) {
    if (args.authSessionId !== undefined && args.authSessionId !== null) {
      this.authSessionId = args.authSessionId;
    }
  }
};
CheckPinCodeVerifiedRequest.prototype = {};
CheckPinCodeVerifiedRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.authSessionId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CheckPinCodeVerifiedRequest.prototype.write = function(output) {
  output.writeStructBegin('CheckPinCodeVerifiedRequest');
  if (this.authSessionId !== null && this.authSessionId !== undefined) {
    output.writeFieldBegin('authSessionId', Thrift.Type.STRING, 1);
    output.writeString(this.authSessionId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
