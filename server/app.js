//import express from "express";
//import cors from "cors";                                                  //Import generating unknown error.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Client = require('pg').Client;
var Pool = require('pg').Pool;
var pool = new Pool({
    "host": "localhost",
    "user": "postgres",
    "password": "root",
    "port": 5432,
    "database": "postgres"
});
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());
var currentDate = new Date();
var date = (currentDate.getDate()).toString() + "/" + (currentDate.getMonth() + 1).toString() + "/" + (currentDate.getFullYear()).toString();
app.get('/details', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var results, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    console.log("CONNECTED");
                    return [4 /*yield*/, (pool.query("SELECT u.id, u.firstname, u.middlename, u.lastname, u.email, u.phone, u.address, u.createdon, u.modifiedon, c.name as custname, r.name as role FROM customers as c JOIN users as u ON u.cid=c.cid JOIN role as r ON r.key=u.rid ORDER BY u.id"))];
                case 1:
                    //results = await(pool.query("select * from users"));
                    results = _a.sent();
                    console.table(results.rows);
                    return [3 /*break*/, 4];
                case 2:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 4];
                case 3:
                    res.send(JSON.stringify(results.rows));
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    });
});
app.get('/customers', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var results, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    console.log("CONNECTED");
                    return [4 /*yield*/, (pool.query("SELECT * FROM customers"))];
                case 1:
                    results = _a.sent();
                    console.table(results.rows);
                    return [3 /*break*/, 4];
                case 2:
                    e_2 = _a.sent();
                    console.log(e_2);
                    return [3 /*break*/, 4];
                case 3:
                    // console.log(JSON.stringify(results.rows))
                    res.send(JSON.stringify(results.rows));
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    });
});
app.get('/role', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var results, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    console.log("CONNECTED");
                    return [4 /*yield*/, (pool.query("SELECT * FROM role"))];
                case 1:
                    results = _a.sent();
                    console.table(results.rows);
                    return [3 /*break*/, 4];
                case 2:
                    e_3 = _a.sent();
                    console.log(e_3);
                    return [3 /*break*/, 4];
                case 3:
                    res.send(JSON.stringify(results.rows));
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    });
});
app.get('/details/:id', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, results, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, (pool.query("SELECT * FROM users WHERE id=" + id + ""))];
                case 2:
                    results = _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    e_4 = _a.sent();
                    console.log(e_4);
                    return [3 /*break*/, 5];
                case 4:
                    res.send(JSON.stringify(results.rows));
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
});
var iidd = 3;
app.post('/details', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    iidd += 1;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (pool.query("INSERT INTO users (id, firstname, middlename, lastname, email, phone, address, cid, rid, createdon, modifiedon)" +
                            "VALUES ('" + iidd + "','" + req.body.firstname + "','" + req.body.middlename + "','" +
                            req.body.lastname + "','" + req.body.email + "','" + req.body.phone + "','" +
                            req.body.address + "','" + req.body.cid + "','" + req.body.rid + "','" + date + "','NA')"))];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_5 = _a.sent();
                    console.log(e_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
app.put('/details/:id', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, results, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, (pool.query("UPDATE users SET firstname ='" + req.body.firstname +
                            "',lastName ='" + req.body.lastname +
                            "',middlename = '" + req.body.middlename +
                            "',email = '" + req.body.email +
                            "',phone ='" + req.body.phone +
                            "',address ='" + req.body.address +
                            "',modifiedon='" + date + "'WHERE id=" + id + ""))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (pool.query("SELECT * FROM users"))];
                case 3:
                    results = _a.sent();
                    return [3 /*break*/, 6];
                case 4:
                    e_6 = _a.sent();
                    console.log(e_6);
                    return [3 /*break*/, 6];
                case 5:
                    res.send(JSON.stringify(results.rows));
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    });
});
app["delete"]('/details/:id', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, e_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, (pool.query("DELETE FROM users WHERE id=" + id + ""))];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    e_7 = _a.sent();
                    console.log(e_7);
                    return [3 /*break*/, 5];
                case 4:
                    res.send();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
});
var port = process.env.PORT || 3000;
app.listen(port);
