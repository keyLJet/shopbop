import Mock from 'mockjs';
import data from "./rdata.json"

Mock.mock("./mock/data","get",{
    code:200,
    "data|4":data,
});