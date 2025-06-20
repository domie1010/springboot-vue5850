const base = {
    get() {
        return {
            url : "http://localhost:8080/gongsiyuangong/",
            name: "gongsiyuangong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gongsiyuangong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "武汉君耐营销策划有限公司员工信息管理系统"
        } 
    }
}
export default base
