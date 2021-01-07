import request2 from "../until/request2";

export const reqGetrequest2 = ()=>{
    return request2({
        method:"get",
        url:"mock/rdata",
    });
};
