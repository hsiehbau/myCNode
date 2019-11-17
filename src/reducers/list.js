function list(state={
    data:[],
    loading: true,
}, action) {
    switch (action.type) {
        //提高交互体验，数据更新的过程中先来个loading的提示
        case "LIST_UPDATA" :
            return {
                loading: true,
                data: state.data
            }
        case "LIST_UPDATA_SUCC" :
            return {
                loading: false,
                data: action.data.data
            }
        case "LIST_UPDATA_ERROR" :
            return {
                loading: false,
                data: []
            }
        default:
            return state;
    }
}
export default list;