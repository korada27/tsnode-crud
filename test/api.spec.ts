// import request from "supertest";
import app from "../src/app";
import chai from 'chai';
import chaiHttp from 'chai-http';
import {UserService} from '../src/services/user.service';
import { Request, Response } from "express";
import { request } from "http";

chai.use(chaiHttp);

describe("GET /api", () => {
    it("should return 200 OK", (done) => {
        // return request(app).get("/")
        //     .expect(400);
        chai.request(app).get('/')
        .then((res) => {
            // chai.assert(res.body.displayname).to.eql('name'); // assertion expression which will be true if "displayname" equal to "name" 
            chai.expect(res.status).to.eql(200);// expression which will be true if response status equal to 200 
            console.log(JSON.parse(res.text).message)
            done();
          });
    });
   

    it("constructor test", (done)=>{

       
        let u = new UserService();
        let result = u.index;
        console.log(result);
        done();
    })
});